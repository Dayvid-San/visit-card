import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon: the griffin from public/identidade/grifo.png (the personal mark).
export default async function Icon() {
  const grifo = await readFile(join(process.cwd(), "public", "identidade", "grifo.png"));
  const src = `data:image/png;base64,${grifo.toString("base64")}`;
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} width={32} height={32} alt="" style={{ borderRadius: 6 }} />
    ),
    { ...size }
  );
}
