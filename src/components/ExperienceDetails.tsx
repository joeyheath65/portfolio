"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ExperienceDetailsProps {
  isOpen: boolean;
  logo: string;
  jobTitle: string;
  company: string;
  dates: string;
  duties: string[];
  accomplishments: { text: string; link?: string }[];
  technology: string[];
  reflection: string;
  onClose: () => void;
}

export default function ExperienceDetails({ isOpen, logo, jobTitle, company, dates, duties, accomplishments, technology, reflection, onClose }: ExperienceDetailsProps) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-[#030305]/95 border border-[#334155] rounded-xl max-w-2xl w-full p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#cbd5e1] z-10"
              title="Close details"
              aria-label="Close details"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Logo */}
            <div className="absolute top-4 right-16 w-12 h-12">
              <Image src={logo} alt={`${company} logo`} width={48} height={48} className="object-contain w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold text-gradient mb-2">{jobTitle}</h2>
            <div className="text-[#cbd5e1] text-lg mb-1">{company}</div>
            <div className="text-xs text-[#94a3b8] mb-4">{dates}</div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gradient mb-1">Duties & Responsibilities</h3>
              <ul className="list-disc list-inside text-[#94a3b8] space-y-1">
                {duties.map((duty, i) => <li key={i}>{duty}</li>)}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gradient mb-1">Accomplishments</h3>
              <ul className="list-disc list-inside text-[#94a3b8] space-y-1">
                {accomplishments.map((acc, i) => (
                  <li key={i}>
                    {acc.link ? (
                      <a
                        href={acc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#cbd5e1] underline hover:text-[#94a3b8] transition-colors"
                      >
                        {acc.text}
                      </a>
                    ) : (
                      acc.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gradient mb-1">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technology.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#334155]/30 text-[#94a3b8]">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gradient mb-1">Reflection</h3>
              <p className="text-[#94a3b8]">{reflection}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 