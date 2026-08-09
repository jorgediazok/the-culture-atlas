import { createTheme } from "@mui/material/styles";

const serif = "var(--font-fraunces), ui-serif, Georgia, serif";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f3a5f",
    },
    background: {
      default: "#e7e2d3",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    h1: { fontFamily: serif },
    h2: { fontFamily: serif },
    h3: { fontFamily: serif },
    h4: { fontFamily: serif },
    h5: { fontFamily: serif },
    h6: { fontFamily: serif },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
