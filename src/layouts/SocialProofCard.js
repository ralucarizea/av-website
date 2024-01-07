import React from "react";
import styled from "@emotion/styled";
import { Box, VStack } from "@chakra-ui/react";
import "./styles.css";

export default function SocialProofCard({
  name,
  reviewText,
  bgColor,
  color,
  isMobile,
  ratedService,
}) {
  const Persona = styled(VStack)`
    border-radius: ${(props) => props.borderRadius};
    min-height: fit-content;
    height: ${(props) => props.height};
    // width: ${(props) => props.width};
    justify-content: space-between;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    opacity: 0.76;
    width: ${isMobile ? "80%" : ""};
    &:hover {
      box-shadow: 0px 1px 25px 0px;
      transition: all 0.5s ease-out;
    }
  `;
  const Name = styled(Box)`
    font-family: "EdwardianScript";
    margin-top: 1.5vw;
    margin-bottom: 2.5vw;
    max-width: 90%;
    text-align: center;
    font-size: ${(props) => props.fontSize};
    // line-height: 1.1em;
  `;

  const Caption = styled(Box)`
    height: 100%;
    max-width: 80%;
    text-align: center;
    line-height: 1.35em;
    font-family: "DM Sans";
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 2.25vw 1.75vw 0;
    z-index: 3;
    font-size: ${(props) => props.fontSize};
  `;

  return (
    <Persona
      borderRadius="16px"
      bgColor={bgColor}
      color={color}
      height={{ base: "40vh", sm: "40vh", md: "39vh", lg: "36vh", xl: "38vh" }}
      width={{
        sm: "40vw",
        md: "38vw",
        lg: "36vw",
        xl: "38vw",
      }}
    >
      <Caption
        fontSize={{
          base: "14.25px",
          sm: "15.75px",
          md: "16px",
          lg: "17px",
          xl: "18.5px",
        }}
      >
        {reviewText}
      </Caption>
      {/* <ServiceReviewed> Serviciul evaluat - {ratedService} </ServiceReviewed> */}
      <Name fontSize={{ base: "25px", md: "28px", xl: "33px" }}>- {name}</Name>
    </Persona>
  );
}
