"use client";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Locale, LocalizedCountry } from "@/content/types";

export default function CountryCard({
  country,
  locale,
}: {
  country: LocalizedCountry;
  locale: Locale;
}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea
        component={Link}
        href={`/${locale}/${country.slug}`}
        sx={{ height: "100%" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            py: 5,
            backgroundColor: `${country.accentColor}1a`,
          }}
        >
          <Typography sx={{ fontSize: 64 }}>{country.flagEmoji}</Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {country.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
