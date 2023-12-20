import { Box, Text, Divider, HStack, Show, VStack } from "@chakra-ui/react";
import React from "react";
import { MDfont } from "../../../assets/styles/theme";

export default function AboutBanner() {
  return (
    <VStack
    mb="10vw"
      py={{base: "8vw", md: "4.75vw"}}
      bg="tints.lime"
      color="accents.lime"
      flexDirection={{ base: "column" }}
      w="100%"
      px={{ base: "3vw", sm: "7vw", md: "8vw", lg: "10vw" }}
      fontFamily={"sans"}
      fontSize={MDfont}
    >
      <Show above="md">
        <Divider w="99%" />
      </Show>
      <HStack
        px={{ base: "6.5vw", sm: "4vw", md: "0vw", lg: "2vw" }}
        mt="1vw"
        w="100%"
        justifyContent={"space-between"}
        gap="5%"
        flexDirection={{ base: "column", md: "row" }}
      >

        <Box
          w="100%"
          my={{ base: "3vw", md: "1vw" }}
          fontSize={{
            base: "24px",
            xs: "28px",
            sm: "32px",
            md: "48px",
            lg: "55px",
          }}
          lineHeight={"2xs"}
          fontFamily={"serif"}
        >
          Motivația pentru vindecare
        </Box>
        <Box w="auto">
          Împărtășesc că suferințele și provocările din viața personală m-au
          îndreptat către acest domeniu unde, pe lângă experiențele enumerate,
          am învățat și încă învăț și pe propria piele ce înseamnă procesul
          terapeutic,{" "}
          <strong>
            {" "}
            atât din perspectiva de terapeut, cât și din cea de beneficiar
            (client)
          </strong>
          .
          <Text my="8px">
            Consider că eu, în calitate de terapeut, am nevoie de o igienă
            psihică și emoțională continuă și de o anumită ecologie interioară
            pentru a fi capabilă să ofer un suport de calitate pentru fiecare
            client. Așadar, continui și în prezent să lucrez cu mine intens în
            procese de dezvoltare personală, asociații, conferințe de
            specialitate anuale. Am învățat în ultimii ani cât de importantă e
            conexiunea cu propriul corp și cu mintea, iar acest lucru a devenit
            o prioritate în viața mea pentru a fi în contact cu mine însumi, cât
            și cu fiecare client în parte!
          </Text>
          <Text>
            <strong>
              Cred cu tărie că acest domeniu este unul în care învățăm
              permanent, nu doar despre natura umană cât și despre ceilalți, cât
              despre noi, oamenii din spatele rolului de psihoterapeut.
            </strong>
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}
