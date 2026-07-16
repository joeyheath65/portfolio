import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Generated apple-touch-icon: signal-green dot on the dark panel.
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
          background: "#060a12",
        }}
      >
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "9999px",
            background: "#4cd964",
            boxShadow: "0 0 40px 8px rgba(76,217,100,0.7)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
