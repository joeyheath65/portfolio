"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  jobTitle: string;
  company: string;
  dates: string;
  onClick: () => void;
  index: number;
}

export default function ExperienceCard({ logo, jobTitle, company, dates, onClick, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="card-3d group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex min-h-[72px] items-center gap-4 p-4">
        <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 p-1.5">
          <Image src={logo} alt={`${company} logo`} width={64} height={48} className="h-full w-full object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="mb-0.5 text-base font-bold text-paper">{jobTitle}</h3>
          <div className="text-xs text-paper/70">{company}</div>
          <div className="mt-0.5 font-mono text-[0.7rem] tracking-wide text-muted">{dates}</div>
        </div>
        <span aria-hidden="true" className="font-mono text-signal opacity-0 transition-opacity group-hover:opacity-100">→</span>
      </div>
    </motion.div>
  );
} 