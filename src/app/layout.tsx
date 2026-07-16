import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://joeheath.com";
const DESCRIPTION =
  "Joe Heath — network engineering leader, full-stack developer, and founder of Lawn Dart! Systems. I design the network, then build what runs on it.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Joe Heath — Network Engineer & Full-Stack Developer",
    template: "%s — Joe Heath",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Joe Heath",
    title: "Joe Heath — Network Engineer & Full-Stack Developer",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Heath — Network Engineer & Full-Stack Developer",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#060a12",
};

// JSON-LD Person schema — static, server-rendered (not user input).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joe Heath",
  jobTitle: "Network Engineer & Full-Stack Developer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/joeyheath65",
    "https://linkedin.com/in/josephheath",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Floresville",
    addressRegion: "TX",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: "Lawn Dart! Systems",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
