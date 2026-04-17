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
            d="M14,12 C6,12 6,24 14,24"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <line
            x1="20" y1="12" x2="20" y2="24"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20,12 C29,12 29,24 20,24"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
