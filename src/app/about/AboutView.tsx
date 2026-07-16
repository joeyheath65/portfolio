"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProfileImage from "@/components/ProfileImage";

import { experienceData } from "./experienceData";

type Section = "about" | "expertise" | "experience" | "qualifications" | "education" | "summary";

const skillGroups = {
  core: ["React/Next.js", "TypeScript", "Node.js", "Python", "Tailwind CSS", "JavaScript", "HTML", "Firebase", "PostgreSQL", "REST APIs"],
  ai: ["OpenAI", "Google Vertex AI", "Anthropic", "AWS", "Firebase", "Vercel", "Docker", "CI/CD"],
  pro: ["Network Engineering", "System Architecture", "UI/UX Design", "Technical Writing", "Network Security", "Automation", "Problem Solving", "Wireless Technologies"],
};

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded border border-[var(--line)] bg-panel px-3 py-2 text-sm text-paper/75">
      {label}
    </span>
  );
}

function NextButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="btn-signal mt-8 px-6 py-3 font-mono text-sm">
      {children}
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mr-4 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-paper"
    >
      ← Back
    </button>
  );
}

export default function AboutView() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <>
      <AnimatedBackground />
      <section className="relative z-10 min-h-screen px-4 pt-28 pb-20">
        <div className="mx-auto max-w-4xl">
          {/* About */}
          <div className={activeSection === "about" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ProfileImage />
              </motion.div>

              <motion.div
                className="motion-content lg:col-span-3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="eyebrow mb-3">
                  <span className="text-signal">◢</span> ABOUT
                </p>
                <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl">Joe Heath</h1>
                <div className="space-y-5 text-paper/70">
                  <p>
                    Hi! First off, thank you for taking the time to visit. I&apos;m Joe Heath, an IT
                    professional specializing in networking, automation, and full-stack development.
                    I&apos;ve been hooked on technology since I was a kid reading MS-DOS manuals and
                    writing GW-BASIC programs for fun. That curiosity about how systems work has driven
                    my entire career. After high school in 2000, I enlisted in the Army to turn my love
                    for IT into professional expertise, and I&apos;ve been building on that foundation
                    ever since.
                  </p>
                  <p>
                    I&apos;ve recently shifted my focus toward web development and AI/ML engineering —
                    it&apos;s exciting, and as a lifelong geek it feels like what I imagined as a
                    10-year-old writing my first programs. My mission is to bring cutting-edge solutions
                    to clients who might not otherwise have access to them: small and medium-sized
                    businesses, self-employed individuals, and non-profits.
                  </p>
                  <p>
                    My journey started with automation scripts that made me faster. Those tools became
                    essential, sparking a deeper curiosity about web and AI development. I&apos;ve since
                    worked hands-on with OpenAI, Google Vertex AI, Anthropic, DeepSeek, and Ollama,
                    integrating them into practical business solutions.
                  </p>
                </div>
                <NextButton onClick={() => setActiveSection("expertise")}>Skills &amp; expertise →</NextButton>
              </motion.div>
            </div>
          </div>

          {/* Expertise */}
          <div className={activeSection === "expertise" ? "block" : "hidden"}>
            <div className="mb-8 flex items-center">
              <BackButton onClick={() => setActiveSection("about")} />
              <h2 className="text-3xl font-extrabold sm:text-4xl">Skills &amp; expertise</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="card-3d p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">Core technologies</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {skillGroups.core.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>

              <div className="card-3d p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">AI &amp; cloud</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {skillGroups.ai.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>

              <div className="card-3d p-6 md:col-span-2">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">Professional skills</h3>
                <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                  {skillGroups.pro.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>
            </div>
            <NextButton onClick={() => setActiveSection("experience")}>Professional experience →</NextButton>
          </div>

          {/* Experience */}
          <div className={activeSection === "experience" ? "block" : "hidden"}>
            <div className="mb-8 flex items-center">
              <BackButton onClick={() => setActiveSection("expertise")} />
              <h2 className="text-3xl font-extrabold sm:text-4xl">Experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <NextButton onClick={() => setActiveSection("qualifications")}>Qualifications →</NextButton>
            {selectedExperience !== null && (
              <ExperienceDetails
                isOpen={selectedExperience !== null}
                {...experienceData[selectedExperience]}
                onClose={() => setSelectedExperience(null)}
              />
            )}
          </div>

          {/* Qualifications */}
          <div className={activeSection === "qualifications" ? "block" : "hidden"}>
            <div className="mb-8 flex items-center">
              <BackButton onClick={() => setActiveSection("experience")} />
              <h2 className="text-3xl font-extrabold sm:text-4xl">Qualifications</h2>
            </div>
            <ul className="mb-8 space-y-2.5 text-paper/70">
              {[
                "20+ years of IT experience",
                "20+ years of Network Engineering experience",
                "15+ years of IT Leadership experience",
                "10+ years of System Administration experience",
                "10+ years of IT Security experience",
                "10+ years of IT Automation experience",
                "10+ years of Scripting & Coding experience",
                "10 years of Military Service (US Army)",
                "Cisco Certified Network Associate (CCNA)",
                "CompTIA Security+",
                "SANS GSLC & GISP",
              ].map((q) => (
                <li key={q} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 text-signal">▸</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <NextButton onClick={() => setActiveSection("education")}>Education →</NextButton>
          </div>

          {/* Education */}
          <div className={activeSection === "education" ? "block" : "hidden"}>
            <div className="mb-8 flex items-center">
              <BackButton onClick={() => setActiveSection("qualifications")} />
              <h2 className="text-3xl font-extrabold sm:text-4xl">Education</h2>
            </div>
            <ul className="mb-8 space-y-2.5 text-paper/70">
              {["B.S. in Information Technology", "U.S. Army IT Specialist Training"].map((e) => (
                <li key={e} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 text-signal">▸</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <NextButton onClick={() => setActiveSection("summary")}>Summary →</NextButton>
          </div>

          {/* Summary */}
          <div className={activeSection === "summary" ? "block" : "hidden"}>
            <div className="mb-8 flex items-center">
              <BackButton onClick={() => setActiveSection("education")} />
              <h2 className="text-3xl font-extrabold sm:text-4xl">Summary</h2>
            </div>
            <p className="mb-8 max-w-2xl text-paper/70">
              Thanks for exploring my journey. I&apos;m always up for connecting and collaborating on
              new opportunities — from the wire to the web app. Let&apos;s build something.
            </p>
            <Link href="/contact" className="btn-signal px-6 py-3 font-mono text-sm">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
