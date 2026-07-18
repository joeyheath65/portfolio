import type { Metadata } from "next";
import Link from "next/link";

import { certifications, education, profile, skillGroups, veteranNote } from "@/data/profile";
import { socialLinks } from "@/lib/social";

import { experienceData } from "../about/experienceData";

import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Joe Heath — network engineer, full-stack developer, and founder of Lawn Dart! Systems. 20+ years across network engineering, IT leadership, and full-stack + AI development.",
  alternates: { canonical: "/resume" },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="accent mb-3 border-b rule border-[var(--line)] pb-1 font-mono text-xs uppercase tracking-[0.2em] text-signal">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <section className="relative z-10 min-h-screen px-4 pt-28 pb-20 print:min-h-0 print:px-0 print:pt-0 print:pb-0">
      {/* Print overrides: force a clean black-on-white document and tidy page margins. */}
      <style>{`
        @media print {
          @page { margin: 0.55in; }
          .resume-doc, .resume-doc * { color: #111 !important; }
          .resume-doc .rule { border-color: #cfcfcf !important; }
        }
      `}</style>

      {/* Toolbar — not part of the printed document */}
      <div className="mx-auto mb-8 flex max-w-3xl items-center justify-between print:hidden">
        <Link
          href="/about"
          className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-paper"
        >
          ← Back to about
        </Link>
        <PrintButton />
      </div>

      <div className="resume-doc mx-auto max-w-3xl print:max-w-none">
        {/* Identity */}
        <header className="rule border-b border-[var(--line)] pb-5">
          <h1 className="font-display text-4xl font-extrabold text-paper">{profile.name}</h1>
          <p className="accent mt-1 font-mono text-sm text-signal">{profile.title}</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-paper">
              {profile.email}
            </a>
            <a href={`https://${profile.site}`} className="transition-colors hover:text-paper">
              {profile.site}
            </a>
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-paper">
                {l.label}
              </a>
            ))}
          </p>
        </header>

        {/* Summary */}
        <p className="mt-6 text-sm leading-relaxed text-paper/80">{profile.summary}</p>

        {/* Experience */}
        <div className="mt-8">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-5">
            {experienceData.map((exp) => (
              <div key={exp.company + exp.jobTitle} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-bold text-paper">{exp.jobTitle}</h3>
                  <span className="font-mono text-xs text-muted">{exp.dates}</span>
                </div>
                <p className="text-sm text-paper/70">{exp.company}</p>
                <ul className="mt-2 space-y-1">
                  {exp.accomplishments.slice(0, 3).map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-paper/70">
                      <span aria-hidden="true" className="accent mt-0.5 text-signal">
                        ▸
                      </span>
                      <span>{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 break-inside-avoid">
          <SectionHeading>Skills</SectionHeading>
          <div className="space-y-1.5">
            {skillGroups.map((g) => (
              <p key={g.title} className="text-sm text-paper/70">
                <span className="font-bold text-paper">{g.title}: </span>
                {g.items.join(" · ")}
              </p>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-8 break-inside-avoid">
          <SectionHeading>Credentials</SectionHeading>
          <p className="text-sm text-paper/70">
            <span className="font-bold text-paper">Certifications: </span>
            {certifications.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-paper/70">{veteranNote}</p>
        </div>

        {/* Education */}
        <div className="mt-8 break-inside-avoid">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-3">
            {education.map((ed) => (
              <div key={ed.degree}>
                <p className="text-sm font-bold text-paper">
                  {ed.degree}
                  <span className="font-normal text-muted">
                    {" "}
                    · {ed.org} · {ed.period}
                  </span>
                </p>
                <p className="text-sm text-paper/70">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
