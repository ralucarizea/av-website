import { Box, Button, VStack } from "@chakra-ui/react";
import { StyledLink } from "../layouts/Footer";
import { ROUTES } from "../assets/constants/data";
import React from "react";

export default function Services() {
  return (
    <VStack
      mw="100%"
      h="fit-content"
      textAlign="center"
      pt="15vh"
      fontSize={{
        base: "25px",
        sm: "30px",
        md: "40px",
        lg: "50px",
        xl: "55px",
      }}
      fontFamily="handwritten"
      letterSpacing={"-1px"}
    >
      <Box>Ups, nu am gasit ceea ce cautai!</Box>
      <Button
        fontSize={{
          base: "14px",
          sm: "15px",
          md: "16px",
          lg: "18px",
          xl: "19px",
        }}
        textDecoration={"underline"}
        fontFamily={"sans"}
        bgColor="transparent"
        _onhover={{ bgColor: "transparent" }}
      >
        <StyledLink to={ROUTES.HOME}>Inapoi la pagina principala</StyledLink>
      </Button>
    </VStack>
  );
}
