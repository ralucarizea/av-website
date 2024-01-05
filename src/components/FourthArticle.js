import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box
      fontFamily="inherit"
      fontSize={{ base: "14.5px", sm: "14px", md: "15px", lg: "17px" }}
    >
      <Text my="8px"         fontSize={{base: "calc(1em + 1px)", md: "calc(1em + 2px)", xl : "calc(1em + 3px)" }}
>
        Reconsolidarea terapiei de cuplu poate fi un proces important și benefic
        pentru îmbunătățirea unei relații. Iată câțiva pași generali pe care
        puteți să-i urmați în acest proces:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Autoevaluare: </strong> Atât tu, cât și partenerul, ar trebui
          să vă luați timp pentru a reflecta asupra propriilor nevoi, valorile
          și obiective în cadrul relației. Înțelegerea propriei contribuții la
          problemele existente este un prim pas esențial.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Comunicare deschisă: </strong> O comunicare deschisă și onestă
          este esențială în orice relație. Împărtășirea sentimentelor,
          gândurilor și așteptărilor cu partenerul, precum și ascultarea atentă
          a ceea ce are de spus, poate deschide uși pentru o mai bună înțelegere
          reciprocă.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>EReangajament: </strong> Discutarea și reconfirmarea
          angajamentului față de relație pot fi un pas important în
          reconsolidarea terapiei de cuplu. Stabilirea sau redefinirea
          obiectivelor comune poate contribui la construirea unei viziuni comune
          pentru viitor.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Terapie de cuplu continuată: </strong>
          Dacă ați participat anterior la terapie de cuplu și ați simțit că este
          necesară reactivarea, luați în considerare întoarcerea la terapie. Un
          terapeut de cuplu poate oferi suport și instrumente pentru abordarea
          problemelor într-un mod eficient
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong> Învățare din trecut:</strong>
          Reflectarea asupra experiențelor anterioare și înțelegerea modului în
          care anumite modele de comportament sau dinamici au afectat relația vă
          pot ajuta să evitați repetarea acestora în viitor.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>SAdoptarea schimbărilor pozitive: </strong>
          Identificarea schimbărilor concrete și pozitive pe care le puteți face
          în comportamentul și comunicarea voastră poate consolida relația. Este
          important să vă angajați activ în aceste schimbări și să vă sprijiniți
          reciproc în acest proces.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Setarea de limite sănătoase: </strong>
          Discutarea și stabilirea de limite sănătoase în relație este crucială.
          A defini limite clare poate ajuta la prevenirea conflictelor și la
          menținerea unui mediu de relație respectuos.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Consolidarea conexiunii emoționale: </strong> Lucrul la
          consolidarea conexiunii emoționale dintre voi este esențial. Aceasta
          poate implica petrecerea timpului de calitate împreună, cultivarea
          intimității și aprofundarea legăturii emoționale.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong> Angajamentul pe termen lung: </strong>
          Reconsolidarea terapiei de cuplu necesită adesea un angajament pe
          termen lung față de procesul de creștere și îmbunătățire continuă a
          relației. Este important să recunoașteți că schimbările pozitive pot
          necesita timp și efort.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Sprijin continuu: </strong> Este important să căutați sprijin
          continuu, fie din partea terapeutului, fie din alte surse, cum ar fi
          resursele comunitare sau cărțile despre terapia de cuplu și
          dezvoltarea relațională. Reconsolidarea terapiei de cuplu poate fi un
          proces gradual și uneori provocator, dar este posibil să aducă
          beneficii semnificative dacă ambii parteneri sunt dispuși să se
          angajeze activ în acest demers. Implicarea și comunicarea deschisă
          sunt cheia în acest proces.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SecondArticle;
