import React from "react";
import { Text, Flex } from "@chakra-ui/react";
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
import { XXXLfont } from "../../../assets/styles/theme";
import {
  filledXL,
  filledLG,
  filledMD,
  filledSM,
  emptyXL,
  emptyLG,
  emptyMD,
  emptySM,
} from "../../../assets/constants/constants";

export default function HomeServicesMenu() {
  return (
    <Flex
      maxW="100vw"
      py="14vw"
      px={{ xs: "12vw", sm: "8vw" }}
      mb="14vh"
      //   bg="pink"
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
      <Text
        mb="6vw"
        fontSize={XXXLfont}
        fontFamily={"handwritten"}
        w="100%"
        textAlign={"center"}
        color="neutrals.dark"
      >
        {" "}
        Servicii
      </Text>
      {Object.keys(HomeServicesMenuData).map((element, index) =>
        index % 2 === 0 ? (
          <PuzzlePieceBase
            width={{ base: "281px", lg: "338px", xl: "451px" }}
            height={{
              base: "258px",
              lg: "310px",
              xl: "414px",
            }}
            clipPath={{
              base: `path("${filledMD}") `,
              md: `path("${filledMD}") `,
              lg: `path("${filledLG}") `,
              xl: `path("${filledXL}") `,
            }}
            service={HomeServicesMenuData[element]}
          />
        ) : (
          <PuzzlePieceBase
            width={{ base: "230px", lg: "277px", xl: "370px" }}
            height={{ base: "258px", lg: "310px", xl: "414px" }}
            clipPath={{
              base: `path("${emptyMD}") `,
              md: `path("${emptyMD}") `,
              lg: `path("${emptyLG}") `,
              xl: `path("${emptyXL}") `,
            }}
            service={HomeServicesMenuData[element]}
          />
        )
      )}
    </Flex>
  );
}
