// Site-wide visual themes, picked in /admin/dashboard and applied to every
// visitor via a `data-site-theme` attribute on <html> (see
// components/site-theme-provider.tsx). Distinct from lib/door-themes.ts,
// which only varies the door's wash/emblem per route within a single theme.
export type SiteThemeId = "arcano" | "halftone"

export interface SiteThemeDef {
  id: SiteThemeId
  label: string
  description: string
  /** Which navigation transition this theme drives (lib/animation-utils.ts / lib/halftone-canvas.ts). */
  transition: "door" | "halftone"
}

export const SITE_THEMES: Record<SiteThemeId, SiteThemeDef> = {
  arcano: {
    id: "arcano",
    label: "Arcano",
    description: "O visual atual: roxo, orbes de luz e a porta como transição.",
    transition: "door",
  },
  halftone: {
    id: "halftone",
    label: "Halftone",
    description: "Monocromático, pontilhismo e uma dissolução em pontos como transição.",
    transition: "halftone",
  },
}

export const DEFAULT_SITE_THEME: SiteThemeId = "arcano"

export const SITE_THEME_IDS = Object.keys(SITE_THEMES) as SiteThemeId[]

export function isSiteThemeId(value: string | null | undefined): value is SiteThemeId {
  return value === "arcano" || value === "halftone"
}
