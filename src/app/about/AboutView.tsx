"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import AnimatedBackground from "@/components/AnimatedBackground";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProfileImage from "@/components/ProfileImage";
import { socialLinks } from "@/lib/social";

import { experienceData } from "./experienceData";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "education", label: "Education" },
] as const;

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Development",
    items: ["React / Next.js", "TypeScript", "Node.js", "Python", "Tailwind CSS", "Firebase", "PostgreSQL", "Stripe", "REST APIs"],
  },
  {
    title: "AI & cloud",
    items: ["Anthropic Claude", "OpenAI", "Vertex AI", "MCP / agents", "RAG", "AWS", "GCP", "Docker", "CI/CD"],
  },
  {
    title: "Networking & security",
    items: ["Network engineering", "Network security", "Wireless (Mist / Aruba)", "Automation & IaC", "SD-WAN / NAC", "System architecture", "Technical writing", "Team leadership"],
  },
];

const certifications = ["Cisco CCNA", "CompTIA Security+", "SANS GIAC GSLC", "SANS GIAC GISP"];

const highlights = [
  "20+ years across network engineering and IT",
  "15+ years leading technical teams",
  "10+ years in security, automation, and scripting",
  "U.S. Army — Sergeant First Class (E-7), Airborne; honorably retired",
];

/** Sticky "signal index" — a live-tracking section nav that echoes the header's green go-signal. */
function SignalIndex({ active }: { active: string }) {
  return (
    <nav aria-label="Page sections" className="hidden lg:block">
      <div className="sticky top-28">
        <p className="eyebrow mb-5">
          <span className="text-signal">◢</span> Index
        </p>
        <ul className="space-y-1 border-l border-[var(--line)]">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group -ml-px flex items-center gap-3 border-l-2 py-1.5 pl-4 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "border-signal text-signal"
                      : "border-transparent text-muted hover:border-[var(--line)] hover:text-paper"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all ${
                      isActive ? "bg-signal shadow-[0_0_10px_1px_rgba(76,217,100,0.8)]" : "bg-muted/40 group-hover:bg-paper/60"
                    }`}
                  />
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default function AboutView() {
  const [active, setActive] = useState<string>("about");
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  // Scroll-spy: light up the index entry for whichever section holds the upper viewport band.
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth anchor jumps, unless the visitor prefers reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      <section className="relative z-10 min-h-screen px-4 pt-28 pb-24">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
          <SignalIndex active={active} />

          <div className="motion-content max-w-3xl space-y-24">
            {/* About */}
            <section id="about" className="scroll-mt-28">
              <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-5">
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProfileImage />
                </motion.div>

                <motion.div
                  className="sm:col-span-3"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <p className="eyebrow mb-3">
                    <span className="text-signal">◢</span> About
                  </p>
                  <h1 className="mb-2 text-4xl font-extrabold sm:text-5xl">Joe Heath</h1>
                  <p className="mb-6 font-mono text-sm text-muted">
                    Network engineer · full-stack developer · founder of Lawn Dart! Systems
                  </p>
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
                </motion.div>
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-28">
              <p className="eyebrow mb-3">
                <span className="text-signal">◢</span> Skills &amp; expertise
              </p>
              <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">From the wire to the web app</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {skillGroups.map((group, i) => (
                  <div key={group.title} className={`card-3d p-6 ${i === 2 ? "md:col-span-2" : ""}`}>
                    <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="scroll-mt-28">
              <p className="eyebrow mb-3">
                <span className="text-signal">◢</span> Experience
              </p>
              <h2 className="mb-2 text-3xl font-extrabold sm:text-4xl">Where I&apos;ve built</h2>
              <p className="mb-8 text-sm text-muted">Select a role for the full detail.</p>
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
            </section>

            {/* Credentials */}
            <section id="credentials" className="scroll-mt-28">
              <p className="eyebrow mb-3">
                <span className="text-signal">◢</span> Credentials
              </p>
              <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">Credentials</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="card-3d p-6">
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">Experience at a glance</h3>
                  <ul className="space-y-2.5 text-sm text-paper/70">
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-1 text-signal">
                          ▸
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-3d p-6">
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">Certifications</h3>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {certifications.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="border-t border-[var(--line)] pt-4 font-mono text-xs leading-relaxed text-muted">
                    <span className="text-signal">◢</span> 100% service-connected disabled veteran ·
                    veteran-owned business (SDVOSB-eligible)
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="scroll-mt-28">
              <p className="eyebrow mb-3">
                <span className="text-signal">◢</span> Education
              </p>
              <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">Foundations</h2>
              <div className="space-y-4">
                <div className="card-3d p-6">
                  <h3 className="text-base font-bold text-paper">B.S. in Business Administration</h3>
                  <p className="mt-1 text-sm text-paper/70">Concentration in IT Management</p>
                  <p className="mt-2 font-mono text-xs tracking-wide text-muted">University of the Incarnate Word · 2014</p>
                </div>
                <div className="card-3d p-6">
                  <h3 className="text-base font-bold text-paper">U.S. Army — Information Systems &amp; Networks</h3>
                  <p className="mt-1 text-sm text-paper/70">
                    Information Systems Specialist (25B) &amp; Network Switching Systems (25F); Airborne School
                  </p>
                  <p className="mt-2 font-mono text-xs tracking-wide text-muted">2000 – 2010</p>
                </div>
              </div>
            </section>

            {/* Connect */}
            <div className="border-t border-[var(--line)] pt-10">
              <p className="max-w-2xl text-paper/70">
                Thanks for scrolling. From the wire to the web app — always happy to connect and trade notes.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-ghost px-6 py-3 font-mono text-sm">
                  Get in touch →
                </Link>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="text-muted transition-colors hover:text-signal"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedExperience !== null && (
        <ExperienceDetails
          isOpen={selectedExperience !== null}
          {...experienceData[selectedExperience]}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </>
  );
}
