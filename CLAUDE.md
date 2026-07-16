# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Joe Heath's personal portfolio — a Next.js 15 (App Router) site deployed serverless on Vercel at https://joeheath.com. Presents Joe as a network engineer + full-stack developer and founder of Lawn Dart! Systems (flagship product: Slot'd).

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (eslint-config-next, flat config in eslint.config.mjs)
```

There is **no test framework** in this project — don't assume `npm test` exists.

## Stack

Next.js `^15.5` (App Router) · React 19 · TypeScript · Tailwind CSS v3 · Framer Motion (`framer-motion`) for animation · `@emailjs/browser` for the contact form · `react-icons`. Path alias `@/*` → `src/*` (see [tsconfig.json](tsconfig.json)).

## Architecture

### Layout composition (server vs client boundary)
- [src/app/layout.tsx](src/app/layout.tsx) is a **server** component. It loads the three Google fonts via `next/font` — Bricolage Grotesque → `--font-display`, JetBrains Mono → `--font-mono`, Inter → `--font-body` — exposes them as CSS variables on `<body>`, and sets global metadata.
- It renders [src/components/RootLayoutClient.tsx](src/components/RootLayoutClient.tsx) (a `"use client"` wrapper) which supplies the persistent `Header` / `main` / `Footer` chrome. Header/Footer are client components because they use Framer Motion and pathname state.
- Route pages live under `src/app/<route>/page.tsx`. Routes: `/` (home), `/about`, `/portfolio` (nav label "Work"), `/contact`, `/blog`. A page is a server component unless it needs motion/hooks/state, in which case it starts with `"use client"`.

### Content lives in colocated TypeScript data files, not a CMS
Page content is hardcoded as typed arrays/objects, either in a sibling `.ts` module or inline in the page:
- [src/app/portfolio/projects.ts](src/app/portfolio/projects.ts) — `Project[]` (has a `Project` interface); rendered via `ProjectCard` / `ProjectModal`.
- [src/app/about/experienceData.ts](src/app/about/experienceData.ts) — experience entries; rendered via `ExperienceCard` / `ExperienceDetails`.
- Home capabilities and blog posts are inline arrays inside their `page.tsx`. **To edit site content, edit these data structures** — not the JSX.

### Design system ("network signal" theme)
This is the most important thing to understand before touching UI. The look is a dark "signal-green on ink" theme, and its tokens live in **two places that must stay in sync**:
- [tailwind.config.ts](tailwind.config.ts) — named colors (`ink`, `panel`, `line`, `signal`, `olive`, `paper`, `muted`) and the font families, usable as Tailwind classes (`bg-ink`, `text-signal`, `font-mono`, …).
- [src/app/globals.css](src/app/globals.css) — the same palette as CSS custom properties (`--ink`, `--signal`, `--line`, …) plus the reusable **semantic component classes**. Prefer these over re-inventing styles:
  - `.eyebrow` — uppercase mono kicker label
  - `.chip` — small mono tech tag
  - `.card-3d` — the standard panel/card (translucent, blurred, lifts + green glow on hover)
  - `.btn-signal` / `.btn-ghost` — primary (solid green) / secondary (outlined) buttons
  - `.motion-content` — keeps Framer Motion elements above the background layer

`globals.css` also honors `prefers-reduced-motion` globally — keep new animations compatible with that.

## Contact form / environment

The contact form posts JSON to a **server-side** route, [src/app/api/contact/route.ts](src/app/api/contact/route.ts), which sends mail via **Resend** (`resend` package). The API key stays on the server — read from `RESEND_API_KEY` (in `.env.local` locally; set in Vercel for prod). Mail is sent from `contact@lawndart.dev` (domain must be verified in Resend) to Joe's inbox, with the sender's address as `replyTo`. The `Resend` client is instantiated lazily **inside** the handler so a missing key never breaks the build. The form ([src/components/ContactForm.tsx](src/components/ContactForm.tsx)) includes a hidden `company` honeypot field; the route drops any submission that fills it and validates name/email/message server-side.

## Conventions

- Functional components + hooks only. PascalCase component files, camelCase functions/vars, kebab-case route folders.
- Add `"use client"` only when a component needs interactivity/motion; keep pages server components otherwise.
- Reuse the semantic classes and color tokens above rather than hardcoding hex values in JSX.

## Gotcha

There is a **nested git repository at `src/.git`** (a second, separate repo checked out inside `src/`) in addition to the top-level repo. Be deliberate about which repo you're committing to when running git commands that touch `src/`.
