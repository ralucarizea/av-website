import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box
      fontFamily="inherit"
      fontSize={{ base: "14.5px", sm: "14px", md: "15px", lg: "17px" }}
    >
      <Text
        fontSize={{base: "calc(1em + 1px)", md: "calc(1em + 2px)", xl : "calc(1em + 3px)" }}
        m={{ base: "20px 0px 12px", sm: "28px 0px 20px", lg: "36px 0px 40px" }}
      >
        Bolile psihiatrice nu sunt obstacole imposibil de depășit în
        psihoterapie. Psihoterapia poate fi eficientă în tratarea și gestionarea
        multor tulburări psihiatrice. Este important să înțelegem că
        psihoterapia și tratamentul medical (cum ar fi terapia medicamentoasă)
        pot lucra adesea împreună pentru a oferi un plan complet de îngrijire
        pentru persoanele cu afecțiuni psihiatrice. Iată câteva aspecte
        importante de luat în considerare:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Tratament multimodal: </strong>
          Abordarea terapeutică multimodală, care include atât psihoterapie, cât
          și intervenții medicale (dacă este cazul), poate fi eficientă în
          tratarea tulburărilor psihiatrice. Adesea, o combinație de terapie
          individuală, terapie de grup și tratament medicamentos poate oferi
          beneficii semnificative.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Individualizarea tratamentului: </strong>
          Fiecare persoană este unică, iar tulburările psihiatrice se manifestă
          în moduri diferite la fiecare individ. Un plan de tratament
          individualizat, adaptat la nevoile, obiectivele și resursele fiecărei
          persoane, este esențial.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Angajamentul și timpul: </strong>
          Tratamentul psihiatric poate necesita timp și angajament pe termen
          lung. Este important să existe o colaborare continuă între pacient și
          terapeut pentru a aborda progresiv și eficient problemele legate de
          boala psihiatrică.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Conștientizarea și educarea: </strong>
          Înțelegerea bolii psihiatrice și a modului în care aceasta afectează
          gândurile, emoțiile și comportamentele poate fi un pas important în
          procesul de vindecare. Educația și conștientizarea pot ajuta pacienții
          să dezvolte strategii eficiente pentru gestionarea simptomelor.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Susținerea rețelei sociale: </strong>
          Implicarea rețelei sociale, inclusiv familia și prietenii, poate
          contribui la sprijinirea procesului terapeutic și la crearea unui
          mediu de suport pentru persoanele cu tulburări psihiatrice.
        </ListItem>
      </UnorderedList>
      <Text my="1vw">
        Este important să subliniem că tratamentul psihiatric nu este
        întotdeauna un proces liniar și că pot apărea provocări și recăderi. Cu
        toate acestea, mulți oameni experimentează îmbunătățiri semnificative în
        starea lor de sănătate mintală cu ajutorul unui plan de tratament
        adecvat și susținere continuă. Este recomandat să discuți cu un
        profesionist din domeniul sănătății mintale pentru a evalua opțiunile de
        tratament potrivite pentru situația ta specifică.
      </Text>
    </Box>
  );
};

export default SecondArticle;
