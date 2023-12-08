import React, { useEffect } from "react";
import { Flex, Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { articles } from "../../assets/constants/data";
import { PageTitle } from "../About/sections/AboutHero";
import BlogCard from "./sections/BlogCard";

export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <VStack
      h="fit"
      w="100%"
      color="neutrals.dark"
      px={{ base: "36px", sm: "48px", lg: "64px" }}
    >
      <PageTitle>Articole</PageTitle>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
        {articles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
