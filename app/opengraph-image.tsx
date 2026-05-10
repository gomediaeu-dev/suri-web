import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "SURI — AI razvojna partnerka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0E",
          backgroundImage:
            "radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.25), transparent 50%), radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.25), transparent 55%)",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          color: "#F5F5F7",
        }}
      >
        {/* Top: badge + brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 36,
                fontWeight: 900,
                letterSpacing: -2,
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)",
              }}
            >
              S
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>SURI</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(20, 20, 26, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              fontSize: 16,
              color: "#A1A1AA",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#10B981" }} />
            V živo · Avtonomno
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: -3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#F5F5F7" }}>Sem SURI.</span>
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI razvojna partnerka
            </span>
            <span style={{ color: "#F5F5F7" }}>brez kompromisov.</span>
          </div>
        </div>

        {/* Bottom: meta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#A1A1AA" }}>
            <span>Sebastjan Groznik</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Multi AI agents system developing engineer</span>
          </div>
          <div style={{ color: "#10B981", fontWeight: 700 }}>suriagent.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
