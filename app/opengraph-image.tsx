import { ImageResponse } from "next/og";

// Required by output: 'export' (static export) for this route to build.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card that shows up when this site's link is shared on WhatsApp,
// LinkedIn, Twitter/X, Discord, Slack, etc, instead of just bare text.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
            background: "#ffffff",
            marginBottom: 36,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 30 L30 70 L50 70 C60 70 70 60 70 50 C70 40 60 30 50 30 Z"
              fill="#0a0a0a"
            />
            <circle cx="55" cy="50" r="8" fill="#0a0a0a" opacity="0.4" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#f3eade",
            letterSpacing: -1,
          }}
        >
          Dayvid Santana
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#c4a9ec",
            letterSpacing: 2,
          }}
        >
          Software Engineer · AI Researcher · Systems Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
