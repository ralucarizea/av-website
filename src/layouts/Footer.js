import {  Text, VStack, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { MDfont, XXXLfont } from "../assets/styles/theme";
import StyledButton from "../components/StyledButton";
import LogoContainer from "../components/LogoContainer";
import { StyledStackBox } from "../pages/Home/sections/HomeInfoBanner";
import styled from "@emotion/styled";

const FooterNavbarCategoryTag = styled(Text)`
  font-size: calc(1.1em - 1px);
  font-weight: 600;
  letter-spacing: -0.5px;
//   width: fit-content;
`;
const FooterNavbarCategoryLink = styled(Text)`
//   width: 80%;
  font-size: calc(1.1em - 1px);
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 1.25em;
  margin: 8px 0px;
  &:hover {
    // text-decoration: underline;
  }
`;
export default function Footer() {
  return (
    <VStack
      mt={{ base: "44vw", xs: "28vw", sm: "14vw", md: "16vw", lg: "20vw" }}
      fontSize={MDfont}
      zIndex={100}
      gap={0}
      maxW="100vw"
      fontFamily={"sans"}
      color="neutrals.dark"
    //   justifyContent={{base: "space-between", md:"flex-start"}}
    >
      <VStack
        h="fit"
        w="100%"
        bg="accents.army"
        color="neutrals.light"
        alignContent={"center"}
        pb="2vw"
        zIndex={12121}
      >
        <Text
          textAlign="center"
          w={{
            base: "80%",
            xs: "60%",
            sm: "52%",
            md: "50%",
            lg: "42%",
            xl: "37%",
          }}
          pt={{ base: "12vw", sm: "5vw", md: "6vw", lg: "5vw" }}
          pb="2vw"
          fontSize={XXXLfont}
          fontFamily={"handwritten"}
          letterSpacing={"tight"}
          lineHeight={"sm"}
        >
          {" "}
          Lasa-ma sa te ghidez in procesul tau de vindecare{" "}
        </Text>
        <StyledButton
          text={"Fă o programare online"}
          width={{
            base: "150px",
            sm: "180px",
            md: "190px",
            lg: "220px",
            xl: "250px",
          }}
          height={{
            base: "40px",
            sm: "48px",
            md: "50px",
            lg: "64px",
            xl: "64px",
          }}
        />
      </VStack>
      <Flex
        // bg="neutrals.light"
        color="accents.red"
        py="3vw"
        px="2vw"
        h="fit"
        minH="58vh"
        w="100%"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        // textAlign={{base:"center", md: "left"}}

      >
        <LogoContainer color={"neutrals.dark"} justifyContent={{base:"center", md: "flex-start"}} width={{base: "15%", md: "22%"}}/>
        <Flex
          mt={{ base: "4vw", md: "8vw", lg: "7vw", xl: "4vw" }}
          pr={{base: "10vw", md:"36px", lg: "48px", xl:"84px"}}
          pl={{base: "10vw", md:"36px", lg: "48px", xl:"84px"}}
          flexWrap={{base: "wrap", sm:"nowrap" }}
          w="100%"
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems={{base: "center", sm: "flex-start"}}
          gap={{base:3, sm:5, md: 7}}
        >
          <StyledStackBox>
            <Box h="fit" >
              <FooterNavbarCategoryTag>LOCAȚIE</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                Calea Moșilor, nr. 214, bl. C10, sc.C, ap 89
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Strada Anastasie Simu 6, București 010294
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Strada Copăceni 46, București 030396
              </FooterNavbarCategoryLink>
            </Box>
            <Box h="fit">
              <FooterNavbarCategoryTag>PROGRAM</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                Luni-Vineri: 10:00 - 18:00
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Sâmbătă: 12:00 - 16:00
              </FooterNavbarCategoryLink>
            </Box>
          </StyledStackBox>
          <StyledStackBox >
            <Box h="fit">
              <FooterNavbarCategoryTag>DESPRE MINE</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                Certificări & specializări
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>Povestea mea </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Galerie foto personală
              </FooterNavbarCategoryLink>
            </Box>
            <Box h="fit">
              <FooterNavbarCategoryTag>CONTACT</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Nr. telefon: </Text> +40183003923
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Adresa e-mail: </Text>{" "}
                adinavarodi@psihoterapeut.ro
              </FooterNavbarCategoryLink>
            </Box>
          </StyledStackBox>
          <StyledStackBox >
            <Box h="fit">
              <FooterNavbarCategoryTag>SERVICII</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                Psihoterapie individuală
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Psihoterapie de cuplu/familie{" "}
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Terapie prin hipnoză
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>Traumă</FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Evaluare psihologică
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Psihoterapie online
              </FooterNavbarCategoryLink>
            </Box>
          </StyledStackBox>
        </Flex>
      </Flex>
    </VStack>
  );
}
