import type { Metadata } from "next";

import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joe Heath — 20+ years in network engineering, IT leadership, and now full-stack and AI development. Army veteran, founder of Lawn Dart! Systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
