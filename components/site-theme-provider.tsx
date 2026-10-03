"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import { DEFAULT_SITE_THEME, SITE_THEMES, isSiteThemeId, type SiteThemeId, type SiteThemeDef } from "@/lib/site-themes";

const STORAGE_KEY = "visitcard_siteTheme";
const THEME_DOC_PATH = { collection: "siteSettings", id: "theme" } as const;

interface SiteThemeContextValue {
  themeId: SiteThemeId;
  themeDef: SiteThemeDef;
  setThemeId: (id: SiteThemeId) => Promise<void>;
  isSaving: boolean;
}

const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);

export function SiteThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<SiteThemeId>(DEFAULT_SITE_THEME);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (isSiteThemeId(stored)) setThemeIdState(stored);

    if (!isFirebaseConfigured) return;
    let cancelled = false;
    getDoc(doc(getFirebaseDb(), THEME_DOC_PATH.collection, THEME_DOC_PATH.id))
      .then((snap) => {
        if (cancelled) return;
        const remote = snap.data()?.activeThemeId;
        if (isSiteThemeId(remote)) {
          setThemeIdState(remote);
          localStorage.setItem(STORAGE_KEY, remote);
        }
      })
      .catch((error) =>
        console.warn(`Tema do site indisponível, usando o tema padrão (${error?.message ?? error})`)
      );
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.siteTheme = themeId;
  }, [themeId]);

  const setThemeId = useCallback(async (id: SiteThemeId) => {
    setThemeIdState(id);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, id);

    setIsSaving(true);
    try {
      await setDoc(doc(getFirebaseDb(), THEME_DOC_PATH.collection, THEME_DOC_PATH.id), {
        activeThemeId: id,
      });
    } finally {
      setIsSaving(false);
    }
  }, []);

  const value = useMemo(
    () => ({ themeId, themeDef: SITE_THEMES[themeId], setThemeId, isSaving }),
    [themeId, setThemeId, isSaving]
  );

  return <SiteThemeContext.Provider value={value}>{children}</SiteThemeContext.Provider>;
}

export function useSiteTheme(): SiteThemeContextValue {
  const ctx = useContext(SiteThemeContext);
  if (!ctx) throw new Error("useSiteTheme must be used within a SiteThemeProvider");
  return ctx;
}
