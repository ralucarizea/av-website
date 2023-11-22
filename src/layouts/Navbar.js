import React from "react";
import styled from "@emotion/styled";
import { Flex, Box, Show, Button, Icon, Link } from "@chakra-ui/react";
import Logo from "./Logo";

const NavbarLogoContainer = styled(Flex)`
  width: 38%;
  align-items: center;
  min-width: 200px;
  color: ${(props) => props.color};
  
`;
const NavbarButtonsContainer = styled(Flex)`
  color: ${(props) => props.color};
  align-items: center;
  justify-content: flex-end;
  padding-right: 10vw;
  width: 100%;
`;
const NavSidebarButton = styled(Button)``;
const NavLink = styled(Link)`
  font-family: "DM Sans"
  letter-spacing: 0.5px;
  font-size: calc(8px + 0.45vw);
  font-weight:400;
  margin: 0px 2vw;
`;

const Navbar = () => {
  return (
    <Flex
      width="100%"
      maxWidth="100vw"
      // minHeight="10vh"
      maxHeight="12.5vh"
      height="fit-content"
      justifyContent={"space-between"}
      boxShadow={"0px 1.5px 8px 1px rgba(0,0,0,0.41)"}
      zIndex={15}
      position={"sticky"}
      top={0}
      bg="#fff"
    >
      <NavbarLogoContainer color={"neutrals.dark"}>
        <Icon
          margin="4px"
          p="calc(7px + 0.55vw) 0.2vw calc(7px + 0.55vw) 0.9vw"
          minWidth="67px"
          width="22%"
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
      <Show above="md">
        <NavbarButtonsContainer color={"accents.red"}>
          <NavLink> SERVICII</NavLink>
          <NavLink> ARTICOLE</NavLink>
          <NavLink> DESPRE MINE</NavLink>
        </NavbarButtonsContainer>
      </Show>
      <Show below="md">
        <NavSidebarButton> </NavSidebarButton>
      </Show>
    </Flex>
  );
};

export default Navbar;
