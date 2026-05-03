# dev-velocity-lab

Personal site for yunlinwu — blog, YouTube showcase, and credibility hub.

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
    layout.tsx       # root layout, fonts, metadata
    page.tsx         # home page
    globals.css      # Tailwind base styles
    blog/            # blog routes (to be built)
    videos/          # YouTube showcase (to be built)
```

## Conventions

- File-based routing via App Router — no `pages/` directory
- Co-locate components with the route that owns them; only promote to `src/components/` when shared across 2+ routes
- Prefer Server Components by default; add `"use client"` only when you need interactivity or browser APIs
- No default exports for components — named exports only
- Imports use the `@/*` alias (maps to `src/`)
- No comments unless the why is non-obvious

## Site sections (planned)

- **Home** — hero, quick intro, links to blog and videos
- **Blog** — MDX posts, tag filtering
- **Videos** — curated YouTube embed grid
- **About** — background, credibility, contact

## GitHub

https://github.com/yunlinwu/dev-velocity-lab
