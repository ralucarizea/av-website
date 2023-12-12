import React, { useEffect } from "react";
import { SimpleGrid, VStack } from "@chakra-ui/react";
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
      <SimpleGrid
        my={{ base: "10vw", sm: "8vw", lg: "6vw" }}
        columns={{ base: 1, sm: 2, lg: 3 }}
        columnGap={4}
        rowGap={8}
      >
        {articles.map((article, index) => (
          <BlogCard key={index} img={article.img} {...article} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
