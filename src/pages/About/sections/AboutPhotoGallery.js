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
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369366/personalGallery/20-min_vp3x0x.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369364/personalGallery/19-min_nc0end.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722342/personalGallery/18-min-compressed_mitgrx.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722335/personalGallery/17-min-compressed_mv6gpr.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722335/personalGallery/16-min-compressed_kbgrbj.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722336/personalGallery/15-min-compressed_oyg3ni.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722341/personalGallery/14-min-compressed_aujrze.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722342/personalGallery/13-min-compressed_eit3za.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722336/personalGallery/12-min-compressed_oeasjg.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369357/personalGallery/11-min_cvgajs.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722335/personalGallery/10-min-compressed_p95y8p.jpg`}
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
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722339/personalGallery/9-min-compressed_s0qe8y.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722340/personalGallery/8-min-compressed_tozxu1.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369353/personalGallery/7-min_syikam.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722343/personalGallery/6-min-compressed_cqdgv4.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722335/personalGallery/5-min-compressed_ln7y4w.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722343/personalGallery/4-min-compressed_hsijeq.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722339/personalGallery/3-min-compressed_pmtah5.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722338/personalGallery/2-min-compressed_dikn5y.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722337/personalGallery/1-min-compressed_gjwnr6.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1704722339/personalGallery/0-min-compressed_lhqnjs.jpg`}
            alt={``}
          />
        </Marquee>
      </VStack>
    </VStack>
  );
}

export default AboutPhotoGallery;
