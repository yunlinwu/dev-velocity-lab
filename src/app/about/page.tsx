import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Dev Velocity Lab",
  description: "Who I am and what Dev Velocity Lab is about.",
};

const pillars = [
  {
    title: "AI workflows for learning",
    body: "Not theory. Specific prompts, workflows, and methods for using AI to onboard to unfamiliar tech while on the job.",
  },
  {
    title: "Navigating unfamiliar roles",
    body: "Re-orgs, stack switches, imposter syndrome. Real experiences and how I worked through them.",
  },
  {
    title: "Engineer growth",
    body: "Career progression, compensation, leveling up. Practical and direct, not fluffy advice.",
  },
  {
    title: "Tools and systems",
    body: "The actual AI tools and setups I use day-to-day. What works, what doesn't.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 px-6 py-20">
      <section className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">About</p>
        <h1 className="text-3xl font-bold leading-snug tracking-tight text-zinc-100">
          I'm a software engineer documenting how I use AI to learn fast — in real roles, in real
          time.
        </h1>
        <div className="space-y-4 leading-relaxed text-zinc-400">
          <p>
            I got re-orged into an SRE role with zero SRE experience. Instead of pretending to
            know things I didn't, I started documenting exactly how I used AI to get up to speed
            — and what actually worked.
          </p>
          <p>
            Dev Velocity Lab is the result. It's a no-fluff resource for engineers 1–4 years in
            who are navigating unfamiliar territory — new stacks, new roles, new teams — and want
            a practical system for catching up fast.
          </p>
          <p>
            I'm not a guru. I'm just a focused engineer who figured something out and is telling
            you exactly what happened.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">What I cover</h2>
        <div className="space-y-4">
          {pillars.map((item) => (
            <div key={item.title} className="space-y-1 border-l-2 border-zinc-800 pl-4">
              <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-zinc-800 p-8">
        <h2 className="font-semibold text-zinc-100">Start here</h2>
        <p className="text-sm leading-relaxed text-zinc-500">
          The blog is the best place to start. Posts are short, specific, and built around real
          situations I've been in.
        </p>
        <Link
          href="/blog"
          className="inline-block rounded bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
        >
          Read the blog
        </Link>
      </section>
    </div>
  );
}
