"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState, useRef } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playDoorSound: () => Promise<void>;
  playKeySound: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Text-producing <input> types a keystroke sound makes sense for. Excludes
// checkbox/radio/range/color/file/etc, where typing isn't the interaction.
const TEXTUAL_INPUT_TYPES = new Set([
  "text", "search", "email", "password", "tel", "url", "number",
]);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const webAudioCtxRef = useRef<InstanceType<typeof window.AudioContext> | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("audioMuted");
    if (stored !== null) {
      setIsMuted(stored === "true");
    }

    const audio = new Audio("/assets/sounds/door-close-futuristic.ogg");
    audio.preload = "auto";
    audio.volume = 0.5;

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (webAudioCtxRef.current) {
        webAudioCtxRef.current.close();
        webAudioCtxRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("audioMuted", String(isMuted));
  }, [isMuted, mounted]);

  useEffect(() => {
    if (!mounted || isMuted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts (Ctrl+C, Cmd+V, etc), only react to actual typing.
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const isTextInput =
        (target instanceof HTMLInputElement && TEXTUAL_INPUT_TYPES.has(target.type)) ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (!isTextInput) return;

      const isPrintable = e.key.length === 1;
      const isEditingKey = e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
      if (!isPrintable && !isEditingKey) return;

      playKeySound();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mounted, isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Short synthesized blip (Web Audio API, no sound file needed) for a
  // futuristic keystroke effect. A fresh oscillator per keystroke, so fast
  // typing overlaps cleanly instead of cutting a shared <audio> element off.
  const playKeySound = () => {
    if (isMuted) return;
    if (typeof window === "undefined") return;

    const Ctor = window.AudioContext ?? (window as any).webkitAudioContext;
    if (!Ctor) return;

    if (!webAudioCtxRef.current) {
      webAudioCtxRef.current = new Ctor();
    }
    const ctx = webAudioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    // Slight pitch variation per keystroke so a burst of typing doesn't
    // sound like a single note repeating.
    const baseFreq = 1400 + Math.random() * 500;
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(baseFreq, now);
    oscillator.frequency.exponentialRampToValueAtTime(baseFreq * 0.6, now + 0.05);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.1, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.06);
  };

  const playDoorSound = async () => {
    if (isMuted || !audioRef.current) return;

    try {
      const audio = audioRef.current;
      audio.volume = 0.5; // Garante o volume inicial
      audio.currentTime = 0; // Reinicia o áudio
      await audio.play();

      // Inicia o processo de encerramento aos 1.2 segundos (1200ms)
      // para completar o ciclo total em 1.5 segundos
      setTimeout(() => {
        if (!audio) return;

        const fadeInterval = setInterval(() => {
          // Se o volume ainda for maior que 0.05, diminui gradualmente
          if (audio.volume > 0.05) {
            audio.volume = Math.max(0, audio.volume - 0.05);
          } else {
            // Quando o volume estiver quase no zero, pausa e limpa o intervalo
            audio.pause();
            clearInterval(fadeInterval);
            audio.volume = 0.5; // Reseta o volume para a próxima execução
          }
        }, 30); // Frequência do fade (mais rápido = mais suave)
      }, 1200);
    } catch (error) {
      console.log("[Audio] Playback blocked or failed:", error);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playDoorSound, playKeySound }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}
