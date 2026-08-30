"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Locale, LocalizedCountry } from "@/content/types";
import { getEmblem } from "@/illustrations/emblems";
import { shade } from "@/illustrations/palette";

const FRONT_RADIUS = "3px 10px 10px 3px";
const BACK_RADIUS = "10px 3px 3px 10px";
const PAGE_COLOR = "#f1e8d4";
const WIDTH = 122;
const THICKNESS = 20;
const HALF_THICKNESS = THICKNESS / 2;
const HALF_WIDTH = WIDTH / 2;
const SIDE_OFFSET = (WIDTH - THICKNESS) / 2;

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
  const height = 178 + (hash % 24); // 178..201px, stable per country
  const tilt = 16 + (hash % 8); // 16..23deg, stable per country
  const duration = 2.6 + (hash % 5) * 0.25; // 2.6..3.6s, stable per country
  const spineColor = shade(country.accentColor, 0.32);
  const backColor = shade(country.accentColor, 0.15);
  const spinName = `book-spin-${country.slug}`;

  return (
    <Box sx={{ perspective: "900px", flexShrink: 0 }}>
      <Box
        component={Link}
        href={`/${locale}/${country.slug}`}
        sx={{
          position: "relative",
          display: "block",
          width: WIDTH,
          height,
          textDecoration: "none",
          [`@keyframes ${spinName}`]: {
            from: { transform: `rotateY(-${tilt}deg)` },
            to: { transform: `rotateY(-${tilt + 360}deg)` },
          },
          "&:hover .book-spin": {
            animation: `${spinName} ${duration}s linear infinite`,
          },
          "@media (prefers-reduced-motion: reduce)": {
            "&:hover .book-spin": {
              animation: "none",
              transform: `rotateY(-${tilt - 10}deg)`,
            },
          },
        }}
      >
        {/* Purely visual — the link above stays a flat, unrotated hit
            target so clicks land reliably mid-spin instead of missing
            when the 3D-rotated book is briefly edge-on to the cursor. */}
        <Box
          className="book-spin"
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            transform: `rotateY(-${tilt}deg)`,
            transition: "transform 0.5s ease",
          }}
        >
          {/* right face: page block */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: SIDE_OFFSET,
              width: THICKNESS,
              height: "100%",
              backfaceVisibility: "hidden",
              transform: `rotateY(90deg) translateZ(${HALF_WIDTH}px)`,
              backgroundColor: PAGE_COLOR,
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(0,0,0,0.14) 0 1px, transparent 1px 2.4px)",
              boxShadow: "inset -2px 0 3px rgba(0,0,0,0.25)",
            }}
          />
          {/* left face: spine */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: SIDE_OFFSET,
              width: THICKNESS,
              height: "100%",
              backfaceVisibility: "hidden",
              transform: `rotateY(-90deg) translateZ(${HALF_WIDTH}px)`,
              backgroundColor: spineColor,
              boxShadow: "inset 2px 0 3px rgba(0,0,0,0.3)",
            }}
          />
          {/* front cover face */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              transform: `translateZ(${HALF_THICKNESS}px)`,
              display: "flex",
              flexDirection: "column",
              borderRadius: FRONT_RADIUS,
              overflow: "hidden",
              backgroundColor: country.accentColor,
              boxShadow: "6px 14px 22px -10px rgba(0,0,0,0.55)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 45%)",
                pointerEvents: "none",
              }}
            />
            <Box sx={{ height: 6, backgroundColor: "rgba(0,0,0,0.16)" }} />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 8,
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            />
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
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
                p: "10px 12px 2px 16px",
              }}
            >
              {Emblem ? (
                <Box aria-hidden="true" sx={{ width: "100%", height: "100%" }}>
                  {/* getEmblem pulls from a static, module-level lookup table keyed by
                      slug — the same component reference every render, not created fresh. */}
                  {/* eslint-disable-next-line react-hooks/static-components */}
                  <Emblem accentColor={country.accentColor} />
                </Box>
              ) : (
                <Typography sx={{ fontSize: 32 }}>{country.flagEmoji}</Typography>
              )}
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.26)",
                p: "9px 10px 11px 16px",
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
          {/* back cover face */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              transform: `rotateY(180deg) translateZ(${HALF_THICKNESS}px)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: BACK_RADIUS,
              overflow: "hidden",
              backgroundColor: backColor,
              boxShadow: "-6px 14px 22px -10px rgba(0,0,0,0.55)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 8,
                border: "1px solid rgba(255,255,255,0.28)",
                borderRadius: "8px 2px 2px 8px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: 8,
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: 46,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))",
              }}
            >
              {country.flagEmoji}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
