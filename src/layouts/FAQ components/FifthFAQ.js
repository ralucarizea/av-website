import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const ThirdFAQ = () => {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text my="8px">
        Dacă nu poți ajunge la o sesiune de psihoterapie programată, este
        important să comunici imediat cu terapeutul tău pentru a-i anunța și a
        discuta despre opțiunile disponibile. În general, există anumite
        practici și politici în legătură cu absențele sau anulările sesiunilor
        de terapie, iar comunicarea deschisă cu terapeutul este esențială pentru
        a gestiona situația în mod eficient. Iată câteva aspecte de luat în
        considerare:
      </Text>
      <UnorderedList>
        <ListItem>
          <strong>Notificare în prealabil: </strong>În mod ideal, ar trebui să
          anunți terapeutul <strong>cu 24h înainte</strong> dacă știi că nu
          poți participa la o sesiune programată. Acest lucru oferă terapeutului
          posibilitatea de a ajusta programul și poate facilita reprogramarea.
        </ListItem>
        <ListItem>
          <strong>Politica de anulare a terapeutului: </strong> Dacă ratezi o
          sesiune fără să anunți în prealabil cu minim 24h, <strong>ședința va fi achitată integral</strong> în termen
          de 24h, ori în cadrul următoarei ședințe stabilite de comun acord în
          următoarele maxim 2 săptămâni. Este foarte important să menții
          continuitatea în procesul terapeutic, iar reprogramarea poate fi o
          soluție eficientă.
        </ListItem>
        <ListItem>
          <strong>Explorarea motivelor: </strong>În cazul în care există un
          model de absențe sau dificultăți în a participa la sesiuni, discută cu
          terapeutul despre motivele din spatele acestui comportament. Poate fi
          necesar să explorați împreună soluții sau să ajustați planul
          terapeutic în funcție de nevoile tale.
        </ListItem>
        <ListItem>
          <strong>Înțelegerea impactului: </strong>
          Terapeutul poate ajuta la evaluarea impactului absenței asupra
          progresului terapeutic și poate oferi suport și orientare în
          gestionarea oricăror dificultăți care pot apărea din cauza absenței.
        </ListItem>
        <ListItem>
          <strong>Continuarea comunicării: </strong>
          Menține o comunicare deschisă și continuă cu terapeutul. Împărtășește
          orice preocupare sau dificultăți care pot apărea în legătură cu
          participarea la terapie. O colaborare deschisă și sinceră este
          esențială în procesul terapeutic.
        </ListItem>
      </UnorderedList>
      <Text my="8px">
        Este important să recunoști că, uneori, pot apărea situații care îți pot
        afecta capacitatea de a ajunge la sesiuni de terapie. Cu toate acestea,
        prin comunicarea eficientă cu terapeutul și luarea de măsuri adecvate,
        puteți gestiona și depăși aceste situații în mod constructiv.
      </Text>
    </Box>
  );
};

export default ThirdFAQ;
