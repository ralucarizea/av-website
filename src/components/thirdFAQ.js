import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const ThirdFAQ = () => {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text my="8px">
        Relația dintre psihoterapeut și client este fundamentală pentru succesul
        terapiei. Aici sunt câteva reguli importante pe care ambii trebuie să le
        respecte în cadrul acestei relații:
      </Text>
      <UnorderedList>
        <ListItem>
          <strong>Confidențialitatea: </strong>Unul dintre principiile de bază
          ale terapiei este confidențialitatea. Psihoterapeutul trebuie să ofere
          un spațiu sigur și protejat unde clienții să poată vorbi deschis,
          știind că informațiile lor vor fi păstrate confidențiale, cu excepția
          situațiilor în care există un pericol imediat pentru ei înșiși sau
          pentru alții.
        </ListItem>
        <ListItem>
          <strong>Respectul reciproc: </strong> Atât terapeutul, cât și clientul
          trebuie să se trateze reciproc cu respect și să fie conștienți de
          drepturile și valorile fiecăruia. Respectul mutu contribuie la
          construirea încrederii în relație.
        </ListItem>
        <ListItem>
          <strong>Empatie și înțelegere: </strong>Terapeutul trebuie să
          demonstreze empatie și să încerce să înțeleagă perspectivele și
          sentimentele clientului. Aceasta facilitează o relație de încredere și
          oferă un mediu în care clienții se pot deschide mai ușor.
        </ListItem>
        <ListItem>
          <strong>Limitarea duală: </strong>
          Psihoterapeuții trebuie să evite orice comportament care ar putea crea
          o confuzie în privința rolurilor lor, cum ar fi relațiile personale
          sau angajamentele în afara contextului terapeutic. Este important ca
          limitările să fie clar comunicate și menținute.
        </ListItem>
        <ListItem>
          <strong>Consens cu privire la obiectivele terapiei: </strong>
          Terapeutul și clientul ar trebui să aibă o înțelegere comună a
          obiectivelor terapiei. Este important să existe comunicare deschisă și
          să se revizuiască periodic progresele pentru a se asigura că terapia
          este eficientă.
        </ListItem>
        <ListItem>
          <strong>Comunicare deschisă: </strong>Atât terapeutul, cât și clientul
          trebuie să fie dispuși să comunice deschis despre gândurile,
          sentimentele și orice îngrijorare cu privire la procesul terapeutic. O
          comunicare eficientă contribuie la construirea unei relații de
          încredere.
        </ListItem>
        <ListItem>
          <strong>Onestitate și transparență: </strong>Terapeutul ar trebui să
          fie sincer și transparent în legătură cu abordarea sa terapeutică,
          experiența sa și așteptările cu privire la procesul terapeutic. Acest
          lucru contribuie la construirea unei relații bazate pe încredere.
        </ListItem>
        <ListItem>
          <strong>Consimțământ informat: </strong>Terapeutul ar trebui să ofere
          explicații clare despre procesul terapeutic și să obțină
          consimțământul informat al clientului înainte de a începe terapia.
          Acest lucru include discutarea posibilelor riscuri și beneficii ale
          terapiei.
        </ListItem>
        <ListItem>
          <strong>Limitarea intervențiilor: </strong>Terapeutul ar trebui să
          ofere intervenții și ghidare în limitele competențelor și domeniului
          său de expertiză. Dacă este necesar, terapeutul ar trebui să ofere
          recomandări către specialiști în alte domenii.
        </ListItem>
        <ListItem>
          <strong>Finalizarea terapiei: </strong>Atunci când este cazul,
          încheierea terapiei ar trebui să fie discutată în mod deschis și
          planificată în mod colaborativ între terapeut și client. Acest proces
          poate implica stabilirea unor obiective finale și explorarea
          strategiilor de menținere a progreselor realizate în timpul terapiei.
        </ListItem>
      </UnorderedList>
      <Text my="8px">
        Respectarea acestor reguli contribuie la stabilirea unei relații
        terapeutice sănătoase și eficiente. Este important ca atât terapeutul,
        cât și clientul să participe activ la procesul terapeutic pentru a
        atinge obiectivele stabilite.
      </Text>
    </Box>
  );
};

export default ThirdFAQ;
