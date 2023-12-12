import React from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { XXLfont } from "../../../assets/styles/theme";
export const PageTitle = styled(Text)`
  font-family: "WardahRounded";
  font-size: calc(16px + 0.95vw);
  color: inherit;
  text-align: center;
  margin: 7vw auto 5.5vw;
  width: 80%;
`;

export default function AboutHero() {
  return (
    <Flex
      flexDirection={"column"}
      h="fit"
      w="full"
      color={"neutrals.dark"}
      zIndex="1"
    >
      <PageTitle>Despre mine</PageTitle>
      <Flex
        flexDirection={{ base: "column-reverse", sm: "row" }}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        minH={{base: "70vh", sm: "70vh", md: "70vh",  lg: "80vh" }}
        w="inherit"
        px={[1, 3, 4, 8, 10, 12, 20]}
        mt={["60px", "60px", "76px", "60px", "80px", "100px"]}
        mb={{base: "60px", xs: "60px", sm: "0px", md: "40px", xl: "100px"}}
        position="relative"
      >
        <Box
          borderRadius={"13vw 0 0 0vw"}
          position="absolute"
          top="0"
          left={{
            base: "auto",
            xs: "10%",
            sm: "12%",
            md: "16%",
            lg: "18%",
            xl: "21%",
          }}
          right={{ base: "auto", xs: "auto" }}
          h={{
            base: "50vh",
            xs: "58vh",
            sm: "63vh",
            md: "70vh",
            lg: "77vh",
            xl: "85vh",
          }}
          minW={{
            base: "275px",
            xs: "43vw",
            sm: "40vw",
            md: "36vw",
            lg: "32vw",
            xl: "26vw",
          }}
          w={{
            base: "56vw",
            xs: "46vw",
            sm: "42vw",
            md: "38vw",
            lg: "36vw",
            xl: "33vw",
          }}
          maxW="600px"
          bgImage={'url("https://res.cloudinary.com/dd82hyvds/image/upload/v1702369405/portraitImages/12-1_qemncp.jpg")'}
          bgSize="cover"
          bgPosition="bottom"
          zIndex={1}
        />
        <VStack
          bg="#fff"
          boxShadow={"0px 3px 11px 2px rgba(0,0,0,0.07)"}
          alignItems="flex-start"
          p={{
            base: "24px",
            xs: "10px 14px",
            sm: "14px 18px",
            md: "18px 20px",
            lg: "24px 28px",
            xl: "16px 32px",
          }}
          h={{
            base: "fit-content",
            xs: "47vh",
            sm: "46vh",
            md: "50vh",
            lg: "54vh",
            xl: "62vh",
          }}
          w={{
            base: "55vw",
            xs: "37vw",
            sm: "30vw",
            md: "30vw",
            lg: "26vw",
            xl: "22vw",
          }}
          minW={{ base: "240px", xs: "200px" }}
          fontSize={{
            base: "11px",
            xs: "xs",
            sm: "xs",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          position="absolute"
          top={{
            base: "55%",
            xs: "13%",
            sm: "16%",
            md: "20%",
            lg: "24%",
            xl: "26%",
          }}
          right={{
            base: "auto",
            xs: "11%",
            sm: "18%",
            md: "18%",
            lg: "25%",
            xl: "28%",
          }}
          left={{ base: "auto", xs: "auto" }}
          zIndex={3}
          borderRadius={"0 0 8vw 0"}
          justifyContent={"space-evenly"}
        >
          <Text fontSize={XXLfont} fontFamily={"serif"}>
            {" "}
            Cine sunt?{" "}
          </Text>
          <Text fontFamily={"sans"} lineHeight={"md"} w="95%">
            {" "}
            I am a Licensed Therapist clinical psychologist specializing in
            issues related to anxiety, stress, trauma, loss, and grief. I hold a
            Master's Degree in Counseling Psychology from the Gottman Institute
            and Beck institute. I completed a three year post-graduate training
            in Psycho-dynamic Psychotherapy at The Psychotherapy Institute in
            Berkeley and continue to be active in clinical consultation groups
            and trainings.{" "}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
