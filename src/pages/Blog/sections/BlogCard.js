import { Button, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { LGfont, MDfont, SMfont, XXLfont } from "../../../assets/styles/theme";
import { articleTags } from "../../../assets/constants/data";

export const MainCategoryTag = styled(Box)`
  border: 0.5px solid;
  width: fit-content;
  height: auto;
  font-family: "DM Sans";
  letter-spacing: 0.5px;
  position: absolute;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-color: "${(props) => props.borderColor}";
  z-index: 3;
  top: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 1px 3px;
`;

export default function BlogCard({
  titleBold,
  title,
  content,
  img,
  keywords,
}) {
  return (
    <VStack
      p={4}
      border="1px solid"
      borderColor="neutrals.dark"
      width="100%"
      fontFamily={"sans"}
      position="relative"
    >
      <MainCategoryTag
        fontSize={{ base: "9.5px", md: "11px", lg: "13px" }}
        bg={articleTags[keywords[0]]?.bgColor}
        color={articleTags[keywords[0]]?.color}
        borderColor="neutrals.dark !important"
      >
        {keywords[0].toUpperCase()}
      </MainCategoryTag>
      <Image />
      <Text
        fontSize={LGfont}
        w="90%"
        lineHeight={"2xs"}
        letterSpacing={"-0.5px"}
      >
        <Text
          display="inline-block"
          mr="4px"
          fontWeight="800"
          fontStyle={"italic"}
        >
          {titleBold}
        </Text>
        {title}
      </Text>
      <Text>{content}</Text>
      <Button
      color="inherit"
        alignSelf={"flex-end"}
        fontSize={MDfont}
        bgColor={"transparent"}
        textDecoration={"underline"}
      >
        {" "}
        Citește mai multe
      </Button>
    </VStack>
  );
}
