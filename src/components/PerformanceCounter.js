import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import CountUp from "react-countup";
import React from "react";
import { performanceCounterData } from "../assets/constants/data";

export default function PerformanceCounter() {
  return (
    <Flex
      w="100%"
      h="fit"
      my={{base: "2vw", md: "3vw",  lg: "5vw" }}
      py="8vw"
      px={{ base: "12vw", sm: "12vw", md: "12vw",  lg: "3.75vw" }}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      color="neutrals.dark"
      flexWrap={"wrap"}
    >
      {Object.keys(performanceCounterData).map((index) => (
        <>
          <CountUp
            key={index}
            start={0}
            end={performanceCounterData[index].number}
            useGrouping={false}
            delay={2.5}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <Text
                // border="1px solid red"
                textAlign={"center"}
                position="relative"
                minWidth="fit-content"
                width={{ base: "40%", xs: "45%", lg: "21%" }}
                letterSpacing={"-0.75px"}
                fontWeight="00"
                fontFamily={"sans"}
                fontSize={{
                  base: "12.75px",
                  xs: "calc(11px + 0.45vw)",
                  sm: "calc(11px + 0.5vw)",
                  md: "calc(11px + 0.5vw)",
                  lg: "calc(10px + 0.5vw)",
                  xl: "calc(10px + 0.6vw)",
                }}
                lineHeight={"2xs"}
              >
                <Box
                  fontSize={{
                    base: "calc(17.5vw - 10px)",
                    xs: "calc(15.5vw - 10px)",
                    sm: "calc(13.5vw - 10px)",
                    md: "calc(10.5vw - 5px) ",
                    lg: "calc(9.75vw - 10px) ",
                    xl: "calc(8.8vw - 10px) ",
                  }}
                  opacity="0.16"
                  fontFamily={"serif"}
                  letterSpacing={"-1px"}
                  fontWeight={"400"}
                  minWidth={"fit-content"}
                  ref={countUpRef}
                  color={performanceCounterData[index].color}
                />

                <Text
                  minWidth="fit-content"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color={performanceCounterData[index].color}
                >
                  {performanceCounterData[index].indicator}
                </Text>
              </Text>
            )}
          </CountUp>
          <Divider
            orientation="vertical"
            height={"4vw"}
            width="0px"
            border="0.25px solid red"
            borderColor="accents.army"
            opacity="0.2"
            mx="8px"
            _even={{ display: { base: "none", lg: "block" } }}
            _last={{ display: "none" }}
          />
        </>
      ))}
    </Flex>
  );
}
