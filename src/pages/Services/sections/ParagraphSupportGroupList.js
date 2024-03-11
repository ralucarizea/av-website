import React from "react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const ParagraphSupportGroupList = () => {
  return (
    <Box
      fontFamily="inherit"
      fontSize={{ base: "14px", sm: "15px", md: "16px" }}
    >
      <Text
      // fontSize={{
      //   base: "calc(1em + 1px)",
      //   md: "calc(1em + 2px)",
      //   xl: "calc(1em + 3px)",
      // }}
      // m={{ base: "20px 0px 12px", sm: "28px 0px 20px", lg: "36px 0px 40px" }}
      >
        Teme de discuție in cadrul grupului de suport:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          înțelegerea și îmbunătățirea relației cu persoanele apropiate;
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          teamă de performanță/ de eșec/ de singurătate
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          dificultăți în luarea deciziilor și asumarea acestora;
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          blocaje emoționale în viață profesională, familială, de cuplu;
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          reinventarea relației cu partenerul după o criză în cuplu
          (infidelitate, probleme financiare, relația cu părinții partenerilor,
          etc);
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          schimbarea și înțelegerea relației pe parcursul evoluției sale (cu
          părinții, partenerii, copiii);
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          diferența dintre generații: cum o înțelegem și integrăm în relația cu
          copilul adolescent, relația adolescentului cu părinții;
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          apartenența la o comunitate în care nu mă mai regăsesc;
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          probleme interculturale : diferențe de valori, convingeri, înțelegerea
          și acceptarea unor perspective diferite;
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          contribuția mea în lume : raspunsul la intrebari precum "Cine sunt? Ce
          voi lasă în urmă? Cum pot face că lucrurile să fie mai bune? Ce
          trebuie să fac vs. Ce vreau să fac vs, Ce am nevoie să fac?"
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ParagraphSupportGroupList;
