import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import PortfolioPage from "./page"

vi.mock("@/components/content-provider", () => ({
  useContent: () => ({ t: (key: string) => key }),
}))

vi.mock("@/components/reveal", () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

vi.mock("@/lib/firebase", () => ({
  getFirebaseDb: () => ({}),
}))

function snap(docs: Record<string, unknown>[]) {
  return { docs: docs.map((data, i) => ({ id: `id-${i}`, data: () => data })) }
}

const programmerDocs = [
  { title: "Hefesto", description: "d", image: "", tags: [], date: "2026", role: "r", category: "Agentes", github: "" },
  { title: "Flugo", description: "d", image: "", tags: [], date: "2026", role: "r", category: "Web", github: "" },
  { title: "Legacy", description: "d", image: "", tags: [], date: "2026", role: "r", github: "" }, // no category
]
const researchDocs = [
  { title: "Agora", description: "d", image: "", tags: [], date: "2026", role: "r", category: "IA" },
]

const getDocsMock = vi.fn()
vi.mock("firebase/firestore", () => ({
  collection: (_db: unknown, name: string) => name,
  getDocs: (name: string) => getDocsMock(name),
}))

beforeEach(() => {
  getDocsMock.mockReset().mockImplementation((name: string) =>
    Promise.resolve(name === "programmerProjects" ? snap(programmerDocs) : snap(researchDocs))
  )
})

// Filter buttons/chips all carry role="button" (real <button>s for the
// section toggle, Badge given role="button" for the category chips); card
// titles and per-card category badges don't, so getByRole disambiguates
// a chip like "Web" from the identical text on a project's own badge.
const chip = (name: string) => screen.getByRole("button", { name })

describe("PortfolioPage filters", () => {
  it("shows both sections and every category chip used by the data", async () => {
    render(<PortfolioPage />)
    await waitFor(() => expect(screen.getByText("Hefesto")).toBeTruthy())

    expect(screen.getByText("Flugo")).toBeTruthy()
    expect(screen.getByText("Legacy")).toBeTruthy()
    expect(screen.getByText("Agora")).toBeTruthy()

    // Taxonomy order is IA, Agentes, Corporativo, Mobile, Web, IoT; only
    // categories actually present in the mocked data should get a chip.
    expect(chip("IA")).toBeTruthy()
    expect(chip("Agentes")).toBeTruthy()
    expect(chip("Web")).toBeTruthy()
    expect(screen.queryByRole("button", { name: "Mobile" })).toBeNull()
    expect(screen.queryByRole("button", { name: "IoT" })).toBeNull()
  })

  it("the developer/academic toggle hides the other section", async () => {
    render(<PortfolioPage />)
    await waitFor(() => expect(screen.getByText("Hefesto")).toBeTruthy())

    fireEvent.click(chip("portfolio.researcher.heading"))

    expect(screen.queryByText("Hefesto")).toBeNull()
    expect(screen.queryByText("Flugo")).toBeNull()
    expect(screen.getByText("Agora")).toBeTruthy()
  })

  it("a category chip filters projects across both sections, leaving uncategorized ones out", async () => {
    render(<PortfolioPage />)
    await waitFor(() => expect(screen.getByText("Hefesto")).toBeTruthy())

    fireEvent.click(chip("Agentes"))

    expect(screen.getByText("Hefesto")).toBeTruthy()
    expect(screen.queryByText("Flugo")).toBeNull()
    expect(screen.queryByText("Legacy")).toBeNull() // no category, excluded by a specific filter
    expect(screen.queryByText("Agora")).toBeNull()
  })

  it("shows the empty-filter message when a category and section combination has no matches", async () => {
    render(<PortfolioPage />)
    await waitFor(() => expect(screen.getByText("Hefesto")).toBeTruthy())

    fireEvent.click(chip("portfolio.researcher.heading")) // Academic only
    fireEvent.click(chip("Agentes")) // only on the Developer side in this data

    expect(screen.getByText("portfolio.filter.empty")).toBeTruthy()
  })

  it("clicking 'all categories' clears the category filter back to everything", async () => {
    render(<PortfolioPage />)
    await waitFor(() => expect(screen.getByText("Hefesto")).toBeTruthy())

    fireEvent.click(chip("Web"))
    expect(screen.queryByText("Hefesto")).toBeNull()

    fireEvent.click(chip("portfolio.filter.allCategories"))
    expect(screen.getByText("Hefesto")).toBeTruthy()
    expect(screen.getByText("Legacy")).toBeTruthy()
  })
})
