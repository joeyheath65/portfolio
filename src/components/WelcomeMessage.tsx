"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <motion.a
      href="https://linkedin.com/in/josephheath"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8 z-40 max-w-sm group block"
      title="View my LinkedIn profile"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center p-4 bg-[#030305]/90 backdrop-blur-md rounded-xl border border-[#334155] shadow-2xl space-x-4 transition-all group-hover:shadow-blue-900/40">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#334155] bg-[#0a0f1f] flex-shrink-0">
          <Image
            src="/images/profile/joeheath.webp"
            alt="Joe Heath profile"
            width={56}
            height={56}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gradient font-semibold mb-1 truncate">Welcome to my digital portfolio</h3>
          <p className="text-[#94a3b8] text-sm truncate">
            Feel free to reach out so we can work together!
          </p>
          <div className="mt-2 text-xs text-[#64748b]">
            Connect with me on LinkedIn →
          </div>
        </div>
      </div>
    </motion.a>
  );
} 