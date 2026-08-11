"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Continent } from "@/content/types";

const CONTINENT_ORDER: Continent[] = [
  "europe",
  "south-america",
  "north-america",
  "asia",
  "africa",
  "oceania",
];

export default function ContinentChips({
  labels,
  counts,
  colors,
  countriesLabel,
}: {
  labels: Record<Continent, string>;
  counts: Record<Continent, number>;
  colors: Record<Continent, string>;
  countriesLabel: string;
}) {
  const available = CONTINENT_ORDER.filter((c) => counts[c] > 0);

  function goTo(continent: Continent) {
    document
      .getElementById(`shelf-${continent}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      {available.map((continent) => (
        <Box
          key={continent}
          component="button"
          onClick={() => goTo(continent)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "transparent",
            borderRadius: 999,
            py: 1,
            pl: 1,
            pr: 2,
            cursor: "pointer",
            transition: "border-color 0.2s ease, transform 0.2s ease",
            font: "inherit",
            "&:hover": {
              borderColor: colors[continent],
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              backgroundColor: colors[continent],
              flexShrink: 0,
            }}
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: 13.5,
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              {labels[continent]}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "text.secondary" }}>
              {counts[continent]} {countriesLabel}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
