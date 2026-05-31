import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos — Dev Velocity Lab",
  description:
    "YouTube videos on using AI to learn faster, adapt to new roles, and grow as an engineer.",
};

function youtubeEmbedUrl(url: string): string {
  const id = url.split("/").pop()?.split("?")[0] ?? "";
  return `https://www.youtube.com/embed/${id}`;
}

export default function VideosPage() {
  const posts = getAllPosts().filter((p) => p.youtubeUrl);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-12 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Videos</h1>
        <p className="text-zinc-400">
          Real situations, real workflows. Every video is also a{" "}
          <Link href="/blog" className="text-cyan-400 hover:underline">
            blog post
          </Link>{" "}
          if you prefer reading.
        </p>
      </header>

      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="group space-y-3">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <iframe
                src={youtubeEmbedUrl(post.youtubeUrl!)}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="space-y-1">
              {post.pillar && (
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-500/70">
                  {post.pillar}
                </span>
              )}
              <h2 className="text-sm font-semibold leading-snug text-zinc-100 group-hover:text-cyan-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-xs text-zinc-500">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
