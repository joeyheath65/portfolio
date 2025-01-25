"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { FormEvent, useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        console.log("Email sent successfully:", result.text);
        form.current.reset();
      } else {
        throw new Error("Missing EmailJS configuration");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label htmlFor="user_name" className="block text-amber-200/90 mb-2 text-sm">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-amber-200/90 mb-2 text-sm">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-amber-200/90 mb-2 text-sm">Message</label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          rows={4}
          className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors resize-none disabled:opacity-50"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
} 