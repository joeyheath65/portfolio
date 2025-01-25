"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ProfileImage from "@/components/ProfileImage";

export default function About() {
  const [activeSection, setActiveSection] = useState<"about" | "expertise">("about");

  return (
    <>
      <AnimatedBackground />
      <section className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-4xl w-full mx-auto">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: activeSection === "about" ? 1 : 0, x: activeSection === "about" ? 0 : -100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "about" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Profile Image */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ProfileImage />
              </motion.div>

              {/* Content Container */}
              <div className="lg:col-span-3 relative z-10">
                {/* Animated Content */}
                <motion.div 
                  className="motion-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold mb-6 text-gradient">About Me</h1>
                    <div className="space-y-6 text-slate-300">
                      <p>
                        Hi! I&apos;m Joe Heath, a passionate IT professional specializing in networking, automation, and
                        full-stack development. I excel at creating innovative web applications with modern technologies
                        and AI integrations. My mission is to bring cutting-edge solutions to clients who might not
                        otherwise have access to them, focusing particularly on small to medium-sized businesses,
                        self-employed individuals, and non-profits.
                      </p>
                      <p>
                        My journey in tech began with developing automation scripts to enhance my own productivity.
                        These tools became essential to my daily workflow, sparking a deeper curiosity about web
                        and AI development. I&apos;ve since explored and mastered various AI technologies, including
                        OpenAI, Google Vertex AI, Anthropic, DeepSeek, and Ollama, integrating them into practical
                        business solutions.
                      </p>
                      <p>
                        I&apos;m currently accepting new clients and projects. Take a look at my portfolio to see
                        my recent work, and let&apos;s schedule a free 30-minute consultation to discuss how we can
                        transform your ideas into reality!
                      </p>
                    </div>
                  </div>

                  {/* Navigation Button */}
                  <motion.button
                    onClick={() => setActiveSection("expertise")}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Check out my Skills & Expertise →
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === "expertise" ? 1 : 0, x: activeSection === "expertise" ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "expertise" ? "block" : "hidden"}`}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.button
                  onClick={() => setActiveSection("about")}
                  className="mr-4 text-amber-200/70 hover:text-amber-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <h2 className="text-4xl font-bold text-gradient">Skills & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Core Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card-3d p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gradient">Core Technologies</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "React/Next.js",
                      "TypeScript",
                      "Node.js",
                      "Python",
                      "Tailwind CSS",
                      "MongoDB",
                      "PostgreSQL",
                      "REST APIs"
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg text-amber-200/70 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* AI & Cloud */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="card-3d p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gradient">AI & Cloud</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "OpenAI",
                      "Google Vertex AI",
                      "Anthropic",
                      "AWS",
                      "Firebase",
                      "Vercel",
                      "Docker",
                      "CI/CD"
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg text-amber-200/70 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="card-3d p-6 md:col-span-2"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gradient">Professional Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Network Engineering",
                      "System Architecture",
                      "UI/UX Design",
                      "Technical Writing",
                      "Network Security",
                      "Automation",
                      "Problem Solving",
                      "Wireless Technologies"
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg text-amber-200/70 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
