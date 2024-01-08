import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const SecondArticle = () => {
  return (
    <Box
      fontFamily="inherit"
      fontSize={{ base: "14px", sm: "15px", md: "16px" }}
    >
      <Text >
        Scopul principal al evaluării clinice este de a obține o înțelegere
        completă și detaliată a nevoilor și dificultăților pacientului, pentru a
        putea face un diagnostic corect și pentru a dezvolta un plan de
        tratament adecvat. Procesul de evaluare clinică poate implica mai multe
        etape, cum ar fi:
      </Text>
      <UnorderedList>
        <ListItem my={{ base: "10px", md: "12px", lg: "16px" }}>
          <strong>Interviul clinic: </strong>
          Include o discuție între pacient și profesionistul de sănătate
          mintală, în care se obțin informații despre simptome, istoricul
          medical, evenimentele de viață semnificative, antecedente familiale și
          alte detalii relevante.
        </ListItem>
        <ListItem my={{ base: "10px", md: "12px", lg: "16px" }}>
          <strong>Evaluarea psihologică: </strong>
          Aceasta implică utilizarea unor instrumente și teste standardizate
          pentru a evalua funcționarea și starea mentală a persoanei. De
          exemplu, pot fi utilizate teste de evaluare a personalității, teste
          cognitive, teste de depresie și anxietate, sau alte instrumente
          specifice.
        </ListItem>
        <ListItem my={{ base: "10px", md: "12px", lg: "16px" }}>
          <strong>Observația și evaluarea comportamentului: </strong>
          Profesionistul de sănătate mintală poate observa comportamentul și
          interacțiunile persoanei într-un mediu clinic sau natural. Aceasta
          poate furniza informații suplimentare despre problemele și
          dificultățile cu care se confruntă individul.
        </ListItem>
        <ListItem mt={{ base: "10px", md: "12px", lg: "16px" }}>
          <strong>Analiza informațiilor: </strong>
          Profesionistul de sănătate mintală analizează și sintetizează toate
          informațiile colectate în timpul evaluării clinice. Aceasta implică
          formularea unui diagnostic, identificarea factorilor de risc și a
          nevoilor individuale, și stabilirea unui plan de tratament
          personalizat.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SecondArticle;
