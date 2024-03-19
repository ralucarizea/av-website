import React, {useEffect, useState} from "react";
import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { HiPuzzle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function StyledListItem(props) {
  
  const [showTooltip, setShowTooltip] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  
  const { text, angle, color, tooltip, link, linkText } = props;
  return tooltip ? (
    <Tooltip
      label={tooltip}
      hasArrow
      placement="bottom-end"
      // closeDelay={500}
      isOpen={showTooltip}
      bg="accents.red"
      color="#fff"
      style={{ zIndex: "0 !important"}}
      onClose={() => setShowTooltip(false)} // Ensure tooltip closes on manual close events
      onOpen={() => setShowTooltip(true)} // Open tooltip on hover
    >
      <Flex
        width="fit-content"
        h="fit"
        justifyContent={"flex-start"}
        m={0.9}
        ml={2.75}
        mr={{ base: 2, sm: 4, md: 6, lg: 3, xl: 6 }}
        alignItems={"center"}
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)}
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
