import { readFile } from "node:fs/promises";
import path from "node:path";

import type { Metadata } from "next";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Easter egg. Deliberately unlinked: not in the nav, sitemap, robots.ts or
// any llms.txt. Crawlers are turned away by the noindex metadata below and the
// X-Robots-Tag header in next.config.ts. Don't add a robots.txt Disallow for
// it — that would advertise the path and stop crawlers from seeing noindex.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "The Joe Code",
  description: null,
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
};

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-16 mb-6 border-b border-[var(--line)] pb-3 font-display text-3xl font-extrabold text-paper first:mt-0 md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 font-mono text-sm uppercase tracking-[0.2em] text-signal">{children}</h2>
  ),
  h3: ({ children }) => <h3 className="mt-8 mb-3 text-lg font-bold text-paper">{children}</h3>,
  p: ({ children }) => <p className="my-3 whitespace-pre-line leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-paper">{children}</strong>,
  em: ({ children }) => <em className="text-muted">{children}</em>,
  hr: () => <hr className="my-10 border-[var(--line)]" />,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-signal pl-4 font-mono text-signal">{children}</blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse font-mono text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-[var(--line)] px-3 py-2 text-left text-xs uppercase tracking-wider text-muted">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border-b border-[var(--line)] px-3 py-2 align-top">{children}</td>,
};

export default async function JoeCodePage() {
  const source = await readFile(path.join(process.cwd(), "src/app/legal/joe_code/joe-code.md"), "utf8");

  return (
    <section className="relative z-10 min-h-screen px-4 pt-28 pb-20">
      <article className="card-3d mx-auto max-w-3xl p-6 md:p-10">
        <p className="eyebrow mb-6">Office of the Party · Codified Law</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {source}
        </ReactMarkdown>
      </article>
    </section>
  );
}
