import React from "react";
import { Flex, Box, Text, Show, VStack, Image } from "@chakra-ui/react";
import { HeroHeading } from "../../../assets/constants/styledcomponents";
import StyledListItem from "../../../components/StyledListItem";
import { HomeAboutIntroListContent } from "../../../assets/constants/data";
import { MDfont, XXLfont, LGfont } from "../../../assets/styles/theme";

function HomeAboutIntro() {
  return (
    <Flex
      maxW="100vw"
      h="fit"
      px={[4, 5, 6, 8, 10, 10, 16]}
      py={[16, 20, 22, 24, 20, 28]}
      justifyContent={"center"}
      flexWrap="wrap"
      color={"neutrals.dark"}
      fontSize={MDfont}
      gap={{ md: 6, lg: 14, xl: 20 }}
      fontFamily={"sans"}
      lineHeight={"sm"}
    >
      <Image
        h={{
          base: "45vh",
          xs: "52vh",
          sm: "64vh",
          md: "70vh",
          lg: "74vh",
          xl: "75vh",
        }}
        minW="280px"
        minH="400px"
        w={{
          base: "65vw",
          xs: "60vw",
          sm: "57vw",
          md: "60vw",
          lg: "38vw",
          xl: "33vw",
        }}
        // maxW="600px"
        src="https://res.cloudinary.com/dd82hyvds/image/upload/v1702369406/portraitImages/17-min_sm9oev.jpg"
        objectFit={"cover"}
        objectPosition={"bottom"}
      />
      <VStack
        maxW={{ base: "65%", lg: "40%" }}
        h="fit"
        justifyContent={{ base: "center", lg: "space-evenly" }}
        m={{ base: 4, sm: 6, md: 0 }}
        alignItems={"flex-start"}
      >
        <HeroHeading fontSize={XXLfont}> Licensed psychologist, MD</HeroHeading>
        <Text
          mt={{ base: 2, sm: 3, md: 6, lg: 8, xl: 10 }}
          mb={{ base: 2, sm: 3, md: 4, xl: 4 }}
          w={{ base: "100%", lg: "88%" }}
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
          <VStack w="70%" alignItems={"center"}>
            <HeroHeading fontSize={"18px"} mb={{ base: "10px", lg: "16px" }}>
              Te pot ajuta cu următoarele tipuri de probleme:
            </HeroHeading>
            <VStack
              maxW="45vw"
              alignItems="flex-start"
              flexWrap={"wrap"}
              h="250px"
              ml={{ base: "-48px", xs: "-8px", sm: 0 }}
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
      </VStack>
    </Flex>
  );
}

export default HomeAboutIntro;
