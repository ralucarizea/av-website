import { React } from "react";
import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const firstFAQ = () => {
  return (
    <Box fontFamily="inherit" fontSize="inherit">
      <Text>
        Sesiunile de psihoterapie și hipnoterapie sunt ambele forme de terapie
        mentală care vizează îmbunătățirea stării de bine a individului, dar
        diferă în metodele și tehnicile utilizate.
      </Text>
      <Text fontWeight={"500"} my="8px">Psihoterapie: </Text>
      <UnorderedList>
        <ListItem>
          <strong>Abordare:</strong> Psihoterapia este o formă largă de terapie
          mentală care se concentrează pe schimbarea comportamentului,
          gândurilor și emoțiilor negative. Există mai multe tipuri de
          psihoterapie, inclusiv terapia cognitiv-comportamentală, terapia
          psihodinamică, terapia interpersonală și altele.
        </ListItem>
        <ListItem>
          <strong>Obiectiv:</strong> Psihoterapia se concentrează pe explorarea
          și înțelegerea problemelor emoționale și comportamentale ale unei
          persoane într-un mod profund și extins. Obiectivul este de a
          identifica și rezolva cauzele profunde ale problemelor individului și
          de a promova schimbările durabile în gândire și comportament.
        </ListItem>
        <ListItem>
          <strong>Stare de Conștiență: </strong>În general, psihoterapia se
          desfășoară într-o stare de conștiență normală, fără a recurge la stări
          alterate ale conștienței.
        </ListItem>
      </UnorderedList>
      <Text fontWeight={"500"} my="8px"> Hipnoterapie: </Text>
      <UnorderedList>
        <ListItem>
          <strong>Abordare:</strong> Hipnoterapia utilizează stări de hipnoză
          pentru a accesa și influența subconștientul unei persoane. Prin
          sugestii și ghidare, terapeutul încearcă să aducă schimbări pozitive
          în gândirea și comportamentul individului.
        </ListItem>
        <ListItem>
          <strong>Obiectiv:</strong> Psihoterapia se concentrează pe explorarea
          și înțelegerea problemelor emoționale și comportamentale ale unei
          persoane într-un mod profund și extins. Obiectivul este de a
          identifica și rezolva cauzele profunde ale problemelor individului și
          de a promova schimbările durabile în gândire și comportament.
        </ListItem>
        <ListItem>
          <strong>Stare de Conștiență: </strong> În timpul unei sesiuni de
          hipnoterapie, individul intră într-o stare de conștiență modificată
          sau hipnoză, care este adâncă, relaxată și focalizată. Cu toate
          acestea, este important să înțelegem că starea de hipnoză nu implică
          pierderea controlului sau a conștienței.
        </ListItem>
      </UnorderedList>
      <Text my="8px">
        În concluzie, diferența principală constă în faptul că psihoterapia este
        o abordare mai generală, bazată pe conversație și explorare profundă, în
        timp ce hipnoterapia se concentrează pe utilizarea stărilor de hipnoză
        pentru a aduce schimbări specifice și pozitive în comportamentul sau
        gândirea individului. Uneori, aceste două forme de terapie pot fi
        integrate într-o abordare mai cuprinzătoare pentru a aborda nevoile
        individuale ale unei persoane.
      </Text>
    </Box>
  );
};

export default firstFAQ;
