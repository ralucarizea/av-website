import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { MDfont, SMfont, XXLfont } from "../assets/styles/theme";

export default function PuzzlePieceBase({ width, height, clipPath, service }) {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      clipPath={clipPath}
      bgColor={service.bgColor}
      color={service.color}
      width={width}
      height={height}
      lineHeight={"2xs"}
      mx="-0.75vw"
    >
      <Box height="40%" width="60%" textAlign={"center"}>
        {" "}
        <Box fontSize={XXLfont} fontFamily={"serif"}>
          {service.title}
        </Box>
        <Box
          m={{ base: "4px", sm: "8px", lg: "10px", xl: "16px" }}
          fontSize={SMfont}
          fontFamily={"sans"}
        >
          {service.brief}
        </Box>
        <Button
          bgColor="inherit"
          color="inherit"
          textDecoration={"underline"}
          m="6px"
          fontSize={MDfont}
          fontFamily={"sans"}
          fontWeight={600}
          _active={{ bgColor: `${service.color}`, color: `${service.bgColor}` }}
          _hover={{ bgColor: `${service.color}`, color: `${service.bgColor}` }}
          _focusVisible={{
            bgColor: `${service.color}`,
            color: `${service.bgColor}`,
            boxShadow: `0px 0px 28px -7px ${service.color}`,
          }}
          _focus={{ bgColor: `${service.color}`, color: `${service.bgColor}` }}
        >
          Citește mai mult
          <ArrowForwardIcon mx="4px" />{" "}
        </Button>
      </Box>
    </Flex>
  );
}
