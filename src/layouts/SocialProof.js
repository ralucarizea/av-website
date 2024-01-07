import React from "react";
import styled from "@emotion/styled";
import { Flex, Icon, useMediaQuery } from "@chakra-ui/react";
import { useSpringCarousel } from "react-spring-carousel";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { socialProofReviews } from "../assets/constants/data";
import SocialProofCard from "./SocialProofCard";
import { MDfont } from "../assets/styles/theme";
import { SectionTitle } from "../pages/Home/sections/HomeInfoBanner";

export default function SocialProof() {
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem: 0,
      initialStartingPosition: "center",
      itemsPerSlide: isMobile ? 1 : 2.25,
      withLoop: true,
      startEndGutter: -20,
      enableFreeScrollDrag: true,
      items: socialProofReviews.map((review, index) => ({
        ...review,
        id: review.id,
        renderItem: (
          <SocialProofCard
            isMobile={isMobile}
            key={index}
            name={review.name}
            thumbnail={review.thumbnail}
            reviewText={review.caption}
            age={review.age}
            bgColor={review.bgColor}
            color={review.color}
            ratedService={review.ratedService}
          />
        ),
        // renderThumb: <CarouselThumb text={index}></CarouselThumb>,
      })),
    });

  const StyledSliderButton = styled.button`
    position: ${(props) => props.position};
    z-index: ${(props) => props.zIndex};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    border-radius: 50%;
    background: transparent;
    
  `;

  return (
    <>
      <Flex
        minHeight={"fit-content"}
        width="90%"
        alignItems={"center"}
        flexDirection="column"
        justifyContent="center"
        overflowX={"hidden"}
        margin="0 auto 16vw"
        // bgColor={"aliceblue"}
      >
        <Flex
          mt="16px"
          pb={{ base: "8vw", md: "4vw" }}
          width="100%"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color="accents.army"
        >
          <SectionTitle>Ce spun alti clienti</SectionTitle>
        </Flex>
        <Flex
          width="100%"
          minHeight="fit-content"
          position={"relative"}
          userSelect={"none"}
          fontSize={MDfont}
          pb={{ base: "9vw", sm: "8vw", md: "7vw" }}
        >
          <StyledSliderButton
            onClick={slideToPrevItem}
            position="absolute"
            left="35%"
            bottom="0"
            zIndex={2}
          >
            <Icon
              as={VscArrowLeft}
              fill="accents.army"
              width={{
                base: "20px",
                sm: "24px",
                md: "28px",
                lg: "32px",
                xl: "36px",
              }}
              height={{
                base: "20px",
                sm: "24px",
                md: "28px",
                lg: "32px",
                xl: "36px",
              }}
            
            />
          </StyledSliderButton>
          {carouselFragment}
          <StyledSliderButton
            onClick={slideToNextItem}
            position="absolute"
            left="65%"
            bottom="0px"
            zIndex={2}
          >
            <Icon
              as={VscArrowRight}
              fill="accents.army"
              width={{
                base: "20px",
                sm: "24px",
                md: "28px",
                lg: "32px",
                xl: "36px",
              }}
              height={{
                base: "20px",
                sm: "24px",
                md: "28px",
                lg: "32px",
                xl: "36px",
              }}
            />
          </StyledSliderButton>
        </Flex>
      </Flex>
    </>
  );
}
