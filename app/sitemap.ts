import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

// Static export (output: 'export') generates this to sitemap.xml at build
// time. Admin routes and /curriculos (robots: noindex, no inbound links)
// are left out on purpose, same as they're already kept out of header.tsx's
// navLinks.
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "programador", priority: 0.8 },
  { path: "empreendedor", priority: 0.8 },
  { path: "universitario", priority: 0.8 },
  { path: "portfolio", priority: 0.8 },
  { path: "contato", priority: 0.7 },
  { path: "atenas", priority: 0.6 },
  { path: "portfolio/agora", priority: 0.6 },
  { path: "portfolio/engscan", priority: 0.6 },
  { path: "portfolio/flugo", priority: 0.6 },
  { path: "portfolio/hefesto", priority: 0.6 },
  { path: "portfolio/maestro", priority: 0.6 },
  { path: "portfolio/plantas", priority: 0.6 },
  { path: "portfolio/tyto", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}/${path}${path ? "/" : ""}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
