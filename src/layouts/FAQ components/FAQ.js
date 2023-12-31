//3rd party imports
import { React } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { faqMainpage } from "../../assets/constants/data";
import { MDfont } from "../../assets/styles/theme";

const FAQ = () => {
  return (
    <Box
      height="fit-content"
      mt={{ base: "180px", md: "250px", xl: "280px" }}
      px={{ base: "20px", xs: "36px", md: "60px", xl: "84px" }}
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      fontFamily={"sans"}
      color={"accents.army"}
    >
      <Box
        pb={{ base: "14vw", xs: "8vw", md: "8vw", xl: "6vw" }}
        fontSize={{
          base: "46px",
          xs: "48px",
          sm: "50px",
          md: "50px",
          lg: "52px",
          xl: "72px",
        }}
        lineHeight={"2.25rem"}
        fontFamily={"handwritten"}
        width={{
          base: "75%",
          xs: "70%",
          sm: "65%",
          md: "60%",
          lg: "50%",
          xl: "46%",
        }}
        textAlign={"center"}
      >
        Întrebari frecvent întalnite
      </Box>
      <Box
        width={{ base: "92%", xs: "85%", md: "80%", xl: "70%" }}
        alignItems={"center"}
        fontSize={MDfont}
      >
        <Accordion
          allowMultiple
          fontFamily="Montserrat"
          color={"accents.army"}
          borderColor={"rgba(0,0,0, 0.4)"}
        >
          {Object.keys(faqMainpage).map((qa, index) => (
            <AccordionItem
              // borderColor={"accents.army"}
              transition="all 0.1s ease-in-out"
              py="1.25vw"
              key={index}
              color={"accents.army"}
              // _hover={{
              //   bg: faqMainpage[qa].bgColor,
              //   opacity: 1,
              //   color: "accents.lime",
              // }}
            >
              <AccordionButton
                _focusVisible={{ boxShadow: "0px" }}
                _hover={{ background: "none" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="600"
                  fontFamily="sans"
                  fontSize={{
                    base: "14px",
                    xs: "14px",
                    md: "17px",
                    xl: "21px",
                  }}
                  lineHeight={"xs"}
                >
                  {faqMainpage[qa].question}
                </Box>
                <AccordionIcon
                  as={VscArrowRight}
                  ml="8px"
                  width={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }}
                  height={{
                    base: "16px",
                    xs: "18px",
                    sm: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "26px",
                  }}
                />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                mr="16px"
                mt={{ base: "6px", xs: "8px", md: "16px", xl: "16px" }}
                // ml="16px"
                fontFamily="sans"
                fontWeight="300"
                fontSize={{ base: "13px", xs: "14px", md: "16px", xl: "17px" }}
              >
                {typeof faqMainpage[qa].answer === "function"
                  ? faqMainpage[qa].answer()
                  : faqMainpage[qa].answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
