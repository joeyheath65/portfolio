"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactItem {
  type: "email" | "phone" | "linkedin";
  label: string;
  value: string;
  icon: string;
  url?: string;
}

const contactItems: ContactItem[] = [
  {
    type: "linkedin",
    label: "LinkedIn Profile",
    value: "linkedin.com/in/josephheath", // Replace with your actual LinkedIn URL
    icon: "💼",
    url: "https://linkedin.com/in/josephheath" // Replace with your actual LinkedIn URL
  },
  {
    type: "email",
    label: "Personal Email",
    value: "joseph.r.heath@gmail.com", // Replace with your actual email
    icon: "📧"
  },
  {
    type: "email", 
    label: "Professional Email",
    value: "joe@lawndart.dev", // Replace with your actual work email
    icon: "💼"
  },
  {
    type: "phone",
    label: "Phone",
    value: "+1 (210) 464-6499", // Replace with your actual phone
    icon: "📱"
  }
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="card-3d p-6 sm:p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-gradient text-center">
        Contact Information
      </h3>
      
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="group"
          >
            <button
              onClick={() => handleItemClick(item)}
              className={`w-full p-4 rounded-lg border transition-all duration-200 group ${
                item.type === "linkedin" 
                  ? "border-blue-500/30 bg-blue-900/20 hover:bg-blue-900/30 hover:border-blue-400/50" 
                  : "border-amber-900/20 bg-slate-800/30 hover:bg-slate-800/50 hover:border-amber-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${
                      item.type === "linkedin" ? "text-blue-200/90" : "text-amber-200/90"
                    }`}>
                      {item.label}
                    </p>
                    <p className={`font-mono text-sm ${
                      item.type === "linkedin" ? "text-blue-100" : "text-amber-100"
                    }`}>
                      {item.value}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {copiedItem === item.label && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-green-400 text-sm font-medium"
                    >
                      Copied!
                    </motion.span>
                  )}
                  <span className={`transition-colors ${
                    item.type === "linkedin" 
                      ? "text-blue-500/60 group-hover:text-blue-400" 
                      : "text-amber-500/60 group-hover:text-amber-500"
                  }`}>
                    {item.type === "linkedin" ? "🔗" : "📋"}
                  </span>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-amber-100/60 text-sm">
          Click LinkedIn to visit profile • Click other items to copy to clipboard
        </p>
      </div>
    </motion.div>
  );
} 