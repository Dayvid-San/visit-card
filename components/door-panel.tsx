import { cn } from "@/lib/utils"
import type { DoorTheme } from "@/lib/door-themes"

interface DoorPanelProps {
  theme: DoorTheme
  className?: string
}

/**
 * Decorative wash + emblem for the door transition (see Footer, which is the
 * actual door element animated by lib/animation-utils.ts). Purely
 * presentational, given a theme, so it can be reused anywhere a "which
 * section is this" visual cue is useful, not just inside the door itself.
 */
export function DoorPanel({ theme, className }: DoorPanelProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        key={theme.id}
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500",
          theme.wash
        )}
      />
      {theme.emblem && (
        <span
          key={`${theme.id}-emblem`}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-[0.08] select-none"
        >
          {theme.emblem}
        </span>
      )}
    </div>
  )
}
