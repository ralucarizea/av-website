import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MDfont, XXLfont, XXXLfont } from "../assets/styles/theme";
import StyledButton from "../components/StyledButton";

export default function Footer() {
  return (
    <VStack mt={{ base: "44vw", xs: "28vw", sm: "14vw", md: "16vw", lg: "20vw" }} fontSize={MDfont}>
      <VStack
        h="fit"
        w="100%"
        bg="accents.army"
        color="neutrals.light"
        alignContent={"center"}
        pb="2vw"
      >
        <Text
          textAlign="center"
          w={{ base: "80%", xs:"60%", sm: "52%", md: "50%", lg: "42%", xl: "37%" }}
          pt={{ base: "8vw", sm: "5vw", md: "6vw", lg: "5vw" }}
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
          width={{ base: "150px", sm: "180px", md: "190px", lg: "220px" , xl:"250px"}}
          height={{ base: "40px", sm: "48px", md: "50px", lg: "64px" , xl: "64px"}}
        />
      </VStack>
      <HStack></HStack>
    </VStack>
  );
}
