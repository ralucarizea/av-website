import React from "react";
import styled from "@emotion/styled";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { useSpringCarousel } from "react-spring-carousel";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { socialProofReviews } from "../assets/constants/data";
import SocialProofCard from "./SocialProofCard";
import { MDfont, XXLfont, XXXLfont } from "../assets/styles/theme";

export default function SocialProof() {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    // slideType: 'fluid',
    initialActiveItem: 0,
    initialStartingPosition: "center",
    itemsPerSlide: 2.25,
    withLoop: true,
    // withThumbs: true,
    startEndGutter: -20,
    enableFreeScrollDrag: true,
    items: socialProofReviews.map((review, index) => ({
      ...review,
      id: review.id,
      renderItem: (
        <SocialProofCard
          key={index}
          name={review.name}
          thumbnail={review.thumbnail}
          reviewText={review.caption}
          age={review.age}
          bgColor={review.bgColor}
          color={review.color}
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
    &:hover {
       {
        background-color: #fadcdc;
        color: pink;
        opacity: 0.8;
        transition: 210ms ease-in;
      }
    }
  `;
  const StyledCarouselFragment = styled.div`
    &:.use-spring-carousel-item {
        border: 1px solid red;
    }
  `
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
          pb="10vw"
          width="100%"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={XXXLfont}
          fontFamily={"handwritten"}
          color="neutrals.dark"
        >
          Ce spun alti clienti
        </Flex>
        <Flex
          width="100%"
          minHeight="fit-content"
          position={"relative"}
          userSelect={"none"}
          fontSize={MDfont}
          pb={{base: "9vw", sm: "8vw", md: "7vw"}}
        //   boxShadow="inset 0px 0px 10px 10px #000"

        >
          <StyledSliderButton
            onClick={slideToPrevItem}
            position="absolute"
            left="35%"
            bottom="0"
            zIndex={2}
          >
            <Icon as={VscArrowLeft} fill="neutrals.dark" width={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }}
                  height={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }} />
          </StyledSliderButton>
          {carouselFragment}
          <StyledSliderButton
            onClick={slideToNextItem}
            position="absolute"
            left="65%"
            bottom="0px"
            zIndex={2}
          >
            <Icon as={VscArrowRight} fill="neutrals.dark"  width={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }}
                  height={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }} />
          </StyledSliderButton>
        </Flex>
      </Flex>
    </>
  );
}
