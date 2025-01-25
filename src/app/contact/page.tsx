"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";

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
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
} 