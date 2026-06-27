export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  longDescription?: string;
  features?: string[];
  githubLink?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    title: "Slot'd",
    description: "My flagship SaaS — service pros sell their time like inventory. Post a Slot, share the link, first to claim it books and pays.",
    tech: ["React", "Vite", "TypeScript", "Firebase", "Cloud Functions", "Stripe", "Twilio"],
    image: "/images/projects/slotd.png",
    link: "#",
    longDescription:
      "Slot'd is a multi-vertical booking + CRM SaaS and the flagship product of Lawn Dart! Systems. It flips booking on its head: instead of clients hunting through a calendar, a pro posts a \"Slot\" — a real opening with its own shareable link — and the first client to claim it books and pays instantly via Stripe. One platform replaces five: booking page, calendar, client CRM, payments, and reminders. Built mobile-first for independent service providers — barbers, trainers, lawn care, estheticians — who already promote on social and want to convert that attention into booked, paid time.",
    features: [
      "Slots — shareable, claimable units of time; first-come, paid up front via Stripe Connect",
      "Booking page, calendar, and client CRM in one platform",
      "Stripe Connect Express payouts straight to the pro's bank",
      "SMS + email reminders (Twilio / SendGrid) to cut no-shows",
      "Firebase backend — Auth, Firestore, Cloud Functions (Node 22, TypeScript)",
      "Flutter companion app for providers (iOS-first)",
    ],
    githubLink: "https://github.com/joeyheath65/slotd-app",
    liveDemo: "https://slotd.app",
  },
  {
    title: "Web Application for Little League",
    description: "A modern web application built with React and JavaScript with an OpenAI powered chatbot.",
    tech: ["JavaScript", "React", "TypeScript", "AI", "OpenAI", "Firebase"],
    image: "/images/projects/fll-home.jpg",
    link: "#",
    longDescription:
      "This project showcases the integration of modern AI capabilities with practical home town applications. It features multiple web integrations, dynamic and modular design, an authentication gateway for secure management of the page content, and live game score updates.",
    features: [
      "Real-time AI chatbot with over 1000 pages of content",
      "In page calculators",
      "Responsive and modular design",
      "Multiple 3rd party integrations (Facebook, Google Calendar, etc.)",
    ],
    githubLink: "https://github.com/joeyheath65/project1",
    liveDemo: "https://floresvillelittleleague.com",
  },
  {
    title: "Lawn Dart! Systems",
    description: "My venture — practical AI, web development, and automation for small businesses.",
    tech: ["Python", "Node.js", "Next.js", "React", "Typescript", "AI", "Firebase"],
    image: "/images/projects/lawndart.webp",
    link: "#",
    longDescription:
      "Lawn Dart! Systems is my 100% veteran-owned shop in Floresville, TX. A services division (web development, AI workflows, consulting) paired with a products division — including Haven, a privacy-first health app launching on the App Store and Google Play in July 2026.",
    features: [
      "Practical AI strategy and automation for SMBs — no upsells",
      "Modular and scalable web builds",
      "OpenAI integration with function calling",
      "Haven — privacy-first, no account, no outbound data",
      "Self-packaged for seamless integration into any website",
    ],
    githubLink: "https://github.com/joeyheath65/project2",
    liveDemo: "https://lawndart.dev",
  },
  {
    title: "Focus AI",
    description: "Consolidated management dashboard for client management and note taking.",
    tech: ["React", "OpenAI", "Typescript", "Firestore", "Tailwind", "Vite"],
    image: "/images/projects/focus.jpg",
    link: "#",
    longDescription:
      "An 'all in one' dashboard for managing clients, AI platforms, client website performance, and note taking. Also has an AI assistant to help with keeping the notes clean and readable, giving client updates, and more.",
    features: [
      "Dashboard for managing clients, AI platforms, client website performance, and note taking",
      "Multiple 3rd party integrations and function calling",
      "Advanced website analytics",
      "User collaboration tools",
      "Network and system administration tools",
    ],
    githubLink: "https://github.com/joeyheath65/project3",
    liveDemo: "https://project3-demo.com",
  },
];
