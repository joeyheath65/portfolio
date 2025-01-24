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
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/0 to-orange-500/0 rounded-lg blur-sm group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
                <div className="relative text-amber-200/70 group-hover:text-amber-200 transition-colors">
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-6 sm:mt-8 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/5 to-transparent" />
          <p className="relative text-amber-200/50 text-sm">
            © {new Date().getFullYear()} Joe Heath. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 