import React from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import Logo from "../layouts/Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";

export default function LogoContainer({ color, justifyContent, width, mt }) {
  return (
    <Link to={ROUTES.HOME}>
      <Flex
        mt={mt}
        color={color}
        justifyContent={justifyContent}
        maxW="fit-content"
        h="100%"
        alignItems="center"
        // border=" 1px solid red"
      >
        <Icon
          p="calc(7px + 0.45vw) 0 calc(7px + 0.45vw) 0.7vw"
          minWidth={{ base: "3.8vw", md: "4vw", lg: "5vw", xl: "4vw" }}
          width={width}
          height={"100%"}
          as={Logo}
        />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          minW="fit-content"
          pl="10px"
        >
          <Box
            fontFamily={"WardahRounded"}
            fontSize={{
              base: "16px",
              sm: "16px",
              md: "17px",
              lg: "20px",
              xl: "22px",
            }}
            mb="-2px"
          >
            Adina Varodi
          </Box>
          <Box
            fontFamily={"DM Sans"}
            letterSpacing={"1px"}
            color={"firstAccent"}
            fontWeight={600}
            fontSize={{
              base: "8px",
              sm: "9px",
              md: "10px",
              lg: "11px",
              xl: "12px",
            }}
            mt="-2px"
          >
            PSIHOTERAPEUT
          </Box>{" "}
        </Flex>
      </Flex>
    </Link>
  );
}
