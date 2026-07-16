import type { Metadata } from "next";

import BlogView from "./BlogView";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes and field reports from Joe Heath on networking, building software, and shipping practical AI.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogView />;
}
