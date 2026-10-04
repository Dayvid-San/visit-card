import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

// Static export generates this to robots.txt at build time.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/curriculos", "/curriculos/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
