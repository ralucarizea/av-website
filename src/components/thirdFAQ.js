import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const thirdFAQ = () => {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text>
        Relația dintre psihoterapeut și client este fundamentală pentru succesul
        terapiei. Aici sunt câteva reguli importante pe care ambii trebuie să le
        respecte în cadrul acestei relații:
      </Text>
      <UnorderedList>
        <ListItem>
          <strong>Confidențialitatea:</strong>Unul dintre principiile de bază
          ale terapiei este confidențialitatea. Psihoterapeutul trebuie să ofere
          un spațiu sigur și protejat unde clienții să poată vorbi deschis,
          știind că informațiile lor vor fi păstrate confidențiale, cu excepția
          situațiilor în care există un pericol imediat pentru ei înșiși sau
          pentru alții.
        </ListItem>
        <ListItem>
          <strong>Respectul reciproc:</strong> Atât terapeutul, cât și clientul
          trebuie să se trateze reciproc cu respect și să fie conștienți de
          drepturile și valorile fiecăruia. Respectul mutu contribuie la
          construirea încrederii în relație.
        </ListItem>
        <ListItem>
          <strong>Empatie și înțelegere:</strong>Terapeutul trebuie să
          demonstreze empatie și să încerce să înțeleagă perspectivele și
          sentimentele clientului. Aceasta facilitează o relație de încredere și
          oferă un mediu în care clienții se pot deschide mai ușor.
        </ListItem>
        <ListItem>
          <strong>Limitarea duală:</strong>
          Psihoterapeuții trebuie să evite orice comportament care ar putea crea
          o confuzie în privința rolurilor lor, cum ar fi relațiile personale
          sau angajamentele în afara contextului terapeutic. Este important ca
          limitările să fie clar comunicate și menținute.
        </ListItem>
        <ListItem>
          <strong>Consens cu privire la obiectivele terapiei:</strong>Terapeutul
          și clientul ar trebui să aibă o înțelegere comună a obiectivelor
          terapiei. Este important să existe comunicare deschisă și să se
          revizuiască periodic progresele pentru a se asigura că terapia este
          eficientă.
        </ListItem>
        <ListItem>
          <strong>Comunicare deschisă:</strong>Atât terapeutul, cât și clientul
          trebuie să fie dispuși să comunice deschis despre gândurile,
          sentimentele și orice îngrijorare cu privire la procesul terapeutic. O
          comunicare eficientă contribuie la construirea unei relații de
          încredere.
        </ListItem>
        <ListItem>
          <strong>Fii deschis să explorezi trecutul:</strong>Dacă terapeutul îți
          adresează întrebări despre trecut sau despre experiențe personale,
          încearcă să fii deschis și să explorezi aceste aspecte. Comprendera
          istoricului tău poate contribui la înțelegerea mai profundă a
          prezentului.
        </ListItem>
        <ListItem>
          <strong>Gândește la feedback-ul privind terapia:</strong>Pe măsură ce
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

export default thirdFAQ;
