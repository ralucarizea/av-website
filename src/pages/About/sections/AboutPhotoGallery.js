import { Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import { MDfont, XXXLfont } from "../../../assets/styles/theme";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";

//next update needed : dynamically import images from the folder !!!!!!!!!

export const StyledMarqueeItem = styled(Image)`
  aspect-ratio: auto;
  width: auto;
  max-width: 3200px;
  max-height: 250px;
  margin-left: 16px;
  src: ${(props) => props.src};

  @media only screen and (max-width: 1000px) {
    max-width: 300px;
    max-height: 200px;
    margin-left: 12px;
  }
  @media only screen and (max-width: 640px) {
    max-width: 200px;
    max-height: 100px;
    margin-left: 10px;
  }
`;

function AboutPhotoGallery() {
  return (
    <VStack
      my={{ base: "33%", sm: "20vw", md: "18vw", lg: "15vw" }}
      fontSize={MDfont}
      fontFamily={"sans"}
      color="neutrals.dark"
      alignItems={"flex-end"}
      
    >
      <VStack
        mb={{ base: "28px", sm: "40px", md: "64px", lg: "60px" }}
        pl={{
          base: "24px",
          xs: "48px",
          sm: "60px",
          md: "72px",
          lg: "84px",
          xl: "148px",
        }}
        alignItems={"flex-start"}
        w="100%"
        h="fit-content"
        fontFamily={"handwritten"}
        fontSize={{base: "40px", sm: "48px", md: "52px", lg: "60px", xl:"72px"}}
        color="accents.red"
      >
        <Text id="personalGallery" mb="-44px">...dar înainte de orice, sunt </Text>
        <Text >un simplu om</Text>
      </VStack>
      <VStack
        mr={{ base: "24px", sm: "40px", md: "60px" }}
        h="fit-content"
        w={{ base: "100vw", sm: "85vw", md: "75vw" }}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <Marquee
          direction="left"
          gradient="true"
          gradientColor="rgba(255,255,255, 1)"
          gradientWidth="100px"
          // pauseOnHover="true"
          speed="25"
        >
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/20-min_mc8klp.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/19-min_abhaxm.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813890/18-min-compressed_j8fquy.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/17-min-compressed_tdzecg.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/16-min-compressed_djiq5t.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/15-min-compressed_urdnhi.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813892/14-min-compressed_kgkboo.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/13-min-compressed_irri6a.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/12-min-compressed_x4hdsj.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/11-min_gmuxb6.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/10-min-compressed_onpv8u.webp`}
            alt={``}
          />
        </Marquee>
        <Marquee
          direction="right"
          gradient="true"
          gradientColor="rgba(255,255,255, 1)"
          gradientWidth="100px"
          // pauseOnHover="true"
          speed="25"
        >
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813891/9-min-compressed_bqtavk.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813891/8-min-compressed_ljtont.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/7-min_gkmjo8.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/6-min-compressed_v0kbr7.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813888/5-min-compressed_i2vqey.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813889/4-min-compressed_hslb1s.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813891/3-min-compressed_nnirat.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813890/2-min-compressed_cbjeyf.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704814022/1-min-compressed_yj7gv8.webp`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704813890/0-min-compressed_drvryo.webp`}
            alt={``}
          />
        </Marquee>
      </VStack>
    </VStack>
  );
}

export default AboutPhotoGallery;
