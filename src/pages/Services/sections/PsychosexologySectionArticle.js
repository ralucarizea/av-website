import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box
      fontFamily="inherit"
   fontSize={{base: "14px", sm: "15px", md: "16px"}}

    >
      <Text
        // fontSize={{
        //   base: "calc(1em + 1px)",
        //   md: "calc(1em + 2px)",
        //   xl: "calc(1em + 3px)",
        // }}
        // m={{ base: "20px 0px 12px", sm: "28px 0px 20px", lg: "36px 0px 40px" }}
      >
        Psihosexologii își folosesc cunoștințele din psihologie, terapie
        sexuală, sexologie, consiliere și alte domenii conexe pentru a aborda o
        gamă largă de subiecte și probleme legate de sexualitate. Acestea pot
        include, dar nu se limitează la:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          <strong>Disfuncții sexuale: </strong>
          Psihosexologii pot ajuta persoanele care se confruntă cu dificultăți
          în domeniul sexual, cum ar fi disfuncții erectile, disfuncții de
          orgasm, probleme legate de libidou (dorința sexuală) sau probleme de
          cuplu legate de sexualitate.
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          <strong>Terapie sexuală: </strong>
          Psihosexologii oferă consiliere și terapie pentru a ajuta indivizii
          sau cuplurile să exploreze și să-și îmbunătățească satisfacția
          sexuală, să construiască relații sănătoase și să depășească
          eventualele obstacole legate de sexualitate.
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          <strong>Educație sexuală: </strong>
          Psihosexologii pot fi implicați în furnizarea de informații și
          educație sexuală pentru a ajuta oamenii să dobândească cunoștințe și
          abilități adecvate legate de sexualitatea umană.
        </ListItem>
        <ListItem my={{ base: "10px", md: "8px", lg: "16px" }}>
          <strong>Consiliere în probleme de identitate sexuală: </strong>
          Psihosexologii pot oferi orientare și sprijin pentru persoanele care
          explorează și își clarifică identitatea sexuală sau ale celor care se
          confruntă cu dificultăți în acceptarea și integrarea acestei
          identități.
        </ListItem>
        <ListItem mt={{ base: "10px", md: "8px", lg: "16px" }}>
          <strong>
            Consiliere în probleme de relaționare și comunicare sexuală:{" "}
          </strong>
          Psihosexologii pot ajuta indivizii și cuplurile să își îmbunătățească
          comunicarea și să abordeze problemele de relaționare care pot afecta
          sexualitatea.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SecondArticle;
