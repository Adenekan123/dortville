import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.component.jsx";
import About from "./pages/about.component";
import Contact from "./pages/contact.component";
import Services from "./pages/services.component.jsx";
import Careers from "./pages/careers.component.jsx";
import Products from "./pages/products.component";
import Blog from "./pages/blog.component";
import BlogPreview from "./pages/blogPreview.component";
import Farmvisit from "./pages/farmvisit.component";

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
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPreview />} />
        <Route path="/farmvisit" element={<Farmvisit />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
