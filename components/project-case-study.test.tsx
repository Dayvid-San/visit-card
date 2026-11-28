import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { CONTENT_KEYS_BY_KEY } from "@/lib/content-registry"
import Artemis from "@/app/portfolio/artemis/page"
import Chatminusis from "@/app/portfolio/chatminusis/page"
import EdgeNode from "@/app/portfolio/edge-node/page"

const used = new Set<string>()

vi.mock("@/components/content-provider", () => ({
  useContent: () => ({
    t: (key: string) => {
      used.add(key)
      return key
    },
  }),
}))

vi.mock("@/components/project-hero-image", () => ({
  ProjectHeroImage: ({ alt }: { alt: string }) => <img alt={alt} />,
}))

describe("project case study pages", () => {
  it.each([
    ["artemis", Artemis],
    ["chatminusis", Chatminusis],
    ["edgenode", EdgeNode],
  ])("%s renders and only uses registered keys", (prefix, Page) => {
    used.clear()
    const { unmount } = render(<Page />)
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(`${prefix}.title`)
    expect(screen.getByText("caseStudy.decisions")).toBeTruthy()
    expect([...used].filter((key) => !CONTENT_KEYS_BY_KEY[key])).toEqual([])
    unmount()
  })
})
