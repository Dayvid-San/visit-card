/**
 * Unit tests for door animation utility
 * Tests the animateDoor function resolves correctly
 */

import { animateDoor } from "@/lib/animation-utils"

// Mock DOM elements
beforeEach(() => {
  document.body.innerHTML = `
    <footer data-door-footer style="transform: translateY(0); transition: none;">
      Footer content
    </footer>
  `
})

afterEach(() => {
  document.body.innerHTML = ""
})

describe("animateDoor", () => {
  it("should resolve after animation completes (close)", async () => {
    const startTime = Date.now()
    await animateDoor({ direction: "close", duration: 100 })
    const endTime = Date.now()

    expect(endTime - startTime).toBeGreaterThanOrEqual(100)
  })

  it("should resolve after animation completes (open)", async () => {
    const startTime = Date.now()
    await animateDoor({ direction: "open", duration: 100 })
    const endTime = Date.now()

    expect(endTime - startTime).toBeGreaterThanOrEqual(100)
  })

  it("should apply correct transform for close direction", async () => {
    const footer = document.querySelector("[data-door-footer]") as HTMLElement

    animateDoor({ direction: "close", duration: 50 })

    // Wait for requestAnimationFrame
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(footer.style.transform).toBe("translateY(-100vh)")
  })

  it("should apply correct transform for open direction", async () => {
    const footer = document.querySelector("[data-door-footer]") as HTMLElement
    footer.style.transform = "translateY(-100vh)"

    animateDoor({ direction: "open", duration: 50 })

    // Wait for requestAnimationFrame
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(footer.style.transform).toBe("translateY(0)")
  })

  it("should handle missing footer element gracefully", async () => {
    document.body.innerHTML = ""

    await expect(animateDoor({ direction: "close", duration: 50 })).resolves.toBeUndefined()
  })

  it("should create an animation for the footer element", async () => {
    const footer = document.querySelector("[data-door-footer]") as HTMLElement

    animateDoor({ direction: "close", duration: 50 })

    // Wait for requestAnimationFrame
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(footer.style.transition).toBe("transform 50ms ease-in-out")
  })
})
