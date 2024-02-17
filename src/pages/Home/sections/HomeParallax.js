import React from "react";
import { Box, Show, Text } from "@chakra-ui/react";
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
  base: "13vw",
  xs: "11vw",
  sm: "9.75vw",
  md: "8.35vw",
  lg: "7.15vw",
  xl: "5.55vw",
};
const percentagePosition = {
  base: "2%",
  xs: "2.75%",
  sm: "3.75%",
  md: "7%",
  lg: "10%",
  xl: "13%",
};
function HomeParallax() {
  return (
    <Box
      // border="1px solid red"
      maxW="100vw"
      h="fit-content"
      minH={{ base: "140vh", sm: "125vh" }}
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
        base: "2.35rem",
        sm: "3.25rem",
        md: "4rem",
        lg: "4.45rem",
        xl: "5.15rem",
      }}
    >
      <Parallax speed={8}>
        {/* <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "20px",
            // xs: "300px",
            sm: "200px",
            md: "120px",
            lg: "110px",
            xl: "100px",
          }}
          left={percentagePosition}
          w={{ base: "39vw", sm: "30vw", md: "26vw", lg: "22vw", xl: "21vw" }}
          h={{ base: "45vw", sm: "43vw", md: "36vw", lg: "33vw", xl: "29vw" }}
          minHeight="250px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704283748/pinkroom_zukhge.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-2"}
          minWidth="150px"
        /> */}
      </Parallax>
      <Parallax speed={25}>
        <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "530px",
            xs: "480px",
            sm: "585px",
            md: "540px",
            lg: "500px",
            xl: "600px",
          }}
          right={percentagePosition}
          w={{
            base: "40vw",
            xs: "32vw",
            sm: "27vw",
            md: "23vw",
            lg: "22vw",
            xl: "18vw",
          }}
          h={{
            base: "60vw",
            xs: "46vw",
            sm: "38vw",
            md: "32vw",
            lg: "32vw",
            xl: "25vw",
          }}
          minHeight="220px"
          minWidth="150px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1708179643/imag-cabinet11_vrfttl.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-2"}
        />
      </Parallax>
      <Parallax speed={70}>
        {/* <Box
          position="absolute"
          top={{
            base: "1300px",
            // xs: "1130px",
            sm: "1050px",
            md: "900px",
            lg: "990px",
            xl: "770px",
          }}
          left={{
            base: "50%",
            xs: "58%",
            sm: "1.8%",
            md: "2.5%",
            lg: "4%",
            xl: "4%",
          }}
          w={{
            base: "36vw",
            xs: "29vw",
            sm: "27vw",
            md: "21vw",
            lg: "19vw",
            xl: "15vw",
          }}
          h={{
            base: "40vw",
            xs: "39vw",
            sm: "37vw",
            md: "29vw",
            lg: "26vw",
            xl: "20vw",
          }}
          minHeight="210px"
          minWidth="140px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1704565728/cabinet4_xzxheb.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-5"}
          borderRadius="0.5rem"
        /> */}
      </Parallax>
      <Parallax speed={57}>
        <Box
          position="absolute"
          borderRadius="0.5rem"
          top={{
            base: "950px",
            xs: "940px",
            sm: "1140px",
            md: "1120px",
            lg: "1175px",
            xl: "1250px",
          }}
          left={{ base: "3.6%", xs:"5%",sm: "65%", md: "58%", lg: "58%", xl: "55%" }}
          w={{
            base: "40vw",
            xs: "27vw",
            sm: "23.5vw",
            md: "21vw",
            lg: "19vw",
            xl: "15vw",
          }}
          h={{
            base: "37.8vw",
            xs: "35vw",
            sm: "32vw",
            md: "28vw",
            lg: "26vw",
            xl: "20vw",
          }}
          minHeight="200px"
          bgImage={
            "url(https://res.cloudinary.com/dd82hyvds/image/upload/v1708179643/imag-cabinet11_vrfttl.jpg)"
          }
          bgSize={"cover"}
          bgPosition={"center"}
          zIndex={"-5"}
        />
      </Parallax>
      <Parallax speed={-13}>
        <Show below="sm">
          <Box
            w={{ base: "51vw", xs: "47vw"}}
            h={{ base: "60vw", xs: "46vw"}}
            top={{
              base: "134px",
              xs: "230px",
            }}
            // backdropFilter={"blur(12px)"}
            // boxShadow={"0px 10px 12px 10px rgba(0 ,0 ,0 ,0.1)"}
            backgroundColor=" rgba(255 ,255 ,255 ,1)"
            position="absolute"
            left="0"
            right="0"
            margin="0 auto"
            borderRadius="0.95rem"
          />
        </Show>

        <ParallaxText
          fontSize={parallaxFont}
          top={{
            base: "160px",
            xs: "275px",
            sm: "280px",
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
          Am ales un spatiu sigur, unde fricile raman la usa
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
