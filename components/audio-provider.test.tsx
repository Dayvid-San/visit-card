import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { renderHook, render, fireEvent, act, waitFor } from "@testing-library/react"
import type { ReactNode } from "react"
import { AudioProvider, useAudio } from "@/components/audio-provider"

function wrapper({ children }: { children: ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>
}

// jsdom has no Web Audio API, so playKeySound (used by the global keystroke
// listener) is a stand-in with just enough surface to assert it was driven.
class FakeOscillator {
  type = ""
  frequency = { setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() }
  connect = vi.fn()
  start = vi.fn()
  stop = vi.fn()
}
class FakeGainNode {
  gain = { setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() }
  connect = vi.fn()
}
class FakeAudioContext {
  currentTime = 0
  state = "running"
  destination = {}
  // Regular prototype methods (not class-field arrow functions) so
  // vi.spyOn(FakeAudioContext.prototype, ...) can find them.
  createOscillator() {
    return new FakeOscillator()
  }
  createGain() {
    return new FakeGainNode()
  }
  resume = vi.fn()
  close = vi.fn()
}

beforeEach(() => {
  localStorage.clear()
  HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined)
  HTMLMediaElement.prototype.pause = vi.fn()
  ;(window as any).AudioContext = FakeAudioContext
})

afterEach(() => {
  delete (window as any).AudioContext
})

describe("AudioProvider / useAudio", () => {
  it("throws when used outside AudioProvider", () => {
    expect(() => renderHook(() => useAudio())).toThrow(
      "useAudio must be used within AudioProvider"
    )
  })

  it("starts unmuted when localStorage has no stored preference", async () => {
    const { result } = renderHook(() => useAudio(), { wrapper })
    await waitFor(() => expect(result.current.isMuted).toBe(false))
  })

  it("restores the muted preference from localStorage", async () => {
    localStorage.setItem("audioMuted", "true")
    const { result } = renderHook(() => useAudio(), { wrapper })
    await waitFor(() => expect(result.current.isMuted).toBe(true))
  })

  it("toggleMute flips the state and persists it to localStorage", async () => {
    const { result } = renderHook(() => useAudio(), { wrapper })
    await waitFor(() => expect(result.current.isMuted).toBe(false))

    act(() => {
      result.current.toggleMute()
    })

    await waitFor(() => expect(localStorage.getItem("audioMuted")).toBe("true"))
    expect(result.current.isMuted).toBe(true)
  })

  it("does not play the door sound while muted", async () => {
    localStorage.setItem("audioMuted", "true")
    const { result } = renderHook(() => useAudio(), { wrapper })
    await waitFor(() => expect(result.current.isMuted).toBe(true))

    await act(async () => {
      await result.current.playDoorSound()
    })

    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
  })

  it("plays the door sound when unmuted", async () => {
    const { result } = renderHook(() => useAudio(), { wrapper })
    await waitFor(() => expect(result.current.isMuted).toBe(false))

    await act(async () => {
      await result.current.playDoorSound()
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
  })

  it("plays a key sound when typing in a real text input", async () => {
    const createOscillatorSpy = vi.spyOn(FakeAudioContext.prototype, "createOscillator")
    const { getByTestId } = render(
      <AudioProvider>
        <input data-testid="field" />
      </AudioProvider>
    )

    fireEvent.keyDown(getByTestId("field"), { key: "a" })

    expect(createOscillatorSpy).toHaveBeenCalledTimes(1)
    createOscillatorSpy.mockRestore()
  })

  it("does not play a key sound outside of text fields", async () => {
    const createOscillatorSpy = vi.spyOn(FakeAudioContext.prototype, "createOscillator")
    const { getByTestId } = render(
      <AudioProvider>
        <button data-testid="btn">Click</button>
      </AudioProvider>
    )
    fireEvent.keyDown(getByTestId("btn"), { key: "a" })

    expect(createOscillatorSpy).not.toHaveBeenCalled()
    createOscillatorSpy.mockRestore()
  })

  it("does not play a key sound while muted", async () => {
    localStorage.setItem("audioMuted", "true")
    const createOscillatorSpy = vi.spyOn(FakeAudioContext.prototype, "createOscillator")
    const { getByTestId } = render(
      <AudioProvider>
        <input data-testid="field" />
      </AudioProvider>
    )
    await waitFor(() => expect(localStorage.getItem("audioMuted")).toBe("true"))

    fireEvent.keyDown(getByTestId("field"), { key: "a" })

    expect(createOscillatorSpy).not.toHaveBeenCalled()
    createOscillatorSpy.mockRestore()
  })
})
