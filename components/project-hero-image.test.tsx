import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, waitFor } from "@testing-library/react"
import { ProjectHeroImage } from "@/components/project-hero-image"

let firebaseConfigured = true
vi.mock("@/lib/firebase", () => ({
  getFirebaseDb: () => ({}),
  get isFirebaseConfigured() {
    return firebaseConfigured
  },
}))

const getDocMock = vi.fn()
vi.mock("firebase/firestore", () => ({
  doc: (...args: unknown[]) => args,
  getDoc: (...args: unknown[]) => getDocMock(...args),
}))

beforeEach(() => {
  firebaseConfigured = true
  getDocMock.mockReset().mockResolvedValue({ data: () => undefined })
})

describe("ProjectHeroImage", () => {
  it("renders the fallback image immediately", () => {
    const { getByAltText } = render(
      <ProjectHeroImage slug="tyto" fallbackSrc="/Captura-tytoclub.png" alt="Capa do TYTO" />
    )
    expect(getByAltText("Capa do TYTO").getAttribute("src")).toContain("Captura-tytoclub.png")
  })

  it("swaps to the Firestore override once it resolves", async () => {
    getDocMock.mockResolvedValue({ data: () => ({ imageUrl: "https://cdn.example.com/tyto.png" }) })
    const { getByAltText } = render(
      <ProjectHeroImage slug="tyto" fallbackSrc="/Captura-tytoclub.png" alt="Capa do TYTO" />
    )
    await waitFor(() =>
      expect(getByAltText("Capa do TYTO").getAttribute("src")).toContain("cdn.example.com")
    )
  })

  it("keeps the fallback when Firestore has no override saved", async () => {
    const { getByAltText } = render(
      <ProjectHeroImage slug="plantas" fallbackSrc="/placeholder.svg" alt="Capa do Plantas" />
    )
    await waitFor(() => expect(getDocMock).toHaveBeenCalled())
    expect(getByAltText("Capa do Plantas").getAttribute("src")).toContain("placeholder.svg")
  })

  it("keeps the fallback when Firestore is unreachable", async () => {
    getDocMock.mockRejectedValue(new Error("offline"))
    const { getByAltText } = render(
      <ProjectHeroImage slug="maestro" fallbackSrc="/placeholder.svg" alt="Capa do Maestro" />
    )
    await waitFor(() => expect(getDocMock).toHaveBeenCalled())
    expect(getByAltText("Capa do Maestro").getAttribute("src")).toContain("placeholder.svg")
  })

  it("does not query Firestore when Firebase isn't configured", () => {
    firebaseConfigured = false
    render(<ProjectHeroImage slug="agora" fallbackSrc="/placeholder.svg" alt="Capa do Ágora" />)
    expect(getDocMock).not.toHaveBeenCalled()
  })
})
