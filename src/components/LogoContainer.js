import React from "react";
import { Flex, Box, Icon, Image, VStack, HStack } from "@chakra-ui/react";
import Logo from "../layouts/Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../assets/constants/data";

export default function LogoContainer({ color }) {
  return (
    <Link to={ROUTES.HOME}>
      <Flex alignItems={"center"} h="100%" pl="10px" w="max-content">
        <Image
          w={{
            base: "80px",
            xs: "80px",
            sm: "100px",
            md: "100px",
            lg: "100px",
            xl: "110px",
          }}
          h={{
            base: "70px",
            xs: "75px",
            sm: "85px",
            md: "90px",
            lg: "90px",
            xl: "100px",
          }}
          src={"/images/brainLogo.png"}
          
        />
        <Flex flexDirection={"column"} minW="fit" alignItems={"center"}>
          <Box
            minW="fit"
            fontFamily={"EdwardianScript"}
            lineHeight={"2xs"}
            fontSize={{
              base: "26px",
              sm: "28px",
              md: "28px",
              lg: "32px",
              xl: "36px",
            }}
            mb={{base: "-6px", md: "-8px"}}
          >
            Adina Varodi
          </Box>
          <Box
            fontFamily={"DM Sans"}
            letterSpacing={"1px"}
            fontWeight={600}
            fontSize={{
              base: "10px",
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
