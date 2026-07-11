import { ImageResponse } from "next/og";
import { brand, seo } from "@/data/summerCampaign";

export const alt = seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Placeholder OGP image generated with code (no photography available yet).
 * Once the real hero photo is confirmed, this can be swapped for a static
 * app/opengraph-image.jpg file — Next.js will prefer it automatically.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
          background: "linear-gradient(135deg, #D1452A 0%, #E8B93A 45%, #7C9A4C 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {brand.campaignNameEn}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          夏こそ、ENOWA。
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {brand.tagline}
        </div>
      </div>
    ),
    size
  );
}
