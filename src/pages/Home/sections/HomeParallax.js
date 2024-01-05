import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import img1 from "../../../assets/images/cabinet1.jpg";
// import img2 from "../../../assets/images/cabinet2.jpg";
import { Parallax } from "react-scroll-parallax";

const ParallaxText = styled(Box)`
  min-width: 170px;
  font-size: ${(props) => props.fontSize};
  position: absolute;
  width: ${(props) => props.width};
  font-family: "EdwardianScript";
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  z-index: 10;
`;
const parallaxFont = {
  base: "12vw",
  xs: "11vw",
  sm: "9.75vw",
  md: "8.35vw",
  lg: "7.15vw",
  xl: "5.55vw",
};
const percentagePosition = {
  base: "2%",
  xs: "2.75%",
  sm: "4%",
  md: "6%",
  lg: "7%",
  xl: "13%",
};
function HomeParallax() {
  return (
    <Box
      // border="1px solid red"
      maxW="100vw"
      h="fit-content"
    minH={{ base: "120vh", sm: "140vh" }}
      pt={{ base: "23vw", xs: "20vw", sm: "14vw", md: "10vw", lg: "8vw" }}
      mb={{
        base: "10vh",
        xs: "13vh",
        sm: "17vh",
        md: "25vh",
        lg: "40vh",
        xl: "50vh",
      }}
      position="relative"
      color="accents.army"
      lineHeight={{
        base: "2.75rem",
        sm: "3.25rem",
        md: "4rem",
        lg: "4.45rem",
        xl: "5.15rem",
      }}
    >
      <Parallax speed={8}>
        <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "240px",
            xs: "300px",
            sm: "220px",
            md: "120px",
            lg: "110px",
            xl: "100px",
          }}
          left={percentagePosition}
          w={{ base: "27vw", xs: "31vw", md: "26vw", lg: "22vw", xl: "21vw" }}
          h={{ base: "40vw", xs: "43vw", md: "36vw", lg: "33vw", xl: "29vw" }}
          minHeight="250px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704283748/pinkroom_zukhge.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-2"}
          minWidth="150px"

        />
      </Parallax>
      <Parallax speed={25}>
        <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "430px",
            xs: "620px",
            sm: "575px",
            md: "540px",
            lg: "500px",
            xl: "600px",
          }}
          right={percentagePosition}
          w={{
            base: "30vw",
            xs: "28vw",
            sm: "27vw",
            md: "23vw",
            lg: "22vw",
            xl: "18vw",
          }}
          h={{
            base: "42vw",
            xs: "40vw",
            sm: "35vw",
            md: "32vw",
            lg: "30vw",
            xl: "25vw",
          }}
          minHeight="220px"
          minWidth="150px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704283748/whiteroom_wp2eap.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-2"}
        />
      </Parallax>
      <Parallax speed={70}>
        <Box
          position="absolute"
          top={{
            base: "1100px",
            xs: "1130px",
            sm: "1150px",
            md: "1000px",
            lg: "950px",
            xl: "750px",
          }}
          left={{
            base: "1%",
            xs: "1.5%",
            sm: "2%",
            md: "3%",
            lg: "6%",
            xl: "4%",
          }}
          w={{
            base: "30vw",
            xs: "27vw",
            sm: "27vw",
            md: "23vw",
            lg: "19vw",
            xl: "15vw",
          }}
          h={{
            base: "38vw",
            xs: "39vw",
            sm: "35vw",
            md: "28vw",
            lg: "26vw",
            xl: "20vw",
          }}
          minHeight="210px"
          minWidth="140px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704283749/greenroom_aruqh7.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-5"}
          borderRadius="0.5rem"
        />
      </Parallax>
      <Parallax speed={57}>
        <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "950px",
            xs: "1150px",
            md: "1100px",
            lg: "1100px",
            xl: "1150px",
          }}
          left={{ base: "62%", sm: "63%", md: "58%", lg: "58%", xl: "55%" }}
          w={{
            base: "25vw",
            xs: "25vw",
            sm: "23.5vw",
            md: "21vw",
            lg: "19vw",
            xl: "15vw",
          }}
          h={{
            base: "35vw",
            xs: "32vw",
            sm: "32vw",
            md: "28vw",
            lg: "26vw",
            xl: "20vw",
          }}
          minHeight="200px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704360851/brownroom_wtb9bp.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-5"}
        />
      </Parallax>
      <Parallax speed={-13}>
        {/* <Box
          w={{ base: "", md: "", lg: "31vw" }}
          h={{ base: "", md: "", lg: "37vw" }}
          bg="tints.yellow"
          position="absolute"
          left="0"
          right="0"
          margin="0 auto"
          borderRadius="0.5rem"
        /> */}
        <ParallaxText
          fontSize={parallaxFont}
          top={{
            base: "160px",
            xs: "265px",
            sm: "270px",
            md: "190px",
            lg: "220px",
            xl: "250px",
          }}
          left={0}
          right={0}
          textAlign={"center"}
          margin="0 auto"
          width={{ base: "45%", sm: "40%", md: "42%", lg: "36%", xl: "29%" }}
        >
          am ales un spatiu sigur, unde fricile raman la usa
        </ParallaxText>
        {/* <ParallaxText
          fontSize={parallaxFont}
          top={{ base: "250px", xs: "230px", md: "345px", lg: "390px" }}
          right={{ base: "18%", xs: "23%", md: "24%", lg: "34%" }}
          textAlign={"right"}
          width={{ base: "45%", sm: "40%", md: "36%", lg: "32%" }}
        >
          unde fricile raman la usa 
        </ParallaxText> */}
      </Parallax>
    </Box>
  );
}

export default HomeParallax;
