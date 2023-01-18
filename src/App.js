import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

import Header from "./components/common/header.component.jsx";
import Banner from "./components/banner.component.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
