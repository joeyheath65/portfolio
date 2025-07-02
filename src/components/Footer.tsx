"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/joeyheath65", label: "GitHub", icon: FaGithub },
    { href: "https://linkedin.com/in/josephheath", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://twitter.com/yourusername", label: "Twitter", icon: FaTwitter },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      {/* Layered background effects */}
      <div className="absolute inset-0 backdrop-blur-md bg-[#030305]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#334155]/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#64748b]/10 to-[#334155]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="relative text-gradient font-semibold text-sm sm:text-base">
              Building the future, one line at a time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#64748b]/0 to-[#334155]/0 rounded-lg blur-sm group-hover:from-[#64748b]/20 group-hover:to-[#334155]/20 transition-all duration-300" />
                <div className="relative text-blue-200/70 group-hover:text-blue-200 transition-colors">
                  <link.icon className="w-6 h-6 text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors" />
                  <span className="sr-only">{link.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#334155]/10 to-transparent" />
          <p className="relative text-[#64748b] text-sm">
            © {new Date().getFullYear()} Joe Heath. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 