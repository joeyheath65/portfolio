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
      "Managed a team of 10+ network engineers.",
      "Led the design and implementation of new wireless network infrastructure.",
      "Managed the deployment of new wireless network equipment.",
      "Managed the maintenance of existing wireless network equipment.",
      "Managed the troubleshooting of wireless network issues.",
      "Managed the training of new wireless network engineers.",
      "Managed the documentation of wireless network procedures.",
      "Managed the compliance of wireless network policies.",
      "Managed the security of wireless network equipment."
    ],
    accomplishments: [
      { text: "Reduced deployment times by 40% through CI/CD automation." },
      { text: "Launched 3 major client projects on time and under budget." }
    ],
    technology: ["React", "Next.js", "AWS", "Docker", "TypeScript"],
    reflection: "This role challenged me to grow as a leader and architect, balancing technical depth with team mentorship."
  },
  {
    logo: "/images/profile/amazon.png",
    jobTitle: "Regional IT Manager",
    company: "Amazon",
    dates: "Feb 2021 - Aug 2023",
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
    logo: "/images/profile/amazon.png",
    jobTitle: "IT Manager",
    company: "Amazon",
    dates: "Jan 2018 - Feb 2021",
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
    logo: "/images/profile/hc.png",
    jobTitle: "Network Engineering Manager",
    company: "Harland Clarke",
    dates: "Jan 2015 - Jan 2018",
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
    jobTitle: "Owner and Principal Engineer",
    company: "Lawn Dart Development",
    dates: "Jun 2024 - Present",
    duties: [
      "Anything and everything! Currently a one man shop.",
      "Developing full stack and AI/ML applications.",
      "Helping clients realize their vision through technology."
    ],
    accomplishments: [
      { text: "Biggest accomplishment is the fact I took the first step!" },
      { text: "Check out https://lawndart.dev for more information.", link: "https://lawndart.dev" }
    ],
    technology: ["React", "Next.js", "Google Cloud", "Docker", "TypeScript"],
    reflection: "Lawn Dart Development is my current side venture. I'm a one man shop that builds web applications for small businesses and non-profits."
  }
]; 