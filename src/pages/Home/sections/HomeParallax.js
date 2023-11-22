import React from "react";
import { Box } from "@chakra-ui/react";

function HomeParallax() {
  return (
    <Box w="100vw" h="fit-content" pt={{base: "18vw", sm:"14vw", md:"10vw", lg:"8vw"}} pb="12vw" border="1px solid blue">
      <Box
        margin="0 auto"
        bgColor="tints.lime"
        w={{ base: "52%", sm: "45%", md: "42%", lg: "33%" }}
        h={{ base: "50vh", sm: "60vh", md: "64vh", lg: "66vh", xl: "78vh" }}
      ></Box>
    </Box>
  );
}

export default HomeParallax;
