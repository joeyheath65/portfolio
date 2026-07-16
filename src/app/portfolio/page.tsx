import type { Metadata } from "next";

import PortfolioView from "./PortfolioView";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Joe Heath across web, AI, and the Lawn Dart! venture — Next.js, React, Flutter, and custom AI integrations, including the flagship Slot'd.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
