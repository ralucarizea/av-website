import * as React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./assets/constants/data";

import { ChakraProvider } from "@chakra-ui/react";
import "./assets/fonts/fonts.css";
import {
  theme,
  // locales
} from "./assets/styles/theme";
import Home from "./pages/Home/Home";
import Navbar from "./layouts/Navbar";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import Footer from "./layouts/Footer";
import FAQ from "./layouts/FAQ";
// import CustomIcon from "./components/CustomIcon";

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <FAQ />
      <Footer />
    </ChakraProvider>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
