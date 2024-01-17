import React from "react";
import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";
import StyledButton from "../../../components/StyledButton";
import { HeroHeading } from "../../../assets/constants/styledcomponents";
import { Link } from "@chakra-ui/react";

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
        alignItems={{ base: "center", sm: "top", md: "center" }}
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
            sm: "60vh",
            md: "65vh",
            lg: "70vh",
            xl: "76vh",
          }}
          minW="220px"
          w={{
            base: "280px",
            xs: "320px",
            sm: "340px",
            md: "420px",
            lg: "500px",
            xl: "590px",
          }}
          src="https://res.cloudinary.com/dd82hyvds/image/upload/v1705316827/portraitImages/23-1-1_ygfltk.jpg"
          objectFit="cover"
          objectPosition="right"
          zIndex="2"
        />
        <Box
          w={{
            base: "65%",
            xs: "55%",
            sm: "35%",
            md: "33%",
            lg: "30%",
            xl: "28%",
          }}
          fontSize={{
            base: "13px",
            xs: "13.75px",
            sm: "14px",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          fontFamily={"sans"}
          mb={{ base: "20px", sm: "0px" }}
        >
          <HeroHeading
            fontSize={{
              base: "lg",
              xs: "22px",
              sm: "22px",
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
              xs: "33.5px",
              sm: "35px",
              md: "41px",
              lg: "44px",
              xl: "46px",
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
            my={{ base: 2, sm: 4, md: 5, lg: 8, xl: 10 }}
            mr={{ base: 2, sm: 4, md: 4, lg: 6, xl: 14 }}
            display={{ base: "none", sm: "block" }}
            lineHeight={"lg"}
          >
            Începe o experiență terapeutică personalizată care îți onorează
            povestea, îți hrănește bunăstarea și te ghidează spre împuternicirea
            vocii tale interioare. Calea ta către claritate și pace poate începe
            aici!
          </Text>
          <Link href="https://cal.com/adinavarodi" isExternal>
            <StyledButton
              text="Solicită o programare"
              width={{ base: "fit", sm: "fit", md: "", lg: "fit", xl: "fit" }}
              height={{
                base: "44px",
                xs: "46px",
                sm: "47px",
                md: "48px",
                lg: "48px",
                xl: "56px",
              }}
              color={"#fff"}
              bgColor={"accents.red"}
            />
          </Link>
        </Box>
      </Flex>
      <VStack
        bg="#f3f0ff"
        color={"accents.army"}
        h={{ base: "38vh", sm: "40vh", md: "48vh", lg: "52vh" }}
        zIndex="-1"
        mt={"-28px"}
        fontFamily="handwritten"
        justifyContent={"center"}
        fontSize={{
          base: "30.5px",
          xs: "33.5px",
          sm: "35px",
          md: "41px",
          lg: "44px",
          xl: "46px",
        }}
        lineHeight={{ base: "0.82em", xs: "0.9em", md: "0.85em" }}
      >
        <Text
          alignSelf={"center"}
          w={{ base: "74%", sm: "55%", md: "50%" }}
          textAlign={"center"}
          pt={{ base: "12vw", xs: "10vw", sm: "10vw", md: "9vw", lg: "8vw" }}
          pb={{ base: "2vw", sm: "1.6vw", md: "1.25vw" }}
        >
          Viata nu este ceva la care poti da un raspuns astazi. Ar trebui sa te
          bucuri de procesul de asteptare, de procesul de a deveni ceea ce esti.
          Nu este nimic mai incantator decat sa plantezi seminte de flori si sa
          nu stii ce fel de flori vor aparea
        </Text>
        <Text
          alignSelf={{ base: "center", md: "flex-end" }}
          w={{ base: "auto", md: "30%" }}
          mt={{ base: "2.25vw", md: "3.75vw" }}
          mb={{ base: "2.5vw", sm: "1.7vw", md: "3.75vw" }}
          fontFamily="sans"
          fontStyle={"italic"}
          fontSize={{
            base: "14.5px",
            sm: "15px",
            md: "18px",
            lg: "20px",
            xl: "20px",
          }}
        >
          {" "}
          - Milton H. Erickson
        </Text>
      </VStack>
    </Flex>
  );
}

export default HomeHero;
