import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.slice(0, 2).toLowerCase();
  return locales.find((locale) => locale === preferred) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Excludes _next assets and the two real dotted routes at the true root
  // (robots.txt, sitemap.xml — no other static file lives outside /public,
  // which Next serves before middleware anyway). Everything else — including
  // a bot probing an extensioned path like /foo.php — gets the locale prefix
  // like any other path, so it lands on the working [country]-level 404
  // instead of [lang]/layout.tsx throwing notFound() with no locale to
  // render a custom not-found.tsx against (that combination falls back to
  // Next's generic built-in 404 instead of our global-not-found.tsx).
  matcher: ["/((?!_next|robots\\.txt|sitemap\\.xml).*)"],
};
