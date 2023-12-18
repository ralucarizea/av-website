import { Text, VStack, Flex, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MDfont, XXXLfont } from "../assets/styles/theme";
import StyledButton from "../components/StyledButton";
import LogoContainer from "../components/LogoContainer";
import {
  SectionTitle,
  StyledStackBox,
} from "../pages/Home/sections/HomeInfoBanner";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";

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

  @media screen and (max-width: 640px) {
    margin: 5px 0px;
  }
`;
const StyledLink = styled(Link)`
  &:hover {
    font-style: italic;
    font-weight: 500;
    transition: font-style font-weight 0.3s ease-in-out;
  }
`;
export default function Footer() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <VStack
      mt={{
        base: "44vw",
        xs: "28vw",
        sm: "14vw",
        md: "16vw",
        lg: "12vw",
        xl: "4vw",
      }}
      fontSize={MDfont}
      zIndex={100}
      gap={0}
      maxW="100vw"
      fontFamily={"sans"}
      color="neutrals.dark"
      //   justifyContent={{base: "space-between", md:"flex-start"}}
    >
      <VStack
        style={{ zIndex: 30000 }}
        h="fit"
        w="100%"
        bg="accents.army"
        color="neutrals.light"
        alignContent={"center"}
        pb={{ base: "6vw", sm: "9vw", md: "7vw", lg: "4vw", xl: "4vw" }}
        zIndex={12121}
      >
        <VStack
          justifyContent={"center"}
          w={{
            base: "80%",
            xs: "72%",
            sm: "70%",
            md: "66%",
            lg: "60%",
            xl: "45%",
          }}
          pt={{ base: "10vw", sm: "13vw", md: "11.5vw", lg: "10vw", xl: "8vw" }}
          // pb={{ base: "12vw", sm: "5vw", md: "6vw", lg: "2vw" }}
        >
          <SectionTitle>
            Lasa-ma sa te ghidez in procesul tau de vindecare
          </SectionTitle>
        </VStack>
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
          color={"accents.army"}
          bgColor={"#fff"}
        />
      </VStack>
      <Flex
        // bg="neutrals.light"
        color="accents.red"
        padding={{
          base: "5.5vw 0",
          xs: "5vw 0",
          sm: "4vw 1vw 1vw",
          md: "5vw 1vw",
          lg: "2vw 1vw",
          xl: "2vw 1vw",
        }}
        h="fit"
        minH={{ base: "auto", sm: "65vh", md: "62vh", lg: "60vh", xl: "58vh" }}
        w="100%"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        // textAlign={{base:"center", md: "left"}}
      >
        <LogoContainer
          color={"neutrals.dark"}
          justifyContent={{ base: "center", md: "flex-start" }}
          width={{ base: "15%", md: "22%" }}
          mt={{ base: "4vw", md: "8vw", lg: "7vw", xl: "4vw" }}
        />
        <Flex
          mt={{ base: "4vw", md: "8vw", lg: "7vw", xl: "4vw" }}
          pr={{ base: "10vw", md: "12px", lg: "48px", xl: "84px" }}
          pl={{ base: "10vw", md: "12px", lg: "48px", xl: "84px" }}
          flexWrap={{ base: "wrap", sm: "nowrap" }}
          w="100%"
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems={{ base: "center", sm: "flex-start" }}
          gap={{ base: 3, sm: 5, md: 7 }}
        >
          <StyledStackBox>
            <Box h="fit">
              <FooterNavbarCategoryTag>LOCAȚIE</FooterNavbarCategoryTag>
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
          <StyledStackBox>
            <Box h="fit">
              <FooterNavbarCategoryTag>DESPRE MINE</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                <Link to={ROUTES.ABOUT / `#resume`}>
                  Certificări & specializări
                </Link>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <Link to={`${ROUTES.ABOUT}#resume`}>Povestea mea </Link>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Galerie foto personală
              </FooterNavbarCategoryLink>
            </Box>
            <Box h="fit">
              <FooterNavbarCategoryTag>CONTACT</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Nr. telefon: </Text> +40 743 121 886
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Adresa e-mail: </Text>{" "}
                adinavarodi@psihoterapeut.ro
              </FooterNavbarCategoryLink>
            </Box>
          </StyledStackBox>
          <StyledStackBox>
            <Box h="fit">
              <FooterNavbarCategoryTag>SERVICII</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.INDIVIDUAL}>
                  Psihoterapie individuală
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.COUPLE}>
                  Psihoterapie de cuplu/familie
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.HIPNO}>Terapie prin hipnoză</StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.TRAUMA}>
                  Terapie prin Somatic Experiencing
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.EVALUATION}>
                  Evaluare psihologică
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.SEXOLOGY}>Psihosexologie</StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink to={ROUTES.GROUP}>Psihoterapie de grup</StyledLink>
              </FooterNavbarCategoryLink>
            </Box>
          </StyledStackBox>
        </Flex>
      </Flex>
    </VStack>
  );
}
