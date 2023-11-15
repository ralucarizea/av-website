import * as React from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ChakraProvider, Box, Button, Heading, Flex, Image} from "@chakra-ui/react";
import "./assets/fonts/fonts.css";


import Navbar from "./layouts/Navbar";
import { theme, locales } from "./assets/constants/theme";
import CustomIcon from "./components/CustomIcon";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
          {Object.keys(locales).map((language) => (
            <Box key={language} bg="red">
              {" "}
              <Button
              bg="#fff"
              height="fit-content"
              p="0px"
              m="2px"
                style={{
                  fontWeight:
                    i18n.resolvedLanguage === language ? "bold" : "normal",
                  fontSize: "12px"
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(language)}
              >
                {/* <Image src={"./assets/images/RO.png"} width="20px" height="15px" mr="4px" /> */}
                {locales[language]?.title}
              </Button>
            </Box>
          ))}
        <Heading>{t("main.header")}</Heading>
        
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
