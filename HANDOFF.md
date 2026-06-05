# Dev Velocity Lab — Agent Handoff

## What this project is

Personal brand site + content pipeline for **yunlinwu** — a blog and YouTube showcase for early-career engineers learning to use AI. The site is live at **yunlinwu.com** (hosted on Vercel, repo at github.com/yunlinwu/dev-velocity-lab).

---

## Two repos

| Repo | Path | Purpose |
|---|---|---|
| `dev-velocity-lab` | `~/projects/dev-velocity-lab` | Next.js site (blog, videos, about) |
| `dev-velocity-lab-video` | `~/projects/dev-velocity-lab-video` | Remotion overlays + YouTube-to-blog pipeline |

---

## Site stack

- **Next.js 16** App Router, React 19, TypeScript 5
- **Tailwind CSS 4** + `@tailwindcss/typography`
- **Turbopack** dev server
- **Node 24** via fnm — always run `eval "$(/Users/one/.local/bin/fnm env --shell zsh)" && fnm use 24` before npm commands
- Fully static output (`generateStaticParams` on all dynamic routes)

### Key commands
```bash
# Always source these first in a new shell
source ~/.zshrc
eval "$(/Users/one/.local/bin/fnm env --shell zsh)" && fnm use 24

npm run dev      # localhost:3000
npm run build    # production build — run this to verify before pushing
npm run lint
```

---

## Site structure

```
src/
  app/
    page.tsx              # Home — hero, pillar cards, EmailCapture
    layout.tsx            # Root layout — Nav, Footer, metadata, OG base URL
    globals.css           # Tailwind 4 + typography plugin
    actions.ts            # Server action — Kit email subscribe
    sitemap.ts            # Auto-generates /sitemap.xml
    robots.ts             # /robots.txt
    blog/
      page.tsx            # Blog listing — getAllPosts()
      [slug]/
        page.tsx          # Blog post — prose styles, YouTube button, ShareButtons
        opengraph-image.tsx  # Dynamic OG image per post (1200x630)
    videos/
      page.tsx            # Video grid — reads posts with youtubeUrl
    about/
      page.tsx
  components/
    Nav.tsx               # Sticky header — Dev Velocity Lab, Blog, Videos, About
    Footer.tsx
    EmailCapture.tsx      # "use client" — calls subscribeEmail server action
    ShareButtons.tsx      # "use client" — Twitter, LinkedIn, copy link
  lib/
    posts.ts              # getAllPosts(), getPostBySlug() — reads content/posts/*.md
content/
  posts/                  # 12 markdown blog posts (see below)
```

---

## Blog posts

12 posts in `content/posts/`. Each has this frontmatter:
```yaml
---
title: "..."
date: "YYYY-MM-DD"        # real YouTube publish date (local timezone)
youtubeUrl: "https://youtu.be/VIDEO_ID"
excerpt: "..."
pillar: "ai-workflows-for-learning"  # or navigating-unfamiliar-roles, engineer-growth, tools-and-systems
---
```

Posts are sorted newest-first by date in `getAllPosts()`. The Videos page auto-pulls posts that have `youtubeUrl`.

---

## YouTube-to-blog pipeline

Script: `~/projects/dev-velocity-lab-video/scripts/youtube-to-blog.ts`

### Single video
```bash
cd ~/projects/dev-velocity-lab-video
source ~/.zshrc  # loads ANTHROPIC_API_KEY
npx tsx scripts/youtube-to-blog.ts https://youtu.be/VIDEO_ID
```

### Batch
```bash
npx tsx scripts/youtube-to-blog.ts --batch youtube-urls.txt
```

### What it does
1. Fetches video title + publish timestamp via `yt-dlp` (uses Unix timestamp → local date to avoid UTC off-by-one)
2. Downloads audio-only (`yt-dlp --extract-audio`)
3. Transcribes with Whisper via `python3 scripts/transcribe.py` (`base.en` model, ~30s for 5min video)
4. Calls Claude API (`claude-haiku-4-5-20251001`) with transcript + brand voice prompt
5. Post-processes output to overwrite date and inject `youtubeUrl` into frontmatter
6. Saves to `~/projects/dev-velocity-lab/content/posts/{slug}.md`

