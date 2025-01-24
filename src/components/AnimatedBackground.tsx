"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random();
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 2 + 2;
      
      return { id, x, y, size, duration };
    };

    const addStar = () => {
      setStars(prev => [...prev, createStar()]);
      setTimeout(() => {
        setStars(prev => prev.slice(1));
      }, 3000);
    };

    const interval = setInterval(() => {
      if (stars.length < 5) {
        addStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [stars]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
               backgroundSize: "50px 50px"
             }} 
        />
        
        {/* Animated stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute h-px w-[100px] rotate-[35deg]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `shooting-star ${star.duration}s linear forwards`
            }}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
} 