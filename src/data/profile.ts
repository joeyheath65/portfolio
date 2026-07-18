// Shared profile data — single source of truth for the About page and the Résumé page.
// Experience/work-history lives separately in ../app/about/experienceData.ts (from the YAML).

export const profile = {
  name: "Joe Heath",
  title: "Network engineer · full-stack developer · founder of Lawn Dart! Systems",
  location: "Floresville, TX",
  email: "joseph.r.heath@gmail.com",
  site: "joeheath.com",
  summary:
    "Technology leader with 20+ years across network engineering, IT leadership, and full-stack + AI development. I design the network, then build what runs on it — from enterprise wireless and automation at retail scale to production SaaS and security-first AI. U.S. Army veteran and founder of Lawn Dart! Systems.",
};

export const skillGroups: { title: string; items: string[] }[] = [
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

export const certifications = ["Cisco CCNA", "CompTIA Security+", "SANS GIAC GSLC", "SANS GIAC GISP"];

export const highlights = [
  "20+ years across network engineering and IT",
  "15+ years leading technical teams",
  "10+ years in security, automation, and scripting",
  "U.S. Army — Sergeant First Class (E-7), Airborne; honorably retired",
];

export const veteranNote = "100% service-connected disabled veteran · veteran-owned business (SDVOSB-eligible)";

export const education: { degree: string; detail: string; org: string; period: string }[] = [
  {
    degree: "B.S. in Business Administration",
    detail: "Concentration in IT Management",
    org: "University of the Incarnate Word",
    period: "2014",
  },
  {
    degree: "U.S. Army — Information Systems & Networks",
    detail: "Information Systems Specialist (25B) & Network Switching Systems (25F); Airborne School",
    org: "United States Army",
    period: "2000 – 2010",
  },
];
