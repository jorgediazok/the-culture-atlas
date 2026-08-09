"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function BackLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Typography
      component={Link}
      href={href}
      color="text.secondary"
      sx={{
        textDecoration: "none",
        width: "fit-content",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {children}
    </Typography>
  );
}
