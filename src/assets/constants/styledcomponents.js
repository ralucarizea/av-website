import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";


export const HeroHeading = styled(Text)`
  font-family: "DM Serif Display";
  line-height: 1.25;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
`;