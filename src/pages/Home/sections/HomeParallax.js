import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import img1 from "../../../assets/images/cabinet1.jpg";
// import img2 from "../../../assets/images/cabinet2.jpg";

const ParallaxText = styled(Text)`
  min-width: 170px;
  font-size: ${(props) => props.fontSize};
  position: absolute;
  width: 28%;
  font-family: "EdwardianScript";
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

function HomeParallax() {
  return (
    <Box
      border="2px solid red"
      maxW="100vw"
      h="fit-content"
      minH={{ base: "100vh" }}
      pt={{ base: "23vw", xs: "20vw", sm: "14vw", md: "10vw", lg: "8vw" }}
      mb={{
        base: "10vh",
        xs: "13vh",
        sm: "17vh",
        md: "25vh",
        lg: "40vh",
        xl: "50vh",
      }}
      // border="1px solid blue"
      position="relative"
      color="accents.yellow"
      lineHeight={"2.5rem"}
    >
      <Text color="red" textAlign={'center'}> AICI TREBUIE MODIFICAT </Text>
      <Box
        margin="0 auto"
        bgColor="tints.yellow"
        w={{ base: "50%", xs: "46%", sm: "42%", md: "38%", lg: "32%" }}
        h={{
          base: "50vh",
          xs: "46vh",
          sm: "55vh",
          md: "62vh",
          lg: "64vh",
          xl: "72vh",
        }}
        color="accents.army"
      />
      <ParallaxText
        fontSize={{
          base: "32px",
          xs: "33px",
          sm: "37px",
          md: "42px",
          lg: "48px",
          xl: "64px",
        }}
        top={{
          base: "27%",
          xs: "27%",
          sm: "32%",
          md: "37%",
          lg: "37%",
          xl: "40%",
        }}
        left={{ base: "23%", xs: "25%", sm: "23%", md: "24%", lg: "30%" }}
        textAlign={"left"}
        mixBlendMode={"multiply"}
      >
        {" "}
        am creat un spatiu sigur
      </ParallaxText>
      <ParallaxText
        fontSize={{
          base: "32px",
          xs: "33px",
          sm: "37px",
          md: "42px",
          lg: "48px",
          xl: "64px",
        }}
        top={{ base: "36%", xs: "35%", md: "48%", lg: "61%" }}
        right={{ base: "18%", xs: "20%", md: "24%", lg: "28%" }}
        textAlign={"right"}
        mixBlendMode={"multiply"}
      >
        {" "}
        unde fricile raman la usa
      </ParallaxText>

      <Box
        position="absolute"
        top={{ base: "9%", xs: "8%", md: "6%", lg: "2%", xl: "-1%" }}
        left={{ base: "10%", md: "12%", lg: "20%" }}
        w={{ base: "28vw", md: "26vw", lg: "20vw", xl: "16vw" }}
        h={{ base: "36vw", md: "36vw", lg: "27vw", xl: "20vw" }}
        bgImage={"/images/cabinet2.jpg"}
        bgSize={"cover"}
        bgPosition={"center"}
        zIndex={"-2"}
      />
      <Box
        position="absolute"
        top={{ base: "48%", xs: "47%", md: "64%", lg: "70%", xl: "72%" }}
        right={{ base: "8%", xs: "10%", md: "16%", lg: "17%", xl: "20%" }}
        w={{
          base: "30vw",
          xs: "27vw",
          sm: "26vw",
          md: "23vw",
          lg: "19vw",
          xl: "16vw",
        }}
        h={{
          base: "38vw",
          xs: "32vw",
          sm: "28vw",
          md: "28vw",
          lg: "26vw",
          xl: "19vw",
        }}
        bgImage={"/images/cabinet1.jpg"}
        bgSize={"cover"}
        bgPosition={"center"}
        zIndex={"-2"}
      />
    </Box>
  );
}

export default HomeParallax;
