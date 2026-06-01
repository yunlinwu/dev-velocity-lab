import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? "Dev Velocity Lab";
  const pillar = post?.pillar ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 3, background: "#06b6d4" }} />
          {pillar && (
            <span
              style={{
                fontSize: 18,
                color: "#22d3ee",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
            >
              {pillar}
            </span>
          )}
        </div>

        {/* title */}
        <div
          style={{
            fontSize: title.length > 60 ? 52 : 62,
            fontWeight: 700,
            color: "#f4f4f5",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* bottom branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 22, color: "#52525b", fontWeight: 500 }}>
            yunlinwu.com
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#3f3f46",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Dev Velocity Lab
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
