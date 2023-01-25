import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

import { Box } from "@mui/material";

import Home from "./pages/home.component.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
