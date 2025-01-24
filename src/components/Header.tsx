"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Layered background effects */}
      <div className="absolute inset-0 backdrop-blur-md bg-[#030305]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      
      <nav className="container relative mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <Link href="/" className="relative text-xl font-bold text-gradient">
                Joe Heath
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative md:hidden p-2 text-amber-200/70 hover:text-amber-200 focus:outline-none group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`w-full h-0.5 bg-current transform transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/0 to-orange-500/0 rounded-lg blur-sm group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
                <Link
                  href={item.href}
                  className="relative text-amber-200/70 hover:text-amber-200 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="relative md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/0 to-orange-500/0 rounded-lg blur-sm group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
                <Link
                  href={item.href}
                  className="relative block text-amber-200/70 hover:text-amber-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
} 