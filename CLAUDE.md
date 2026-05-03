# Dev Velocity Lab

Personal site for yunlinwu — blog, YouTube showcase, and credibility hub for early-career engineers.

## Brand

**Tagline:** Learning faster. Growing faster. Using AI to level up as an engineer — in real roles, in real time.

**Brand message:** I show early-career engineers how to use AI to learn faster, adapt quicker, and grow confidently in real technical roles.

**Target audience:** Junior-to-mid engineers (1–4 YOE) at enterprise or mid-size companies who got moved into a new role or stack they didn't choose, feel behind, and want a practical system for catching up fast.

**Voice:** Direct, honest, peer-to-peer. A smart focused friend who just figured something out at work and is telling you exactly what happened and what to do. NOT a guru, not polished, not theory-heavy, not hype-driven.

**Content feel:** Every piece should leave the reader feeling relief → motivation → clarity → trust, in that order.

**Content angle:** "Here's what I didn't know, here's how I used AI to figure it out, here's what actually worked."

**Content pillars:**
1. AI workflows for learning — using AI to learn new tech on the job
2. Navigating unfamiliar roles — re-orgs, new stacks, imposter syndrome
3. Engineer growth — career moves, leveling up, compensation
4. Tools and systems — specific AI tools, setups, workflows

**Platforms:** YouTube (primary, long-form trust building) + Blog (secondary, feeds video scripts)

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **TypeScript 5** — strict mode, no `any`
- **Tailwind CSS 4** — utility-first, no component libraries
- **Turbopack** — dev server (`npm run dev`)

## Commands

```bash
npm run dev      # start dev server on localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx         # root layout, fonts, metadata
    page.tsx           # home page
    globals.css        # Tailwind base styles
    blog/              # blog routes (MDX)
    videos/            # YouTube showcase
  components/          # shared components only (2+ routes)
```

## Conventions

- File-based routing via App Router — no `pages/` directory
- Co-locate components with the route that owns them; promote to `src/components/` only when shared across 2+ routes
- Server Components by default; add `"use client"` only for interactivity or browser APIs
- Named exports only — no default exports for components
- Imports use the `@/*` alias (maps to `src/`)
- No comments unless the why is non-obvious

## Site sections

- **Home** — hero with tagline, who this is for, links to blog and videos
- **Blog** — MDX posts, tag filtering by content pillar
- **Videos** — curated YouTube embed grid
- **About** — background, credibility, what to expect

## GitHub

https://github.com/yunlinwu/dev-velocity-lab
