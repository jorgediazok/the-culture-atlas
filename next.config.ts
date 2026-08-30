import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The root layout lives at app/[lang]/layout.tsx (a top-level dynamic
  // segment), so there's no single non-dynamic layout to compose a 404 from
  // for URLs that don't match any [lang] value — global-not-found.tsx
  // handles those instead. See node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
