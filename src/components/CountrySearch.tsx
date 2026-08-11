"use client";

import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import type { Locale } from "@/content/types";

export default function CountrySearch({
  locale,
  countries,
  placeholder,
}: {
  locale: Locale;
  countries: { slug: string; name: string; flagEmoji: string }[];
  placeholder: string;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return countries
      .filter((c) => c.name.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, countries]);

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: 380, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 999,
          px: 2,
          py: 0.75,
          backgroundColor: "background.paper",
        }}
      >
        <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
        <InputBase
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ flex: 1, fontSize: 14 }}
        />
      </Box>

      {results.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            mt: 0.75,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            boxShadow: "0 12px 24px -8px rgba(0,0,0,0.25)",
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          {results.map((c) => (
            <Box
              key={c.slug}
              component={Link}
              href={`/${locale}/${c.slug}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.1,
                textDecoration: "none",
                color: "text.primary",
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <Typography sx={{ fontSize: 15 }}>{c.flagEmoji}</Typography>
              <Typography sx={{ fontSize: 14 }}>{c.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
