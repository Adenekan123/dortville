import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#31AD5D",
    },
    warning: {
      main: "#ff9800",
    },
    tertiary: {
      main: "#333",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
  },
});
