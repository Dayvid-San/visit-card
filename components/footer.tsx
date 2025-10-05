"use client"

export function Footer() {
  return (
    <footer
      data-door-footer
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background min-h-screen"
      style={{ transform: "translateY(calc(100vh - 4rem))" }}
    >
      <div className="absolute top-0 left-0 right-0 container flex h-16 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dayvid. All rights reserved.</p>
        <p className="text-sm text-muted-foreground">Built with Blood and Code</p>
      </div>
    </footer>
  )
}
