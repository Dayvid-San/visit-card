import { ImageResponse } from "next/og";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same mark as app/icon.tsx, sized for iOS home-screen bookmarks.
export default function AppleIcon() {
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
        }}
      >
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
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
