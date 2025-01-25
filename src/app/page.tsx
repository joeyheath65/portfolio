"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <WelcomeMessage />
      <section className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="relative mb-4 sm:mb-6"
              animate={{ 
                scale: [1, 1.02, 1],
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                <span className="inline-block relative">
                  <span className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 rounded-lg blur-lg" />
                  <span className="relative bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Welcome to my portfolio!
                  </span>
                </span>
              </h1>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-100/80">
                I&apos;m Joe Heath, a full stack developer and AI enthusiast.
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-3d p-4 sm:p-6 rounded-xl"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gradient">Frontend Magic</h3>
                <p className="text-sm sm:text-base text-amber-100/70">React, Next.js, TypeScript, and modern UI/UX design</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-3d p-4 sm:p-6 rounded-xl"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gradient">Backend Expertise</h3>
                <p className="text-sm sm:text-base text-amber-100/70">Node.js, Python, APIs, and database architecture</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-3d p-4 sm:p-6 rounded-xl"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gradient">AI Integration</h3>
                <p className="text-sm sm:text-base text-amber-100/70">Machine learning, NLP, and AI-powered solutions</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                Let&apos;s Build Something Amazing
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
