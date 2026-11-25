import { ImageResponse } from "next/og";

export const alt = "Claude Devs: we ship real products with Claude Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #67e8f9 0%, #22d3ee 55%, #38bdf8 100%)",
          color: "#020617",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "64px 72px 0" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "#020617",
                color: "#67e8f9",
                fontSize: 30,
                fontWeight: 800,
                marginRight: 20,
              }}
            >
              CD
            </div>
            Claude Devs
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 56,
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            <span>We ship real products</span>
            <span>with Claude Code</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#020617",
            color: "#f8fafc",
            padding: "30px 72px",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <span>Fixed scope or a dedicated team</span>
          <span style={{ color: "#67e8f9" }}>Independent engineering team</span>
        </div>
      </div>
    ),
    size,
  );
}
