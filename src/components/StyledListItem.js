import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { HiPuzzle } from "react-icons/hi";

export default function StyledListItem({ text, angle, color }) {
  return (
    <Flex width="fit-content" h="fit" justifyContent={"flex-start"} m={0.9} ml={2.75} alignItems={"center"}>
      <Icon
        transform={`rotate(${angle}deg)`}
        w="23px"
        h="25px"
        as={HiPuzzle}
        color={color}
      />
      <Text ml={0.5} fontSize={{base: "14px", sm: "15px", md: "15.75px", lg: "15.8px"}} fontWeight="500">
        {text}
      </Text>
    </Flex>
  );
}
