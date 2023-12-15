import React from "react";
import { Flex, Box, Text, Show, VStack, Image, Button } from "@chakra-ui/react";
import { HeroHeading } from "../../../assets/constants/styledcomponents";
import StyledListItem from "../../../components/StyledListItem";
import { HomeAboutIntroListContent } from "../../../assets/constants/data";
import { MDfont, XXLfont, LGfont } from "../../../assets/styles/theme";
import SidebarButton from "../../../components/SidebarButton";

function HomeAboutIntro() {
  return (
    <Flex
      maxW="100vw"
      h="fit"
      px={{ base: 5, xs: 6, sm: 8, md: 12, lg: 14, xl: 16 }}
      py={{ base: 16, xs: 20, sm: 22, md: 24, lg: 20, xl: 28 }}
      // py={[16, 20, 22, 24, 20, 28]}
      justifyContent={"center"}
      flexWrap="wrap"
      color={"neutrals.dark"}
      fontSize={MDfont}
      gap={{ md: 6, lg: 14, xl: 20 }}
      fontFamily={"sans"}
      lineHeight={"sm"}
      alignItems={"center"}
    >
      <Image
        // h={{
        //   base: "45vh",
        //   xs: "52vh",
        //   sm: "64vh",
        //   md: "70vh",
        //   lg: "75vh",
        //   xl: "75vh",
        // }}
        minW="220px"
        minH="400px"
        maxH="650px"
        w={{
          base: "65vw",
          xs: "60vw",
          sm: "57vw",
          md: "60vw",
          lg: "40vw",
          xl: "33vw",
        }}
        // maxW="600px"
        src="https://res.cloudinary.com/dd82hyvds/image/upload/v1702369436/portraitImages/1_wjbbkb.jpg"
        objectFit={"contain"}
        objectPosition={"center"}
      />
      <VStack
        maxW={{ base: "70%", lg: "40%" }}
        h="auto"
        justifyContent={{ base: "center", lg: "space-between" }}
        mt={{ base: 4, sm: 6, md: 0 }}
        alignItems={"flex-start"}
        // border="1px solid pink"
      >
        <HeroHeading fontSize={XXLfont}> Licensed psychologist, MD</HeroHeading>
        <Text
          mt={{ base: 2, sm: 3, md: 6, lg: 5, xl: 10 }}
          mb={{ base: 2, sm: 3, md: 4, xl: 4 }}
          w={{ base: "100%", lg: "90%" }}
          fontSize={{ base: "13px", sm: "14px", md: "15px", xl: "16px" }}
        >
          I help people find relief from anxiety, depression, trauma and other
          mental stress that prevents one from enjoying a full life. My
          therapeutic approach is relational and transpersonal with an intention
          of supporting clients to more compassionately and curiously connect
          with their authentic selves. Here to help you to reach your desired
          goals for change and personal development, through a holistic and
          personalised therapy plan.
        </Text>
        <Show above="md">
          <HeroHeading fontSize={LGfont} mb={{ base: "10px", lg: "16px" }}>
            Te pot ajuta cu următoarele tipuri de probleme:{" "}
          </HeroHeading>
          <VStack
            flexWrap={"wrap"}
            h={{ base: "480px", md: "200px", lg: "250px", xl: "280px" }}
            alignItems="flex-start"
            ml="-10px"
          >
            {Object.keys(HomeAboutIntroListContent).map((index) => (
              <StyledListItem
                text={HomeAboutIntroListContent[index].text}
                angle={HomeAboutIntroListContent[index].angle}
                color={HomeAboutIntroListContent[index].color}
              />
            ))}
          </VStack>
        </Show>
        <Show below="md">
          <VStack
            w={{ base: "100%", sm: "70%" }}
            alignItems={{ base: "center", xs: "flex-start" }}
            // border="1px solid red"
          >
            <HeroHeading
              fontSize={"18px"}
              mb={{ base: "10px", lg: "16px" }}
              w="100%"
              // border="1px solid purple"
            >
              Te pot ajuta cu următoarele tipuri de probleme:
            </HeroHeading>
            <VStack
              w={"fit"}
              alignItems={"flex-start"}
              flexWrap={"wrap"}
              h={{ base: "fit-content", sm: "250px" }}
              // border="1px solid green"
            >
              {Object.keys(HomeAboutIntroListContent).map((index) => (
                <StyledListItem
                  text={HomeAboutIntroListContent[index].text}
                  angle={HomeAboutIntroListContent[index].angle}
                  color={HomeAboutIntroListContent[index].color}
                />
              ))}
            </VStack>
          </VStack>
        </Show>
        <Box
          mt={{ base: "20px", lg: "0" }}
          alignSelf={{ base: "center", lg: "flex-start" }}
        >
          <SidebarButton
            text={" Află mai multe despre mine"}
            color="accents.army"
            textTransform={"none"}
          />
        </Box>
      </VStack>
    </Flex>
  );
}

export default HomeAboutIntro;
