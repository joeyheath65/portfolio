import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Inter } from "next/font/google";

import RootLayoutClient from "@/components/RootLayoutClient";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe Heath — Network Engineer & Full-Stack Developer",
  description:
    "Joe Heath — network engineering leader, full-stack developer, and founder of Lawn Dart! Systems. I design the network, then build what runs on it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${display.variable} ${mono.variable} ${body.variable} font-sans antialiased`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
