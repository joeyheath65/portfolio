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
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[var(--line)] bg-[#0a1120]"
            >
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 text-muted transition-colors hover:text-paper"
                  title="Close"
                  aria-label="Close modal"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6 sm:p-8">
                  <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-panel">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>

                  <h2 className="text-2xl font-extrabold text-paper sm:text-3xl">{project.title}</h2>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4 text-paper/70">
                    <p>{project.longDescription || project.description}</p>
                    {project.features && (
                      <div>
                        <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">
                          Key features
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex gap-2.5 text-sm">
                              <span aria-hidden="true" className="mt-1 text-signal">▸</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-signal flex-1 px-5 py-3"
                      >
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost flex-1 px-5 py-3"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
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
