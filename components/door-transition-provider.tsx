"use client"

import type React from "react"

import { createContext, useContext, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useAudio } from "@/components/audio-provider"

interface DoorTransitionContextType {
  isTransitioning: boolean
  navigateWithDoor: (href: string, isExternal?: boolean) => Promise<void>
}

const DoorTransitionContext = createContext<DoorTransitionContextType | undefined>(undefined)

export function DoorTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()
  const { playDoorSound } = useAudio()
  const transitionLockRef = useRef(false)

  const navigateWithDoor = async (href: string, isExternal = false) => {
    // Prevent multiple clicks during transition
    if (transitionLockRef.current) return
    transitionLockRef.current = true
    setIsTransitioning(true)

    try {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (prefersReducedMotion) {
        // Simple crossfade for reduced motion
        await new Promise((resolve) => setTimeout(resolve, 200))
        if (isExternal) {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          router.push(href)
        }
      } else {
        // Full door animation
        await animateDoor({ direction: "close", duration: 700 })

        // Play sound during final 40% of closing (280ms into 700ms animation)
        setTimeout(() => {
          playDoorSound()
        }, 420)

        // Pause
        await new Promise((resolve) => setTimeout(resolve, 120))

        // Navigate
        if (isExternal) {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          router.push(href)
        }

        // Open door
        await animateDoor({ direction: "open", duration: 600 })
      }
    } finally {
      setIsTransitioning(false)
      transitionLockRef.current = false
    }
  }

  return (
    <DoorTransitionContext.Provider value={{ isTransitioning, navigateWithDoor }}>
      {children}
    </DoorTransitionContext.Provider>
  )
}

export function useDoorTransition() {
  const context = useContext(DoorTransitionContext)
  if (!context) {
    throw new Error("useDoorTransition must be used within DoorTransitionProvider")
  }
  return context
}

// Animation utility
export async function animateDoor({
  direction,
  duration = 1000,
}: {
  direction: "close" | "open"
  duration?: number
}): Promise<void> {
  return new Promise((resolve) => {
    const footer = document.querySelector("[data-door-footer]") as HTMLElement
    if (!footer) {
      resolve()
      return
    }

    const originalZIndex = footer.style.zIndex
    footer.style.zIndex = "9999"

    const startTransform = direction === "close" ? "translateY(calc(100vh - 4rem))" : "translateY(0)"
    const endTransform = direction === "close" ? "translateY(0)" : "translateY(calc(100vh - 4rem))"
    const easing = direction === "close" ? "ease-in-out" : "ease-out"

    footer.style.transform = startTransform
    footer.style.transition = `transform ${duration}ms ${easing}`

    // Announce to screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("role", "status")
    announcement.setAttribute("aria-live", "polite")
    announcement.className = "sr-only"
    announcement.textContent = direction === "close" ? "Transitioning to new page" : "Page loaded"
    document.body.appendChild(announcement)

    requestAnimationFrame(() => {
      footer.style.transform = endTransform
    })

    setTimeout(() => {
      footer.style.zIndex = originalZIndex
      document.body.removeChild(announcement)
      resolve()
    }, duration)
  })
}
