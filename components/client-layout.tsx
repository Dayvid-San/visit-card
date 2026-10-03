"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AudioProvider } from "@/components/audio-provider"
import { DoorTransitionProvider } from "@/components/door-transition-provider"
import { ContentProvider } from "@/components/content-provider"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // The login screen is a standalone full-bleed auth layout (no site
  // header/footer chrome), not a section of the public site.
  const isBareLayout = pathname === "/admin" || pathname === "/admin/"

  if (isBareLayout) {
    return (
      <ContentProvider>
        <ThemeProvider>
          <AudioProvider>{children}</AudioProvider>
        </ThemeProvider>
      </ContentProvider>
    )
  }

  return (
    <ContentProvider>
      <ThemeProvider>
        <AudioProvider>
          <DoorTransitionProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div key={pathname} className="animate-in fade-in duration-300" role="main">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </DoorTransitionProvider>
        </AudioProvider>
      </ThemeProvider>
    </ContentProvider>
  )
}
