"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Locale, LocalizedCountry } from "@/content/types";
import { getEmblem } from "@/illustrations/emblems";
import { shade } from "@/illustrations/palette";

const RADIUS = "2px 12px 12px 2px";

function hashOf(slug: string): number {
  return [...slug].reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

export default function BookCover({
  country,
  locale,
}: {
  country: LocalizedCountry;
  locale: Locale;
}) {
  const Emblem = getEmblem(country.slug);
  const hash = hashOf(country.slug);
  const rotation = (hash % 5) - 2; // -2..2deg, stable per country
  const height = 196 + (hash % 34); // 196..230px, stable per country
  const stackFar = shade(country.accentColor, 0.4);
  const stackNear = shade(country.accentColor, 0.22);

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: 104,
        height,
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.28s cubic-bezier(.2,.8,.2,1)",
        "&:hover": {
          transform: `translateY(-10px) rotate(${rotation - 1}deg)`,
        },
        "&:hover .book-face": {
          boxShadow: "0 22px 26px -14px rgba(0,0,0,0.55)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: RADIUS,
          backgroundColor: stackFar,
          transform: "translate(4px, 5px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: RADIUS,
          backgroundColor: stackNear,
          transform: "translate(2px, 2.5px)",
        }}
      />

      <Box
        component={Link}
        href={`/${locale}/${country.slug}`}
        className="book-face"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          borderRadius: RADIUS,
          overflow: "hidden",
          backgroundColor: country.accentColor,
          boxShadow: "0 14px 20px -12px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.28s ease",
          textDecoration: "none",
        }}
      >
        <Box sx={{ height: 6, backgroundColor: "rgba(0,0,0,0.18)" }} />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 9,
            backgroundColor: "rgba(0,0,0,0.22)",
          }}
        />
        <Typography
          component="span"
          sx={{
            position: "absolute",
            top: 10,
            right: 9,
            fontSize: 13,
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
          }}
        >
          {country.flagEmoji}
        </Typography>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: "10px 10px 2px 16px",
          }}
        >
          {Emblem ? (
            <Box sx={{ width: "100%", height: "100%" }}>
              <Emblem accentColor={country.accentColor} />
            </Box>
          ) : (
            <Typography sx={{ fontSize: 32 }}>{country.flagEmoji}</Typography>
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.26)",
            p: "9px 8px 11px 16px",
            textAlign: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: 12.5,
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              display: "block",
            }}
          >
            {country.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
