import type { Metadata } from "next";

// Project pages are client components (they read t() from useContent), so their <title> and
// description live in a sibling layout.tsx, in English: these are what search engines and
// LinkedIn/WhatsApp link previews show, and the portfolio targets English-speaking recruiters.
export function projectMetadata(slug: string, name: string, description: string): Metadata {
  const title = `${name} | Dayvid Santana`;
  const url = `/portfolio/${slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}
