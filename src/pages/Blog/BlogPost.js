import React, { useEffect } from "react";
import { articles } from "../../assets/constants/data";
import { useParams } from "react-router-dom";
import { MDfont} from "../../assets/styles/theme";
import {
  Divider,
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
        w={{ base: "85%", sm: "80%", lg: "68%" }}
        mt={{ base: "18vw", sm: "16vw", md: "8vw", lg: "8vw", xl: "4vw" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack
          w={{ base: "95%", sm: "70%", md: "45%" }}
          alignItems={"flex-start"}
        >
          <Title
            fontSize={{
              base: "23px",
              xs: "24px",
              sm: "2xl",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            textAlign={{base: "center", md: "left"}}
          >
            {article.titleBold} {article.title}
          </Title>
          <HStack
            h="fit"
            ml={{ base: "0", sm: "2%" }}
            mt="3%"
            mb={{ base: "24px", md: 0 }}
            // border="1px solid green"
            w="110%"
            justifyContent={{ base: "center", md: "flex-start" }}
            fontSize={{
              base: "11px",
              sm: "13px",
              md: "14px",
              lg: "16px",
            }}
          >
            <Text
              textTransform={"uppercase"}
              letterSpacing={"1.5px"}
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
              letterSpacing={"1.5px"}
              color="rgba(0,0,0, 0.55)"
              ml="2%"
            >
              {article.publicationDate}
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
        w={{ base: "80%", xs: "75%", md: "60%", lg: "50%" }}
        mt={{ base: "5vw", sm: "4vw", md: "3vw", lg: "3vw", xl: "2vw" }}
        fontSize={MDfont}
      >
        {/* <Box
          mb={{ base: "4vw", sm: "3.5vw", md: "3vw", lg: "2.5vw", xl: "1.5vw" }}
        >
          {article.content.highlightedParagraph}
        </Box>
        <Box>
          <Subtitle
            mb={{ base: "18px", md: "24px", lg: "28px", xl: "32px" }}
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
            mb={{ base: "18px", md: "24px", lg: "28px", xl: "32px" }}
            fontSize={XXLfont}
          >
            {article.content.secondHeading}
          </Subtitle>
          <Text> {article.content.thirdParagraph}</Text>
        </Box> */}
        {typeof article.content === "function"
          ? article.content()
          : article.content}
      </VStack>
    </VStack>
  );
}
