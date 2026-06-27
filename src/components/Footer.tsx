"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/joeyheath65", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com/in/josephheath", label: "LinkedIn", icon: FaLinkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[#060a12]/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="text-signal">◢</span> Network up · build on top
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="text-muted transition-colors hover:text-signal"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[0.7rem] tracking-wide text-muted/70">
          © {year} Joe Heath · Lawn Dart! Systems, LLC
        </p>
      </div>
    </footer>
  );
}
