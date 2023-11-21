import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import StyledButton from "../../../components/StyledButton";
import { HeroHeading } from "../../../assets/constants/styledcomponents";

function HomeHero() {
  return (
    <Flex
      flexDirection={"column"}
      h="fit"
      w="full"
      color={"neutrals.dark"}
      zIndex="1"
    >
      <Flex
        flexDirection={{ base: "column-reverse", sm: "row" }}
        textAlign={{ base: "center", sm: "left" }}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        minH="60vh"
        w="inherit"
        px={[1, 3, 4, 8, 10, 12, 20]}
        pt={[16, 20, 22, 24, 20, 24]}
      >
        <Box
          mx={[0, 2, 4, 4, 10, 12, 16]}
          borderRadius={"280px 280px 0 0"}
          h={{
            base: "33vh",
            xs: "36vh",
            sm: "48vh",
            md: "50vh",
            lg: "56vh",
            xl: "64vh",
          }}
          minW="220px"
          w={{
            base: "46vw",
            xs: "46vw",
            sm: "44vw",
            md: "42vw",
            lg: "38vw",
            xl: "32vw",
          }}
          maxW="580px"
          bg="accents.lime"
          zIndex="2"
        />
        <Box
          w="27%"
          minW="250px"
          fontSize={{
            base: "11px",
            xs: "xs",
            sm: "xs",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
        >
          <HeroHeading
            fontSize={{
              base: "md",
              xs: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "3xl",
            }}
          >
            Sunt <HeroHeading as="i"> Adina Varodi</HeroHeading>, psiholog
            clinician, hipnoterapeut & psihoterapeut integrativ{" "}
          </HeroHeading>
          <Text
            fontFamily={"handwritten"}
            fontSize={{
              base: "md",
              xs: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "3xl",
            }}
            lineHeight={"xs"}
            my={[3.5, 4, 5]}
            textAlign={{ base: "center", sm: "right" }}
          >
            {" "}
            Bine ai venit!
          </Text>
          <Text
            fontFamily={"sans"}
            my={{ base: 2, md: 4, lg: 8, xl: 18 }}
            mr={{ base: 2, md: 4, lg: 8, xl: 28 }}
            display={{ base: "none", sm: "block" }}
          >
            My therapeutic style is rooted in the belief that people are
            intrinsically valued and are deserving of fundamental human
            connection; to be seen,to be heard,and to be understood.
          </Text>
          <StyledButton
            text="Solicită o programare"
            width={"fit"}
            height={"5%"}
          >
            {" "}
          </StyledButton>
        </Box>
      </Flex>
      <Box bg={"accents.army"} minH="40vh" zIndex="-1" mt="-20px"></Box>
    </Flex>
  );
}

export default HomeHero;
