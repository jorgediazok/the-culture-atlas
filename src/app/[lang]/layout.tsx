import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeRegistry from "@/components/ThemeRegistry";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { locales, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL("https://the-culture-book.vercel.app"),
    title: dict.brand,
    description: dict.tagline,
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <ThemeRegistry>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 4 },
              py: 2,
            }}
          >
            <Link href={`/${lang}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 600,
                }}
              >
                {dict.brand}
              </Typography>
            </Link>
            <LanguageSwitcher locale={lang} />
          </Stack>
          {children}
          <Footer
            brand={dict.brand}
            countriesLabel={dict.countriesLabel}
            storiesLabel={dict.storiesLabel}
            locationLabel={dict.footerLocation}
            tagline={dict.tagline}
            madeByLabel={dict.madeBy}
            locale={lang}
          />
        </ThemeRegistry>
      </body>
    </html>
  );
}
