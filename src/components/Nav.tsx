import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-100">
          Dev Velocity Lab
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/blog" className="transition-colors hover:text-zinc-100">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-100">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
