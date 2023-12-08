import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { XXXLfont } from "../../../assets/styles/theme";
import styled from "@emotion/styled";

export const StyledStackBox = styled(Box)`
background: transparent;
  margin: ${(props) => props.m};
  height: 90%;
  width: 55%;
  min-width: 150px;
  // border: 1px solid ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  gap: 1.5vw;
`;

export default function HomeInfoBanner() {
  return (
    <VStack
      bg="accents.army"
      color="tints.red"
      p="6vw"
      h="auto"
      maxW="100vw"
      justifyContent={"space-evenly"}
    >
      <Text
        fontSize={XXXLfont}
        fontFamily={"handwritten"}
        mb={{ base: 4, md: 10, lg: 16 }}
        w="68%"
        textAlign={"center"}
        area={"header"}
      >
        Cum se desfasoară o sedintă
      </Text>
      <Flex
        flexWrap={"wrap"}
        minH="20vh"
        w="100%"
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems={"center"}
        gap={4}
      >
        <StyledStackBox bg="tomato"></StyledStackBox>
        <StyledStackBox bg="yellow"></StyledStackBox>
        <StyledStackBox bg="lime"></StyledStackBox>
      </Flex>
    </VStack>
  );
}
