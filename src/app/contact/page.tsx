import type { Metadata } from "next";

import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Joe Heath — network engineering, full-stack development, and AI integration. A network to design, an app to ship, or just a question.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
