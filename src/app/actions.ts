"use server";

export async function subscribeEmail(email: string): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) return { ok: false, error: "Email service not configured." };

  const res = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email_address: email, state: "active" }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message = (body as { message?: string }).message ?? "Something went wrong.";
    return { ok: false, error: message };
  }

  return { ok: true };
}
