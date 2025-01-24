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
                background: "radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
                }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                backgroundImage: "radial-gradient(circle at 1px 1px, rgb(251, 191, 36) 1px, transparent 0)",
                backgroundSize: "50px 50px"
                }} 
            />
        
            {/* Static stars */}
            {staticStars.map((star) => (
                <motion.div
                key={star.id}
                className="absolute w-1 h-1 bg-amber-200/80"
                style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                }}
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1, 0.8],
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
            {shootingStars.map(star => (
                <div
                key={`shooting-${star.id}`}
                className="absolute h-px w-[100px]"
                style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    transform: "rotate(0deg)",
                    transformOrigin: "left center",
                    animation: `shooting-star 3s linear ${star.delay}s infinite`,
                }}
                >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
            </div>
        ))}
        </div>
    </div>
    );
    } 