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
      <div className="p-4 flex items-center gap-4 min-h-[72px]">
        <div className="w-16 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-transparent">
          <Image src={logo} alt={`${company} logo`} width={64} height={48} className="object-contain w-full h-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gradient mb-0.5">{jobTitle}</h3>
          <div className="text-[#cbd5e1] text-xs mb-0.5">{company}</div>
          <div className="text-xs text-[#94a3b8]">{dates}</div>
        </div>
      </div>
    </motion.div>
  );
} 