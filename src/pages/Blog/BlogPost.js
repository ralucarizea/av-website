import React, { useEffect } from "react";
import { articles } from "../../assets/constants/data";
import { useParams } from "react-router-dom";
import { MDfont } from "../../assets/styles/theme";
import { PageTitle } from "../About/sections/AboutHero";
import {
  Box,
  Button,
  FormErrorMessage,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  StyledFormControl,
  StyledServicePageHeading,
  StyledServicePageHighlightedParagraph,
  StyledServicePageText,
} from "../Services/ServicePage";

export default function BlogPost() {
  const params = useParams();
  const blogId = params.id;
  const article = articles.find(
    (article) => article?.id?.toString() === blogId,
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <VStack
      color="neutrals.dark"
      fontFamily="sans"
      lineHeight={"sm"}
      fontSize={MDfont}
    >
      <PageTitle>{article.title}</PageTitle>
      <HStack
        px={{ base: 8, xs: 10, sm: 10, md: 16, lg: 20, xl: 28 }}
        h="fit"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={7}
        color="inherit"
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack
          w={{ base: "90%", xs: "76%", md: "68%", lg: "60%", xl: "60%" }}
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: "8vw", md: "0" }}
        >
          <Box
            height={{ base: "25vh", sm: "35vh", md: "50vh" }}
            w="100%"
            bgImg={article.img}
            bgPosition={"center"}
            bgSize="cover"
            mb={{ base: "3vh", xs: "3vh", sm: "4vh", md: "5vh", lg: "4vh" }}
          />
          <StyledServicePageHighlightedParagraph
            padding={{
              base: "16px 16px 4px 8px",
              xs: "16px 8px 8px 8px",
              sm: "20px 20px 20px 8px",
              md: "20px 20px 20px 8px",
              lg: "24px 22px 24px 8px",
            }}
            width={{ base: "100%", xs: "99%", md: "98%", lg: "97%", xl: "96%" }}
          >
            {article.title}
            <Box
              width="97%"
              height="97%"
              position="absolute"
              borderRadius={{ base: "0 8rem 0 4rem", lg: "0 12rem 0 8rem" }}
              bgColor="rgba(246, 225, 214, 0.25)"
              top="0"
              left="0"
              bottom="0"
              margin="auto 0"
              zIndex="-1"
            ></Box>
          </StyledServicePageHighlightedParagraph>
          <StyledServicePageHeading
            margin={{
              base: "6vw 0 2.75vw",
              sm: "6vw 0 2.5vw",
              md: "6vw 0 2.25vw",
              lg: "4vw 0 1.75vw",
              xl: "3vw 0 1.5vw",
            }}
          >
            {article.titleBold}
          </StyledServicePageHeading>
          <StyledServicePageText>{article.title}</StyledServicePageText>
          <StyledServicePageHeading
            margin={{
              base: "6vw 0 2.75vw",
              sm: "7.5vw 0 2.5vw",
              md: "6vw 0 2.25vw",
              lg: "4vw 0 1.75vw",
              xl: "3vw 0 1.5vw",
            }}
          >
            {/*{service.description?.secondHeading}*/}
          </StyledServicePageHeading>
          <StyledServicePageText>
            {/*{service.description?.thirdParagraph}*/}
          </StyledServicePageText>
        </VStack>
        <VStack
          w="auto"
          maxW={{
            base: "100%",
            sm: "100%",
            md: "28vw",
            lg: "26vw",
            xl: "21vw",
          }}
          marginRight={{ base: "0", lg: "20px", xl: "100px" }}
          bgColor="rgba(246, 225, 214, 0.35)"
          h="fit"
          borderRadius={{ base: "0 0 80px 80px", md: "0 0 0 100px" }}
          position="sticky"
          top="90px"
        >
          <Text
            w={{ base: "70%", lg: "70%", xl: "80%" }}
            my={{ base: "4.75vw", sm: "3.5vw", lg: "2vw" }}
            fontFamily={"handwritten"}
            lineHeight={"2xs"}
            fontSize={{
              base: "16px",
              xs: "17px",
              sm: "18px",
              lg: "20px",
              xl: "22px",
            }}
          >
            Hai să ne cunoastem mai bine!
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
