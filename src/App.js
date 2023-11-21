import * as React from "react";
import { Suspense } from "react";
// import { useTranslation } from "react-i18next";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import "./assets/fonts/fonts.css";
import {
  theme,
  // locales
} from "./assets/styles/theme";
import Home from "./pages/Home/Home";
// import CustomIcon from "./components/CustomIcon";

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Home />
    </>
  );
}

export default function WrappedApp() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </ChakraProvider>
  );
}
