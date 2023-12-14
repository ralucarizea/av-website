import React from "react";
import { Flex, Box, Icon, Image, VStack, HStack } from "@chakra-ui/react";
import Logo from "../layouts/Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";

export default function LogoContainer({ color }) {
  return (
    <Link to={ROUTES.HOME}>
      <Flex alignItems={"center"}>
        <Image
          w={{ base: "", sm: "", md: "", lg: "", xl: "130px" }}
          h={{ base: "", sm: "", md: "", lg: "", xl: "110px" }}
          src={"/images/brainLogo.png"}
          ml="8px"
        />
        <Flex flexDirection={"column"} minW="fit" alignItems={"center"}>
          {" "}
          <Box
            minW="fit"
            fontFamily={"WardahRounded"}
            fontSize={{
              base: "16px",
              sm: "16px",
              md: "17px",
              lg: "20px",
              xl: "22px",
            }}
          >
            Adina Varodi
          </Box>
          <Box
            fontFamily={"DM Sans"}
            letterSpacing={"1px"}
            fontWeight={600}
            fontSize={{
              base: "8px",
              sm: "9px",
              md: "10px",
              lg: "11px",
              xl: "12px",
            }}
          >
            PSIHOTERAPEUT
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
}
