import { cn } from "@/lib/utils"

interface TorchFlameProps {
  className?: string
}

export function TorchFlame({ className }: TorchFlameProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block select-none text-base leading-none animate-torch-flicker", className)}
    >
      🔥
    </span>
  )
}
