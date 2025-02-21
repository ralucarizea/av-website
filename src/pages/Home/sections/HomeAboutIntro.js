import React from "react";
import { Flex, Box, Text, Show, VStack, Image, Button } from "@chakra-ui/react";
import { HeroHeading } from "../../../assets/constants/styledcomponents";
import StyledListItem from "../../../components/StyledListItem";
import {
  HomeAboutIntroListContent,
  ROUTES,
} from "../../../assets/constants/data";
import { MDfont } from "../../../assets/styles/theme";
// import SidebarButton from "../../../components/SidebarButton";
import { Link } from "react-router-dom";

function HomeAboutIntro() {
  console.debug(HomeAboutIntroListContent);
  return (
    <Flex
      h="fit"
      px={{ base: 0, xs: 6, sm: 8, md: 12, lg: 14, xl: 16 }}
      py={{ base: "90px ", xs: 24, sm: 28, md: 24, lg: 24, xl: 28 }}
      justifyContent={"center"}
      flexWrap="wrap"
      color={"neutrals.dark"}
      fontSize={MDfont}
      gap={{ md: 6, lg: 14, xl: 20 }}
      fontFamily={"sans"}
      lineHeight={"sm"}
      alignItems={"flex-start"}
    >
      <Image
        h={{
          base: "45vh",
          xs: "52vh",
          sm: "64vh",
          md: "70vh",
          lg: "80vh",
          xl: "90vh",
        }}
        minW="220px"
        minH="400px"
        w={{
          base: "75%",
          sm: "62%",
          md: "55%",
          lg: "41vw",
          xl: "35vw",
        }}
        src="https://res.cloudinary.com/dd82hyvds/image/upload/v1702369436/portraitImages/1_wjbbkb.jpg"
        objectFit={"cover"}
        objectPosition={"center"}
      />
      <VStack
        maxW={{ base: "75%", sm: "62%", md: "55%", lg: "40%" }}
        h={{
          base: "fit",
          xs: "fit",
          sm: "fit",
          md: "fit",
          lg: "fit",
          xl: "90vh",
        }}
        justifyContent={{ base: "center", lg: "space-between" }}
        mt={{ base: 4, sm: 6, md: 0 }}
        alignItems={"flex-start"}
      >
        <HeroHeading>
          Să te deschizi în fața cuiva este foarte greu, știu
        </HeroHeading>
        <Text
          mt={{ base: 2, sm: 3, md: 6, lg: 4, xl: 7 }}
          mb={{ base: 0, sm: 3, md: 4, lg: 2, xl: 6 }}
          w={{ base: "100%", lg: "96%", xl: "70%" }}
          fontSize={{ base: "14px", sm: "15px", md: "16px", xl: "16px" }}
        >
          ...dar este singurul mod în care îți dai voie să te vindeci. De aceea,
          misiunea mea este să îmi călăuzesc clienții către depășirea diverselor
          provocări ale vieții precum anxietatea, depresia sau traumele din
          copilărie, ce îi împiedică să simtă bucuria unei vieți autentice.
          <Text my="8px">
            Metodele mele se concentrează pe cultivarea unei conexiuni cu
            adevăratul sine, combinând tehnici relaționale și transpersonale.
            Sunt determinată să te ajut să îți atingi aspirațiile de
            transformare și dezvoltare personală, punându-mi la dispoziție toată
            experiența pentru a crea împreună cu tine o strategie personalizată
            de vindecare.
          </Text>
        </Text>
        <Show above="md">
          <HeroHeading
            mb={{ base: "10px", lg: "12px" }}
            w={{ lg: "90%", xl: "80%" }}
          >
            Te pot ajuta cu următoarele tipuri de probleme:
          </HeroHeading>
          <VStack
            flexWrap={"wrap"}
            h={{ md: "200px", lg: "250px", xl: "280px" }}
            alignItems="flex-start"
            ml="-10px"
            style={{ zIndex: "0"}}
          >
            {Object.keys(HomeAboutIntroListContent).map((index) => (
              <StyledListItem
                key={index}
                text={HomeAboutIntroListContent[index].text}
                angle={HomeAboutIntroListContent[index].angle}
                color={HomeAboutIntroListContent[index].color}
                tooltip={HomeAboutIntroListContent[index]?.tooltip}
                link={HomeAboutIntroListContent[index]?.link}
                linkText={HomeAboutIntroListContent[index]?.linkText}
              />
            ))}
          </VStack>
        </Show>
        <Show below="md">
          <VStack
            w={{ base: "100%", sm: "75%" }}
            alignItems={{ base: "flex-start" }}
            // border="1px solid red"
          >
            <HeroHeading
              fontSize={"18px"}
              mb={{ base: "13px", lg: "16px" }}
              w="100%"
              // border="1px solid purple"
            >
              Te pot ajuta cu următoarele tipuri de probleme:
            </HeroHeading>
            <VStack
              w={"fit"}
              alignItems={"flex-start"}
              flexWrap={"wrap"}
              h={{ base: "fit-content", sm: "260px" }}
              style={{ zIndex: "0"}}

              // border="1px solid green"
            >
              {Object.keys(HomeAboutIntroListContent).map((index) => (
                <StyledListItem
                  key={index}
                  text={HomeAboutIntroListContent[index].text}
                  angle={HomeAboutIntroListContent[index].angle}
                  color={HomeAboutIntroListContent[index].color}
                  tooltip={HomeAboutIntroListContent[index]?.tooltip}
                  link={HomeAboutIntroListContent[index]?.link}
                  linkText={HomeAboutIntroListContent[index]?.linkText}
                />
              ))}
            </VStack>
          </VStack>
        </Show>
        <Box
          mt={{ base: "20px", lg: "12px" }}
          alignSelf={{ base: "center", lg: "flex-start" }}
        >
          <Link to={ROUTES.ABOUT}>
            {" "}
            <Button
              color="accents.army"
              fontSize={{ base: "14px", sm: "15px", md: "16px", xl: "16px" }}
              bg="transparent"
              pl={{ base: "16px", md: "0px" }}
              sx={{
                span: {
                  paddingBottom: "5px",
                  letterSpacing: "0.25px",
                  position: "relative",
                  _after: {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "0.5px",
                    bottom: "0",
                    left: "0",

                    backgroundColor: "accents.red",

                    transformOrigin: "bottom right",
                    transition: "transform 0.35s ease-out",
                  },
                },
                "&:active": { bgColor: "transparent" },
                "&:hover": {
                  bgColor: "transparent",
                  span: {
                    bgColor: "transparent",
                    color: "accents.red",
                    _after: {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  },
                },
              }}
            >
              <span> Află mai multe despre mine </span>
            </Button>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
}

export default HomeAboutIntro;
