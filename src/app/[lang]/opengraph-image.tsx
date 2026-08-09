import { ImageResponse } from "next/og";
import { locales, isValidLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const alt = "The Culture Book";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(isValidLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6f0",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 24,
            background: "#4b3226",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            fontWeight: 700,
            color: "#faf6f0",
            fontFamily: "serif",
            marginBottom: 40,
          }}
        >
          C
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#20242a",
            fontFamily: "serif",
          }}
        >
          {dict.brand}
        </div>
        <div style={{ fontSize: 28, color: "#565f68", marginTop: 18 }}>
          {dict.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
