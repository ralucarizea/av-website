import React from "react";
import { Flex, Box, Text, Show, VStack } from "@chakra-ui/react";
import { HeroHeading } from "../../../assets/constants/styledcomponents";
import StyledListItem from "../../../components/StyledListItem";
import { HomeAboutIntroListContent } from "../../../assets/constants/constants";
import {
  MDfont,
  XXLfont,
  LGfont,
} from "../../../assets/styles/theme";

function HomeAboutIntro() {
  return (
    <Flex
      maxW="100vw"
      h="fit"
      px={[1, 3, 4, 8, 10, 10, 16]}
      py={[16, 20, 22, 24, 20, 28]}
      justifyContent={"center"}
      flexWrap="wrap"
      color={"neutrals.dark"}
      fontSize={MDfont}
    >
      <Box
        // mr={[0, 3, 4, 6, 7, 10]}
        mr={{ base: 0, md: 8, lg: 12 }}
        mb={{ base: 3, sm: 2, md: 3 }}
        h={{
          base: "35vh",
          xs: "36vh",
          sm: "48vh",
          md: "60vh",
          lg: "68vh",
          xl: "72vh",
        }}
        minW="220px"
        w={{
          base: "50vw",
          xs: "46vw",
          sm: "44vw",
          md: "40vw",
          lg: "38vw",
          xl: "38vw",
        }}
        maxW="600px"
        bg="accents.lime"
        zIndex="2"
      />
      <VStack
        maxW={{ base: "auto", md: "50%", lg: "35%" }}
        h="fit"
        justifyContent={"space-evenly"}
        m={{ base: 4, sm: 6, md: 0 }}
        alignItems="flex-start"
      >
        <HeroHeading fontSize={XXLfont}>
          {" "}
          Licensed psychologist, MD
        </HeroHeading>
        <Text my={{ base: 0, sm: 1, md: 6, lg: 12 }} w="85%">
          I help people find relief from anxiety, depression, trauma and other
          mental stress that prevents one from enjoying a full life. My
          therapeutic approach is relational and transpersonal with an intention
          of supporting clients to more compassionately and curiously connect
          with their authentic selves. Here to help you to reach your desired
          goals for change and personal development, through a holistic and
          personalised therapy plan.
        </Text>
        <Show above="md">
          <HeroHeading fontSize={LGfont}>
            Te pot ajuta cu următoarele tipuri de probleme:{" "}
          </HeroHeading>
          <VStack
            mt={[4, 6]}
            maxW="36vw"
            flexWrap={"wrap"}
            h={{ base: "480px", md: "480px", lg: "360px", xl: "220px" }}
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
      </VStack>
      <Show below="md">
        <VStack
          w="full"
          alignItems={"flex-start"}
          flexDirection={"column"}
          m={[3, 4, 5, 6, 8]}
        >
          <HeroHeading fontSize={LGfont}>
            Te pot ajuta cu următoarele tipuri de probleme:
          </HeroHeading>
          <VStack
            mt={[4, 6]}
            maxW="40vw"
            alignItems="flex-start"
            flexWrap={"wrap"}
            h={{
              base: "280px",
              sm: "220px",
              md: "480px",
              lg: "360px",
              xl: "220px",
            }}
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
    </Flex>
  );
}

export default HomeAboutIntro;
