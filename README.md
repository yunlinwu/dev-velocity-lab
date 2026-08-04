# dev-velocity-lab

The Next.js site behind **[yunlinwu.com](https://yunlinwu.com)** — a YouTube
channel and blog on **AI-assisted engineering for early-career developers**.

- 🎥 YouTube: **[@DevVelocityLab](https://www.youtube.com/@DevVelocityLab)**
- ✍️ Blog: **[yunlinwu.com/blog](https://yunlinwu.com/blog)**

## What this is

A developer-velocity content brand for engineers with 1–4 years of experience
who want to use AI to learn faster and adapt to unfamiliar roles. Voice is
direct, honest, peer-to-peer — no hype, no gatekeeping.

## What's interesting in this repo

The site itself is a working demo of the workflow it teaches: every video I
publish becomes a blog post automatically, from raw audio to live URL in
**~30 seconds**. The publishing pipeline lives in a companion (private) repo,
[`dev-velocity-lab-video`](https://github.com/yunlinwu). This repo is the site
that consumes what the pipeline produces.

### Site features

- **Next.js 16** (App Router) with **React 19** and **TypeScript 5** (strict)
- **Tailwind CSS 4** + Turbopack for fast local iteration
- **Server Components by default**; client components only where truly needed
  (the email-capture form)
- **Markdown content system** — `gray-matter` + `remark` parse posts from
  the `content/posts/` directory; no CMS
- **Dynamic Open Graph images** per post via Next.js `ImageResponse` — every
  social share gets a branded, pillar-tagged preview card
- **Videos page** syncs blog content with YouTube embeds — one video = one
  post, always in sync
- **Email capture** via Kit (ConvertKit) API v3 with **server actions** — the
  API key never touches the client
- **Programmatic SEO** — sitemap, robots.txt, canonical domain,
  Google Search Console verification
- **Share buttons** (Twitter, LinkedIn, copy link) on every post
- Deployed on **Vercel** with auto-deploy on push to `main`

### The publishing pipeline (external, referenced here)

The pipeline in `dev-velocity-lab-video` (private) turns a raw YouTube URL
into a live blog post:

```
YouTube URL
   ↓  yt-dlp downloads audio
   ↓  Whisper (local, base.en) transcribes to timestamped JSON
   ↓  Claude Haiku generates a blog post from the transcript + brand prompt
   ↓  Post frontmatter is corrected (Unix ts → UTC-safe date)
   ↓  Content dropped into this repo's content/posts/ directory
   ↓  git push → Vercel auto-deploys
```

End to end: ~30 seconds. Supports single-video and batch modes.

## Getting started (locally)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Content lives in `content/posts/` — drop in a Markdown file with the
frontmatter `title`, `date`, `pillar`, and `description` and it auto-appears in
the site.

## Content pillars

Every post falls into one of four buckets:

1. **AI workflows** — using Claude Code, Copilot, MCP, agents, etc. to ship faster
2. **Navigating unfamiliar roles** — for early-career engineers finding their footing
3. **Engineer growth** — habits, mental models, career shape
4. **Tools & systems** — what actually earns its keep in a real developer's stack

## Related repos

- 🎥 [`dev-velocity-lab-video`](https://github.com/yunlinwu) *(private)* —
  the YouTube-to-blog pipeline + Remotion video overlay renderer
- 🧠 [`youtube-transcript-mcp`](https://github.com/yunlinwu/youtube-transcript-mcp)
  — open-source MCP server giving Claude first-class access to YouTube
  transcripts (reuses the same yt-dlp + Whisper stack)
- 🔎 [`transcript-rag`](https://github.com/yunlinwu/transcript-rag) —
  Level 0 RAG demo over YouTube transcripts (chunking → embeddings →
  cosine retrieval → grounded generation)
- 🧪 [`llm-eval-harness`](https://github.com/yunlinwu/llm-eval-harness) —
  Spring Boot service for defining and running LLM evaluations
- 🧭 [`leetcode-by-building`](https://github.com/yunlinwu/leetcode-by-building)
  — LeetCode patterns learned by building tiny real tools that use them

---

*Built and maintained by [Yun Lin Wu](https://yunlinwu.com) —
[LinkedIn](https://www.linkedin.com/in/yunlinwu/) ·
[GitHub](https://github.com/yunlinwu)*
