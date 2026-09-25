"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getPublicContent } from "@/lib/api";
import { defaultText } from "@/lib/content-registry";

export type Locale = "pt" | "en";

const LOCALE_STORAGE_KEY = "visitcard_locale";

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "pt";
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

interface ContentContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const ContentContext = createContext<ContentContextValue | null>(null);

async function loadContent(locale: Locale): Promise<Record<string, string>> {
  if (locale === "pt") return getPublicContent("pt");
  const [en, pt] = await Promise.all([getPublicContent("en"), getPublicContent("pt")]);
  // The backend answers "en" with valuePt for keys that have no valueEn yet; drop those so the EN default wins.
  return Object.fromEntries(Object.entries(en).filter(([key, value]) => value !== pt[key]));
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [content, setContent] = useState<{ locale: Locale; map: Record<string, string> } | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null) : null;
    setLocaleState(stored ?? detectBrowserLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    let cancelled = false;
    loadContent(locale)
      .then((map) => {
        if (!cancelled) setContent({ locale, map });
      })
      .catch((error) =>
        console.warn(`Backend de conteúdo indisponível, usando textos padrão (${error?.message ?? error})`)
      );
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: string) =>
      (content?.locale === locale ? content.map[key] : undefined) ?? defaultText(key, locale) ?? key,
    [content, locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within a ContentProvider");
  return ctx;
}
