import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

import Home from "./pages/blog-preview.component.jsx";
import About from "./pages/about.component";
import Contact from "./pages/contact.component";
import Services from "./pages/services.component.jsx";
import Careers from "./pages/careers.component.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Services />
    </ThemeProvider>
  );
}

export default App;
