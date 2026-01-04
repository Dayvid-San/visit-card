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

    // Criando o áudio apenas uma vez e apontando direto para o .ogg
    const audio = new Audio("/assets/sounds/door-close-futuristic.ogg");
    audio.preload = "auto";
    audio.volume = 0.5;

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
      console.log("[Audio] Playback blocked or failed:", error)
    }
  }

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playDoorSound }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider")
  }
  return context
}
