import React from "react";
import {  Box, Text, Flex, VStack } from "@chakra-ui/react";
import {  XXLfont } from "../../../assets/styles/theme";

export default function HomeInfoBanner() {
  return (
    <VStack bg="accents.army" color="tints.red" p="4vw" h="auto" maxW="100vw" justifyContent={"space-evenly"}>
      <Text
        fontSize={XXLfont}
        fontFamily={"handwritten"}
        mb={{ base: 4, md: 10, lg: 16 }}
        w="68%"
        textAlign={"center"}
        area={"header"}
      >
        Cum se desfasoară o sedintă
      </Text>
      <Flex flexWrap={"wrap"}  minH="20vh" w="100%" justifyContent={{base: "center", lg: "space-between"}} alignItems={"center"} gap={4}>
        {" "}
        <Box bg="tomato" h="10vh" w="32%" minWidth="220px" minH="180px"></Box>
        <Box bg="yellow" h="10vh" w="32%" minWidth="220px" minH="180px"></Box>
        <Box bg="lime" h="10vh" w="32%" minWidth="220px" minH="180px"></Box>{" "}
      </Flex>
    </VStack>
  );
}
