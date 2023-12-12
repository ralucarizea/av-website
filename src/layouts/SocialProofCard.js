import React from "react";
import styled from "@emotion/styled";
import { Box, VStack } from "@chakra-ui/react";
import "./styles.css";
import { MDfont } from "../assets/styles/theme";

export default function SocialProofCard({
  name,
  reviewText,
  age,
  bgColor,
  color,
}) {
  const Persona = styled(VStack)`
    min-height: fit-content;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    justify-content: space-between;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    opacity: 0.76;
    
  `;
  const Name = styled.div`
    font-size: calc(1em + 2px);
    font-family: "WardahRounded";
    margin-top: 1.5vw;
    margin-bottom: 2.5vw;
    max-width: 90%;
    text-align: center;
    font-size: ${(props) => props.fontSize};
    line-height: 1.1em;
  `;

  const Caption = styled(Box)`
    height: 100%;
    max-width: 80%;
    text-align: center;
    line-height: 1.65em;
    font-family: "DM Sans";
    display: flex;
    align-items: center;
    padding: 2.25vw 1.75vw 0;
    z-index: 3;
    font-size: ${(props) => props.fontSize};
 

  `;
  return (
    <Persona
      bgColor={bgColor}
      color={color}
      height={{ base: "36vh", sm: "35vh", md: "35vh", lg: "36vh", xl: "38vh" }}
      width={{
        base: "43vw",
        xs: "40vw",
        sm: "35vw",
        md: "34vw",
        lg: "36vw",
        xl: "38vw",
      }}
    >
      <Caption fontSize={MDfont}>{reviewText}</Caption>
      <Name fontSize={MDfont}>
        - {name}, {age} ani
      </Name>
    </Persona>
  );
}
