"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ title, description, tech, image, index, onClick }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-3d group block w-full cursor-pointer overflow-hidden text-left"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden bg-panel">
        <Image
          src={image}
          alt={`${title} preview`}
          width={640}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-paper">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/60">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.slice(0, 5).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-signal">
          View project <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </motion.button>
  );
}
