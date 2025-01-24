import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";

import RootLayoutClient from "@/components/RootLayoutClient";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe Heath - Full Stack Web Developer and AI Enthusiast",
  description: "Portfolio and blog of Joe Heath, a full stack web developer specializing in innovative web applications and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-space antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
