export interface ExperienceData {
  logo: string;
  jobTitle: string;
  company: string;
  dates: string;
  duties: string[];
  accomplishments: { text: string; link?: string }[];
  technology: string[];
  reflection: string;
}

export const experienceData: ExperienceData[] = [
  {
    logo: "/images/profile/heb.png",
    jobTitle: "Manager, Wireless Network Engineering",
    company: "H-E-B",
    dates: "Aug 2023 - Present",
    duties: [
      "Lead team of 6 network engineers in implementing network automation solutions using Python scripting, Juniper Mist and Aruba Central cloud management, reducing manual configuration tasks by 30% and ensuring consistent deployment standards.",
      "Architect and deploy enterprise wireless infrastructure across 500+ retail, warehouse, and corporate facilities using Juniper Mist AI-driven platform and Aruba wireless controllers, supporting mission-critical retail operations including POS, inventory management, and customer applications.",
      "Collaborate with Enterprise Architecture teams to develop long-term wireless strategy, including WiFi 6E roadmap, IoT device integration, and edge computing infrastructure to support emerging retail technologies.",
      "Manage vendor relationships with Juniper, Aruba, and system integrators while overseeing $5M annual wireless infrastructure budget and ensuring 99.9% network uptime across all locations."
    ],
    accomplishments: [
      { text: "Developed Python automation framework for Juniper Mist, improving troubleshooting and visibility capabilities." },
      { text: "Led wireless modernization across 350+ retail locations with Juniper Mist AI, reducing wireless network incidents by 60%." }
    ],
    technology: ["Juniper Mist", "Aruba Central", "Python", "AWS", "Docker", "TypeScript"],
    reflection: "This role challenged me to grow as a leader and technologist, balancing technical depth with team mentorship."
  },
  {
    logo: "/images/profile/amazon.png",
    jobTitle: "Regional IT Manager",
    company: "Amazon",
    dates: "Feb 2021 - Aug 2023",
    duties: [
      "Lead a team of 10 direct reporting IT Managers and 150 indirect reporting Engineers and Technicians, overseeing critical IT infrastructure support and maintenance for more than 20 Amazon Fulfillment Centers across the region.",
      "Initiate projects leveraging image recognition and automation to identify and respond to anomalies using existing security camera infrastructure within Amazon facilities.",
      "Achieve 98% SLA attainment through data analysis, trend identification, and the delivery of high-quality enterprise infrastructure."
    ],
    accomplishments: [
      { text: "Pioneered computer vision projects using existing camera infrastructure for operational anomaly detection, reducing manual monitoring overhead by 40%." },
      { text: "Maintained 98% SLA across 100,000+ users through predictive analytics and proactive infrastructure scaling." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Grafana"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/amazon.png",
    jobTitle: "IT Manager",
    company: "Amazon",
    dates: "Jan 2018 - Feb 2021",
    duties: [
      "IT Manager supporting operations in 9 Fulfilment Centers spanning from San Antonio through Austin; Promoted to Regional IT Manager in February 2021.",
      "Integrated monitoring tools with custom dashboards.",
      "Collaborated with cross-functional teams to improve uptime."
    ],
    accomplishments: [
      { text: "Contribute to Amazon's military hiring partnerships, supporting military veterans through training, networking, and a smooth transition into Amazon's workforce." },
      { text: "Improved network reliability by 25%." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Grafana"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/hc.png",
    jobTitle: "Network Engineering Manager",
    company: "Harland Clarke",
    dates: "Jan 2015 - Jan 2018",
    duties: [
      "Led a team of nine network engineers.",
      "Headed security operations and administration of the enterprise LAN/WAN/WLAN network for a global financial services provider with more than 12,000 clients and managed a team of nine network engineers providing 24/7 Tier 2 and 3 support. ",
      "Collaborated with cross-functional teams to improve uptime."
    ],
    accomplishments: [
      { text: "Implemented Cisco Application Centric Infrastructure (ACI) and Identity Services (ISE) to modernize data center operations and enhance network access controls." },
      { text: "Revamped the network architecture for a facility with a 20G LAN backbone, redundant WAN, and shared infrastructure with custom security requirements." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Cisco ISE","ACI"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/dha.png",
    jobTitle: "Network Operations Manager",
    company: "Defense Health Agency",
    dates: "Sep 2011 - Dec 2014",
    duties: [
      "Developed automation scripts for network device management.",
      "Integrated monitoring tools with custom dashboards.",
      "Collaborated with cross-functional teams to improve uptime."
    ],
    accomplishments: [
      { text: "Automated 80% of manual network tasks." },
      { text: "Improved network reliability by 25%." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Grafana"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/usamitc.webp",
    jobTitle: "Senior Network Deployment Engineer",
    company: "US Army Medical IT Center",
    dates: "Mar 2010 - Sep 2011",
    duties: [
      "Developed automation scripts for network device management.",
      "Integrated monitoring tools with custom dashboards.",
      "Collaborated with cross-functional teams to improve uptime."
    ],
    accomplishments: [
      { text: "Automated 80% of manual network tasks." },
      { text: "Improved network reliability by 25%." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Grafana"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/usarmy.webp",
    jobTitle: "Information Systems Specialist - Sergeant First Class",
    company: "United States Army",
    dates: "Nov 2000 - Mar 2010",
    duties: [
      "Developed automation scripts for network device management.",
      "Integrated monitoring tools with custom dashboards.",
      "Collaborated with cross-functional teams to improve uptime."
    ],
    accomplishments: [
      { text: "Automated 80% of manual network tasks." },
      { text: "Improved network reliability by 25%." }
    ],
    technology: ["Python", "Ansible", "Cisco", "Grafana"],
    reflection: "I learned the value of automation in reducing errors and freeing up time for innovation."
  },
  {
    logo: "/images/profile/lawndart.webp",
    jobTitle: "Founder & Principal Engineer",
    company: "Lawn Dart Systems, LLC",
    dates: "Jun 2024 - Present",
    duties: [
      "Founded and run a 100% veteran-owned software company in Floresville, TX, operating across two divisions: a services arm (web development, AI workflows, consulting) and a products arm.",
      "Designed and built Slot'd, the flagship booking + CRM SaaS — full stack, from Firebase backend and Stripe Connect payments to the React web apps and Flutter companion.",
      "Deliver practical AI strategy, development, and automation for small businesses — no upsells, just the work that saves clients time.",
      "Own every layer end to end: architecture, build, deployment, payments, compliance, and client relationships."
    ],
    accomplishments: [
      { text: "Shipped Slot'd to live beta — service pros sell their time as shareable, claimable Slots.", link: "https://slotd.app" },
      { text: "Deliver web, mobile, and network/workflow automation for small businesses across South & Central Texas." },
      { text: "Established the company as a registered Texas LLC with a full brand and product roadmap.", link: "https://lawndart.dev" }
    ],
    technology: ["Next.js", "React", "TypeScript", "Firebase", "Stripe", "Flutter", "OpenAI"],
    reflection: "Lawn Dart! Systems is where the network engineer, the developer, and the builder all come together — my own company, shipping real products to real users."
  }
]; 