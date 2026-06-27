import type { Metadata } from "next";

import HeroSignal from "@/components/HeroSignal";

export const metadata: Metadata = {
  title: "Joe Heath — Network Engineer & Full-Stack Developer",
};

const capabilities = [
  {
    no: "01",
    title: "Network engineering",
    body: "Enterprise wireless and automation at scale — Juniper Mist, Aruba Central, Python. 500+ sites, 99.9% uptime.",
    tags: ["Juniper Mist", "Aruba Central", "Python", "Automation"],
  },
  {
    no: "02",
    title: "Full-stack build",
    body: "Production web apps end to end — React and Next.js front ends on TypeScript, Firebase, and cloud infra.",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
  },
  {
    no: "03",
    title: "AI integration",
    body: "Practical AI that ships — chatbots, function calling, and automation wired into real business workflows.",
    tags: ["OpenAI", "Anthropic", "Vertex AI", "Ollama"],
  },
];

export default function Home() {
  return (
    <>
      <HeroSignal />

      {/* Capabilities */}
      <section className="relative z-10 bg-ink px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-3">
            <span className="text-signal">◢</span> WHAT I DO
          </p>
          <h2 className="mb-12 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            One person across the whole stack — from the wire to the web app.
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.no} className="card-3d p-6">
                <span className="font-mono text-xs tracking-widest text-signal">{c.no}</span>
                <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{c.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative z-10 border-t border-[var(--line)] bg-ink px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">
            <span className="text-signal">●</span> OPEN TO WORK & COLLABORATION
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have something that needs building?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/65">
            Whether it&apos;s a network to design or an app to ship, I&apos;d like to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
            <a href="/portfolio" className="btn-signal px-6 py-3">
              See the work <span aria-hidden="true">→</span>
            </a>
            <a href="/contact" className="btn-ghost px-6 py-3">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
