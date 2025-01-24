"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileImageProps {
  imageUrl?: string;
}

export default function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <div className="relative w-48 h-48 mx-auto lg:w-full lg:h-auto aspect-square">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 384px"
          />
        ) : (
          <div className="w-full h-full bg-[#0a0a0f] border-[6px] border-[#0a0a0f]">
            <div className="w-full h-full flex items-center justify-center text-amber-300 text-6xl font-bold">
              JH
            </div>
          </div>
        )}
      </div>
      {/* Corona effect */}
      <motion.div
        className="absolute -inset-3 rounded-full opacity-20 blur-xl bg-amber-400"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Inner glow */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 opacity-20 blur-sm"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 