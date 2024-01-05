import { Button, Text, VStack, Image, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { LGfont, MDfont } from "../../../assets/styles/theme";
import { articleTags } from "../../../assets/constants/data";
import { Link } from "react-router-dom";

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
  keywords,
  img,
  id,
}) {
  return (
    <VStack
      p={4}
      border="1px solid"
      borderColor="neutrals.dark"
      width="100%"
      fontFamily={"sans"}
      position="relative"
      justifyContent={"space-between"}
    >
      <MainCategoryTag
        fontSize={{ base: "9.5px", md: "11px", lg: "13px" }}
        bg={articleTags[keywords[0]]?.bgColor}
        color={articleTags[keywords[0]]?.color}
        borderColor="neutrals.dark !important"
      >
        {keywords[0].toUpperCase()}
      </MainCategoryTag>
      <Image
        p="5% 12% 1%"
        aspectRatio="auto"
        maxHeight="300px"
        width="auto"
        src={img}
      />
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
      {/* <Text>{content.high}</Text> */}
      <Button
        as={Link}
        to={`/blog/${id}`}
        color={articleTags[keywords[0]]?.color}
        alignSelf={{ base: "center", md: "flex-end" }}
        fontSize={{
          base: "11px",
          xs: "11.5px",
          sm: "12px",
          md: "14px",
          lg: "16px",
        }}
        bgColor={articleTags[keywords[0]]?.bgColor}
        _hover={{ textDecoration: "underline" }}
        p={{ base: "6px", sm: "8px", md: "12px" }}
        mt={{ base: "20px", sm: "28px", md: "48px" }}
        h={{base: "28px", sm: "36px", md: "40px", lg: "44px"}}
      >
        Citește mai multe
      </Button>
    </VStack>
  );
}
