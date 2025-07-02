"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProfileImage from "@/components/ProfileImage";

import { experienceData } from "./experienceData";

export default function About() {
  const [activeSection, setActiveSection] = useState<
    | "about"
    | "expertise"
    | "experience"
    | "qualifications"
    | "education"
    | "summary"
  >("about");
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

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
                    <div className="space-y-6 text-[#94a3b8]">
                    <p>
                      Hi! First off thank you for taking the time to visit! I&apos;m Joe Heath, a passionate IT professional specializing in networking, automation, and
                      full-stack development. I&apos;ve been passionate about technology since I was a kid reading MS-DOS manuals and writing GW Basic programs for fun. That curiosity about how systems work has driven my entire career.
                      After high school in 2000, I enlisted in the Army to turn my love for IT into professional expertise, and I&apos;ve been building on that foundation ever since.
                      </p>
                      <p>
                      I&apos;ve recently shifted my focus to web development and AI/ML engineering because it&apos;s exciting, and as a lifelong geek, this feels like what I imagined as a 10-year-old writing my first GW Basic programs. I excel at creating innovative web applications with modern technologies and AI integrations. My mission is to bring cutting-edge solutions to clients who might not otherwise have access to them, focusing particularly on small to medium-sized businesses, self-employed individuals, and non-profits.
                      </p>
                      <p>
                      My tech journey started with automation scripts that enhanced my productivity. These tools became essential to my daily workflow, sparking a deeper curiosity about web and AI development. I&apos;ve since explored and mastered various AI technologies, including OpenAI, Google Vertex AI, Anthropic, DeepSeek, and Ollama, integrating them into practical business solutions.
                      </p>
                    </div>
                  </div>

                  {/* Navigation Button */}
                  <motion.button
                    onClick={() => setActiveSection("expertise")}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
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
                  className="mr-4 text-[#94a3b8] hover:text-[#cbd5e1] transition-colors"
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
                        className="bg-[#334155]/50 backdrop-blur-sm px-3 py-2 rounded-lg text-[#94a3b8] text-sm"
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
                        className="bg-[#334155]/50 backdrop-blur-sm px-3 py-2 rounded-lg text-[#94a3b8] text-sm"
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
                        className="bg-[#334155]/50 backdrop-blur-sm px-3 py-2 rounded-lg text-[#94a3b8] text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.button
                onClick={() => setActiveSection("experience")}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Professional Experience →
              </motion.button>
            </div>
          </motion.div>

          {/* Professional Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === "experience" ? 1 : 0, x: activeSection === "experience" ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "experience" ? "block" : "hidden"}`}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.button
                  onClick={() => setActiveSection("expertise")}
                  className="mr-4 text-[#94a3b8] hover:text-[#cbd5e1] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <h2 className="text-4xl font-bold text-gradient">Professional Experience</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experienceData.map((exp, idx) => (
                  <ExperienceCard
                    key={exp.company + exp.jobTitle}
                    logo={exp.logo}
                    jobTitle={exp.jobTitle}
                    company={exp.company}
                    dates={exp.dates}
                    onClick={() => setSelectedExperience(idx)}
                    index={idx}
                  />
                ))}
              </div>
              <motion.button
                onClick={() => setActiveSection("qualifications")}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Qualifications →
              </motion.button>
              {/* Experience Details Modal */}
              {selectedExperience !== null && (
                <ExperienceDetails
                  isOpen={selectedExperience !== null}
                  {...experienceData[selectedExperience]}
                  onClose={() => setSelectedExperience(null)}
                />
              )}
            </div>
          </motion.div>

          {/* Qualifications Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === "qualifications" ? 1 : 0, x: activeSection === "qualifications" ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "qualifications" ? "block" : "hidden"}`}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.button
                  onClick={() => setActiveSection("experience")}
                  className="mr-4 text-[#94a3b8] hover:text-[#cbd5e1] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <h2 className="text-4xl font-bold text-gradient">Qualifications</h2>
              </div>
              <div className="mb-8 text-[#94a3b8]">
                {/* TODO: Replace with real qualifications */}
                <ul className="list-disc list-inside space-y-2">
                  <li>Certified AWS Solutions Architect</li>
                  <li>Cisco Certified Network Associate (CCNA)</li>
                  <li>CompTIA Security+</li>
                  <li>Scrum Master Certified</li>
                </ul>
              </div>
              <motion.button
                onClick={() => setActiveSection("education")}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Education →
              </motion.button>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === "education" ? 1 : 0, x: activeSection === "education" ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "education" ? "block" : "hidden"}`}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.button
                  onClick={() => setActiveSection("qualifications")}
                  className="mr-4 text-[#94a3b8] hover:text-[#cbd5e1] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <h2 className="text-4xl font-bold text-gradient">Education</h2>
              </div>
              <div className="mb-8 text-[#94a3b8]">
                {/* TODO: Replace with real education info */}
                <ul className="list-disc list-inside space-y-2">
                  <li>B.S. in Information Technology, State University</li>
                  <li>Army IT Specialist Training</li>
                </ul>
              </div>
              <motion.button
                onClick={() => setActiveSection("summary")}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Summary →
              </motion.button>
            </div>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === "summary" ? 1 : 0, x: activeSection === "summary" ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={`${activeSection === "summary" ? "block" : "hidden"}`}
          >
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-gradient mb-6">Summary</h2>
              <p className="mb-8 text-[#94a3b8]">Thank you for exploring my journey! I&apos;m always excited to connect and collaborate on new opportunities. Let&apos;s build something amazing together.</p>
              <motion.a
                href="/about"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return to Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
