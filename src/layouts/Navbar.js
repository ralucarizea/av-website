import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Flex,
  Show,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { ROUTES } from "../assets/constants/data";
import { Link } from "react-router-dom";
import LogoContainer from "../components/LogoContainer";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import SidebarButton from "../components/SidebarButton";

const NavbarButtonsContainer = styled(Flex)`
  color: ${(props) => props.color};
  align-items: center;
  justify-content: flex-end;
  padding-right: 10vw;
  width: 100%;
`;

const NavLink = styled(Link)`
  font-family: "DM Sans";
  letter-spacing: -0.5px;
  font-size: calc(9px + 0.45vw);
  font-weight: 400;
  margin: 0px 2vw;
  color: inherit;
`;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      width="100%"
      maxWidth="100vw"
      minHeight="11vh"
      height="fit-content"
      justifyContent={"space-between"}
      boxShadow={"0px 1.5px 8px 1px rgba(0,0,0,0.05)"}
      zIndex={8}
      position={"sticky"}
      top={0}
      bg="#fff"
    >
      <LogoContainer color={"neutrals.dark"} s />
      <Show above="641px">
        <NavbarButtonsContainer color={"accents.red"}>
          <NavLink>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                _hover={{ bg: "tints.red" }}
                _expanded={{ bg: "accents.red", color: "#fff" }}
                _focus={{ boxShadow: "" }}
              >
                SERVICII <ChevronDownIcon />
              </MenuButton>
              <MenuList borderRadius="0" outlineOffset={"0"} outline={"none"}>
                <MenuItem my="4px">
                  <Link to={ROUTES.INDIVIDUAL}>Psihoterapie individuală</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.COUPLE}>Psihoterapie de cuplu/familie</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.HIPNO}>Hipnoterapie</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.TRAUMA}>Terapie prin Somatic Experiencing</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.EVALUATION}>Evaluare psihologică</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.SEXOLOGY}>Psihosexologie</Link>
                </MenuItem>
                <MenuItem my="4px">
                  <Link to={ROUTES.GROUP}>Psihoterapie de grup</Link>
                </MenuItem>
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
      <Show below="640px">
        <Button
          mr="16px"
          alignSelf="center"
          bg="transparent"
          ref={btnRef}
          onClick={onOpen}
          // border="0.5px solid"
          borderColor=""
        >
          <Icon w="20px" h="20px" as={HamburgerIcon} color="neutrals.dark" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent width="80%" color="neutrals.dark">
            <DrawerCloseButton color="neutrals.dark" mt="3%" />

            <DrawerBody>
              <VStack
                my="30vw"
                h="50%"
                alignItems={"flex-start"}
                justifyContent={"space-evenly"}
              >
                <Link to={ROUTES.ABOUT} onClick={onClose}>
                  <SidebarButton text={"DESPRE MINE"} color="accents.red" />
                </Link>
                <Link to={ROUTES.BLOG} onClick={onClose}>
                  <SidebarButton text={"ARTICOLE"} color="accents.red" />
                </Link>
                <Link to={ROUTES.INDIVIDUAL} onClick={onClose}>
                  <SidebarButton
                    text={"Psihoterapie individuală"}
                    color="accents.red"
                  />
                </Link>
                <Link to={ROUTES.COUPLE} onClick={onClose}>
                  <SidebarButton
                    text={"Psihoterapie de cuplu/familie"}
                    color="accents.red"
                  />
                </Link>
                <Link to={ROUTES.HIPNO} onClick={onClose}>
                  <SidebarButton text={"Hipnoză"} color="accents.red" />
                </Link>
                <Link to={ROUTES.TRAUMA} onClick={onClose}>
                  <SidebarButton
                    text={"Terapie prin Somatic Experiencing"}
                    color="accents.red"
                  />
                </Link>
                <Link to={ROUTES.EVALUATION} onClick={onClose}>
                  <SidebarButton
                    text={"Evaluare psihologică"}
                    color="accents.red"
                  />
                </Link>
                <Link to={ROUTES.SEXOLOGY} onClick={onClose}>
                  <SidebarButton text={"Psihosexologie"} color="accents.red" />
                </Link>
                <Link to={ROUTES.GROUP} onClick={onClose}>
                  <SidebarButton
                    text={"Psihoterapie de grup"}
                    color="accents.red"
                  />
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};

export default Navbar;
