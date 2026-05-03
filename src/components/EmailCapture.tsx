"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to ConvertKit / Resend / Mailchimp
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-sm text-cyan-400">You're in. I'll send you the good stuff.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-cyan-500 focus:outline-none"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
      >
        Get the posts
      </button>
    </form>
  );
}
