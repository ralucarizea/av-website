import {
  Box,
  Button,
  FormControl,
  // FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { PageTitle } from "../About/sections/AboutHero";
import styled from "@emotion/styled";
import { useForm, ValidationError } from "@formspree/react";

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
  margin-top: 16px;
  margin-left: 16px;
  width: 78%;
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
// export const StyledFormHelperText = styled(FormHelperText)`
//   color: green;
//   font-size: calc(1em - 3px);
// `;

export default function ServicePage({ service }) {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  const toast = useToast();

  // const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [service.id]);

  const [state, handleSubmit] = useForm("xqkrajlj");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isSubmitted) {
      if (state.succeeded) {
        toast({
          title: "Vă mulțumesc pentru mesajul transmis.",
          description:
            "Voi încerca să vă răspund la e-mail cât se poate de repede.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(false); // Reset the submitted state
      } else if (!state.submitting) {
        toast({
          title: "Submission Failed.",
          description: "Please check your inputs and try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsSubmitted(false); // Reset the submitted state
      }
    }
  }, [state, toast, isSubmitted]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Indicate a submission attempt
    await handleSubmit(e);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <VStack
      color={"neutrals.dark"}
      fontFamily="sans"
      lineHeight={"sm"}
      fontSize={{ base: "14px", sm: "15px", md: "16px" }}
    >
      <PageTitle>{service.title}</PageTitle>
      <HStack
        px={{ base: 3, xs: 6, sm: 8, md: 10, lg: 16, xl: 28 }}
        h="fit"
        justifyContent={{ base: "center", md: "space-between", lg: "center" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={7}
        color="inherit"
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack
          w={{ base: "90%", xs: "76%", md: "68%", lg: "60%", xl: "50%" }}
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
          {service.description?.zeroHeading ? (
            <StyledServicePageHeading
              margin={{
                base: "6vw 0 2.75vw",
                sm: "6vw 0 2.5vw",
                md: "6vw 0 2.25vw",
                lg: "4vw 0 1.75vw",
                xl: "3vw 0 1.5vw",
              }}
            >
              {service.description?.zeroHeading}
            </StyledServicePageHeading>
          ) : (
            <></>
          )}
          <StyledServicePageHighlightedParagraph
            padding={{
              base: "16px 20px",
              xs: "16px 8px 8px 8px",
              sm: "20px 20px 20px 8px",
              md: "20px 20px 20px 8px",
              lg: "24px 22px 24px 8px",
            }}
            width={{ base: "100%", xs: "99%", md: "98%", lg: "97%", xl: "96%" }}
            // textAlign={{base: "center", md:"left"}}
            fontWeight={600}
          >
            {service.description?.highlightedParagraph}
            <Box
              width="97%"
              height="97%"
              position="absolute"
              borderRadius={{ base: "0 6rem 0 4rem", lg: "0 12rem 0 8rem" }}
              bgColor="#fcf5f1"
              opacity="0.8"
              top="0"
              left="0"
              bottom="0"
              margin="auto 0"
              zIndex="-1"
            ></Box>
          </StyledServicePageHighlightedParagraph>

          {service.description?.firstHeading !== "" ? (
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
          ) : (
            <></>
          )}
          <StyledServicePageText>
            {}
            {typeof service.description?.secondParagraph === "function"
              ? service.description?.secondParagraph()
              : service.description?.secondParagraph}
          </StyledServicePageText>

          {service.description?.secondHeading !== "" ? (
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
          ) : (
            <></>
          )}

          <StyledServicePageText>
            {service.description?.thirdParagraph}
          </StyledServicePageText>
        </VStack>
        <VStack
          // w="auto"
          minW="290px"
          w={{
            base: "52vw",
            xs: "48vw",
            sm: "45vw",
            md: "29vw",
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
            mx={{
              base: "12px",
              xs: "16px",
              sm: "0px",
              lg: "20px",
              xl: "24px",
            }}
            pl={{ base: "0px", md: "16px" }}
            w={{ base: "100%" }}
            my={{ base: "4.25vw", sm: "3vw", lg: "2vw" }}
            fontFamily={"handwritten"}
            lineHeight={{ base: "1.55rem", md: "1.8rem", xl: "1.9rem" }}
            fontSize={{
              base: "34px",
              xs: "36px",
              sm: "38px",
              lg: "40px",
              xl: "43px",
            }}
            textAlign={{ base: "center", md: "left" }}
          >
            {service.title === 'Psihoterapie de grup' ? "Vrei sa te inscrii in grupul de suport?" : "Ai vreo curiozitate?"}
          </Text>
          <VStack
            as="form"
            h="100%"
            alignItems={"flex-start"}
            w={{ base: "70%", lg: "80%", xl: "75%" }}
            mb={{ base: "7vw", sm: "5vw", lg: "3vw" }}
            gap={3}
            // border="1px solid red"
            onSubmit={onSubmit}
          >
            {/* <FormControl > */}
            {/* <Box> */}
            <StyledFormLabel htmlFor="name">Nume</StyledFormLabel>
            <StyledInput
              isRequired
              id="full-name"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              height={{ base: "24px", sm: "28px", lg: "36px" }}
            />
            <ValidationError
              prefix="Name"
              field="email"
              errors={state.errors}
            />
            <StyledFormLabel htmlFor="email">E-mail</StyledFormLabel>
            <StyledInput
              isRequired
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              height={{ base: "24px", sm: "28px", lg: "36px" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <StyledFormLabel htmlFor="message">Mesaj</StyledFormLabel>
            <Textarea
              w="100%"
              fontSize="calc(1em - 1px)"
              borderRadius="0px"
              border="0px"
              borderBottom="1px"
              borderColor="#582c12"
              color="rgba(88, 44, 18, 0.7)"
              isRequired
              type="textarea"
              id="message"
              name="message"
              px="8px"
              value={message}
              onChange={handleMessageChange}
              height={{ base: "24px", sm: "28px", lg: "36px" }}
              placeholder={service.title === 'Psihoterapie de grup' ? "Da, vreau sa ma inscriu la atelierul din data 30 martie!" : ""}
              _placeholder={{ color: "rgba(0,0,0, 0.3)", fontStyle:"italic"}}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            {/* </Box> */}
            <Button
              mt="12px"
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
              type="submit"
              disabled={state.submitting}
            >
              Trimite e-mail
            </Button>
          </VStack>
          {/* </FormControl> */}
          {/* <StyledFormControl isInvalid={isError} onSubmit={handleSubmit}>
              <StyledFormLabel htmlFor="name">Nume</StyledFormLabel>
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
                id="email"
                name="email"
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
            
            */}
        </VStack>
      </HStack>
    </VStack>
  );
}
