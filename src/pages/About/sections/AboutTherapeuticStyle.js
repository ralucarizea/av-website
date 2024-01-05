import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { HiPuzzle } from "react-icons/hi";
import React from "react";
import { XXXLfont } from "../../../assets/styles/theme";
import { PageTitle } from "./AboutHero";
export const CaptionBox = styled(Box)`
  width: 50%;
  height: 100%;
  padding: ${(props) => props.p};
  min-width: 350px;
  font-size: calc(13.5px + 0.15vw);

  @media only screen and (max-width: 550px) {
    min-width: fit-content;
  }
`;
export const CaptionTitle = styled(Box)`
  font-size: calc(13px + 0.65vw);
  font-weight: 500;
  font-family: "DM Sans";
  margin: 0.8em 0px;
  text-align: ${(props) => props.textAlign};
  position: relative;

  @media only screen and (max-width: 550px) {
    text-align: center;
  }
`;
export const CaptionText = styled(Box)`
  margin: 0 auto;
  width: 88%;
  min-width: 300px;
  font-family: "DM Sans";
  font-weight: 400;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
  @media only screen and (max-width: 550px) {
    min-width: 150px;
  }
`;
export default function AboutTherapeuticStyle() {
  return (
    <Flex
      id="resume"
      minH="auto"
      maxW="100%"
      color="neutrals.dark"
      flexWrap={"wrap"}
      mx={{ base: "44px", md: "8vw", lg: "10vw" }}
      my={{ base: "40px" }}
      justifyContent="center"
    >
      {/* <Text
        w={{ base: "65%", sm: "100%" }}
        textAlign={"center"}
        py={{ base: "7vw", md: "5vw", lg: "3vw" }}
        fontFamily={"serif"}
        fontSize={{
          base: "20px",
          sm: "28px",
          md: "38px",
          lg: "44px",
          xl: "48px",
        }}
        lineHeight={"xs"}
      > */}
      <PageTitle> Abordarea mea terapeutica </PageTitle>
      {/* </Text> */}
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "2.65vw 4.75vw" }}>
        <CaptionTitle>
          Empatică
          <Icon
            transform={`rotate(0deg)`}
            opacity="0.6"
            top={{ base: "-100%", xs: "-90%", sm: "-80%", md: "-130%" }}
            left={{ base: "-2%", xs: "-5%", md: "-17%" }}
            w={{ base: "25vw", xs: "20vw", sm: "18vw", md: "13vw", xl: "10vw" }}
            h={{ base: "25vw", xs: "20vw", sm: "18vw", md: "13vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.lime"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>

        <CaptionText>
          De-a lungul timpului, am investit foarte mult în abilitatea de a
          asculta cu răbdare, de a înțelege și de a resimți emoțiile altora, în
          scopul oferirii de susținere și compasiune în relațiile atât din viața
          mea profesională, cât și în cea personală.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "2.65vw 4.75vw" }}>
        <CaptionTitle textAlign={"right"}>
          Flexibilă
          <Icon
            transform={`rotate(180deg)`}
            opacity="0.45"
            top={{ base: "-40%", xs: "-50%", sm: "-80%", md: "-15%" }}
            right={{ base: "-2%", xs: "5%", sm: "-3%", md: "-15%" }}
            w={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            h={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.yellow"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          Sunt o persoană flexibilă, adaptabilă și deschisă la schimbare,
          capabilă să se ajusteze cu ușurință la situații noi sau cerințe,
          manifestând o atitudine receptivă și înțelegătoare.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "2.65vw 4.75vw" }}>
        <CaptionTitle textAlign={"right"}>
          Autentică
          <Icon
            transform={`rotate(270deg)`}
            opacity="0.5"
            top={{ base: "-40%", xs: "-50%", sm: "-80%", md: "140%" }}
            right={{ base: "-2%", xs: "5%", sm: "-3%", md: "-6%" }}
            w={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            h={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.red"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          {" "}
          Îmi folosesc autenticitatea și conștiența de sine pentru a sprijini
          procesul de vindecare și creștere personală al clienților. Astfel,
          reușesc să creez un mediu sigur și de încredere în care clienții se
          simt liberi să exploreze și să împărtășească aspecte sensibile ale
          vieții lor.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "3vw 5.5vw" }}>
        <CaptionTitle>
          Diversificată
          <Icon
            transform={`rotate(90deg)`}
            opacity="0.1"
            top={{ base: "-50%", sm: "0%", md: "-120%" }}
            left={{ base: "20%", sm: "30%", md: "0%" }}
            w={{ base: "18vw", md: "12vw", xl: "10vw" }}
            h={{ base: "18vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"accents.army"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          Ca psihoterapeut integrativ, am grijă să îmi adaptez intervențiile
          terapeutice și să îmbin tehnici (cum ar fi terapia
          cognitiv-comportamentală, terapia psihodinamică, terapia experiențială
          sau terapia de cuplu) în funcție de situația și obiectivele
          clienților, pentru a le oferi acestora în cel mai eficient mod
          suportul necesar.
        </CaptionText>
      </CaptionBox>
      <CaptionTitle></CaptionTitle>
    </Flex>
  );
}
