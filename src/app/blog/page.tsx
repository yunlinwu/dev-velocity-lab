import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Dev Velocity Lab",
  description:
    "Real talk on using AI to learn fast and grow as an engineer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Blog</h1>
        <p className="text-zinc-500">
          Here's what I didn't know, how I used AI to figure it out, and what actually worked.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-600">No posts yet. First one is coming soon.</p>
      ) : (
        <div className="divide-y divide-zinc-800/60">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <Link href={`/blog/${post.slug}`} className="group block space-y-2">
                <div className="flex items-center gap-3">
                  {post.pillar && (
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-500/70">
                      {post.pillar}
                    </span>
                  )}
                  <time className="text-xs text-zinc-600">{post.date}</time>
                </div>
                <h2 className="text-xl font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-cyan-400">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm leading-relaxed text-zinc-500">{post.excerpt}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
