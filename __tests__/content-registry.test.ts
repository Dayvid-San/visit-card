import { describe, it, expect } from "vitest"
import { CONTENT_KEYS, defaultText } from "@/lib/content-registry"
import { DEFAULT_EN } from "@/lib/content-registry-en"

describe("content registry", () => {
  it("has no duplicate keys", () => {
    const keys = CONTENT_KEYS.map((entry) => entry.key)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it("has an English default for every key", () => {
    const missing = CONTENT_KEYS.map((entry) => entry.key).filter((key) => !DEFAULT_EN[key]?.trim())
    expect(missing).toEqual([])
  })

  it("has no English defaults for keys that are not in the registry", () => {
    const known = new Set(CONTENT_KEYS.map((entry) => entry.key))
    expect(Object.keys(DEFAULT_EN).filter((key) => !known.has(key))).toEqual([])
  })

  it("keeps {placeholders} identical between PT and EN", () => {
    const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort()
    for (const entry of CONTENT_KEYS) {
      expect(placeholders(DEFAULT_EN[entry.key]), entry.key).toEqual(placeholders(entry.defaultPt))
    }
  })

  it("defaultText picks the default for the requested locale", () => {
    expect(defaultText("header.nav.contato", "pt")).toBe("Contato")
    expect(defaultText("header.nav.contato", "en")).toBe("Contact")
    expect(defaultText("does.not.exist", "en")).toBeUndefined()
  })
})
