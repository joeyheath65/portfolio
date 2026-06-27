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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[var(--line)] bg-[#0a1120] p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 text-muted transition-colors hover:text-paper"
              title="Close details"
              aria-label="Close details"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute right-16 top-4 h-12 w-12">
              <Image src={logo} alt={`${company} logo`} width={48} height={48} className="h-full w-full object-contain" />
            </div>
            <h2 className="mb-1 text-2xl font-extrabold text-paper">{jobTitle}</h2>
            <div className="text-lg text-paper/80">{company}</div>
            <div className="mb-5 font-mono text-xs tracking-wide text-muted">{dates}</div>

            <div className="mb-5">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">Duties &amp; responsibilities</h3>
              <ul className="space-y-1.5 text-sm text-paper/70">
                {duties.map((duty, i) => (
                  <li key={i} className="flex gap-2.5"><span aria-hidden="true" className="mt-1 text-signal">▸</span><span>{duty}</span></li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">Accomplishments</h3>
              <ul className="space-y-1.5 text-sm text-paper/70">
                {accomplishments.map((acc, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-1 text-signal">▸</span>
                    <span>
                      {acc.link ? (
                        <a href={acc.link} target="_blank" rel="noopener noreferrer" className="text-signal underline transition-colors hover:text-paper">
                          {acc.text}
                        </a>
                      ) : (
                        acc.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">Technology</h3>
              <div className="flex flex-wrap gap-1.5">
                {technology.map((tech, i) => <span key={i} className="chip">{tech}</span>)}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">Reflection</h3>
              <p className="text-sm text-paper/70">{reflection}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 