### After running the pipeline
```bash
cd ~/projects/dev-velocity-lab
git add content/posts/
git commit -m "Add blog post for video N — [title]"
git push
# Vercel auto-deploys on push
```

### Dependencies (all already installed)
- `/opt/homebrew/bin/yt-dlp` — audio download
- `/opt/homebrew/bin/ffmpeg` — audio conversion (used by yt-dlp)
- `/usr/local/bin/python3` — runs transcribe.py
- Whisper (`pip3 install openai-whisper`) — transcription
- `@anthropic-ai/sdk` — installed in video project
- `ANTHROPIC_API_KEY` — in `~/.zshrc`

---

## Email capture

- Form on home page (`EmailCapture.tsx`) calls `src/app/actions.ts` server action
- Server action hits **Kit (ConvertKit) v3 API**: `POST https://api.convertkit.com/v3/forms/9511208/subscribe`
- Uses `api_key` (not secret) — stored as `KIT_API_KEY` env var in Vercel
- Kit dashboard: app.kit.com → Subscribers to see list

---

## SEO / Google

- `sitemap.ts` → `/sitemap.xml` — all 14 routes + all blog posts, canonical domain `yunlinwu.com`
- `robots.ts` → `/robots.txt` — allows full crawl
- `layout.tsx` has `metadataBase: new URL("https://yunlinwu.com")` and Google Search Console verification tag
- Sitemap submitted to Google Search Console — indexing in progress (takes 1-4 weeks)
- Each blog post has `generateMetadata` with title + excerpt for Open Graph

---

## Environment variables

| Variable | Where | Used for |
|---|---|---|
| `ANTHROPIC_API_KEY` | `~/.zshrc` | Pipeline script (Claude API) |
| `KIT_API_KEY` | Vercel env vars | Email capture (Kit v3) |

---

## Brand context

- **Audience:** Junior-to-mid engineers (1–4 YOE) moved into unfamiliar roles
- **Voice:** Direct, honest, peer-to-peer. Not a guru. "Here's what I tried, here's what worked."
- **Content pillars:** AI workflows for learning / navigating unfamiliar roles / engineer growth / tools and systems
- **Canonical domain:** yunlinwu.com (routes to dev-velocity-lab.vercel.app)
- **YouTube:** 12 videos published, pipeline generates blog post per video

---

## Known gotchas

- Always use Node 24 (fnm). System default is Node 18 and Next.js 16 requires ≥20.
- `git add 'src/app/blog/[slug]/page.tsx'` — quote the brackets or zsh expands them
- yt-dlp uses Unix timestamp (not `upload_date`) to get correct local date — avoids UTC off-by-one
- Kit v3 form subscribe uses `api_key`, not `api_secret`
- Vercel requires manual redeploy (uncheck build cache) after adding new env vars

---

## What's done

- [x] Next.js site — Home, Blog, Videos, About pages
- [x] Markdown blog pipeline (gray-matter + remark)
- [x] 12 blog posts generated from YouTube transcripts
- [x] Dynamic OG images per blog post
- [x] Share buttons (Twitter, LinkedIn, copy link)
- [x] Videos page with YouTube embeds
- [x] Email capture → Kit
- [x] sitemap.xml + robots.txt
- [x] Google Search Console verified + sitemap submitted
- [x] YouTube-to-blog pipeline script (automated)

## What's left / future ideas

- [ ] Kit welcome email sequence (no code needed — done in Kit dashboard)
- [ ] Open Graph image for non-blog pages (home, videos, about)
- [ ] Email capture on blog post pages (not just home)
- [ ] Tag/pillar filtering on blog listing page
- [ ] `npm run blog <youtube-url>` shortcut in video project `package.json`
