import { Box, Text, VStack, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { MDfont, XXXLfont } from "../../../assets/styles/theme";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";

export const StyledMarqueeItem = styled(Image)`
  aspect-ratio: auto;
  width: auto;
  max-width: 350px;
  max-height: 250px;
  margin-left: 16px;
  src: ${(props) => props.src};

  @media only screen and (max-width: 1000px) {
    max-width: 300px;
    max-height: 200px;
    margin-left: 12px;
  }
  @media only screen and (max-width: 640px) {
    max-width: 200px;
    max-height: 100px;
    margin-left: 10px;
  }
`;
// export const StyledMarqueeList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;
// export const StyledMarqueeContainer = styled.div`
//   border: 2px solid blue;
//   margin: 0 24px;
//   width: auto;
// `;

export default function AboutPhotoGallery() {
  return (
    <VStack
      my={{ base: "33%", sm: "20vw", md: "18vw", lg: "15vw" }}
      fontSize={MDfont}
      fontFamily={"sans"}
      color="neutrals.dark"
      alignItems={"flex-end"}
    >
      <VStack
        mb={{base: "28px", sm:"40px", md: "64px", lg: "70px"}}
        pl={{
          base: "24px",
          xs: "48px",
          sm: "60px",
          md: "72px",
          lg: "84px",
          xl: "148px",
        }}
        alignItems={"flex-start"}
        w="100%"
        h="fit-content"
        fontFamily={"handwritten"}
        fontSize={XXXLfont}
      >
        <Text>...dar înainte de orice, sunt </Text>
        <Text>un simplu om</Text>
      </VStack>
      <VStack
        mr={{ base: "24px", sm: "40px", md: "60px"}}
        h="fit-content"
        w={{ base: "100vw", sm: "85vw", md: "75vw"}}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <Marquee
          direction="left"
          gradient="true"
          gradientColor="rgba(255,255,255, 1)"
          gradientWidth="100px"
          // pauseOnHover="true"
          speed="25"
        >
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/2.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/3.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/4.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/5.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/6.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/7.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/8.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/9.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/10.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/11.jpg")}
            alt=""
          />
        </Marquee>
        <Marquee
          direction="right"
          gradient="true"
          gradientColor="rgba(255,255,255, 1)"
          gradientWidth="100px"
          // pauseOnHover="true"
          speed="25"
        >
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/12.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/13.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/14.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/15.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/16.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/17.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/18.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/19.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/20.jpg")}
            alt=""
          />
          <StyledMarqueeItem
            src={require("../../../assets/images/memories/21.jpg")}
            alt=""
          />
        </Marquee>
      </VStack>
    </VStack>
  );
}
