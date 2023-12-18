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
        px={{ base: 1, xs: 8, md: 8, lg: 12, xl: 20 }}
        pt={{ base: 20, xs: 16, sm: 16, md: 16, lg: 16, xl: 20 }}
        // pt={[16, 20, 22, 20, 20, 24]}
      >
        <Image
          // mr={[0, 2, 4, 4, 6, 12, 20]}
          mr={{
            base: 0,
            sm: 8,
            md: 10,
            lg: 12,
            xl: 20,
          }}
          // ml={[0, 2, 4, 0, 6, 12, 20]}
          ml={{
            base: 0,
            sm: 0,
            md: 0,
            lg: 12,
            xl: 20,
          }}
          borderRadius={"280px 280px 0 0"}
          h={{
            base: "45vh",
            xs: "48vh",
            sm: "58vh",
            md: "65vh",
            lg: "70vh",
            xl: "78vh",
          }}
          minW="220px"
          w={{
            base: "280px",
            xs: "320px",
            sm: "340px",
            md: "420px",
            lg: "500px",
            xl: "600px",
          }}
          src="https://res.cloudinary.com/dd82hyvds/image/upload/v1702893481/portraitImages/23-1_w5h6ca.jpg"
          objectFit="cover"
          objectPosition="center"
          zIndex="2"
        />
        <Box
          w={{
            base: "65%",
            xs: "55%",
            sm: "31%",
            md: "33%",
            lg: "30%",
            xl: "28%",
          }}
          fontSize={{
            base: "11px",
            xs: "xs",
            sm: "xs",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          mb={{ base: "20px", sm: "0px" }}
        >
          <HeroHeading
            fontSize={{
              base: "lg",
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
              base: "33px",
              md: "36px",
              lg: "42px",
              xl: "48px",
            }}
            lineHeight={"xs"}
            my={{
              base: "14px",
              sm: "14.5px",
              md: "15px",
              lg: "14px",
              xl: "18px",
            }}
            textAlign={{ base: "center", sm: "right" }}
          >
            Bine ai venit!
          </Text>
          <Text
            fontFamily={"sans"}
            my={{ base: 2, sm: 5, md: 5, lg: 8, xl: 10 }}
            mr={{ base: 2, sm: 3, md: 4, lg: 6, xl: 14 }}
            display={{ base: "none", sm: "block" }}
            lineHeight={"lg"}
          >
            My therapeutic style is rooted in the belief that people are
            intrinsically valued and are deserving of fundamental human
            connection; to be seen,to be heard,and to be understood.
          </Text>
          <StyledButton
            text="Solicită o programare"
            width={{ base: "fit", sm: "fit", md: "", lg: "fit", xl: "fit" }}
            height={{ base: "40px", sm: "42px", md: "48px",lg: "48px", xl: "56px" }}
            color={"#fff"}
            bgColor={"accents.red"}
          />
        </Box>
      </Flex>
      <VStack
        bg={"accents.army"}
        color="neutrals.light"
        h={{ base: "33vh", sm: "42vh", md: "44vh", lg: "50vh" }}
        zIndex="-1"
        mt={"-20px"}
        fontFamily="handwritten"
        justifyContent={"center"}
        fontSize={{
          base: "30px",
          sm: "33px",
          md: "36px",
          lg: "42px",
          xl: "48px",
        }}
        lineHeight={"2xs"}
      >
        <Text
          alignSelf={"center"}
          w={{ base: "70%", sm: "50%" }}
          textAlign={"center"}
          py="1.75vw"
        >
          "Unexpressed emotions will never die. They are buried alive and will
          come forth later in uglier ways"
        </Text>
        <Text
          alignSelf={{ base: "center", sm: "flex-end" }}
          w={{ base: "auto", sm: "30%" }}
          mt="2vw"
          fontFamily="sans"
          fontStyle={"italic"}
          fontSize={{
            base: "14px",
            sm: "15px",
            md: "18px",
            lg: "20px",
            xl: "20px",
          }}
        >
          {" "}
          - Sigmund Freud{" "}
        </Text>
      </VStack>
    </Flex>
  );
}

export default HomeHero;
