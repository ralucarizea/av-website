import React, {useEffect, useState} from "react";
import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { HiPuzzle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function StyledListItem(props) {
  
    const [isOpen, setIsOpen] = useState(true); // Start with the tooltip open
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(false); // Close the tooltip after 300 ms
      }, 300);
  
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }, []); // Empty dependency array means this runs once on mount
  
  const { text, angle, color, tooltip, link, linkText } = props;
  return tooltip ? (
    <Tooltip
      label={tooltip}
      hasArrow
      placement="bottom-end"
      // closeDelay={500}
      isOpen={isOpen}
      bg="accents.red"
      color="#fff"
      style={{ zIndex: "0 !important"}}
    >
      <Flex
        width="fit-content"
        h="fit"
        justifyContent={"flex-start"}
        m={0.9}
        ml={2.75}
        mr={{ base: 2, sm: 4, md: 6, lg: 3, xl: 6 }}
        alignItems={"center"}
      >
        <Icon
          transform={`rotate(${angle}deg)`}
          w="23px"
          h="25px"
          as={HiPuzzle}
          color={color}
        />
        <Text
          ml={0.5}
          href={link ? link : null}
          fontSize={{ base: "14px", sm: "15px", md: "15.75px", lg: "15.8px" }}
          fontWeight="500"
        >
          {text}
          <Link
            ml={0.5}
            to={link ? link : null}
            fontSize={{ base: "14px", sm: "15px", md: "15.75px", lg: "15.8px" }}
            fontWeight="500"
            style={{
              fontStyle: "italic",
              _hover: { textDecoration: "underline" },
            }}
          >
            {linkText}
          </Link>
        </Text>
      </Flex>
    </Tooltip>
  ) : (
    <Flex
      width="fit-content"
      h="fit"
      justifyContent={"flex-start"}
      m={0.9}
      ml={2.75}
      mr={{ base: 2, sm: 4, md: 6, lg: 3, xl: 6 }}
      alignItems={"center"}
    >
      <Icon
        transform={`rotate(${angle}deg)`}
        w="23px"
        h="25px"
        as={HiPuzzle}
        color={color}
      />
      <Text
        ml={0.5}
        href={link ? link : null}
        fontSize={{ base: "14px", sm: "15px", md: "15.75px", lg: "15.8px" }}
        fontWeight="500"
      >
        {text}
      </Text>
    </Flex>
  );
}
