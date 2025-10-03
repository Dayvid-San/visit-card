"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Instagram, Mail, Moon, Sun, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useAudio } from "@/components/audio-provider"
import { useDoorTransition } from "@/components/door-transition-provider"
import { DayvidLogo } from "@/components/dayvid-logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programador", label: "Programador" },
  { href: "/empreendedor", label: "Empreendedor" },
  { href: "/universitario", label: "Universitário" },
  { href: "/portfolio", label: "Portfolio" },
]

const socialLinks = [
  { href: "https://github.com/dayvid", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/dayvid", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/dayvid", icon: Instagram, label: "Instagram" },
  { href: "mailto:dayvid@example.com", icon: Mail, label: "Email" },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { isMuted, toggleMute } = useAudio()
  const { navigateWithDoor, isTransitioning } = useDoorTransition()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (pathname !== href) {
      navigateWithDoor(href)
    }
  }

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    navigateWithDoor(href, true)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          aria-label="Dayvid Home"
        >
          <DayvidLogo className="h-8 w-8" />
          <span className="text-lg font-bold">Dayvid</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons & Controls */}
        <div className="flex items-center space-x-2">
          {socialLinks.map((social) => (
            <Button
              key={social.href}
              variant="ghost"
              size="icon"
              asChild
              disabled={isTransitioning}
              aria-label={social.label}
            >
              <a href={social.href} onClick={(e) => handleSocialClick(e, social.href)}>
                <social.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur"
        aria-label="Mobile navigation"
      >
        <div className="container flex items-center justify-around px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
