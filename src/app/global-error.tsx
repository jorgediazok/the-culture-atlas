"use client";

import { useEffect } from "react";

// Catches errors thrown above app/[lang]/error.tsx — i.e. in
// app/[lang]/layout.tsx itself. Error boundaries must be Client Components,
// which rules out `metadata`/`generateMetadata` here (see error.js docs),
// and it must define its own <html>/<body> since it replaces the root
// layout when active.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
            Algo salió mal / Something went wrong
          </h1>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Ocurrió un error inesperado.
            <br />
            An unexpected error occurred.
          </p>
          <button
            onClick={() => retry()}
            style={{
              padding: "10px 20px",
              borderRadius: 6,
              border: "1px solid #171717",
              background: "#171717",
              color: "#fff",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Reintentar / Try again
          </button>
        </div>
      </body>
    </html>
  );
}
