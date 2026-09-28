"use client"

import Link from 'next/link'
import { useContent } from "@/components/content-provider"

export default function NotFound() {
  const { t } = useContent();
  return (
    <div className="container px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="select-none text-7xl font-extrabold tracking-tight text-purple-300/25 sm:text-8xl">
          404
        </p>
        <h1 className="mb-4 mt-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">{t("notFound.title")}</h1>
        <p className="mb-2 text-lg text-muted-foreground text-pretty">
          {t("notFound.description")}
        </p>
        <p className="mb-8 font-mono text-xs text-muted-foreground/60">
          {t("notFound.quip")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  )
}
