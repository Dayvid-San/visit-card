// Themes for the door transition (components/door-panel.tsx). Keyed by the
// first path segment, so every route under a section shares its door look
// (e.g. /portfolio/tyto gets the same theme as /portfolio).
export interface DoorTheme {
  id: string
  /** Tailwind gradient stop classes for the door's background wash. */
  wash: string
  /** A single glyph watermarked faintly on the door, or "" for none. */
  emblem: string
}

const THEMES: Record<string, DoorTheme> = {
  programador: { id: "programador", wash: "from-blue-600/25 via-blue-500/5 to-transparent", emblem: "🛡️" },
  empreendedor: { id: "empreendedor", wash: "from-amber-500/25 via-amber-500/5 to-transparent", emblem: "🏰" },
  universitario: { id: "universitario", wash: "from-emerald-500/25 via-emerald-500/5 to-transparent", emblem: "📚" },
  portfolio: { id: "portfolio", wash: "from-purple-600/25 via-purple-500/5 to-transparent", emblem: "⚔️" },
  contato: { id: "contato", wash: "from-sky-500/25 via-sky-500/5 to-transparent", emblem: "✉️" },
  atenas: { id: "atenas", wash: "from-violet-500/25 via-violet-500/5 to-transparent", emblem: "🦉" },
  admin: { id: "admin", wash: "from-yellow-500/25 via-yellow-500/5 to-transparent", emblem: "👑" },
}

const DEFAULT_THEME: DoorTheme = { id: "default", wash: "from-zinc-500/10 via-transparent to-transparent", emblem: "" }

export function getDoorTheme(pathname: string): DoorTheme {
  const section = pathname.split("/").filter(Boolean)[0]
  if (!section) return DEFAULT_THEME
  return THEMES[section] ?? DEFAULT_THEME
}
