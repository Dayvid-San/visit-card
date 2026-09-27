"use client"

import Link from 'next/link'
import { useContent } from "@/components/content-provider"

export default function NotFound() {
  const { t } = useContent();
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p
          data-text="404"
          aria-hidden="true"
          className="glitch-text select-none text-7xl font-extrabold tracking-tight text-muted-foreground/40 sm:text-8xl"
        >
          404
        </p>
        <h1 className="mb-4 mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">{t("notFound.title")}</h1>
        <p className="mb-2 text-lg text-muted-foreground text-pretty">
          {t("notFound.description")}
        </p>
        <p className="mb-8 font-mono text-xs text-muted-foreground/70">
          {t("notFound.quip")}
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  )
}
