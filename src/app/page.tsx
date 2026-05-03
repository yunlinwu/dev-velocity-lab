import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";

const pillars = [
  {
    number: "01",
    title: "AI workflows for learning",
    description:
      "Specific prompts and methods for using AI to onboard to unfamiliar tech — on the job, not in a tutorial.",
  },
  {
    number: "02",
    title: "Navigating unfamiliar roles",
    description: "Re-orgs, new stacks, imposter syndrome. Real experiences, no fluff.",
  },
  {
    number: "03",
    title: "Engineer growth",
    description: "Career progression, leveling up, compensation. Practical and direct.",
  },
  {
    number: "04",
    title: "Tools and systems",
    description: "The actual AI tools and setups I use day-to-day. What works, what doesn't.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-24 px-6 py-20">
      {/* Hero */}
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            Dev Velocity Lab
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-5xl">
            Learning faster.
            <br />
            Growing faster.
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-zinc-400">
            Using AI to level up as an engineer — in real roles, in real time.
          </p>
        </div>
        <p className="max-w-lg leading-relaxed text-zinc-500">
          For engineers 1–4 years in who got thrown into an unfamiliar role and need to get
          competent fast. I document exactly how I use AI to do it.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
          >
            Read the blog
          </Link>
          <a
            href="https://youtube.com/@devvelocitylab"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">What I cover</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="space-y-2 rounded-lg border border-zinc-800 p-5 transition-colors hover:border-zinc-700"
            >
              <p className="font-mono text-xs text-zinc-600">{p.number}</p>
              <h3 className="text-sm font-semibold text-zinc-100">{p.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="space-y-4 rounded-lg border border-zinc-800 p-8">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-zinc-100">Get the posts in your inbox</h2>
          <p className="text-sm text-zinc-500">
            One post a week. What I learned, how I used AI, what worked.
          </p>
        </div>
        <EmailCapture />
      </section>
    </div>
  );
}
