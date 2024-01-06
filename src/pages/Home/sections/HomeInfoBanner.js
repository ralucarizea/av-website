import React from "react";
import { Box, Text, Flex, VStack, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { TbHeartHandshake } from "react-icons/tb";

export const StyledStackBox = styled(Box)`
  // background: pink;
  margin: ${(props) => props.m};
  height: 90%;
  width: 55%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  gap: 1.5vw;
  @media screen and (max-width: 490px) {
    width: 75%;
    gap: 16px;
  }
`;
export const StyledStack = styled(Flex)`
  flex-direction: column;
  max-width: 32%;
  align-items: center;
  height: 300px;
`;
export const SectionTitle = styled(Box)`
  text-align: center;
  width: 60%;
  font-family: "EdwardianScript";
  font-size: 68px;
  margin-bottom: 44px;
  line-height: 3rem;

  @media screen and (max-width: 1000px) {
    font-size: 53px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 820px) {
    font-size: 50px;
    margin-bottom: 24px;
    line-height: 2rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 48px;
    margin-bottom: 16px;
    line-height: 1.9rem;
  }
`;
export default function HomeInfoBanner() {
  return (
    <VStack
      bg="tints.lime"
      color="accents.lime"
      p={{
        base: "17vw 6vw",
        sm: "10vw 6vw",
        md: "8.25vw 5.75vw",
        lg: "6vw 3vw 5vw",
        xl: "6vw 5.75vw 5vw",
      }}
      h="auto"
      maxW="100vw"
      justifyContent={"space-evenly"}
    >
      <SectionTitle >Care sunt etapele unui proces terapeutic</SectionTitle>
      <Flex
        direction={{ base: "column", sm: "row" }}
        wrap="wrap"
        justifyContent="center"
        alignItems={{ base: "center", sm: "flex-start" }}
        color="inherit"
        fontFamily={"sans"}
        fontWeight={"500"}
        gap={4}
        mt={{ base: "5vw", md: "2.8vw" }}
      >
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "32%", lg: "32%",  xl: "28%" }}
          p={{base: 4, sm: 6, md: 3, lg: 2}}
          minW="180px"
        >
          <Icon
            mb={{ base: "8px", md: "16px" }}
            as={IoCalendarNumberOutline}
            w={{ base: "30px", sm: "34px", lg: "42px", xl: "50px" }}
            h={{ base: "30px", sm: "34px", lg: "42px", xl: "50px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w={{md: "100%", lg: "87%"}}>
            Prima etapă este cea de cunoaștere: pe baza întrebărilor deschise și
            a dialogului prietenos, voi efectua o anamneză ce încadrează traseul
            obiectivelor & nevoilor ce te-au determinat să apelezi la terapie
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "32%", lg: "32%", xl: "28%" }}
          p={{base: 4, sm: 6, md: 3, lg: 2}}
          minW="180px"
        >
          <Icon
            mb={{ base: "6px", md: "16px" }}
            as={TbMessages}
            w={{ base: "30px", sm: "34px", lg: "42px", xl: "50px" }}
            h={{ base: "30px", sm: "34px", lg: "42px", xl: "50px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w={{md: "100%", lg: "87%"}}>
            Mai departe, concepem împreună o alianță terapeutică bazată pe
            non-judecată, vulnerabilitate & încredere, unde greutățile pot fi
            depășite cu ajutorul metodelor specifice disfuncționalităților
            identificate.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "32%", lg: "32%", xl: "28%" }}
          p={{base: 4, sm: 6, md: 3, lg: 2}}
          minW="180px"
        >
          <Icon
            mb={{ base: "8px", md: "16px" }}
            as={TbHeartHandshake}
            w={{ base: "30px", sm: "34px", lg: "42px", xl: "52px" }}
            h={{ base: "30px", sm: "34px", lg: "42px", xl: "52px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w={{md: "100%", lg: "87%"}}>
            Ultima etapă constă în reîncadrarea situațiilor supărătoare, în
            explorarea & integrarea în viața de zi cu zi a soluțiilor de
            vindecare găsite împreună, precum și în regăsirea sinelui autentic.
          </Text>
        </Flex>
      </Flex>
    </VStack>
  );
}
