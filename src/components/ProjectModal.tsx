"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    longDescription?: string;
    features?: string[];
    githubLink?: string;
    liveDemo?: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl"
            >
              <div className="relative bg-[#030305]/95 border border-amber-900/20 backdrop-blur-md">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-amber-200/70 hover:text-amber-200 z-10"
                  title="Close modal"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6 sm:p-8">
                  {/* Project image */}
                  <div className="aspect-video bg-slate-800/50 rounded-lg mb-6 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Project title */}
                  <h2 className="text-3xl font-bold mb-4 text-gradient">{project.title}</h2>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-amber-500/10 text-amber-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project description */}
                  <div className="space-y-4 text-amber-100/70 mb-6">
                    <p>{project.longDescription || project.description}</p>
                    {project.features && (
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-amber-200">Key Features</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Live Demo
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-amber-500/20 text-amber-200 font-semibold px-6 py-3 rounded-lg hover:bg-amber-500/10 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View on GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 