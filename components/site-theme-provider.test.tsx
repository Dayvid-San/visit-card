import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderHook, act, waitFor } from "@testing-library/react"
import type { ReactNode } from "react"
import { SiteThemeProvider, useSiteTheme } from "@/components/site-theme-provider"
import { DEFAULT_SITE_THEME } from "@/lib/site-themes"

let firebaseConfigured = true
vi.mock("@/lib/firebase", () => ({
  getFirebaseDb: () => ({}),
  get isFirebaseConfigured() {
    return firebaseConfigured
  },
}))

const getDocMock = vi.fn()
const setDocMock = vi.fn().mockResolvedValue(undefined)
vi.mock("firebase/firestore", () => ({
  doc: (...args: unknown[]) => args,
  getDoc: (...args: unknown[]) => getDocMock(...args),
  setDoc: (...args: unknown[]) => setDocMock(...args),
}))

function wrapper({ children }: { children: ReactNode }) {
  return <SiteThemeProvider>{children}</SiteThemeProvider>
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute("data-site-theme")
  firebaseConfigured = true
  getDocMock.mockReset().mockResolvedValue({ data: () => undefined })
  setDocMock.mockClear()
})

describe("SiteThemeProvider / useSiteTheme", () => {
  it("throws when used outside SiteThemeProvider", () => {
    expect(() => renderHook(() => useSiteTheme())).toThrow(
      "useSiteTheme must be used within a SiteThemeProvider"
    )
  })

  it("defaults to the default theme when nothing is stored and Firestore has no override", async () => {
    const { result } = renderHook(() => useSiteTheme(), { wrapper })
    await waitFor(() => expect(getDocMock).toHaveBeenCalled())
    expect(result.current.themeId).toBe(DEFAULT_SITE_THEME)
  })

  it("restores the theme from localStorage before Firestore responds", () => {
    localStorage.setItem("visitcard_siteTheme", "halftone")
    const { result } = renderHook(() => useSiteTheme(), { wrapper })
    expect(result.current.themeId).toBe("halftone")
  })

  it("applies data-site-theme on <html> and keeps it in sync", async () => {
    renderHook(() => useSiteTheme(), { wrapper })
    await waitFor(() => expect(document.documentElement.dataset.siteTheme).toBe(DEFAULT_SITE_THEME))
  })

  it("adopts the Firestore override once it resolves", async () => {
    getDocMock.mockResolvedValue({ data: () => ({ activeThemeId: "halftone" }) })
    const { result } = renderHook(() => useSiteTheme(), { wrapper })
    await waitFor(() => expect(result.current.themeId).toBe("halftone"))
    expect(localStorage.getItem("visitcard_siteTheme")).toBe("halftone")
  })

  it("ignores an unreachable Firestore and keeps the default theme", async () => {
    getDocMock.mockRejectedValue(new Error("offline"))
    const { result } = renderHook(() => useSiteTheme(), { wrapper })
    await waitFor(() => expect(getDocMock).toHaveBeenCalled())
    expect(result.current.themeId).toBe(DEFAULT_SITE_THEME)
  })

  it("does not query Firestore when Firebase isn't configured", () => {
    firebaseConfigured = false
    renderHook(() => useSiteTheme(), { wrapper })
    expect(getDocMock).not.toHaveBeenCalled()
  })

  it("setThemeId updates state, localStorage, and persists to Firestore", async () => {
    const { result } = renderHook(() => useSiteTheme(), { wrapper })
    await waitFor(() => expect(getDocMock).toHaveBeenCalled())

    await act(async () => {
      await result.current.setThemeId("halftone")
    })

    expect(result.current.themeId).toBe("halftone")
    expect(localStorage.getItem("visitcard_siteTheme")).toBe("halftone")
    expect(setDocMock).toHaveBeenCalledWith(expect.anything(), { activeThemeId: "halftone" })
  })
})
