import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dev Velocity Lab`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-12 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        ← Back to blog
      </Link>

      <article className="space-y-8">
        <header className="space-y-3">
          <div className="flex items-center gap-3">
            {post.pillar && (
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-500/70">
                {post.pillar}
              </span>
            )}
            <time className="text-xs text-zinc-600">{post.date}</time>
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-zinc-100">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
          )}
        </header>

        {post.youtubeUrl && (
          <a
            href={post.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-red-500 hover:text-red-400"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        )}

        <hr className="border-zinc-800" />

        <div
          className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-100
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-zinc-200
            prose-code:rounded prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-cyan-300 prose-code:before:content-none prose-code:after:content-none
            prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900
            prose-li:text-zinc-400
            prose-hr:border-zinc-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
