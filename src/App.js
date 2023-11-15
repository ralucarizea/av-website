import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./assets/fonts/fonts.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const locales = {
  en: { title: "Engleza" },
  ro: { title: "Romana" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <ul>
        {Object.keys(locales).map((language) => (
          <li key={language}>
            {" "}
            <button
              style={{
                fontWeight:
                  i18n.resolvedLanguage === language ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(language)}
            >
              {locales[language].title}
            </button>
          </li>
        ))}
      </ul>
      <h1
        style={{
          fontFamily: "WardahRounded",
          fontSize: "30px",
          letterSpacing: "-0.5px",
        }}
      >
        {t("main.header")}
      </h1>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ChakraProvider>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </ChakraProvider>
  );
}
