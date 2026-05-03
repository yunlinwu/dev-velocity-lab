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
