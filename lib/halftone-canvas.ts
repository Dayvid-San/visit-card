/**
 * Halftone-dissolve navigation transition (the "Halftone" site theme's
 * counterpart to lib/animation-utils.ts's animateDoor). A full-viewport
 * canvas grows a grid of dots until the screen is solid ("close"), then
 * shrinks the same dots to reveal the new page underneath ("open").
 */

export interface AnimateHalftoneOptions {
  direction: "close" | "open"
  duration?: number
}

interface Dot {
  x: number
  y: number
  maxRadius: number
  /** Fraction of the total duration (0..STAGGER_SPREAD) this dot's own animation is delayed by. */
  delay: number
}

interface HalftoneSession {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  dots: Dot[]
  dpr: number
}

const CELL_SIZE = 32
// Radius large enough that, at full size, adjacent dots on the square grid
// overlap and leave no gaps (a circle needs r >= cell/√2 to cover a corner
// shared by its 4 neighbours; 0.8 leaves a comfortable margin over that).
const RADIUS_FACTOR = 0.8
const STAGGER_SPREAD = 0.5

let session: HalftoneSession | null = null

function createSession(): HalftoneSession {
  const canvas = document.createElement("canvas")
  canvas.setAttribute("aria-hidden", "true")
  canvas.style.position = "fixed"
  canvas.style.inset = "0"
  canvas.style.width = "100vw"
  canvas.style.height = "100vh"
  canvas.style.zIndex = "9999"
  canvas.style.pointerEvents = "none"
  document.body.appendChild(canvas)

  const dpr = window.devicePixelRatio || 1
  const width = window.innerWidth
  const height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr

  const ctx = canvas.getContext("2d")!
  ctx.scale(dpr, dpr)

  const dots: Dot[] = []
  const cols = Math.ceil(width / CELL_SIZE) + 1
  const rows = Math.ceil(height / CELL_SIZE) + 1
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({
        x: col * CELL_SIZE,
        y: row * CELL_SIZE,
        maxRadius: CELL_SIZE * RADIUS_FACTOR,
        delay: Math.random() * STAGGER_SPREAD,
      })
    }
  }

  return { canvas, ctx, dots, dpr }
}

function fillColor(): string {
  // Reads the Halftone theme's foreground (near-white), not its background:
  // the site is already near-black, so dark dots over a dark page would be
  // nearly invisible mid-dissolve and only the "cover" endpoint would read.
  // Light dots against the dark page is the classic halftone-print look,
  // and gives the sweep real contrast throughout. --foreground already
  // holds a full color value (e.g. "oklch(0.97 0 0)"), used as-is.
  const value = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim()
  return value || "#f5f5f5"
}

export async function animateHalftone({ direction, duration = 700 }: AnimateHalftoneOptions): Promise<void> {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) return

  if (direction === "close") {
    session = createSession()
  }
  if (!session) return // "open" called without a prior "close"; nothing to animate.

  const { ctx, dots, canvas } = session
  const width = window.innerWidth
  const height = window.innerHeight
  const color = fillColor()

  const announcement = document.createElement("div")
  announcement.setAttribute("role", "status")
  announcement.setAttribute("aria-live", "polite")
  announcement.className = "sr-only"
  announcement.textContent = direction === "close" ? "Transitioning to new page" : "Page loaded"
  document.body.appendChild(announcement)

  await new Promise<void>((resolve) => {
    const start = performance.now()

    const frame = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = color

      for (const dot of dots) {
        // Each dot runs the full 0..1 ease over its own [delay, delay+(1-STAGGER_SPREAD)]
        // window, so every dot finishes exactly at t=1 regardless of its start offset.
        const local = Math.min(Math.max((t - dot.delay) / (1 - dot.delay), 0), 1)
        const eased = 1 - Math.pow(1 - local, 3)
        const progress = direction === "close" ? eased : 1 - eased
        const radius = dot.maxRadius * progress
        if (radius <= 0) continue
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      if (t < 1) {
        requestAnimationFrame(frame)
      } else {
        document.body.removeChild(announcement)
        if (direction === "open") {
          canvas.remove()
          session = null
        }
        resolve()
      }
    }

    requestAnimationFrame(frame)
  })
}
