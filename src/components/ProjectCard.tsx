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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card-3d group cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="aspect-video bg-slate-800/50 rounded-lg mb-4 overflow-hidden">
          <Image
            src={image}
            alt={`${title} preview`}
            width={640}
            height={360}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gradient">
          {title}
        </h3>
        
        <p className="text-amber-100/70 mb-4 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-200/70"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <motion.button
          className="w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Project
        </motion.button>
      </div>
    </motion.div>
  );
} 