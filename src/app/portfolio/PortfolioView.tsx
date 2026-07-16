"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

import { projects, type Project } from "./projects";

export default function PortfolioView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <AnimatedBackground />
      <section className="relative z-10 min-h-screen px-4 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <p className="eyebrow mb-3">
              <span className="text-signal">◢</span> SELECTED WORK
            </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Things I&apos;ve built.</h1>
            <p className="mt-4 text-paper/65">
              A selection of recent projects across web, AI, and the Lawn Dart! venture —
              React, Next.js, and custom AI integrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </>
  );
}
