"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactView() {
  return (
    <>
      <AnimatedBackground />
      <section className="relative z-10 min-h-screen px-4 pt-28 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-2xl"
          >
            <p className="eyebrow mb-3">
              <span className="text-signal">●</span> GET IN TOUCH
            </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Let&apos;s talk.</h1>
            <p className="mt-4 text-paper/65">
              A network to design, an app to ship, or just a question — drop me a line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-3d p-6 sm:p-8"
            >
              <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-signal">
                Send a message
              </h2>
              <ContactForm />
            </motion.div>

            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
