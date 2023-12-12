import React from "react";
import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";
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
        pt={[16, 20, 22, 20, 20, 24]}
      >
        <Image
          mr={[0, 2, 4, 4, 6, 12, 20]}
          ml={[0, 2, 4, 0, 6, 12, 20]}
          borderRadius={"280px 280px 0 0"}
          h={{
            base: "33vh",
            xs: "42vh",
            sm: "54vh",
            md: "58vh",
            lg: "64vh",
            xl: "75vh",
          }}
          minW="220px"
          w={{
            base: "240px",
            xs: "280px",
            sm: "320px",
            md: "420px",
            lg: "500px",
            xl: "600px",
          }}
     
          src="https://res.cloudinary.com/dd82hyvds/image/upload/v1702369421/portraitImages/15-min_lr9tdd.jpg"
          objectFit="cover"
          objectPosition="center"
          zIndex="2"
        />
        <Box
          w="25%"
          minW="220px"
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
              lg: "2xl",
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
            my={{ base: 2, md: 4, lg: 8, xl: 12 }}
            mr={{ base: 2, md: 4, lg: 6, xl: 16 }}
            display={{ base: "none", sm: "block" }}
            lineHeight={"lg"}
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
      <VStack
        bg={"accents.army"}
        color="neutrals.light"
        h="50vh"
        zIndex="-1"
        mt="-20px"
        fontFamily="handwritten"
        justifyContent={"center"}
        fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }}
      >
        <Text alignSelf={"center"} w="50%" textAlign={"center"} pb="1.75vw"> 
          "Unexpressed emotions will never die. They are buried alive and will
          come forth later in uglier ways"
        </Text>
        <Text alignSelf={"flex-end"} w="30%" fontFamily="sans" fontStyle={"italic"}> - Sigmund Freud </Text>
      </VStack>
    </Flex>
  );
}

export default HomeHero;
