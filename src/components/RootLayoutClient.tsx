"use client";

import { MotionConfig } from "framer-motion";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // reducedMotion="user" makes ALL framer-motion respect prefers-reduced-motion
    // (the global CSS rule only covers CSS animations, not WAAPI/transform loops).
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}