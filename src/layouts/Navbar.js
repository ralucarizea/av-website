import React from "react";
import styled from "@emotion/styled";
import {
  Flex,
  Show,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ROUTES } from "../assets/constants/data";
import { Link } from "react-router-dom";
import LogoContainer from "../components/LogoContainer";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavbarButtonsContainer = styled(Flex)`
  color: ${(props) => props.color};
  align-items: center;
  justify-content: flex-end;
  padding-right: 10vw;
  width: 100%;
`;
const NavSidebarButton = styled(Button)``;

const NavLink = styled(Link)`
  font-family: "DM Sans";
  letter-spacing: 0.5px;
  font-size: calc(8px + 0.45vw);
  font-weight: 400;
  margin: 0px 2vw;
`;

const Navbar = () => {
  return (
    <Flex
      width="100%"
      maxWidth="100vw"
      minHeight="10.5vh"
      height="fit-content"
      justifyContent={"space-between"}
      boxShadow={"0px 1.5px 8px 1px rgba(0,0,0,0.41)"}
      zIndex={8}
      position={"sticky"}
      top={0}
      bg="#fff"
    >
      <LogoContainer
        color={"neutrals.dark"}
        justifyContent={"flex-start"}
        width={"25%"}
      />
      <Show above="md">
        <NavbarButtonsContainer color={"accents.red"}>
          <NavLink>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                _hover={{ bg: "tints.red" }}
                _expanded={{ bg: "accents.red", color: "#fff"}}
                _focus={{ boxShadow: "" }}
              >
                <Link to={ROUTES.SERVICES}>
                  SERVICII <ChevronDownIcon />
                </Link>
              </MenuButton>
              <MenuList borderRadius="0" outlineOffset={"0"} outline={"none"} >
                <MenuItem my="4px">Psihoterapie individuală</MenuItem>
                <MenuItem my="4px">Psihoterapie de cuplu/familie</MenuItem>
                <MenuItem my="4px">Hipnoză</MenuItem>
                <MenuItem my="4px">Traumă</MenuItem>
                <MenuItem my="4px">Evaluare psihologică</MenuItem>
                <MenuItem my="4px">Psihoterapie online</MenuItem>
              </MenuList>
            </Menu>
          </NavLink>
          <NavLink>
            <Link to={ROUTES.BLOG}>ARTICOLE</Link>
          </NavLink>
          <NavLink>
            <Link to={ROUTES.ABOUT}>DESPRE MINE</Link>
          </NavLink>
        </NavbarButtonsContainer>
      </Show>
      <Show below="md">
        <NavSidebarButton> </NavSidebarButton>
      </Show>
    </Flex>
  );
};

export default Navbar;
