"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/yourusername", label: "GitHub", icon: "github" },
    { href: "https://linkedin.com/in/yourusername", label: "LinkedIn", icon: "linkedin" },
    { href: "https://twitter.com/yourusername", label: "Twitter", icon: "twitter" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="backdrop-blur-md bg-slate-900/75 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gradient font-semibold">
              Building the future, one line at a time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-400">
            © {new Date().getFullYear()} Joe Heath. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 