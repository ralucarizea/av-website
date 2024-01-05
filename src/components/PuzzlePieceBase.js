import React from "react";
import { Box, Button, Collapse, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import { MDfont, SMfont, XXLfont } from "../assets/styles/theme";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";

export default function PuzzlePieceBase({ width, height, clipPath, service }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      clipPath={clipPath}
      bgColor={service.bgColor}
      color={service.color}
      width={width}
      height={height}
      lineHeight={"2xs"}
      mx="-0.75vw"
      role="group"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <Box width="67%" textAlign={"center"}>
        {" "}
        <Box
          fontSize={{ base: "lg", lg: "xl", xl: "3xl" }}
          fontFamily={"serif"}
          lineHeight={"none"}
          mb={{ base: "10px", md: "12px", lg: "14px" }}
        >
          {service.title}
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Box>
            <Box
              mb={{
                base: "10px",
                md: "12px",
                lg: "12px",
                xl: "16px",
              }}
              fontSize={{
                base: "11.5px",
                md: "12px",
                lg: "13.5px",
                xl: "16px",
              }}
              fontFamily={"sans"}
            >
              {service.brief}
            </Box>
            <Button
              role="group"
              bgColor={service.color}
              color={service.bgColor}
              p="4px"
              mb="4px"
              h="fit"
              fontSize={SMfont}
              fontFamily={"sans"}
              fontWeight={500}
              _active={{
                bgColor: `${service.color}`,
                color: `${service.bgColor}`,
              }}
              _hover={{
                bgColor: `${service.color}`,
                color: `${service.bgColor}`,
              }}
              _focusVisible={{
                bgColor: `${service.color}`,
                color: `${service.bgColor}`,
                boxShadow: `0px 0px 28px -7px ${service.color}`,
              }}
              _focus={{
                bgColor: `${service.color}`,
                color: `${service.bgColor}`,
              }}
              // _groupHover={{ display: "inline-block" }}
            >
              <Link to={ROUTES[service.route]} > Citește mai mult</Link>
              <ArrowForwardIcon
                display="none"
                mx="4px"
                _groupHover={{ display: "inline-block" }}
              />
            </Button>
          </Box>
        </Collapse>
      </Box>
    </VStack>
  );
}
