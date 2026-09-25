import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderHook, act, waitFor } from "@testing-library/react"
import type { ReactNode } from "react"

const getPublicContent = vi.fn()
vi.mock("@/lib/api", () => ({ getPublicContent: (locale: string) => getPublicContent(locale) }))

import { ContentProvider, useContent } from "@/components/content-provider"

function wrapper({ children }: { children: ReactNode }) {
  return <ContentProvider>{children}</ContentProvider>
}

beforeEach(() => {
  localStorage.clear()
  localStorage.setItem("visitcard_locale", "pt")
  getPublicContent.mockReset()
  vi.spyOn(console, "warn").mockImplementation(() => {})
})

describe("ContentProvider / useContent", () => {
  it("switches to the English defaults when the backend is unreachable", async () => {
    getPublicContent.mockRejectedValue(new TypeError("Failed to fetch"))
    const { result } = renderHook(() => useContent(), { wrapper })
    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Contato"))

    act(() => result.current.setLocale("en"))

    expect(result.current.locale).toBe("en")
    expect(result.current.t("header.nav.contato")).toBe("Contact")
    expect(document.documentElement.lang).toBe("en")
    expect(localStorage.getItem("visitcard_locale")).toBe("en")
  })

  it("uses a real English override from the backend", async () => {
    getPublicContent.mockImplementation(async (locale: string) =>
      locale === "en" ? { "header.nav.contato": "Get in touch" } : { "header.nav.contato": "Fale comigo" }
    )
    const { result } = renderHook(() => useContent(), { wrapper })
    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Fale comigo"))

    act(() => result.current.setLocale("en"))

    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Get in touch"))
  })

  it("ignores the backend's PT fallback for keys without an English value", async () => {
    // The backend answers "en" with valuePt when valueEn is blank.
    getPublicContent.mockResolvedValue({ "header.nav.contato": "Fale comigo" })
    const { result } = renderHook(() => useContent(), { wrapper })
    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Fale comigo"))

    act(() => result.current.setLocale("en"))

    await waitFor(() => expect(getPublicContent).toHaveBeenCalledWith("en"))
    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Contact"))
  })

  it("does not show the previous locale's backend text while the new one loads", async () => {
    getPublicContent.mockResolvedValueOnce({ "header.nav.contato": "Fale comigo" })
    const { result } = renderHook(() => useContent(), { wrapper })
    await waitFor(() => expect(result.current.t("header.nav.contato")).toBe("Fale comigo"))

    getPublicContent.mockReturnValue(new Promise(() => {}))
    act(() => result.current.setLocale("en"))

    expect(result.current.t("header.nav.contato")).toBe("Contact")
  })
})
