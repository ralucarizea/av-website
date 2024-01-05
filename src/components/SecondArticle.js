import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box
      fontFamily="inherit"
      fontSize={{ base: "14.5px", sm: "14px", md: "15px", lg: "17px" }}
    >
      <Text
        fontSize={{
          base: "calc(1em + 1px)",
          md: "calc(1em + 2px)",
          xl: "calc(1em + 3px)",
        }}
        m={{ base: "20px 0px 16px", sm: "28px 0px 20px", lg: "36px 0px 40px" }}
      >
        Care sunt cauzele disfunctionale ale unei relatii atat pe plan personal,
        cat si sociale? Există o varietate de cauze disfuncționale ale
        relațiilor, care pot avea un impact atât la nivel personal, cât și
        social. Aceste cauze pot fi complexe și diferite de la o relație la
        alta. Iată câteva factori care pot contribui la disfuncționalitatea
        relațiilor:
      </Text>
      <Text fontWeight={500}> Cauze personale: </Text>
      <UnorderedList>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Comunicare deficitară: </strong>Dificultăți în exprimarea
          nevoilor, sentimentelor și gândurilor pot duce la neînțelegeri și
          frustrări. O comunicare eficientă este esențială pentru construirea și
          menținerea unei relații sănătoase.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Lipsa de incredere: </strong> Încrederea este un fundament al
          relațiilor sănătoase. Dacă există suspiciuni, minciuni sau trădări,
          încrederea poate fi afectată și pot apărea probleme semnificative.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Egoism și lipsă de empatie: </strong>Atunci când unul sau
          ambii parteneri sunt preocupați exclusiv de propriile nevoi și
          dorințe, iar empatia lipsește, relația poate deveni unilaterală și
          neechilibrată.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Lipsa de respect reciproc: </strong>
          Respecul reciproc este esențial pentru orice relație sănătoasă. Lipsa
          de respect poate duce la comportamente dăunătoare și conflictuale.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Diferențe în valorile și obiectivele de viață: </strong>
          Divergențele semnificative în ceea ce privește valorile fundamentale,
          obiectivele și aspirațiile pot crea tensiuni în relație.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Stiluri diferite de gestionare a conflictelor: </strong>
          Dacă partenerii au abordări diferite în gestionarea conflictelor,
          acest lucru poate contribui la escaladarea și perpetuarea problemelor.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Promovarea rezilientei: </strong>Grupurile terapeutice pot
          contribui la dezvoltarea abilităților de față și la promovarea
          resilienei în fața traumei. Membrii pot învăța strategii pentru a face
          față și a depăși provocările, construind o bază solidă pentru
          recuperare. Este important să menționăm că nu toată lumea se simte
          confortabil sau beneficiază de terapia de grup, iar preferințele
          individuale pot varia. Psihoterapia de grup ar trebui să fie
          facilitată de un terapeut calificat și să se desfășoare într-un cadru
          etic și profesional.
        </ListItem>
      </UnorderedList>
      <Text fontWeight={500}> Cauze sociale: </Text>
      <UnorderedList>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Presiuni sociale și culturale: </strong>Normele sociale și
          presiunile culturale pot influența așteptările și comportamentele
          într-o relație. Conformismul excesiv la aceste norme poate duce la
          conflicte.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Lipsa de incredere: </strong> Încrederea este un fundament al
          relațiilor sănătoase. Dacă există suspiciuni, minciuni sau trădări,
          încrederea poate fi afectată și pot apărea probleme semnificative.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Stresul și presiunile externe: </strong>Factori externi, cum
          ar fi problemele financiare, presiunile de la locul de muncă sau alte
          stresori, pot afecta calitatea relației.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Prejudecăți și discriminare: </strong>
          Factori precum rasismul, sexismul sau alte forme de discriminare pot
          afecta relațiile interpersonale și sociale.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Dezavantaje socioeconomice: </strong>
          Disparitățile economice sau sociale pot contribui la tensiuni în
          relații, de exemplu, dacă există diferențe semnificative de statut sau
          acces la resurse.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Influența mass-media: </strong>
          Imaginile și idealurile prezentate în mass-media pot influența
          așteptările și comportamentele într-o relație, adesea creând standarde
          nerealiste.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Izolarea socială: </strong>
          Lipsa de suport social și izolarea pot contribui la disfuncționalități
          într-o relație. Este important să existe conexiuni sociale sănătoase
          în afara relației principale.
        </ListItem>
      </UnorderedList>
      <Text my="1vw">
        Este important să recunoaștem că relațiile pot fi afectate de o
        combinație de factori personali și sociali, iar abordarea pentru
        rezolvarea problemelor poate varia în funcție de circumstanțe. În multe
        cazuri, consilierea sau terapia poate oferi sprijin și instrumente
        pentru a aborda aceste cauze și a îmbunătăți relația.
      </Text>
    </Box>
  );
};

export default SecondArticle;
