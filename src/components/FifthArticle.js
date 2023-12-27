import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text my="8px">
        Cum putem gestiona relatia dintre parinte si un adolescent rebel cu
        ajutorul unui terapeut?
      </Text>
      <Text fontWeight={500}> Cauze personale: </Text>
      <UnorderedList>
        <ListItem>
          <strong>Comunicarea deschisă și non-judecată: </strong> Creează un
          mediu în care adolescentul se simte confortabil să împărtășească
          gândurile și sentimentele sale fără teama de judecată. Ascultă activ
          și evită reacțiile excesive de furie sau critici dure.
        </ListItem>
        <ListItem>
          <strong>Fii empatic: </strong> Înțelege că adolescența poate fi o
          perioadă dificilă, iar comportamentul rebel poate fi o modalitate de a
          exprima frustrările sau nevoile nesatisfăcute. Încearcă să vezi
          situația prin ochii lor și să arăți empatie față de provocările lor.
        </ListItem>
        <ListItem>
          <strong>Stabilește limite clare: </strong>
          Chiar dacă există o nevoie de comunicare și înțelegere, este important
          să stabilești limite clare și să aplici reguli consistente.
          Adolescentul are nevoie de structură și de a ști care sunt limitele
          acceptabile.
        </ListItem>
        <ListItem>
          <strong> Implicarea în viața lor:</strong>
          Fii interesat și implicat în viața lor, inclusiv în activitățile pe
          care le desfășoară, prietenii și interesele lor. Acest lucru poate
          consolida legătura dintre voi și poate crea un mediu în care să se
          simtă acceptați.
        </ListItem>
        <ListItem>
          <strong>Negocierea și compromisul: </strong>
          Încurajează dialogul și discutarea problemelor într-un mod
          constructiv. Împreună, puteți căuta soluții și să ajungeți la
          compromisuri care să fie acceptabile pentru ambii.
        </ListItem>
        <ListItem>
          <strong>Modelarea comportamentului dorit: </strong>
          Fii un model pentru comportamentul pe care îl dorești de la ei.
          Demonstrează abilități de comunicare sănătoase și gestionare a
          conflictelor. Adolescenții învață multe prin observație.
        </ListItem>
        <ListItem>
          <strong>Alege-ți bătăliile: </strong> Nu toate luptele merită să fie
          purtate. Fii selectiv în privința aspectelor pe care alegi să le
          abordezi și lasă loc pentru autonomia și independența lor în anumite
          domenii.
        </ListItem>
        <ListItem>
          <strong>Promovează responsabilitatea: </strong>
          Oferă-le responsabilități și sarcini în cadrul gospodăriei sau la
          școală. A avea responsabilități îi poate ajuta să dezvolte un
          sentiment de maturitate și să se simtă mai implicați.
        </ListItem>
      </UnorderedList>
      <Text my="1vw">
        Dacă comportamentul adolescentului este extrem de problematic sau dacă
        relația este foarte tensionată, luați în considerare căutarea ajutorului
        profesional ca scop primordial și menținerea acestuia până la vindecare.
        Chiar dacă adolescenții pot căuta independența, este important să nu te
        retragi complet din viața lor. Păstrarea unui canal deschis de
        comunicare este esențial pentru a rămâne conectat emoțional cu ei. Este
        important să înțelegem că adolescența este o perioadă de schimbări
        semnificative și că adolescenții pot experimenta presiuni și stresuri.
        Cu răbdare, înțelegere și comunicare eficientă, relația cu un adolescent
        rebel poate deveni mai echilibrată și mai sănătoasă.
      </Text>
    </Box>
  );
};

export default SecondArticle;
