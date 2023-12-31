import React from "react";
import { Text, Flex } from "@chakra-ui/react";

import PuzzlePieceBase from "../../../components/PuzzlePieceBase";
import { HomeServicesMenuData } from "../../../assets/constants/data";
import {
  filledXL,
  filledLG,
  filledMD,
  emptyXL,
  emptyLG,
  emptyMD,
} from "../../../assets/constants/constants";
import { SectionTitle } from "./HomeInfoBanner";

export default function HomeServicesMenu() {
  return (
    <Flex
      maxW="100vw"
      py={{ base: "32vw", sm: "10vw", md: "10vw", lg: "10vw" }}
      px={{ xs: "12vw", sm: "8vw", md: "10vw", lg: "8vw" }}
      mb={{base: "3vh", md: "14vh"}}
      // bg="pink"
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
      <Flex w="100%" justifyContent={"center"} color="accents.army" mb={{base: "36px", sm:"", }}>
        <SectionTitle>Servicii</SectionTitle>
      </Flex>

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
