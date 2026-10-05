import { ImageResponse } from "next/og";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon built from the same shape as components/dayvid-logo.tsx (that
// component uses currentColor so it can sit on any page background; a
// favicon has no such background, so it gets its own dark square here).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 6,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
          <path
            d="M30 30 L30 70 L50 70 C60 70 70 60 70 50 C70 40 60 30 50 30 Z"
            fill="#ffffff"
          />
          <circle cx="55" cy="50" r="8" fill="#ffffff" opacity="0.35" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
