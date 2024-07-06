import { Text, VStack, Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MDfont } from "../assets/styles/theme";
import StyledButton from "../components/StyledButton";
import LogoContainer from "../components/LogoContainer";
import {
  // SectionTitle,
  StyledStackBox,
} from "../pages/Home/sections/HomeInfoBanner";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";
import { HashLink } from "react-router-hash-link";

const FooterNavbarCategoryTag = styled(Text)`
  font-size: calc(1.05em - 1px);
  font-weight: 700;
  letter-spacing: -0.5px;
  //   width: fit-content;
`;
const FooterNavbarCategoryLink = styled(Text)`
  //   width: 80%;
  font-size: 16.5px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.25em;
  margin: 8px 0px;

  @media screen and (max-width: 1350px) {
    font-size: 15.5px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
  @media screen and (max-width: 820px) {
    font-size: 14.5px;
    margin: 7px 0px;
  }
  @media screen and (max-width: 640px) {
    margin: 4px 0px;
    font-size: 14px;
  }
`;
export const StyledLink = styled(Link)`
  &:hover {
    font-style: italic;
    font-weight: 500;
    transition: font-style font-weight 0.3s ease-in-out;
  }
`;

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -160;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <VStack
      mt={{
        base: "40vw",
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
        style={{ zIndex: 10 }}
        h="fit"
        w="100%"
        bg="accents.army"
        color="neutrals.light"
        alignContent={"center"}
        pb={{
          base: "20px",
          xs: "28px",
          sm: "9vw",
          md: "7vw",
          lg: "4vw",
          xl: "4vw",
        }}
        zIndex={12121}
      >
        <Box
          pt={{
            base: "12.35vw",
            xs: "11.75vw",
            sm: "13.5vw",
            md: "11.5vw",
            lg: "10vw",
            xl: "8vw",
          }}
          textAlign="center"
          fontFamily="handwritten"
          w={{
            base: "70%",
            xs: "68%",
            sm: "58%",
            md: "53%",
            lg: "40%",
            xl: "45%",
          }}
          mb={{
            base: "16px",
            xs: "12px",
            sm: "20px",
            md: "36px",
            lg: "40px",
            xl: "58px",
          }}
          fontSize={{
            base: "40px",
            xs: "43px",
            sm: "50px",
            md: "",
            lg: "52px",
            xl: "66px",
          }}
          lineHeight={{
            base: "1.65rem",
            xs: "2rem",
            sm: "2.4rem",
            md: "2.5rem",
            lg: "2.7rem",
            xl: "3rem",
          }}
        >
          Lasa-ma sa te ghidez in procesul tau de vindecare
        </Box>
        <ChakraLink href="https://cal.com/adinavarodi" isExternal>
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
              lg: "60px",
              xl: "64px",
            }}
            color={"accents.army"}
            bgColor={"#fff"}
          />
        </ChakraLink>
      </VStack>
      <Flex
        // bg="neutrals.light"
        color="accents.red"
        padding={{
          base: "16px 0 16px",
          xs: "4vw 0 8px",
          sm: "4vw 1vw 1vw",
          md: "4vw 3vw",
          lg: "2vw 1vw",
          xl: "2vw 1vw",
        }}
        h="fit"
        minH={{ base: "auto", sm: "65vh", md: "62vh", lg: "60vh", xl: "58vh" }}
        w="100%"
        justifyContent={{ base: "flex-start", lg: "space-between" }}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        // textAlign={{base:"center", md: "left"}}
      >
        <LogoContainer
          color={"neutrals.dark"}
          justifyContent={{ base: "center", md: "flex-start" }}
          width={{ base: "0%", md: "22%" }}
          mt={{ base: "1vw", md: "8vw", lg: "7vw", xl: "4vw" }}
        />
        <Flex
          mt={{
            base: "4vw",
            xs: "10px",
            sm: "26px",
            md: "4vw",
            lg: "10vw",
            xl: "4vw",
          }}
          pr={{ base: "8vw", sm: "20px", md: "12px", lg: "0", xl: "84px" }}
          pl={{ base: "8vw", sm: "20px", md: "12px", lg: "0px", xl: "84px" }}
          flexWrap={{ base: "wrap", sm: "nowrap" }}
          w="100%"
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems={{ base: "center", sm: "flex-start" }}
          gap={{ base: 3.5, sm: 5, md: 7 }}
        >
          <StyledStackBox>
            <Box h="fit">
              <FooterNavbarCategoryTag>LOCAȚIE</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
              Str.Ferigii nr.1, bl.19, sc.A, ap.1, Brasov
              </FooterNavbarCategoryLink>
              {/* <FooterNavbarCategoryLink>
                B-dul Dimitrie Cantemir nr. 2, bl. P3, sc. 2, București 040241 (Therapy Hub)
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                Str. Atanasie Simu nr. 6, Bucuresti (Therapy Hub) 
              </FooterNavbarCategoryLink> */}
            </Box>
            <Box h="fit">
              <FooterNavbarCategoryTag>PROGRAM</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                Luni-Vineri: 09:00 - 18:00
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
                <StyledLink>
                  <HashLink
                    smooth
                    scroll={scrollWithOffset}
                    to={`${ROUTES.ABOUT}#certifications`}
                  >
                    Certificări & specializări
                  </HashLink>
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink>
                  <HashLink smooth to={`${ROUTES.ABOUT}#story`}>
                    Povestea mea{" "}
                  </HashLink>
                </StyledLink>
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <StyledLink>
                  <HashLink
                    smooth
                    scroll={scrollWithOffset}
                    to={`${ROUTES.ABOUT}#personalGallery`}
                  >
                    Galerie foto personală
                  </HashLink>
                </StyledLink>
              </FooterNavbarCategoryLink>
            </Box>
            <Box h="fit">
              <FooterNavbarCategoryTag>CONTACT</FooterNavbarCategoryTag>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Nr. telefon: </Text> +40 743 121 886
              </FooterNavbarCategoryLink>
              <FooterNavbarCategoryLink>
                <Text fontWeight={500}> Adresa e-mail: </Text>{" "}
                psihoterapeut@adinavarodi.com
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
                <StyledLink to={ROUTES.HIPNO}>Hipnoterapie</StyledLink>
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
