/**
 * Animation utility for the theatrical door transition effect
 * Animates the footer element to create a "door closing/opening" effect
 */

export interface AnimateDoorOptions {
  direction: "close" | "open"
  duration?: number
}

export async function animateDoor({ direction, duration = 1000 }: AnimateDoorOptions): Promise<void> {
  return new Promise((resolve) => {
    const footer = document.querySelector("[data-door-footer]") as HTMLElement
    if (!footer) {
      console.warn("[v0] Door footer element not found")
      resolve()
      return
    }

    const startTransform = direction === "close" ? "translateY(0)" : "translateY(-100vh)"
    const endTransform = direction === "close" ? "translateY(-100vh)" : "translateY(0)"
    const easing = direction === "close" ? "ease-in-out" : "ease-out"

    // Set initial state
    footer.style.transform = startTransform
    footer.style.transition = `transform ${duration}ms ${easing}`

    // Announce to screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("role", "status")
    announcement.setAttribute("aria-live", "polite")
    announcement.className = "sr-only"
    announcement.textContent = direction === "close" ? "Transitioning to new page" : "Page loaded"
    document.body.appendChild(announcement)

    // Trigger animation
    requestAnimationFrame(() => {
      footer.style.transform = endTransform
    })

    // Resolve when animation completes
    setTimeout(() => {
      if (announcement.parentNode) {
        document.body.removeChild(announcement)
      }
      resolve()
    }, duration)
  })
}
