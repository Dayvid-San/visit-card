"use client"

import Link from 'next/link'
import { useContent } from "@/components/content-provider"
import { TorchFlame } from "@/components/torch-flame"

export default function NotFound() {
  const { t } = useContent();
  return (
    <div className="container px-4 py-16">
      <div className="fantasy-shell mx-auto max-w-2xl">
        <div className="px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="mb-2 flex items-center justify-center gap-4">
            <TorchFlame className="text-2xl" />
            <p
              data-text="404"
              aria-hidden="true"
              className="glitch-text select-none text-7xl font-extrabold tracking-tight text-amber-200/60 sm:text-8xl"
            >
              404
            </p>
            <TorchFlame className="text-2xl" />
          </div>
          <h1 className="gothic-title mb-4 mt-4 text-3xl text-amber-100 md:text-4xl">{t("notFound.title")}</h1>
          <p className="mb-2 text-lg text-amber-100/70 text-pretty">
            {t("notFound.description")}
          </p>
          <p className="mb-8 font-mono text-xs text-amber-100/50">
            {t("notFound.quip")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-amber-600/40 bg-amber-950/40 px-4 py-2 text-sm font-medium text-amber-100 shadow-sm transition-colors hover:bg-amber-900/60 hover:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
          >
            {t("notFound.backHome")}
          </Link>
        </div>
      </div>
    </div>
  )
}
