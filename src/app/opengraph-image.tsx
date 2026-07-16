import { ImageResponse } from "next/og";

export const alt = "Joe Heath — Network Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated 1200×630 social card (dark "network signal" theme).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #070c16 0%, #060a12 55%, #04070d 100%)",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "9999px",
              background: "#4cd964",
              boxShadow: "0 0 24px 4px rgba(76,217,100,0.8)",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#8593a6",
            }}
          >
            joeheath.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "104px", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Joe Heath
          </div>
          <div style={{ fontSize: "44px", fontWeight: 600, color: "#4cd964" }}>
            Network Engineer &amp; Full-Stack Developer
          </div>
          <div style={{ fontSize: "34px", color: "#c7d2e0", marginTop: "12px" }}>
            From the wire to the web app.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "26px", color: "#8593a6" }}>
          Founder of Lawn Dart! Systems · Slot&apos;d
        </div>
      </div>
    ),
    { ...size }
  );
}
