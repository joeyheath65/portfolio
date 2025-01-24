"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen">
        {/* Hero section */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Joe Heath
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-slate-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Full Stack Developer & AI Enthusiast
              </motion.h2>
              
              {/* Tech stack cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-3d bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gradient">Frontend Magic</h3>
                  <p className="text-slate-300">React, Next.js, TypeScript, and modern UI/UX design</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-3d bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gradient">Backend Expertise</h3>
                  <p className="text-slate-300">Node.js, Python, APIs, and database architecture</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-3d bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gradient">AI Integration</h3>
                  <p className="text-slate-300">Machine learning, NLP, and AI-powered solutions</p>
                </motion.div>
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Let&apos;s Build Something Amazing
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
