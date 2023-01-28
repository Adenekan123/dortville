import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.component.jsx";
import About from "./pages/about.component";
import Contact from "./pages/contact.component";
import Services from "./pages/services.component.jsx";
import Careers from "./pages/careers.component.jsx";

import Header from "./components/common/header.component.jsx";
import Footer from "./components/common/footer.component.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
