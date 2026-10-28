import type { NextConfig } from "next";

// Baseline security response headers applied to every route.
// NOTE: A strict Content-Security-Policy is intentionally omitted for now —
// it needs testing against framer-motion's inline styles, next/font, and the
// (in-progress) move to a server-side Resend email route. Add it once that
// email architecture settles.
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Hidden Easter egg pages: keep them out of search and AI crawlers.
        source: "/legal/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai" }],
      },
    ];
  },
};

export default nextConfig;
