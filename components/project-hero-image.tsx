"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { doc, getDoc } from "firebase/firestore"
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase"

interface ProjectHeroImageProps {
  /** Firestore doc id under projectPageImages/, matches the project's route segment. */
  slug: string
  /** The hardcoded image this project ships with, used until (or unless) an override loads. */
  fallbackSrc: string
  alt: string
}

/**
 * Hero image for a project detail page (app/portfolio/{slug}/page.tsx),
 * editable from /admin/dashboard without a code change. Reads
 * projectPageImages/{slug}'s imageUrl field and swaps to it once loaded;
 * keeps the page's own hardcoded image otherwise (offline, not configured,
 * or no override saved yet), same fail-soft shape as ContentProvider.
 */
export function ProjectHeroImage({ slug, fallbackSrc, alt }: ProjectHeroImageProps) {
  const [src, setSrc] = useState(fallbackSrc)

  useEffect(() => {
    if (!isFirebaseConfigured) return
    let cancelled = false
    getDoc(doc(getFirebaseDb(), "projectPageImages", slug))
      .then((snap) => {
        const url = snap.data()?.imageUrl
        if (!cancelled && typeof url === "string" && url) setSrc(url)
      })
      .catch((error) =>
        console.warn(`Imagem do projeto "${slug}" indisponível, usando a padrão (${error?.message ?? error})`)
      )
    return () => {
      cancelled = true
    }
  }, [slug])

  return (
    <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  )
}
