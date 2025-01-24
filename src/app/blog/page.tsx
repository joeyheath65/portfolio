"use client";

import { motion } from "framer-motion";

import AnimatedBackground from "@/components/AnimatedBackground";

const blogPosts = [
  {
    title: "Getting Started with AI Integration in Next.js",
    excerpt: "Learn how to integrate modern AI capabilities into your Next.js applications for enhanced user experiences.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "AI", "Tutorial"],
    slug: "ai-integration-nextjs"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Discover the power of Tailwind CSS for creating beautiful, responsive layouts quickly and efficiently.",
    date: "March 10, 2024",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "Frontend"],
    slug: "responsive-tailwind-layouts"
  },
  {
    title: "Modern State Management in React",
    excerpt: "Explore different approaches to state management in React applications and when to use each one.",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["React", "State Management", "Frontend"],
    slug: "react-state-management"
  }
];

export default function Blog() {
  return (
    <>
      <AnimatedBackground />
      <section className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-gradient">Blog</h1>
            <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
              Insights and tutorials on web development, React, AI, and more.
            </p>
          </motion.div>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card-3d group"
              >
                <div className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between text-sm text-amber-200/50">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-gradient">
                      {post.title}
                    </h2>
                    
                    <p className="text-amber-100/70">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-200/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={`/blog/${post.slug}`}
                        className="text-amber-400 hover:text-amber-300 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 