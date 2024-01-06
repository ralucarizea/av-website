import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

export default function SecondFAQ() {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text my="8px">
        Pregătirea pentru prima sesiune de psihoterapie poate contribui la o
        experiență mai eficientă și benefică. Iată câteva sfaturi despre cum să
        te pregătești:
      </Text>
      <UnorderedList>
        <ListItem>
          <strong>Clarifică-ți obiectivele: </strong>Gândește-te la motivele
          pentru care cauți ajutor psihologic și la ceea ce îți dorești să obții
          din terapie. Poate fi util să ai câteva obiective sau probleme
          specifice pe care dorești să le explorezi.
        </ListItem>
        <ListItem>
          <strong>Fii deschis și sincer cu tine însuți: </strong> Fii dispus să
          explorezi și să împărtășești gândurile, sentimentele și experiențele
          tale în mod deschis. Cu cât ești mai sincer cu tine însuți și cu
          terapeutul, cu atât terapia poate fi mai eficientă.
        </ListItem>
        <ListItem>
          <strong>Familiarizează-te cu tipurile de terapie: </strong>Dacă nu ai
          mai fost în terapie înainte, informează-te despre diversele abordări
          terapeutice, cum ar fi terapia cognitiv-comportamentală, terapia
          psihodinamică sau terapia de acceptare și angajament. Alege o abordare
          care pare potrivită pentru tine.
        </ListItem>
        <ListItem>
          <strong>Stabilește așteptări realiste: </strong>Psihoterapia nu oferă
          întotdeauna răspunsuri imediate sau soluții rapide. Este un proces
          care necesită timp și angajament. Stabilește așteptări realiste cu
          privire la ceea ce poți obține din terapie și la ritmul în care se pot
          produce schimbările.
        </ListItem>
        <ListItem>
          <strong>Întreabă-ți terapeutul despre proces: </strong>Dacă ai
          întrebări sau îngrijorări cu privire la terapie, nu ezita să le
          discuți cu terapeutul în prima ședință. Poți să întrebi despre
          abordarea terapeutică, durata ședințelor și orice alte întrebări pe
          care le ai.
        </ListItem>
        <ListItem>
          <strong>Notează-ți gândurile înainte de ședință: </strong>Dacă te
          simți confortabil, poți să îți notezi gândurile, sentimentele sau
          evenimentele relevante înainte de ședință. Acest lucru te poate ajuta
          să te exprimi mai clar și să folosești mai eficient timpul din
          ședință.
        </ListItem>
        <ListItem>
          <strong>Fii deschis să explorezi trecutul: </strong>Dacă terapeutul
          îți adresează întrebări despre trecut sau despre experiențe personale,
          încearcă să fii deschis și să explorezi aceste aspecte. Comprendera
          istoricului tău poate contribui la înțelegerea mai profundă a
          prezentului.
        </ListItem>
        <ListItem>
          <strong>Gândește la feedback-ul privind terapia: </strong>Pe măsură ce
          avansezi în terapie, gândește-te la modul în care te simți în legătură
          cu terapeutul și cu procesul de terapie. Dacă simți că nu este
          potrivit, este în regulă să explorezi alte opțiuni. Amintește-ți că
          prima sesiune de terapie poate fi o experiență de stabilire a relației
          și de stabilire a unui context pentru munca viitoare. Cu cât te simți
          mai pregătit și mai deschis, cu atât terapia poate deveni mai
          eficientă în sprijinirea obiectivelor tale.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

