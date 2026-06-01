"use server";

const KIT_FORM_ID = "9511208";

export async function subscribeEmail(email: string): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) return { ok: false, error: "Email service not configured." };

  const res = await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey, email }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error("Kit API error:", res.status, JSON.stringify(body));
    const message = (body as { message?: string }).message ?? `Kit error ${res.status}`;
    return { ok: false, error: message };
  }

  return { ok: true };
}
