"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stack from "@mui/material/Stack";

export default function ShelfRow({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function updateScrollState() {
      const { scrollLeft, scrollWidth, clientWidth } = el!;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }

    updateScrollState();

    function handleWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      el!.scrollLeft += e.deltaY;
      e.preventDefault();
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", updateScrollState);
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .shelf-arrow": { opacity: 1 },
      }}
    >
      <Stack
        ref={scrollerRef}
        direction="row"
        sx={{
          alignItems: "flex-end",
          gap: 3.5,
          overflowX: "auto",
          scrollSnapType: "x proximity",
          pb: 4,
          pt: 1,
          px: 0.5,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {children}
      </Stack>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 14,
          background:
            "linear-gradient(to bottom, #cabb98 0%, #cabb98 35%, #a4926c 100%)",
          borderRadius: "0 0 2px 2px",
          boxShadow: "0 6px 10px -4px rgba(0,0,0,0.35)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 14,
          right: 0,
          width: 44,
          background: "linear-gradient(to left, #e7e2d3, rgba(0,0,0,0))",
          pointerEvents: "none",
        }}
      />

      {canScrollLeft && (
        <IconButton
          className="shelf-arrow"
          onClick={() => scrollByPage(-1)}
          aria-label="scroll left"
          sx={{
            position: "absolute",
            left: -6,
            top: "38%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "opacity 0.2s ease",
            backgroundColor: "#e7e2d3",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 4px 10px -4px rgba(0,0,0,0.4)",
            "&:hover": { backgroundColor: "#fff" },
            "@media (hover: none)": { opacity: 0.75 },
          }}
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
      )}
      {canScrollRight && (
        <IconButton
          className="shelf-arrow"
          onClick={() => scrollByPage(1)}
          aria-label="scroll right"
          sx={{
            position: "absolute",
            right: -6,
            top: "38%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "opacity 0.2s ease",
            backgroundColor: "#e7e2d3",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 4px 10px -4px rgba(0,0,0,0.4)",
            "&:hover": { backgroundColor: "#fff" },
            "@media (hover: none)": { opacity: 0.75 },
          }}
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}
