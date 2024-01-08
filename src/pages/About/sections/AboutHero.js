import React from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { XXLfont } from "../../../assets/styles/theme";
export const PageTitle = styled(Text)`
  font-family: "EdwardianScript";
  font-size: calc(48px + 0.95vw);
  color: inherit;
  text-align: center;
  margin: 7vw auto 3vw;
  width: 75%;
  line-height: 2.15rem;

  @media screen and (max-width: 1000px) {
    margin: 11vw auto 3vw;
    font-size: calc(43px + 0.95vw);

  }
  @media screen and (max-width: 700px) {
    margin: 11vw auto 5vw;
    font-size: calc(40px + 0.95vw);
    width: 55%;


  }
  @media screen and (max-width: 490px) {
    margin: 15vw auto 8vw;
    width: 95%;
    font-size: calc(36px + 0.85vw);
    line-height: 1.95rem;

  }
`;

export default function AboutHero() {
  return (
    <Flex
    id="story"
      flexDirection={"column"}
      h="fit"
      w="full"
      color={"neutrals.dark"}
      zIndex="1"
      mb={{base: "10vw", md:"12vw", xl:"16vw"}}
    >
      {/* <PageTitle>Despre mine</PageTitle> */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        // flexWrap="wrap"
        alignItems={{base:"center", md: "flex-start"}}
        justifyContent="center"
        minH={{ base: "70vh", sm: "70vh", md: "70vh", lg: "80vh", xl: "100vh" }}
        w="inherit"
        px={{ base: 3, sm: 8, md: 12, lg: 16, xl: 20 }}
        mt={{ base: "60px", sm: "76px", md: "60px", lg: "80px", xl: "120px" }}
        mb={{ base: "60px", xs: "60px", sm: "70px", md: "80px", xl: "100px" }}
        // border={"1px solid red"}
      >
        <Box
          borderRadius={"13vw 0 0 4vw"}
          h={{
            base: "420px",
            xs: "500px",
            sm: "480px",
            md: "690px",
            lg: "750px",
            xl: "880px",
          }}
          w={{
            base: "320px",
            xs: "420px",
            sm: "400px",
            md: "470px",
            lg: "550px",
            xl: "600px",
          }}
          bgImage={
            'url("https://res.cloudinary.com/dd82hyvds/image/upload/v1702369405/portraitImages/12-1_qemncp.jpg")'
          }
          bgSize="cover"
          bgPosition="bottom"
          zIndex={1}
        />
        <VStack
          bg="#f7f4fa"
          color="accents.army"
          boxShadow={"0px 3px 11px 2px rgba(0,0,0,0.07)"}
          alignItems="flex-start"
          padding={{ base: "30px", md: "20px", lg: "24px 30px" }}
          alignSelf={{base: "center", md: "flex-end"}}
          ml={{base: "0",md:"-80px", lg:"-48px"}}
          mt={{base:"-48px", md: 0}}
          mb={{base:"0", md:"-80px", lg:"-36px"}}
          
          h={{
            base: "fit-content",
            xs: "500px",
            sm: "500px",
            md: "650px",
            lg: "670px",
            xl: "730px",
          }}
          w={{
            base: "320px",
            xs: "420px",
            sm: "410px",
            md: "420px",
            lg: "430px",
            xl: "530px",
          }}
          minW={{ base: "240px", xs: "200px" }}
          fontSize={{
            base: "12px",
            xs: "xs",
            sm: "xs",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          zIndex={3}
          borderRadius={"0 8vw 8vw 0"}
          justifyContent={"center"}
        >
          <Text fontSize={XXLfont} fontFamily={"serif"} pb="16px">
            Cum a început totul?
          </Text>
          <Text fontFamily={"sans"} lineHeight={"md"} w="92%" >
            Mă numesc <strong>Adina Varodi</strong> și sunt psiholog clinician și psihoterapeut
            integrativ pentru adulți, adolescenți & copii.
          </Text>
          <Text fontFamily={"sans"} lineHeight={"md"} w="92%">
            Fără să mă gândesc prea mult la viitorul profesional la acea vreme,
            aș putea spune că mi-am început parcursul de psihoterapeut{" "}
            <strong>acum mai bine de 6 ani</strong>, deși am studiat pentru
            prima dată psihologia in anul 1998, viața mea a luat un drum total
            diferit și am explorat la vremea aceea alte domenii valoroase ca
            profesor de Psihologie, Trainer IT aproximativ 10 ani, psihologia
            fiind la momentul acela insuficient dezvoltată în România. Am
            revenit cu multă determinare în 2017 urmând o formare profesională
            în Psihoterapie Integrativă și obținând astfel{" "}
            <strong>
              certificatele de la Colegiul Psihologilor din România în
              Psihologie clinică
            </strong>{" "}
            și <strong>Psihoterapeut Integrativ</strong> în 2019.{" "}
          </Text>

          <Text fontFamily={"sans"} lineHeight={"md"} w="92%">
            În acelaşi timp, mi-am continuat studiile în domeniu, fiind atrasă,
            în mod deosebit, de <strong>hipnoterapia Ericksoniană</strong>,
            precum și de formări complementare în terapiile sistemice de
            familie, cuplu, copii și psihosexologie.
          </Text>
          <Text fontFamily={"sans"} lineHeight={"md"} w="92%">
            În prezent, urmez o formarea in{" "}
            <strong>Somatic Experiencing</strong> care il care ca și fondator pe
            cunoscutul <strong>Peter A.Levine</strong>.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
