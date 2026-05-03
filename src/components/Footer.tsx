export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800/60">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <span>© {new Date().getFullYear()} Dev Velocity Lab</span>
        <span>Learning faster. Growing faster.</span>
      </div>
    </footer>
  );
}
