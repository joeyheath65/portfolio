"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { FormEvent, useEffect, useRef, useState } from "react";

const inputClass =
  "w-full rounded border border-[var(--line)] bg-[#0a1120] px-4 py-2.5 text-paper placeholder-muted/60 transition-colors focus:border-signal/60 focus:outline-none disabled:opacity-50";
const labelClass = "mb-2 block font-mono text-xs uppercase tracking-wider text-muted";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (
        !form.current ||
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("Missing EmailJS configuration");
      }

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      form.current.reset();
      setSubmitStatus({
        type: "success",
        message: "Message sent. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        type: "error",
        message: "Couldn't send the message. Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <div>
        <label htmlFor="user_name" className={labelClass}>Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="user_email" className={labelClass}>Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          disabled={isSubmitting}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>What do you need?</label>
        <select
          id="service"
          name="service"
          required
          disabled={isSubmitting}
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled className="bg-[#0a1120]">Select an option</option>
          <option value="Web Development" className="bg-[#0a1120]">Web Development</option>
          <option value="AI Integration" className="bg-[#0a1120]">AI Integration</option>
          <option value="Network / Infrastructure" className="bg-[#0a1120]">Network / Infrastructure</option>
          <option value="Consulting" className="bg-[#0a1120]">Consulting</option>
          <option value="Other" className="bg-[#0a1120]">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      {submitStatus.type && (
        <div
          className={`font-mono text-sm ${submitStatus.type === "success" ? "text-signal" : "text-red-400"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
        className="btn-signal w-full px-6 py-3 font-mono text-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send message →"}
      </motion.button>
    </form>
  );
}
