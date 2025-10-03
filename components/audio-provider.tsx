"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, useRef } from "react"

interface AudioContextType {
  isMuted: boolean
  toggleMute: () => void
  playDoorSound: () => Promise<void>
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("audioMuted")
    if (stored !== null) {
      setIsMuted(stored === "true")
    }

    // Preload audio
    const audio = new Audio()

    // Try .mp3 first, fallback to .ogg
    audio.src = "/assets/sounds/door-close-futuristic.mp3"
    audio.preload = "auto"
    audio.volume = 0.5

    audio.addEventListener("error", () => {
      console.log("[v0] MP3 failed, trying OGG fallback")
      audio.src = "/assets/sounds/door-close-futuristic.ogg"
      audio.load()
    })

    audioRef.current = audio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("audioMuted", String(isMuted))
  }, [isMuted, mounted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  const playDoorSound = async () => {
    if (isMuted || !audioRef.current) return

    try {
      audioRef.current.currentTime = 0
      await audioRef.current.play()
    } catch (error) {
      console.log("[v0] Audio playback blocked or failed:", error)
    }
  }

  return <AudioContext.Provider value={{ isMuted, toggleMute, playDoorSound }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider")
  }
  return context
}
