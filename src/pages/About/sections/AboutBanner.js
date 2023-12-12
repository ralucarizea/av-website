import { Box, Divider, HStack, Show, VStack } from "@chakra-ui/react";
import React from "react";
import { MDfont } from "../../../assets/styles/theme";

export default function AboutBanner() {
  return (
    <VStack
      py="4vw"
      bg="accents.army"
      color="neutrals.light"
      flexDirection={{ base: "column" }}
      w="100%"
      px="12vw"
      fontFamily={"sans"}
      fontSize={MDfont}
    >
      <Show above="md">
        <Divider w="99%" />
      </Show>
      <HStack
        px={{ base: "2vw", sm: "2vw", md: "4vw", lg: "4vw" }}
        mt="1vw"
        w="100%"
        justifyContent={"space-between"}
        gap="5%"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box
          w="100%"
          my={{ base: "3vw", md: "1vw" }}
          fontSize={{
            base: "24px",
            xs: "28px",
            sm: "32px",
            md: "40px",
            lg: "55px",
          }}
          lineHeight={"2xs"}
          fontFamily={"serif"}
        >
          Motivația pentru vindecare
        </Box>
        <Box w="auto">
          I want to learn about you and develop a human-to-human connection.
          Trust is the key to successful therapy. I invite you to come in just
          as you are. I am guided by what works and committed to the process of
          change. We can’t change the past or control the future, but we can
          work towards building your resilience and flexibility.
        </Box>
      </HStack>
    </VStack>
  );
}
