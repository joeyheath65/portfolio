import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/** Single source of truth for external profile links (used by Header, Footer, About). */
export const socialLinks: { href: string; label: string; icon: IconType }[] = [
  { href: "https://github.com/joeyheath65", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com/in/josephheath", label: "LinkedIn", icon: FaLinkedin },
];
