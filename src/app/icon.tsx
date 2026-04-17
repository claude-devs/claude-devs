import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
          borderRadius: "8px",
        }}
      >
        {/* C */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 36 36"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M15,9 C4,9 4,27 15,27"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <line
            x1="19" y1="9" x2="19" y2="27"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M19,9 C31,9 31,27 19,27"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
