"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 backdrop-blur-md bg-[#060a12]/75" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--line)]" />

      <nav className="container relative mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5 text-paper" aria-label="Home">
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_10px_1px_rgba(76,217,100,0.8)]" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              Joe Heath
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative md:hidden p-2 text-muted hover:text-paper transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.14em]">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors ${active ? "text-signal" : "text-muted hover:text-paper"}`}
                >
                  {item.label}
                  {active && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-signal" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile nav */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="relative md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 font-mono text-sm uppercase tracking-[0.12em]">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block transition-colors ${pathname === item.href ? "text-signal" : "text-muted hover:text-paper"}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
