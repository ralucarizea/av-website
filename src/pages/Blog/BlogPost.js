import React, { useEffect } from "react";
import { articles } from "../../assets/constants/data";
import { useParams } from "react-router-dom";
import { MDfont, SMfont, XXLfont, XXXLfont } from "../../assets/styles/theme";
import { PageTitle } from "../About/sections/AboutHero";
import {
  Box,
  Button,
  Divider,
  FormErrorMessage,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Title = styled(Heading)`
  font-family: "DM Sans";
  letter-spacing: -0.5px;
  font-size: ${(props) => props.fontSize};
`;
export const Subtitle = styled(Heading)`
  font-family: "DM Sans";
  letter-spacing: -0.5px;
  font-size: ${(props) => props.fontSize};
`;

export default function BlogPost() {
  const params = useParams();
  const blogId = params.id;
  const article = articles.find(
    (article) => article?.id?.toString() === blogId
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <VStack h="fit" w="100%" fontFamily={"sans"} color="neutrals.dark">
      <HStack
        // border="1px solid pink"
        w={{ base: "85%", sm: "80%", lg: "65%" }}
        mt={{ base: "", sm: "16vw", md: "8vw", lg: "8vw", xl: "3vw" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack w={{ base: "75%", md: "45%" }} alignItems={"flex-start"}>
          <Title
            fontSize={{ base: "", sm: "2xl", md: "2xl", lg: "3xl", xl: "4xl" }}
          >
            {article.titleBold} {article.title}
          </Title>
          <HStack
            h="fit"
            ml="2%"
            mt="3%"
            mb={{ base: "24px", md: 0 }}
            // border="1px solid green"
            w="110%"
            justifyContent={{ base: "center", md: "flex-start" }}
            fontSize={SMfont}
          >
            <Text
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              color="rgba(0,0,0, 0.55)"
            >
              de Adina Varodi
            </Text>
            <Divider
              orientation="vertical"
              border="1px solid black"
              h="100%"
              // w="2%"
            />
            <Text
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              color="rgba(0,0,0, 0.55)"
              ml="2%"
            >
              OCT 23, 2023
            </Text>
          </HStack>
        </VStack>
        <Image
          w={{ base: "85%", sm: "80%", md: "54%", lg: "54%", xl: "52%" }}
          h="auto"
          src={article.img}
        />
      </HStack>
      <VStack
        w="50%"
        mt={{ base: "5vw", sm: "4vw", md: "3vw", lg: "3vw", xl: "2vw" }}
        fontSize={MDfont}
      >
        <Box
          mb={{ base: "4vw", sm: "3.5vw", md: "3vw", lg: "2.5vw", xl: "1.5vw" }}
        >
          {article.content.highlightedParagraph}
        </Box>
        <Box>
          <Subtitle
            mb={{ base: "20px", md: "24px", lg: "28px", xl: "32px" }}
            fontSize={XXLfont}
          >
            {" "}
            {article.content.firstHeading}
          </Subtitle>{" "}
          <Text mb={{ base: "20px", md: "24px", lg: "28px", xl: "32px" }}>
            {" "}
            {article.content.secondParagraph}
          </Text>
        </Box>
        <Box>
          <Subtitle
            mb={{ base: "20px", md: "24px", lg: "28px", xl: "32px" }}
            fontSize={XXLfont}
          >
            {article.content.secondHeading}
          </Subtitle>
          <Text> {article.content.thirdParagraph}</Text>
        </Box>
      </VStack>
    </VStack>
  );
}
