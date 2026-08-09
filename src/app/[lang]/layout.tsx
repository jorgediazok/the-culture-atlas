import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThemeRegistry from "@/components/ThemeRegistry";
import LanguageSwitcher from "@/components/LanguageSwitcher";
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
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
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
              <Typography sx={{ fontWeight: 700 }}>{dict.brand}</Typography>
            </Link>
            <LanguageSwitcher locale={lang} />
          </Stack>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
