"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";

const blogPosts = [
  {
    title: "From the wire to the web app",
    excerpt: "Why 20 years of network engineering turned out to be the best possible foundation for building software.",
    date: "Coming soon",
    readTime: "—",
    tags: ["Career", "Networking", "Dev"],
    slug: "wire-to-web-app",
  },
  {
    title: "Shipping practical AI for small businesses",
    excerpt: "What 'AI that actually saves you time' looks like in practice — function calling, real workflows, no hype.",
    date: "Coming soon",
    readTime: "—",
    tags: ["AI", "OpenAI", "SMB"],
    slug: "practical-ai-smb",
  },
  {
    title: "Automating a 500-site wireless network",
    excerpt: "What it takes to run enterprise Wi-Fi with Python, Juniper Mist, and Aruba Central — and where automation actually pays off.",
    date: "Coming soon",
    readTime: "—",
    tags: ["Networking", "Automation", "Python"],
    slug: "automating-wireless-at-scale",
  },
];

export default function Blog() {
  return (
    <>
      <AnimatedBackground />
      <section className="relative z-10 min-h-screen px-4 pt-28 pb-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <p className="eyebrow mb-3">
              <span className="text-signal">◢</span> WRITING
            </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Notes &amp; field reports.</h1>
            <p className="mt-4 text-paper/65">
              Thoughts on networking, building software, and shipping practical AI. First posts landing soon.
            </p>
          </motion.div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-3d p-6"
              >
                <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  <span className="text-signal">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-paper">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
