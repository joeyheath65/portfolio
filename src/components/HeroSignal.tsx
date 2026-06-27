"use client";

import { useEffect, useRef } from "react";

/**
 * HeroSignal — prototype hero for Joe Heath's portfolio.
 * Blends the network-engineering (topology / signal) world with the
 * Lawn Dart! identity (military precision, the green "go" signal, the "!").
 *
 * The ambient canvas draws a loose node/link topology. On load a single
 * "lawn dart" packet launches from the lower-left, arcs across the field,
 * and lands on a target node — establishing a route that pulses signal-green.
 * Content reveal is driven by CSS (always shows, even if canvas/JS is absent).
 */
export default function HeroSignal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const SIGNAL = "#4CD964";
    const LINE = "rgba(76, 217, 100, 0.16)";

    let W = 0;
    let H = 0;
    let raf = 0;
    let start = performance.now();

    type Node = { x: number; y: number; r: number; tw: number; phase: number };
    type Link = { a: number; b: number };
    type Packet = { link: number; t: number; speed: number };

    let nodes: Node[] = [];
    let links: Link[] = [];
    let packets: Packet[] = [];
    let target = { x: 0, y: 0 };

    function build() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = Math.floor(W * dpr);
      canvas!.height = Math.floor(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.max(6, Math.round(W / 130));
      const rows = Math.max(4, Math.round(H / 130));
      nodes = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.28) continue; // sparse, organic gaps
          nodes.push({
            x: ((i + 0.5) / cols) * W + (Math.random() - 0.5) * 70,
            y: ((j + 0.5) / rows) * H + (Math.random() - 0.5) * 70,
            r: Math.random() * 1.4 + 1,
            tw: Math.random() * 2 + 1.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      links = [];
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
          if (d < 165 && Math.random() < 0.42) links.push({ a, b });
        }
      }

      packets = links
        .slice(0, Math.min(links.length, 14))
        .map((_, link) => ({ link, t: Math.random(), speed: 0.0016 + Math.random() * 0.0026 }));

      // Target node: upper-right quadrant, where the headline's "." sits.
      target = { x: W * 0.74, y: H * 0.34 };
      start = performance.now();
    }

    function draw(now: number) {
      const t = now - start;
      ctx!.clearRect(0, 0, W, H);

      // links
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = LINE;
      for (const l of links) {
        const a = nodes[l.a];
        const b = nodes[l.b];
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      // nodes (twinkle) — brighter on the right half where there's no text
      for (const n of nodes) {
        const tw = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin((now / 1000) * n.tw + n.phase));
        const side = 0.4 + 0.6 * Math.min(1, n.x / W); // fade up toward the right
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(190, 208, 228, ${0.55 * tw * side})`;
        ctx!.fill();
      }

      // ambient packets travelling links (green)
      if (!reduce) {
        for (const p of packets) {
          p.t += p.speed;
          if (p.t > 1) p.t -= 1;
          const l = links[p.link];
          if (!l) continue;
          const a = nodes[l.a];
          const b = nodes[l.b];
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          ctx!.beginPath();
          ctx!.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx!.fillStyle = SIGNAL;
          ctx!.globalAlpha = 0.85;
          ctx!.fill();
          ctx!.globalAlpha = 1;
        }
      }

      // the "lawn dart" — launches once, lands on target, then pulses
      const FLIGHT = 1500; // ms
      const launch = { x: -40, y: H + 40 };
      if (!reduce && t < FLIGHT) {
        const k = t / FLIGHT;
        const e = 1 - Math.pow(1 - k, 3); // easeOutCubic
        // parabolic arc (lifts above the straight line then drops onto target)
        const x = launch.x + (target.x - launch.x) * e;
        const y = launch.y + (target.y - launch.y) * e - Math.sin(e * Math.PI) * H * 0.22;

        // trail
        ctx!.beginPath();
        ctx!.moveTo(launch.x, launch.y);
        for (let s = 0; s <= e; s += 0.02) {
          const tx = launch.x + (target.x - launch.x) * s;
          const ty = launch.y + (target.y - launch.y) * s - Math.sin(s * Math.PI) * H * 0.22;
          ctx!.lineTo(tx, ty);
        }
        ctx!.strokeStyle = "rgba(76, 217, 100, 0.35)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // dart head
        ctx!.beginPath();
        ctx!.arc(x, y, 3, 0, Math.PI * 2);
        ctx!.fillStyle = SIGNAL;
        ctx!.fill();
      } else {
        // landed: target reticle + pulse ring
        const since = reduce ? 1200 : t - FLIGHT;
        const pulse = (since % 2600) / 2600;
        const ring = pulse * 46;
        ctx!.beginPath();
        ctx!.arc(target.x, target.y, ring, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(76, 217, 100, ${0.5 * (1 - pulse)})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // reticle
        ctx!.strokeStyle = "rgba(76, 217, 100, 0.7)";
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(target.x, target.y, 6, 0, Math.PI * 2);
        ctx!.stroke();
        for (const [dx, dy] of [[-11, 0], [11, 0], [0, -11], [0, 11]]) {
          ctx!.beginPath();
          ctx!.moveTo(target.x + dx * 0.5, target.y + dy * 0.5);
          ctx!.lineTo(target.x + dx, target.y + dy);
          ctx!.stroke();
        }
        ctx!.beginPath();
        ctx!.arc(target.x, target.y, 2.4, 0, Math.PI * 2);
        ctx!.fillStyle = SIGNAL;
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    build();
    raf = requestAnimationFrame(draw);

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="hs-root">
      <canvas ref={canvasRef} className="hs-canvas" aria-hidden="true" />
      <div className="hs-vignette" aria-hidden="true" />

      <div className="hs-content">
        <p className="hs-eyebrow">
          <span className="hs-dot" /> SIGNAL ESTABLISHED — FLORESVILLE, TX · 100% VETERAN&#8209;OWNED
        </p>

        <h1 className="hs-headline">
          From the <span className="hs-em">wire</span> to the
          <br />
          <span className="hs-em-2">web app</span>
          <span className="hs-period">.</span>
        </h1>

        <p className="hs-sub">
          I&apos;m <strong>Joe Heath</strong> — network engineering leader, full-stack developer,
          and founder of <span className="hs-brand">Lawn&nbsp;Dart!&nbsp;Systems</span>. I design the
          network, then build what runs on it.
        </p>

        <div className="hs-cta-row">
          <a href="/portfolio" className="hs-cta hs-cta-primary">
            See the work <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://lawndart.dev"
            target="_blank"
            rel="noreferrer"
            className="hs-cta hs-cta-ghost"
          >
            Lawn Dart! Systems <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul className="hs-strip" aria-label="Stack and current work">
          <li>JUNIPER MIST</li>
          <li>ARUBA CENTRAL</li>
          <li>NEXT.JS</li>
          <li>OPENAI</li>
          <li className="hs-strip-live">
            <span className="hs-dot" /> HAVEN ▸ APP STORE JUL 2026
          </li>
        </ul>
      </div>

      <style>{`
        .hs-root {
          --ink: #060A12;
          --panel: #0D1424;
          --line: #1A2740;
          --signal: #4CD964;
          --signal-dim: #2E8B4F;
          --olive: #5C7B48;
          --paper: #F2F2F2;
          --muted: #8593A6;
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 78% 30%, rgba(76,217,100,0.08), transparent 45%),
            radial-gradient(ellipse at 12% 88%, rgba(92,123,72,0.10), transparent 50%),
            linear-gradient(180deg, #070C16 0%, var(--ink) 60%, #04070D 100%);
          display: flex;
          align-items: center;
          font-family: var(--font-body), system-ui, sans-serif;
        }
        .hs-canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hs-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(100deg, rgba(4,7,13,0.78) 22%, rgba(4,7,13,0.30) 52%, rgba(4,7,13,0) 78%);
        }
        .hs-content {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 7rem 2rem 4rem;
          width: 100%;
        }
        .hs-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: var(--muted);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0 0 1.6rem;
          opacity: 0;
          animation: hs-fade 0.7s ease forwards 0.1s;
        }
        .hs-dot {
          width: 7px; height: 7px; border-radius: 99px;
          background: var(--signal);
          box-shadow: 0 0 10px 1px rgba(76,217,100,0.8);
          display: inline-block;
          animation: hs-blink 2.4s ease-in-out infinite;
        }
        .hs-headline {
          font-family: var(--font-display), system-ui, sans-serif;
          font-weight: 800;
          color: var(--paper);
          font-size: clamp(2.8rem, 8.5vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.02em;
          margin: 0 0 1.6rem;
        }
        .hs-headline .hs-em { color: var(--paper); }
        .hs-em-2 {
          color: var(--signal);
          text-shadow: 0 0 38px rgba(76,217,100,0.35);
        }
        .hs-period { color: var(--signal); }
        .hs-headline > * { display: inline; }
        .hs-headline {
          opacity: 0;
          animation: hs-rise 0.9s cubic-bezier(0.2,0.7,0.2,1) forwards 0.25s;
        }
        .hs-sub {
          max-width: 46rem;
          color: var(--muted);
          font-size: clamp(1.02rem, 1.6vw, 1.28rem);
          line-height: 1.6;
          margin: 0 0 2.4rem;
          opacity: 0;
          animation: hs-fade 0.8s ease forwards 0.5s;
        }
        .hs-sub strong { color: var(--paper); font-weight: 600; }
        .hs-brand { color: var(--paper); font-weight: 600; white-space: nowrap; }
        .hs-brand::after {
          content: "";
        }
        .hs-cta-row {
          display: flex; flex-wrap: wrap; gap: 0.9rem;
          margin-bottom: 3.4rem;
          opacity: 0;
          animation: hs-fade 0.8s ease forwards 0.65s;
        }
        .hs-cta {
          font-family: var(--font-mono), monospace;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          padding: 0.85rem 1.5rem;
          border-radius: 2px;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: transform 0.16s ease, background 0.16s ease, border-color 0.16s ease;
        }
        .hs-cta-primary {
          background: var(--signal);
          color: #04140A;
          font-weight: 700;
          box-shadow: 0 0 0 1px rgba(76,217,100,0.4), 0 10px 30px -10px rgba(76,217,100,0.5);
        }
        .hs-cta-primary:hover { transform: translateY(-2px); background: #5FE676; }
        .hs-cta-ghost {
          color: var(--paper);
          border: 1px solid var(--line);
          background: rgba(13,20,36,0.5);
        }
        .hs-cta-ghost:hover { transform: translateY(-2px); border-color: var(--signal-dim); }
        .hs-cta:focus-visible { outline: 2px solid var(--signal); outline-offset: 3px; }
        .hs-strip {
          list-style: none; margin: 0; padding: 1.2rem 0 0;
          border-top: 1px solid var(--line);
          display: flex; flex-wrap: wrap; gap: 1.4rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--muted);
          opacity: 0;
          animation: hs-fade 0.8s ease forwards 0.8s;
        }
        .hs-strip-live { color: var(--paper); display: inline-flex; align-items: center; gap: 0.5rem; }
        @keyframes hs-fade { to { opacity: 1; } }
        @keyframes hs-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hs-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @media (prefers-reduced-motion: reduce) {
          .hs-eyebrow, .hs-headline, .hs-sub, .hs-cta-row, .hs-strip { animation: none; opacity: 1; }
          .hs-dot { animation: none; }
        }
        @media (max-width: 640px) {
          .hs-content { padding: 6rem 1.4rem 3rem; }
          .hs-vignette { display: none; }
        }
      `}</style>
    </section>
  );
}
