"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "Youth Sports Page",
    description: "A modern web application built with React and JavaScript with an OpenAI powered chatbot.",
    tech: ["JavaScript", "React", "TypeScript", "AI", "OpenAI", "Firebase"],
    image: "/images/projects/fll-home.jpg",
    link: "#",
    longDescription: "This project showcases the integration of modern AI capabilities with practical home town applications. It features real-time processing, dynamic and modular design, an authentication gateway for secure management of the page content, and live game score updates.",
    features: [
      "Real-time AI chat modal with over 1000 pages of content",
      "In page calculators",
      "Responsive and modular design",
      "Multiple 3rd party integrations (Facebook, Google Calendar, etc.)"
    ],
    githubLink: "https://github.com/joeyheath65/project1",
    liveDemo: "https://floresvillelittleleague.com"
  },
  {
    title: "CheckSwingAI",
    description: "AI powered chatbot modal to answer questions about the came and local league.",
    tech: ["Python", "Node.js", "React", "Typescript","Vercel"],
    image: "/images/projects/fll-checksw.jpg",
    link: "#",
    longDescription: "A convenient modal that allows users to ask questions about the league and get answers in seconds. Also can explain rules and regulations of the game, interpret complex game situations and offer a ruling as an umpire would.",
    features: [
      "AI chat modal with over 1000 pages of content",
      "Modular and scalable design",
      "OpenAI integration",
      "Function calling abilities",
      "Easy to use and deploy! Self packaged for seamless integration into any website"
    ],
    githubLink: "https://github.com/joeyheath65/project2",
    liveDemo: "https://checkswingai.abetivedigital.com"
  },
  {
    title: "Focus AI",
    description: "Consolidated management dashboard for client management and note taking.",
    tech: ["React", "OpenAI", "Typescript", "Firestore", "Tailwind", "Vite"],
    image: "/images/projects/focus.jpg",
    link: "#",
    longDescription: "An 'all in one' dashboard for managing clients, AI platforms, client website performance, and note taking. Also has an AI assistant to help with keeping the notes clean and readable, giving client updates, and more.",
    features: [
      "Dashboard for managing clients, AI platforms, client website performance, and note taking",
      "Multiple 3rd party integrations and function calling",
      "Advanced website analytics",
      "User collaboration tools",
      "Network and system administration tools"
    ],
    githubLink: "https://github.com/joeyheath65/project3",
    liveDemo: "https://project3-demo.com"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <AnimatedBackground />
      <section className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-6xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-gradient">Portfolio</h1>
            <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
              Or should we say, 'Joe-folio'? No ?
              Explore a selection of my recent projects, showcasing expertise in 
              React, Next.js, creative innovation, and custom use AI integrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        project={selectedProject || projects[0]} // Fallback to prevent null
      />
    </>
  );
}
