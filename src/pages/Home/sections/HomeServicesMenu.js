import React from "react";
import { Box, Text, Flex, VStack, Icon } from "@chakra-ui/react";
import {
  emptyPieceHeights,
  emptyPieceWidths,
  filledPieceHeights,
  filledPieceWidths,
  emptyPieceClipPaths,
  filledPieceClipPaths,
} from "../../../assets/constants/constants";
import PuzzlePieceBase from "../../../components/PuzzlePieceBase";
import { HomeServicesMenuData } from "../../../assets/constants/data";
import { XXLfont, XXXLfont } from "../../../assets/styles/theme";


export default function HomeServicesMenu() {
  return (
    <Flex
      maxW="100vw"
      py="14vw"
      px="8vw"
      mb="14vh"
      //   bg="pink"
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
        <Text mb="6vw" fontSize={XXXLfont} fontFamily={"handwritten"} w="100%" textAlign={"center"} color="neutrals.dark"> Servicii</Text>
      {Object.keys(HomeServicesMenuData).map((element, index) => 
        index % 2 === 0 ? (
          <PuzzlePieceBase
            width={filledPieceWidths}
            height={filledPieceHeights}
            clipPath={filledPieceClipPaths}
            service={HomeServicesMenuData[element]}
          />
        ) : (
          <PuzzlePieceBase
            width={emptyPieceWidths}
            height={emptyPieceHeights}
            clipPath={emptyPieceClipPaths}
            service={HomeServicesMenuData[element]}
          />
        )
      )}
    </Flex>
  );
}
