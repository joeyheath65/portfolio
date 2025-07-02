"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  delay: number;
  top: number;
  left: number;
}

export default function AnimatedBackground() {
    const [staticStars, setStaticStars] = useState<Star[]>([]);
    const [shootingStars, setShootingStars] = useState<Star[]>([]);

    useEffect(() => {
    // Create static stars
        const newStaticStars = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            delay: Math.random() * 5,
            top: Math.random() * 100,
            left: Math.random() * 100,
        }));
        setStaticStars(newStaticStars);

    // Create shooting stars
        const newShootingStars = Array.from({ length: 3 }, (_, i) => ({
            id: i,
            delay: Math.random() * 5,
            top: Math.random() * 80,
            left: -20,                // -20 creates the star off screen - dont reduce this because its ugly
        }));
        setShootingStars(newShootingStars);

    // Refresh shooting stars periodically
        const interval = setInterval(() => {
            setShootingStars(prev => prev.map(star => ({
            ...star,
            delay: Math.random() * 5,
            top: Math.random() * 90,
            left: -20,                  // -20 creates the star off screen - dont reduce this because its ugly
            })));
        }, 5000);

    return () => clearInterval(interval);
        }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 space-bg">
            {/* Corona effect */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
                style={{
                background: "radial-gradient(circle at center, #0a0f1f 0%, #0d1b3a 40%, #00000000 80%)",
                filter: "blur(40px)",
                }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.06]" 
                style={{ 
                backgroundImage: "radial-gradient(circle at 1px 1px, #5624fb 1px, #0000 0)",
                backgroundSize: "60px 60px"
                }} 
            />
        
            {/* Static stars */}
            {staticStars.map((star, i) => (
                <motion.div
                  key={star.id}
                  className="absolute w-1 h-1"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    background: i % 5 === 0
                      ? "#5624fb80" // blue accent (50% opacity)
                      : "#60a5faCC" // blue accent (80% opacity)
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
            ))}
        
            {/* Shooting stars */}
            {shootingStars.map((star, i) => (
                <div
                  key={`shooting-${star.id}`}
                  className="absolute h-px w-[120px]"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    transform: "rotate(0deg)",
                    transformOrigin: "left center",
                    animation: `shooting-star 3s linear ${star.delay}s infinite`,
                  }}
                >
                  <div className={
                    i % 2 === 0
                      ? "h-px w-full bg-gradient-to-r from-[#0000] via-[#83bafc] to-[#0000] opacity-90"
                      : "h-px w-full bg-gradient-to-r from-[#0000] via-[#5624fb] to-[#0000] opacity-80"
                  } />
                </div>
            ))}
        </div>
    </div>
    );
    } 