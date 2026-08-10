import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const BOOK_RADIUS = { xs: "12px", md: "14px 28px 28px 14px" };

export default function BookPageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Slightly smaller than its slide on desktop, leaving real empty space
    // at the bottom-right for the stacked "page edge" layers below to peek
    // into — otherwise the carousel viewport's required overflow:hidden
    // clips them before they're ever visible.
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: "calc(100% - 12px)" },
        height: { xs: "100%", md: "calc(100% - 16px)" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          borderRadius: BOOK_RADIUS,
          backgroundColor: "#ede4cd",
          border: "1px solid #cdbf9c",
          transform: "translate(10px, 14px)",
        }}
      />
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          borderRadius: BOOK_RADIUS,
          backgroundColor: "#f6efdd",
          border: "1px solid #dccfab",
          transform: "translate(5px, 7px)",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: BOOK_RADIUS,
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
