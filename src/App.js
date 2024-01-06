import React, { Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomeServicesMenuData, ROUTES } from "./assets/constants/data";
import "./assets/fonts/fonts.css";
import { theme } from "./assets/styles/theme";
import Home from "./pages/Home/Home";
import Navbar from "./layouts/Navbar";
import Blog from "./pages/Blog/Blog";
import ServicePage from "./pages/Services/ServicePage";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import Footer from "./layouts/Footer";
import FAQ from "./layouts/FAQ components/FAQ";
import BlogPost from "./pages/Blog/BlogPost";

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.BLOG, element: <Blog /> },
  { path: ROUTES.BLOG_POST, element: <BlogPost /> },
  {
    path: ROUTES.INDIVIDUAL,
    element: <ServicePage service={HomeServicesMenuData[0]} />,
  },
  {
    path: ROUTES.COUPLE,
    element: <ServicePage service={HomeServicesMenuData[1]} />,
  },
  {
    path: ROUTES.TRAUMA,
    element: <ServicePage service={HomeServicesMenuData[2]} />,
  },
  {
    path: ROUTES.HIPNO,
    element: <ServicePage service={HomeServicesMenuData[3]} />,
  },
  {
    path: ROUTES.EVALUATION,
    element: <ServicePage service={HomeServicesMenuData[4]} />,
  },
  {
    path: ROUTES.SEXOLOGY,
    element: <ServicePage service={HomeServicesMenuData[5]} />,
  },
  {
    path: ROUTES.GROUP,
    element: <ServicePage service={HomeServicesMenuData[6]} />,
  },
  { path: ROUTES.NOT_FOUND, element: <NotFound /> },
];

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <FAQ />
      <Footer />
      </ParallaxProvider>
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
