import React from "react";
import styled from "@emotion/styled";
import { Flex, Box, Show, Button, Icon } from "@chakra-ui/react";
import Logo from "./Logo";

const NavbarLogoContainer = styled(Flex)`
  width: 35%;
  align-items: center;
  min-width: 200px;
`;
const NavbarButtonsContainer = styled(Box)``;
const NavSidebarButton = styled(Button)``;

const Navbar = () => {
  return (
    <Flex
      width="100%"
      minHeight="7vh"
      maxHeight="12vh"
      height="fit-content"
      justifyContent={"space-between"}
      color={"neutrals.dark"}
      boxShadow={"0px 1.5px 8px 1px rgba(0,0,0,0.41)"}
      zIndex={10}
    >
      <NavbarLogoContainer>
        <Icon
          margin="4px "
          p="calc(6px + 0.75vw) 0.2vw calc(6px + 0.75vw) 0.75vw"
          minWidth="68px"
          width="20%"
          height="100%"
          as={Logo}
        />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          minWidth="fit-content"
        >
          <Box
            fontFamily={"WardahRounded"}
            fontSize={{
              base: "13px",
              sm: "16px",
              md: "17px",
              lg: "20px",
              xl: "23px",
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
      </NavbarLogoContainer>
      <Show above="sm">
        <NavbarButtonsContainer> </NavbarButtonsContainer>
      </Show>
      <Show below="sm">
        <NavSidebarButton> </NavSidebarButton>
      </Show>
    </Flex>
  );
};

export default Navbar;
