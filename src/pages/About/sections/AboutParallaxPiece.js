import { Box, HStack, List, ListItem, VStack } from "@chakra-ui/react";
import React from "react";
import {
  filledSM,
  filledMD,
  filledLG,
  filledPieceWidths,
  filledPieceHeights,
  emptyMD,
  emptyLG,
  emptyPieceWidths,
  emptyPieceHeights,
  emptyXL,
  emptyXXL,
  filledXL,
  filledXS,
} from "../../../assets/constants/constants";
import { MDfont } from "../../../assets/styles/theme";

export default function AboutParallaxPiece({ element }) {
  return (
    <HStack
      my={{ base: "25vw", md: "18vw", lg: "12vw" }}
      w="100%"
      justifyContent={"center"}
      alignItems="center"
      h="fit"
      gap={0}
    >
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={element.bgColor}
        color={element.color}
        fontSize={{
          base: "sm",
          xs: "md",
          sm: "lg",
          md: "lg",
          lg: "xl",
          xl: "3xl",
        }}
        fontFamily={"serif"}
        width={{
          base: filledPieceWidths.xs,
          xs: filledPieceWidths.sm,
          sm: filledPieceWidths.md,
          md: filledPieceWidths.lg,
          lg: filledPieceWidths.xl,
        }}
        height={{
          base: filledPieceHeights.xs,
          xs: filledPieceHeights.sm,
          sm: filledPieceHeights.md,
          md: filledPieceHeights.lg,
          lg: filledPieceHeights.xl,
        }}
        clipPath={{
          base: `path("${filledXS}")`,
          xs: `path("${filledSM}")`,
          sm: `path("${filledMD}")`,
          md: `path("${filledLG}")`,
          lg: `path("${filledXL}") `,
        }}
      >
        <Box
          px={{ base: "4px", xs: "3vw" }}
          textAlign="center"
          lineHeight={"xs"}
        >
          {element.title}
        </Box>
      </VStack>
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        color={element.bgColor}
        bgColor={element.color}
        fontSize={MDfont}
        fontFamily={"serif"}
        width={{
          base: emptyPieceWidths.md,
          xs: emptyPieceWidths.lg,
          md: emptyPieceWidths.xl,
          lg: emptyPieceWidths["2xl"],
        }}
        height={{
          base: emptyPieceHeights.md,
          xs: emptyPieceHeights.lg,
          md: emptyPieceHeights.xl,
          lg: emptyPieceHeights["2xl"],
        }}
        clipPath={{
          base: `path("${emptyMD}")`,
          xs: `path("${emptyLG}")`,
          md: `path("${emptyXL}")`,
          lg: `path("${emptyXXL}") `,
        }}
      >
        <List
          fontSize={{
            base: "10px",
            xs: "xs",
            sm: "xs",
            md: "sm",
            lg: "lg",
            xl: "lg",
          }}
          fontFamily={"sans"}
          p={{ base: "28px", xs: "0px 36px", md: "0px 56px", lg: "0px 68px" }}
          lineHeight={"xs"}
        >
          {/* {Object.values(resumeData).map((element, index) => (
        <HStack key={index} spacing="4" align="start" bgColor={element.bgColor} color={element.color}>
          <div>
            <strong>{element.title}</strong>
          </div>
          <UnorderedList>
            {element.years.map((year, i) => (
              <ListItem key={i} my="8px">
                <strong>{year}:</strong> {element.achievements[i]}
              </ListItem>
            ))}
          </UnorderedList> */}

          {element.achievements.map((fact, i) => (
            <ListItem my="8px" key={i}>
              <strong> {element.years[i]} - </strong> {fact}
            </ListItem>
          ))}
        </List>
      </VStack>
    </HStack>
  );
}
