import React from "react";
import { Box, Text, Flex, VStack, Icon } from "@chakra-ui/react";
import { XXXLfont } from "../../../assets/styles/theme";
import styled from "@emotion/styled";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { TbHeartHandshake } from "react-icons/tb";
import { CalendarIcon } from "@chakra-ui/icons";

export const StyledStackBox = styled(Box)`
  // background: pink;
  margin: ${(props) => props.m};
  height: 90%;
  width: 55%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  gap: 1.5vw;
`;
export const StyledStack = styled(Flex)`
  flex-direction: column;
  max-width: 32%;
  align-items: center;
  height: 300px;
`;

export default function HomeInfoBanner() {
  return (
    <VStack
      bg="accents.army"
      color="tints.red"
      p="6vw"
      h="auto"
      maxW="100vw"
      justifyContent={"space-evenly"}
    >
      <Text
        fontSize={XXXLfont}
        fontFamily={"handwritten"}
        mb={{ base: 4, md: 10, lg: 16 }}
        w="68%"
        textAlign={"center"}
      >
        Cum se desfasoară o sedintă
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="center"
        alignItems={{ base: "center", md: "flex-start" }}
        // bg="green.700"
        color="inherit"
        fontFamily={"sans"}
        gap={4}
        mt={{ base: "8vw", md: "3vw" }}
      >
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "52%", xl: "28%" }}
          p={2}
          minW="200px"
        >
          <Icon
            mb={{ base: "8px", md: "16px" }}
            as={IoCalendarNumberOutline}
            w={{ base: "24px", sm: "26px", lg: "36px", xl: "48px" }}
            h={{ base: "24px", sm: "26px", lg: "36px", xl: "48px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w="80%">
            Lorem ipsum dolor sit amet consectetur. Tristique libero cras dolor
            morbi. Amet neque elementum et amet nunc amet.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "52%", xl: "28%" }}
          p={2}
          minW="200px"
        >
          <Icon
            mb={{ base: "6px", md: "16px" }}
            as={TbMessages}
            w={{ base: "24px", sm: "28px", lg: "36px", xl: "48px" }}
            h={{ base: "24px", sm: "28px", lg: "36px", xl: "48px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w="80%">
            Lorem ipsum dolor sit amet consectetur. Tristique libero cras dolor
            morbi. Amet neque elementum et amet nunc amet. Amet neque elementum
            et amet nunc amet.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection={"column"}
          textAlign="center"
          maxW={{ base: "65%", sm: "45%", md: "52%", xl: "28%" }}
          p={2}
          minW="200px"
        >
          <Icon
            mb={{ base: "8px", md: "16px" }}
            as={TbHeartHandshake}
            w={{ base: "24px", sm: "28px", lg: "36px", xl: "48px" }}
            h={{ base: "24px", sm: "28px", lg: "36px", xl: "48px" }}
          />
          <Text fontSize={{ base: "xs", sm: "sm", lg: "md" }} mt={2} w="80%">
            Lorem ipsum dolor sit amet consectetur. Tristique libero cras dolor
            morbi. Amet neque elementum. Lorem ipsum.
          </Text>
        </Flex>
        {/* Add a third box if needed with another icon */}
      </Flex>
    </VStack>
  );
}
