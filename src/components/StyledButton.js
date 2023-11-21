import React from "react";
import { Button } from "@chakra-ui/react";

export default function StyledButton({ text, width, height }) {
  return (
    <Button
    my={{base: 3, sm: 6, md: 8}}
      fontSize="inherit"
      borderRadius="30px"
      bg={"bg"}
      color={"neutrals.dark"}
      py={[3, 4]}
      px={[2, 3, 5]}
      w={width}
      h={height}
      border="0.5px solid"
      borderColor={"neutrals.dark"}
      _hover={{
        backgroundColor: "tints.red",
        color: "accents.red",
        borderColor: "tints.red",
      }}
    >
      {text}
    </Button>
  );
}
