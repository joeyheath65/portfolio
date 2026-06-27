"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaBriefcase, FaPhone } from "react-icons/fa";

interface ContactItem {
  type: "email" | "phone" | "linkedin";
  label: string;
  value: string;
  Icon: typeof FaEnvelope;
  url?: string;
}

const contactItems: ContactItem[] = [
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/josephheath",
    Icon: FaLinkedin,
    url: "https://linkedin.com/in/josephheath",
  },
  {
    type: "email",
    label: "Work email",
    value: "joe@lawndart.dev",
    Icon: FaBriefcase,
  },
  {
    type: "email",
    label: "Personal email",
    value: "joseph.r.heath@gmail.com",
    Icon: FaEnvelope,
  },
  {
    type: "phone",
    label: "Phone",
    value: "+1 (210) 464-6499",
    Icon: FaPhone,
  },
];

export default function ContactInfo() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const handleItemClick = (item: ContactItem) => {
    if (item.type === "linkedin" && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      copyToClipboard(item.value, item.label);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card-3d p-6 sm:p-8"
    >
      <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-signal">
        Direct lines
      </h2>

      <div className="space-y-3">
        {contactItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleItemClick(item)}
            className="group flex w-full items-center justify-between rounded border border-[var(--line)] bg-[#0a1120] p-4 text-left transition-colors hover:border-signal/40"
          >
            <div className="flex items-center gap-3">
              <item.Icon className="h-4 w-4 text-signal" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                <p className="font-mono text-sm text-paper">{item.value}</p>
              </div>
            </div>

            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted transition-colors group-hover:text-signal">
              {copiedItem === item.label ? "Copied" : item.type === "linkedin" ? "Open" : "Copy"}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.7rem] tracking-wide text-muted/70">
        Click LinkedIn to open · click any other to copy
      </p>
    </motion.div>
  );
}
