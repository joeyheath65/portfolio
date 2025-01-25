"use client";

import React, { FormEvent, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            form.current?.reset();
          },
          (error) => {
            console.error('Failed to send email:', error.text);
          }
        );
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
          className="w-full px-4 py-2 bg-slate-800/50 border border-amber-900/20 rounded-lg text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500/50 transition-colors"
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
  );
} 