import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const HeroHeading = styled(Text)`
  font-family: "DM Serif Display";
  line-height: 1.1;
  font-size: 30px;
  width: ${(props) => props.width};

  @media screen and (max-width: 1350px) {
    font-size: 27px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 26px;
  }

  @media screen and (max-width: 820px) {
    font-size: 22px;
  }
  @media screen and (max-width: 640px) {
    font-size: 21px;
    margin-top: 10px;
  }
`;
