import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Beacon — Project intelligence for any codebase";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(join(process.cwd(), "public/icon.png"), "base64");
  const iconSrc = `data:image/png;base64,${iconData}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fffbf8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Orange accent bar */}
        <div style={{ width: "8px", background: "#fb4f39", flexShrink: 0 }} />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 88px",
            flex: 1,
          }}
        >
          {/* Icon + wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <img src={iconSrc} width={52} height={52} />
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#111827", letterSpacing: "-0.5px" }}>
              Beacon
            </span>
          </div>

          {/* Headline line 1 */}
          <div style={{ display: "flex", fontSize: "80px", fontWeight: 800, color: "#111827", lineHeight: 1.05, letterSpacing: "-2px" }}>
            Project intelligence
          </div>

          {/* Headline line 2 */}
          <div style={{ display: "flex", fontSize: "80px", fontWeight: 800, color: "#fb4f39", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "28px" }}>
            for any codebase.
          </div>

          {/* Subline */}
          <div style={{ display: "flex", fontSize: "26px", color: "#9ca3af", letterSpacing: "-0.3px" }}>
            Claude AI Skill
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
