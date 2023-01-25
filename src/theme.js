import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#313dad",
    },
    warning: {
      main: "#1eda05",
    },
    tertiary: {
      main: "#111",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    body2: {
      lineHeight: 2,
    },
  },
});
