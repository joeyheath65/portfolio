"use client";

import { motion } from "framer-motion";

export default function WelcomeMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8 z-40 max-w-sm"
    >
      <div className="relative">
        {/* Background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 rounded-lg blur-sm" />
        
        {/* Content */}
        <div className="relative p-4 bg-[#030305]/90 backdrop-blur-md rounded-lg border border-amber-900/20">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-4">
              {/* Animated singularity icon */}
              <div className="relative w-10 h-10 mt-1">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-1 rounded-full bg-[#030305]" />
                <motion.div
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                  animate={{
                    scale: [1, 0.8, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Message content */}
              <div className="flex-1">
                <h3 className="text-gradient font-semibold mb-1">Welcome to my digital portfolio</h3>
                <p className="text-amber-100/70 text-sm">
                  I build modern web applications with custom integrations and AI features.
                </p>
                <motion.div
                  className="mt-3 text-xs text-amber-200/50"
                  animate={{ opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Event Horizon: {new Date().getFullYear()}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 