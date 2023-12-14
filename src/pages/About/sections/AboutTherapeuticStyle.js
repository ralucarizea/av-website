import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { HiPuzzle } from "react-icons/hi";
import React from "react";
import { XXXLfont } from "../../../assets/styles/theme";
export const CaptionBox = styled(Box)`
  width: 50%;
  height: 100%;
  padding: ${(props) => props.p};
  min-width: 350px;
  font-size: calc(12.5px + 0.15vw);

  @media only screen and (max-width: 550px) {
    min-width: fit-content;
  }
`;
export const CaptionTitle = styled(Box)`
  font-size: calc(13px + 0.65vw);
  font-weight: 500;
  font-family: "DM Sans";
  margin: 0.8em 0px;
  text-align: ${(props) => props.textAlign};
  position: relative;

  @media only screen and (max-width: 550px) {
    text-align: center;
  }
`;
export const CaptionText = styled(Box)`
  margin: 0 auto;
  width: 80%;
  min-width: 300px;
  font-family: "DM Sans";
  font-weight: 400;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
  @media only screen and (max-width: 550px) {
    min-width: 150px;
  }
`;
export default function AboutTherapeuticStyle() {
  return (
    <Flex
      id="resume"
      minH="auto"
      maxW="100%"
      color="neutrals.dark"
      flexWrap={"wrap"}
      mx={{ base: "44px", md: "8vw", lg: "10vw" }}
      my={{ base: "40px" }}
      justifyContent="center"
    >
      <Text
        w={{ base: "50%", sm: "100%" }}
        textAlign={"center"}
        py={{ base: "7vw", md: "5vw", lg: "3vw" }}
        fontFamily={"serif"}
        fontSize={XXXLfont}
        lineHeight={"xs"}
      >
        Abordarea mea terapeutică
      </Text>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "3vw 8vw" }}>
        <CaptionTitle>
          Empatică
          <Icon
            transform={`rotate(0deg)`}
            opacity="0.6"
            top={{ base: "-100%", xs: "-90%", sm: "-80%", md: "-130%" }}
            left={{ base: "-2%", xs: "-5%", md: "-17%" }}
            w={{ base: "25vw", xs: "20vw", sm: "18vw", md: "13vw", xl: "10vw" }}
            h={{ base: "25vw", xs: "20vw", sm: "18vw", md: "13vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.lime"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          Lorem ipsum dolor sit amet consectetur. Tristique libero cras dolor
          morbi. Amet neque elementum et amet nunc amet. Ut lacus nulla
          odio.Hostwinds has a rating of 4.74 stars from 7,761 reviews,
          indicating that most customers are generally satisfied with their
          purchases.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "3vw 8vw" }}>
        <CaptionTitle textAlign={"right"}>
          Flexibilă
          <Icon
            transform={`rotate(180deg)`}
            opacity="0.45"
            top={{ base: "-40%", xs: "-50%", sm: "-80%", md: "-15%" }}
            right={{ base: "-2%", xs: "5%", sm: "-3%", md: "-15%" }}
            w={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            h={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.yellow"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          {" "}
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done. Reviewers satisfied with Hostwinds most frequently mention good
          service, google search, and front line.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "3vw 8vw" }}>
        <CaptionTitle textAlign={"right"}>
          Autentică{" "}
          <Icon
            transform={`rotate(270deg)`}
            opacity="0.5"
            top={{ base: "-40%", xs: "-50%", sm: "-80%", md: "140%" }}
            right={{ base: "-2%", xs: "5%", sm: "-3%", md: "-6%" }}
            w={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            h={{ base: "24vw", xs: "20vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"tints.red"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          {" "}
          No need to start from scratch. Jump-start your workflow with a proven
          playbook designed for different teams. Customize it to make it
          yours.Hostwinds is proud to be one of the best web and cloud hosting
          providers on the market.
        </CaptionText>
      </CaptionBox>
      <CaptionBox p={{ base: "3vw 36px", md: "3vw 5vw", xl: "3vw 8vw" }}>
        <CaptionTitle>
          Diversificată{" "}
          <Icon
            transform={`rotate(90deg)`}
            opacity="0.1"
            top={{ base: "-50%", sm: "0%", md: "-120%" }}
            left={{ base: "20%", sm: "30%", md: "0%" }}
            w={{ base: "18vw", md: "12vw", xl: "10vw" }}
            h={{ base: "18vw", md: "12vw", xl: "10vw" }}
            as={HiPuzzle}
            color={"accents.army"}
            position="absolute"
            zIndex="-2"
          />
        </CaptionTitle>
        <CaptionText>
          {" "}
          Connect the apps your team already uses into your Trello workflow or
          add a Power-Up to fine-tune your specific needs. We stand out from the
          rest by providing reward-winning 24/7 support, fast hosting,
          dependable services, and affordable pricing worldwide.
        </CaptionText>
      </CaptionBox>
      <CaptionTitle></CaptionTitle>
    </Flex>
  );
}
