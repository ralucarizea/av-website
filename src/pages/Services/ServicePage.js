import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { PageTitle } from "../About/sections/AboutHero";
import styled from "@emotion/styled";
import { MDfont } from "../../assets/styles/theme";
import { useLocation } from "react-router-dom";

export const StyledServicePageHighlightedParagraph = styled(Box)`
  padding: ${(props) => props.padding};
  position: relative;
  font-weight: 500;
  width: ${(props) => props.width};
`;
export const StyledServicePageHeading = styled(Box)`
  font-weight: 700;
  font-size: calc(5px + 1em);
  margin: ${(props) => props.margin};
  // align-self: flex-start;
  width: 60%;
  @media screen and (max-width: 820px) {
    align-self: flex-start;
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const StyledServicePageText = styled(Box)`
  width: 75%;
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
export const StyledFormControl = styled(FormControl)`
  margin-bottom: 1em;
`;
export const StyledInput = styled(Input)`
  height: ${(props) => props.height};
  color: inherit;
  border-radius: 0px;
  border: 0px;
  border-bottom: 0.5px solid #582c12;
  padding-left: 4px;
  color: rgba(88, 44, 18, 0.7);
  font-weight: 500;

  &:focus-visible {
    box-shadow: none;
    border-color: rgba(88, 44, 18, 0.5);
  }
  &:hover {
    border-color: #582c12;
  }
`;
export const StyledFormLabel = styled(FormLabel)`
  color: inherit;
  font-size: calc(1em - 2px);
  margin-bottom: 2px;
  font-weight: 700;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;
export const StyledFormHelperText = styled(FormHelperText)`
  color: green;
  font-size: calc(1em - 3px);
`;

export default function ServicePage({ service }) {
  const location = useLocation();

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  console.debug(location);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [service.id]);

  return (
    <VStack
      color={"neutrals.dark"}
      fontFamily="sans"
      lineHeight={"sm"}
      fontSize={MDfont}
    >
      <PageTitle>{service.title}</PageTitle>
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
            bgImg={service.img}
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
            {service.description?.highlightedParagraph}
            <Box
              width="97%"
              height="97%"
              position="absolute"
              borderRadius={{ base: "0 8rem 0 4rem", lg: "0 12rem 0 8rem" }}
              bgColor="#fcf5f1"
              opacity="0.8"
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
            {service.description?.firstHeading}
          </StyledServicePageHeading>
          <StyledServicePageText>
            {service.description?.secondParagraph}
          </StyledServicePageText>
          <StyledServicePageHeading
            margin={{
              base: "6vw 0 2.75vw",
              sm: "7.5vw 0 2.5vw",
              md: "6vw 0 2.25vw",
              lg: "4vw 0 1.75vw",
              xl: "3vw 0 1.5vw",
            }}
          >
            {service.description?.secondHeading}
          </StyledServicePageHeading>
          <StyledServicePageText>
            {service.description?.thirdParagraph}
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
          bgColor={"rgba(246, 225, 214, 0.35)"}
          h="fit"
          borderRadius={{ base: "0 0 80px 80px", md: "0 0 0 100px" }}
          position="sticky"
          top="90px"
          // color="accents.red"
        >
          <Text
            w={{ base: "70%", lg: "80%", xl: "80%" }}
            my={{ base: "4.75vw", sm: "3.5vw", lg: "2vw" }}
            fontFamily={"handwritten"}
            lineHeight={"2.25rem"}
            fontSize={{
              base: "35px",
              xs: "37px",
              sm: "38px",
              lg: "44px",
              xl: "45px",
            }}
          >
            Hai sa ne cunoastem mai bine!
          </Text>
          <VStack
            w={{ base: "70%", lg: "70%", xl: "80%" }}
            mb={{ base: "7vw", sm: "5vw", lg: "3vw" }}
          >
            <StyledFormControl isInvalid={isError}>
              <StyledFormLabel>Nume</StyledFormLabel>
              <StyledInput
                type="name"
                value={StyledInput.name}
                onChange={handleInputChange}
                height={{ base: "24px", sm: "28px", lg: "36px" }}
              />
              {!isError ? (
                <StyledFormHelperText></StyledFormHelperText>
              ) : (
                <FormErrorMessage>
                  Te rugam sa introduci numele
                </FormErrorMessage>
              )}
            </StyledFormControl>
            <StyledFormControl isInvalid={isError}>
              <StyledFormLabel>E-mail</StyledFormLabel>
              <StyledInput
                type="email"
                value={StyledInput.email}
                onChange={handleInputChange}
                height={{ base: "24px", sm: "28px", lg: "36px" }}
              />
              {!isError ? (
                <StyledFormHelperText></StyledFormHelperText>
              ) : (
                <FormErrorMessage>
                  Te rugam sa introduci o adresa de e-mail valida
                </FormErrorMessage>
              )}
            </StyledFormControl>
            <StyledFormControl isInvalid={isError}>
              <StyledFormLabel>Mesaj</StyledFormLabel>
              <StyledInput
                type="name"
                value={StyledInput.message}
                onChange={handleInputChange}
                height={{ base: "24px", sm: "28px", lg: "36px" }}
              />
              {!isError ? (
                <StyledFormHelperText></StyledFormHelperText>
              ) : (
                <FormErrorMessage>
                  Te rugam sa introduci mesajul tau.
                </FormErrorMessage>
              )}
            </StyledFormControl>
            <Button
              padding={{
                base: "10px 12px",
                md: "8px 10px",
                lg: "10px 16px",
                xl: "14px 18px",
              }}
              alignSelf="center"
              bgColor="accents.red"
              color="neutrals.light"
              height="fit"
              fontSize={{ base: "11px", xs: "12px", lg: "14px" }}
            >
              Trimite mesajul
            </Button>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
