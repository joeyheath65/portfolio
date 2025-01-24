"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";

export default function Contact() {
  return (
    <>
      <AnimatedBackground />
      <section className="fixed inset-0 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 text-gradient">Get in Touch</h1>
            <p className="text-amber-100/70 text-lg">
              Interested in working together? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-3d p-6 sm:p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-200/90 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-200/90 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-amber-200/90 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
} 