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
        Depresia și singurătatea pot fi interconectate și pot influența reciproc
        una pe cealaltă. Există mai mulți factori care pot contribui la această
        relație complexă:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Lipsa conexiunilor sociale: </strong>
          Singurătatea poate apărea atunci când o persoană se simte izolată și
          lipsită de conexiuni sociale. Lipsa sprijinului social poate contribui
          la sentimente de singurătate și poate fi un factor de risc pentru
          depresie.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Pierderea sau schimbările în relații: </strong> Pierderea unei
          persoane dragi, un divorț sau orice alt tip de schimbare semnificativă
          în relații pot contribui la ambele stări, atât depresie, cât și
          singurătate.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Gândurile negative și autoizolarea: </strong> Persoanele cu
          depresie pot experimenta gânduri negative despre sine și pot dezvolta
          o autoizolare, evitând interacțiunile sociale. Aceasta poate contribui
          la sentimente de singurătate.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Lipsa de suport emoțional: </strong>
          Suportul emoțional este crucial în gestionarea stării de depresie.
          Dacă o persoană se simte lipsită de sprijin și înțelegere din partea
          altora, acest lucru poate amplifica sentimentele de tristețe și
          izolare.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Schimbările în activități sociale: </strong>
          Persoanele cu depresie pot să se retragă treptat din activitățile
          sociale sau să evite întâlnirile cu prietenii și familia. Aceasta
          poate duce la izolare și singurătate.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Stigmatizarea și izolarea socială: </strong>
          Stigmatizarea asociată cu depresia poate determina persoanele să se
          simtă respinse sau judecate, conducând astfel la izolare socială și
          singurătate.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Sensul pierdut al conexiunii cu ceilalți: </strong> Persoanele
          cu depresie pot avea dificultăți în a simți sau experimenta conexiuni
          emoționale pozitive cu ceilalți. Aceasta poate contribui la sentimente
          de izolare și singurătate.
        </ListItem>
        <ListItem my={{ base: "4px", md: "8px", lg: "16px" }}>
          <strong>Impactul negativ asupra relațiilor: </strong> Depresia poate
          afecta modul în care o persoană interacționează în relații, putând
          duce la conflicte sau distanțare. Aceasta poate influența conexiunile
          sociale și sprijinul emoțional pe care îl primesc.
        </ListItem>
      </UnorderedList>
      <Text my="1vw">
        Este important să se abordeze atât depresia, cât și singurătatea într-un
        mod holistic și să se ofere sprijin adecvat. Terapia, inclusiv terapia
        cognitiv-comportamentală (TCC) sau terapia interpersonală, poate fi
        utilă în gestionarea simptomelor de depresie și îmbunătățirea relațiilor
        sociale. În plus, stabilirea unor conexiuni sociale, participarea la
        activități care aduc bucurie și vorbirea cu un profesionist pot
        contribui la reducerea sentimentelor de singurătate. Este important să
        căutați ajutor dacă vă simțiți copleșiți de aceste stări.
      </Text>
    </Box>
  );
};

export default SecondArticle;
