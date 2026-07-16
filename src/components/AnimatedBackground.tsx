"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedBackground — ambient network field used behind interior pages.
 * A loose node/link topology with packets drifting along the links in
 * signal-green. Calmer than the homepage hero (no "lawn dart" flight).
 * Fixed, non-interactive, and behind page content.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const SIGNAL = "#4cd964";

    let W = 0;
    let H = 0;
    let raf = 0;

    type Node = { x: number; y: number; r: number; tw: number; phase: number };
    type Link = { a: number; b: number };
    type Packet = { link: number; t: number; speed: number };

    let nodes: Node[] = [];
    let links: Link[] = [];
    let packets: Packet[] = [];

    function build() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = Math.floor(W * dpr);
      canvas!.height = Math.floor(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.max(5, Math.round(W / 160));
      const rows = Math.max(4, Math.round(H / 160));
      nodes = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.32) continue;
          nodes.push({
            x: ((i + 0.5) / cols) * W + (Math.random() - 0.5) * 80,
            y: ((j + 0.5) / rows) * H + (Math.random() - 0.5) * 80,
            r: Math.random() * 1.3 + 0.9,
            tw: Math.random() * 2 + 1.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      links = [];
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
          if (d < 190 && Math.random() < 0.38) links.push({ a, b });
        }
      }

      packets = links
        .slice(0, Math.min(links.length, 12))
        .map((_, link) => ({ link, t: Math.random(), speed: 0.0012 + Math.random() * 0.002 }));
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, W, H);

      ctx!.lineWidth = 1;
      ctx!.strokeStyle = "rgba(76, 217, 100, 0.08)";
      for (const l of links) {
        const a = nodes[l.a];
        const b = nodes[l.b];
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      for (const n of nodes) {
        const tw = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin((now / 1000) * n.tw + n.phase));
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(150, 172, 198, ${0.32 * tw})`;
        ctx!.fill();
      }

      if (!reduce) {
        for (const p of packets) {
          p.t += p.speed;
          if (p.t > 1) p.t -= 1;
          const l = links[p.link];
          if (!l) continue;
          const a = nodes[l.a];
          const b = nodes[l.b];
          ctx!.beginPath();
          ctx!.arc(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = SIGNAL;
          ctx!.globalAlpha = 0.7;
          ctx!.fill();
          ctx!.globalAlpha = 1;
        }
      }

      // Under reduced-motion, render a single static frame and stop — don't
      // keep repainting at 60fps forever.
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    build();
    raf = requestAnimationFrame(draw);

    const onResize = () => build();
    // Pause the loop while the tab is hidden; resume on return.
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(draw);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(4,7,13,0.55) 100%)",
        }}
      />
    </div>
  );
}
