import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Not found — The Culture Atlas",
  description: "The page you are looking for does not exist.",
};

// Bypasses app/[lang]/layout.tsx entirely (see next.config.ts), so the
// locale can't be read from a matched route — this is used for URLs that
// don't match /[lang] at all, so it shows both languages plainly instead
// of guessing one.
export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#171717",
          background: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 420, padding: "0 24px" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
            Página no encontrada / Page not found
          </h1>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            No encontramos lo que buscabas.
            <br />
            We couldn&apos;t find what you were looking for.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/es" style={{ color: "#171717" }}>
              Ir al inicio (ES)
            </Link>
            <Link href="/en" style={{ color: "#171717" }}>
              Go home (EN)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
