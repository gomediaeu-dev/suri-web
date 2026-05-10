import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 120,
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: -4,
          boxShadow: "0 0 80px rgba(16, 185, 129, 0.5)",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
