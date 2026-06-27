"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileImageProps {
  imageUrl?: string;
}

export default function ProfileImage({ imageUrl = "/images/profile/joeheath.webp" }: ProfileImageProps) {
  return (
    <div className="relative w-48 h-48 mx-auto lg:w-full lg:h-auto aspect-square">
      <div className="absolute inset-0 rounded-full overflow-hidden border border-[var(--line)]">
        <Image
          src={imageUrl}
          alt="Joe Heath"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 384px"
        />
      </div>
      {/* Outer signal halo */}
      <motion.div
        className="absolute -inset-3 rounded-full bg-[#4cd964] opacity-15 blur-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Ring */}
      <motion.div
        className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-br from-[#4cd964] via-[#2e8b4f] to-[#5c7b48]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
} 