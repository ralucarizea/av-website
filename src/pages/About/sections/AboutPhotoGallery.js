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
        mb={{ base: "28px", sm: "40px", md: "64px", lg: "70px" }}
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
        fontSize={XXXLfont}
      >
        <Text>...dar înainte de orice, sunt </Text>
        <Text>un simplu om</Text>
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
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369363/personalGallery/18-min_gaasjj.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369362/personalGallery/17-min_jvs05y.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369361/personalGallery/16-min_mnk9kw.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369360/personalGallery/15-min_ag5r2z.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369359/personalGallery/14-min_vvj0ag.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369358/personalGallery/13-min_lqqt6h.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369358/personalGallery/12-min_qd24yw.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369357/personalGallery/11-min_cvgajs.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369356/personalGallery/10-min_gu0e48.jpg`}
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
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369355/personalGallery/9-min_yrt0jz.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369354/personalGallery/8-min_ymhvde.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369353/personalGallery/7-min_syikam.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369353/personalGallery/6-min_hf7ncv.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369352/personalGallery/5-min_ttvtpf.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369351/personalGallery/4-min_vydbee.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369350/personalGallery/3-min_hxlz1y.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369350/personalGallery/2-min_e8dilq.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369349/personalGallery/1-min_kyc8ev.jpg`}
            alt={``}
          />
          <StyledMarqueeItem
            src={`https://res.cloudinary.com/dd82hyvds/image/upload/v1702369349/personalGallery/0-min_fib9e2.jpg`}
            alt={``}
          />
        </Marquee>
      </VStack>
    </VStack>
  );
}

export default AboutPhotoGallery;
