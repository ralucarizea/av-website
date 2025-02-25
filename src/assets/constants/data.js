import FirstFAQ from "../../layouts/FAQ components/FirstFAQ";
import SecondFAQ from "../../layouts/FAQ components/SecondFAQ";
import ThirdFAQ from "../../layouts/FAQ components/ThirdFAQ";
import FourthFAQ from "../../layouts/FAQ components/FourthFAQ";
import FifthFAQ from "../../layouts/FAQ components/FifthFAQ";
import FirstArticle from "../../pages/Blog/sections/FirstArticle";
import SecondArticle from "../../pages/Blog/sections/SecondArticle";
import ThirdArticle from "../../pages/Blog/sections/ThirdArticle";
import FourthArticle from "../../pages/Blog/sections/FourthArticle";
import FifthArticle from "../../pages/Blog/sections/FifthArticle";
import SixthArticle from "../../pages/Blog/sections/SixthArticle";
import PsychosexologySectionArticle from "../../pages/Services/sections/PsychosexologySectionArticle"
import EvaluationSectionArticle from "../../pages/Services/sections/EvaluationSectionArticle";
import ParagraphSupportGroupList from "../../pages/Services/sections/ParagraphSupportGroupList";

export const articles = [
  {
    id: 1,
    titleBold: "Puterea vindecătoare a grupului:",
    publicationDate: "12 AUG, 2023",
    title: "principii și recompense în urma terapiei",
    content: () => <FirstArticle />,
    keywords: ["traumă", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369311/articleCovers/group-min_sbytkz.jpg",
  },
  {
    id: 2,
    titleBold: "Prietenie la terapie -",
    title: "gestionarea dificultăților întâmpinate în conexiunile sociale",
    publicationDate: "8 MAI, 2023",
    content: () => <SecondArticle />,
    keywords: ["relații", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369311/articleCovers/friends-min_mqzcua.jpg",
  },
  {
    id: 3,
    titleBold: "Bolile psihiatrice nu sunt obstacole imposibil de depășit",
    publicationDate: "19 DEC, 2022",
    title: "",
    content: () => <ThirdArticle />,
    keywords: ["psihiatrie", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369311/articleCovers/mental-illness-min_dkrswd.jpg",
  },
  {
    id: 4,
    titleBold: "Reconsolidarea încrederii în partener:",
    publicationDate: "1 APR, 2023",
    title: "mai poate fi posibilă după adulter?",
    content: () => <FourthArticle />,
    keywords: ["cuplu", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369311/articleCovers/couple-min_rtlmca.jpg",
  },
  {
    id: 5,
    titleBold: "Relația părinte-adolescent rebel:",
    title: " eliminarea decalajului dintre generații",
    publicationDate: "5 IUL, 2023",
    content: () => <FifthArticle />,
    keywords: ["familie", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369312/articleCovers/mother-and-son-happiness-min_uzqmc7.jpg",
  },
  {
    id: 6,
    titleBold: "Depresia & singurătatea:",
    title: "care o provoacă pe care?",
    publicationDate: "29 NOV, 2022",
    content: () => <SixthArticle />,
    keywords: ["psihiatrie", "", ""],
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1702369311/articleCovers/identity-crisis-min_lncqrk.jpg",
  },
];

export const articleTags = {
  familie: {
    bgColor: "accents.yellow",
    color: "neutrals.dark",
  },
  cuplu: {
    bgColor: "tints.red",
    color: "accents.red",
  },
  traumă: {
    bgColor: "accents.red",
    color: "#fff",
  },
  psihiatrie: {
    bgColor: "tints.yellow",
    color: "neutrals.dark",
  },
  relații: {
    bgColor: "accents.army",
    color: "tints.lime",
  },
};

export const faqMainpage = {
  0: {
    question:
      "Care este diferența între o sesiune de psihoterapie și una de hipnoterapie?",
    answer: () => <FirstFAQ />,
    description: "",
    price: "",
    duration: "",
    bgColor: "neutrals.light",
    color: "neutrals.dark",
  },
  1: {
    question: "Cum ar trebui să mă pregătesc pentru prima ședință de terapie?",
    answer: () => <SecondFAQ />,
    description: "",
    price: "",
    duration: "",
    bgColor: "neutrals.light",
    color: "neutrals.dark",
  },
  2: {
    question:
      "Care sunt regulile cele mai importante pe care trebuie să le respect în relația terapeut-client?",
    answer: () => <ThirdFAQ />,
    description: "",
    price: "",
    duration: "",
    bgColor: "neutrals.light",
    color: "neutrals.dark",
  },
  3: {
    question: "Cât durează un proces terapeutic complet?",
    answer: () => <FourthFAQ />,
    description: "",
    price: "",
    duration: "",
    bgColor: "neutrals.light",
    color: "neutrals.dark",
  },
  4: {
    question: "Ce se întâmplă dacă nu mai pot ajunge la o ședință programată?",
    answer: () => <FifthFAQ />,
    description: "",
    price: "",
    duration: "",
    bgColor: "neutrals.light",
    color: "neutrals.dark",
  },
};


export const HomeServicesMenuData = {
  0: {
    id: 0,
    title: "Psihoterapie individuala",
    brief: "Drumul spre regasirea de sine autentica",
    description: {
      highlightedParagraph:
        "Psihoterapia individuală este o formă de terapie în care un psihoterapeut lucrează cu un singur client, într-o relație de colaborare și încredere. Scopul acestei terapii este de a ajuta persoana să înțeleagă și să depășească problemele emoționale, comportamentale sau interpersonale cu care se confruntă. Psihoterapia individuală are ca bază teoria și practicile psihologiei și se bazează pe dialogul terapeut-client, într-un mediu sigur și confidențial.",
      firstHeading: "Cum se desfasoara o sedinta de psihoterapie individuală?",
      secondParagraph:
        "Psihoterapeutul ajută clientul să exploreze și să înțeleagă mai bine propriile emoții, gânduri și comportamente, identificând factorii care contribuie la problemele lor. Prin discuții și exerciții terapeutice complexe, clientul este încurajat să-și dezvolte abilitățile de autocunoaștere și să găsească resurse interne pentru a face față situațiilor dificile sau traumei trecute. Psihoterapia individuală poate fi eficientă în tratarea diferitelor afecțiuni și probleme, cum ar fi depresia, anxietatea, stresul, tulburările de alimentație, dependențele, pierderea unui iubit sau a unui loc de muncă, relațiile disfuncționale sau evenimente traumă.",
      secondHeading: "",
      thirdParagraph:
        "Durata și frecvența ședințelor de psihoterapie individuală pot varia în funcție de nevoile și obiectivele clientului, iar progresul este evaluat pe parcursul terapiei. Este important ca terapeutul și clientul să stabilească o relație de încredere și să lucreze împreună pentru a obține rezultatele dorite.",
    },
    price: "",
    duration: "",
    bgColor: "tints.red",
    color: "accents.red",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704476182/serviceImages/side-view-young-girl-talking-therapist_1_-min_te62se.jpg",
    route: "INDIVIDUAL",
  },
  1: {
    id: 1,
    title: "Psihoterapie de cuplu/familie",
    brief:
      "Pune la dispoziție un spațiu menit identificării obiectivelor individuale, ascultării active a partenerului și creării unor noi credințe sănătoase pentru un parteneriat reînnoit.",
    description: {
      highlightedParagraph:
        "Psihoterapia de cuplu este o formă de terapie în care un terapeut lucrează cu un cuplu pentru a-i ajuta să-și îmbunătățească relația și să-și rezolve problemele. Scopul acestei terapii este de a îmbunătăți comunicarea, de a înțelege și de a rezolva conflictele, de a reconstrui încrederea și de a dezvolta o relație mai sănătoasă și mai satisfăcătoare.",
      firstHeading: "",
      secondParagraph:
        "Psihoterapia de cuplu implică participarea ambilor parteneri, și terapeutul le oferă un mediu sigur și confidențial în care să-și exprime grijile și frustrările. Terapeutul facilitează comunicarea deschisă și dialogul constructiv între parteneri, ajutându-i să-și înțeleagă mai bine nevoile și dorințele reciproce. De asemenea, terapeutul poate oferi strategii și tehnici pentru a rezolva conflictele, a gestiona emoțiile și a învăța să comunice eficient și empatic.Psihoterapia de cuplu poate aborda o varietate de probleme precum comunicarea defectuoasă, conflictele constante, infidelitatea, gelozia, problemele sexuale, construirea și menținerea încrederei, probleme de parenting, dificultăți în adaptarea la schimbări majore în viața de cuplu etc.",
      secondHeading: "",
      thirdParagraph:
        "Durata și frecvența terapiei de cuplu variază în funcție de complexitatea problemelor și de nevoile cuplului. Terapia poate implica și exerciții practice, sarcini acasă și dezvoltarea abilităților de comunicare și rezolvare a conflictelor. Psihoterapia de cuplu poate fi un instrument valoros în rezolvarea problemelor relaționale și în construirea unei fundații mai puternice și mai sănătoase pentru cuplu.",
    },
    price: "",
    duration: "",
    bgColor: "accents.army",
    color: "tints.lime",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704475956/serviceImages/people-holding-together-hands-cute-paper-family_l8zeao.jpg",
    route: "COUPLE",
  },
  2: {
    id: 2,
    title: "Terapie prin Somatic Experiencing®",
    brief:
      "Vindecarea traumei înseamnă abordarea rănilor emoționale și fiziologice, dincolo de aspectele cognitive, și implică analiza instinctelor de luptă, fugă sau îngheț",
    description: {
      highlightedParagraph:
        "Metoda Somatic Experiencing este o abordare terapeutică dezvoltată de psihologul Peter Levine. Această metodă se concentrează pe rezolvarea traumelor și a stresului prin intermediul corpului. Somatic Experiencing crede că traumele pot fi înmagazinate în corp și că unicitatea fiecărei persoane necesită o abordare individualizată pentru vindecare.",
      firstHeading: "",
      secondParagraph:
        "Prin intermediul Somatic Experiencing, se explorează senzațiile și reacțiile corporale asociate cu traumele și stresul. Scopul este de a reda sistemului nervos autonom abilitatea de a se regla și de a se vindeca. Terapeutul lucrează cu pacientul pentru a recunoaște și a elibera tensiunile din corp, ajutându-l să își regăsească resursele interne și să își reconstruiască capacitatea de a face față provocărilor",
      secondHeading: "",
      thirdParagraph:
        "Această metodă poate fi folosită în tratarea unei game variate de traume și tulburări, incluzând tulburarea de stres posttraumatic (PTSD), anxietatea, depresia și alte afecțiuni legate de stres. Somatic Experiencing poate ajuta pacienții să recapete controlul asupra corpului și să își îmbunătățească calitatea vieții.",
    },
    price: "",
    duration: "",
    bgColor: "tints.yellow",
    color: "accents.red",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704564531/psihosomatic2_ijc21o.jpg",
    route: "TRAUMA",
  },
  3: {
    id: 3,
    title: "Hipnoterapie",
    brief:
      "Abordarea rănilor din trecut la nivel subconștient folosind transe țintite pentru vindecare",
    description: {
      highlightedParagraph:
        "Hipnoza eriksoniană, numită și hipnoza conversațională sau hipnoza indirectă, este o formă de terapie hipnotică dezvoltată de psihoterapeutul Milton H. Erickson. Acest tip de hipnoză este caracterizat de abordarea indirectă și subtilă a sugestiilor hipnotice, prin intermediul limbajului metaforic, indicilor nonverbali și a tehnicilor de conversație.",
      firstHeading: "",
      secondParagraph:
        "Hipnoza eriksoniană se distinge prin faptul că nu implică o stare de transă profundă sau relaxare profundă, așa cum este asociată cu hipnoza tradițională. În schimb, se folosesc conversații relaxate și metafore care să atingă nivelul subconștientului și să stimuleze schimbările dorite. Terapeutul hipnotic utilizează sugestii indirecte, precum povestiri, sugestii ambigue și întrebări, pentru a ajunge la nivelul de înțelegere și receptivitate al subconștientului.",
      secondHeading: "",
      thirdParagraph:
        "Hipnoza eriksoniană poate fi utilizată într-o gamă largă de domenii terapeutice, inclusiv în tratarea traumelor, fobiilor, dependențelor, tulburărilor de anxietate și a altor probleme emoționale și comportamentale. Această abordare a hipnozei pune accent pe respectarea individualității și adaptarea tehnicilor la nevoile și caracteristicile unice ale fiecărui pacient. Este important de menționat că hipnoza eriksoniană este considerată o formă de terapie complementară și trebuie practicată de terapeuți cu experiență și pregătire adecvată în domeniul hipnozei și psihoterapiei.",
    },
    price: "",
    duration: "",
    bgColor: "accents.yellow",
    color: "tints.yellow",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704475856/serviceImages/av3_tfhiku.jpg",
    route: "HIPNO",
  },
  4: {
    id: 4,
    title: "Evaluare psihologica",
    brief:
      "Asistență profesională, dovedită științific, care utilizează suite de teste precise pentru a diagnostica afecțiuni precum ADHD, PTSD, TOC și altele.",
    description: {
      highlightedParagraph:
        "Evaluarea clinică este un proces complex și sistematic de evaluare a stării de sănătate a unei persoane, care implică colectarea și analiza informațiilor relevante legate de istoricul personal și medical al individului, simptomele și problemele sale actuale, funcționarea psihologică și socială, precum și a altor factori relevanți pentru sănătatea și bunăstarea sa.",
      firstHeading: "",
      secondParagraph: () => <EvaluationSectionArticle />,
      secondHeading: "",
      thirdParagraph:
        "Evaluarea clinică poate fi efectuată de diferite cadre medicale sau terapeutice, cum ar fi psihologii clinicieni, psihiatrii, asistenții sociali și alți specialiști în domeniul sănătății mintale. Este un proces individualizat și atent, care se axează pe înțelegerea și sprijinirea nevoilor și bunăstării pacientului.",
    },
    price: "",
    duration: "",
    bgColor: "tints.army",
    color: "accents.army",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704475856/serviceImages/av2_dgirf0.jpg", 
    route: "EVALUATION",
  },
  5: {
    id: 5,
    title: "Psihosexologie",
    brief:
      "Dă-ți voie să depășești orice disfuncționalitate legată de orientarea sexuală (nevoi sexuale pe parcusul vieții), ori identitatea sexuală (cu care ne nastem)",
    description: {
      highlightedParagraph:
        "Psihosexologia este un domeniu interdisciplinar care se ocupă de studierea și înțelegerea relației dintre aspectele psihologice și aspectele sexuale ale indivizilor. Aceasta abordează aspectele emoționale, mentale, comportamentale și sociale ale sexualității umane și își propune să identifice și să soluționeze problemele și dificultățile legate de sexualitatea umană.",
      firstHeading: "",
      secondParagraph: () => <PsychosexologySectionArticle />,
      secondHeading: "",
      thirdParagraph:
        "Psihosexologia este un domeniu sensibil și confidențial, care caută să înțeleagă și să sprijine indivizii în explorarea și exprimarea sănătoasă a sexualității lor. Psihosexologii lucrează în mod individual sau cu cupluri, de obicei în cadrul unui mediu terapeutic sigur și etic.",
    },
    price: "",
    duration: "",
    bgColor: "accents.red",
    color: "#fff",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704475856/serviceImages/av5_suand1.jpg",
    route: "SEXOLOGY",
  },
  6: {
    id: 6,
    title: "Grup dependente/codependente",
    brief:
      "Grup de suport unde poti sa iti impartasesti experienta si sa experimentezi ca nu esti singur in trauma pe care o resimti (lucru care ajuta la vindecare si restructurarea intregi identitati).",
    description: {
      // zeroHeading:"Grup de suport destinat pierderii cuiva drag în caz de deces, divorț, relație de lungă durată",
      // highlightedParagraph:"Ai pierdut recent un om drag din viata ta? Dacă da, poți face parte, in intervalul martie-aprilie 2024, dintr-un nou grup de suport organizat de mine in incinta cabinetului Therapy Hub - str. Atanasie Simu nr. 6, Bucuresti. Acest atelier se va desfasura pe parcursul a 5 săptămâni, după cum urmează: 30 martie, 6 aprilie, 13 aprilie, 20 aprilie si 29 aprilie, intre orele 18:30 si 20:30. Taxa de participare este sub forma de donație.",
      highlightedParagraph:"Psihoterapie si suport psihologic in grup oferite persoanelor care sufera de adictii de alcool, droguri, jocuri de noroc, dar si celor din jurul acestora, care se afla in situatia de codependenta",

      firstHeading: "",
      secondParagraph: "Confidentialitatea este anuntata si respectata de catre toti participantii!",
      // "Intalnirile grupului de suport au rol de alinare si vindecare, promoveaza acceptarea, reintegrarea si respectul durerii fiecarui participant in parte. Aici, participantii pot cunoaste si alte persoane care trec prin evenimente similare si vor putea intra in contact intr-un mediu sigur cu emotiile de neinteles din aceasta perioada, pentru ca sa poata trece prin experienta dureroasa a doliului mai usor, mai putin singuri. In grupul de sprijin, fiecare participant isi impartaseste propria experienta si este ascultat fara sa fie judecat.",
      secondHeading: "",
      thirdParagraph: "",
      // "Mediul pe care il promovam in intalnirile noastre este unul de confort emotional, confidentialitate si respect reciproc, un mediu care permite procesul de (auto)vindecare naturala in perioada de doliu si previne complicatiile posibile.",
      fourthParagraph: "", 
      // <ParagraphSupportGroupList />,
    },
    price: "",
    duration: "",
    bgColor: "accents.lime",
    color: "tints.lime",
    img: "https://res.cloudinary.com/dd82hyvds/image/upload/v1704476376/serviceImages/hands-united-heart-community-love-min_ldjnwf.jpg",
    route: "GROUP",
  },
};
export const performanceCounterData = {
  0: { indicator: "pacienți", number: 5760, color: "accents.army" },
  1: { indicator: "specializări", number: 6, color: "accents.yellow" },
  2: { indicator: "ani de experiență", number: 9, color: "accents.lime" },
  3: { indicator: "ore de practică", number: 8000, color: "accents.red" },
};
export const resumeData = {
  certifications: {
    // 0: {
    //   // title: "Experiență profesională",
    //   achievements: [
    //     "",
    //     "",
    //     "",
    //   ],
    //   years: ["2024 - prezent"],
    //   bgColor: "rgb(251, 250, 255)",
    //   color: "rgb(80, 47, 111)",
    //   icon: "",
    // },
    1: {
      // title: "Studii şi formare continuă",
      achievements: [
        "Participare la Conferința Națională APAR - ediția XVIII, pe tema „ABORDARI INTERDISCIPLINARE”, avizată de Colegiul Psihologilor din România cu 24 credite profesionale (20-22 aprilie)",
        "Curs „Formare de baza în adicții-ediția a VIII-a”, în cadrul Asociatiei PREVENTIS, curs acreditat de Colegiul Psihologilor cu 32 de credite, 40h de curs, aprilie 2024",
        "Cursant în cadrul Asociației SE Somatic Experiencing Romania, specializare în psihosomatică, metoda psiho-biologică dezvoltată de Dr. Peter Levine (în curs)",
        "Absolvent în cadrul Asociației de cercetare, consiliere și Psihoterapie Integrativă (ACCPI), specializare Hipnoterapie Ericksoniană, Institut European acreditat EAIP, COPSI ",
        "Curs de specializare continuă în ”Vindecarea rănilor materne transgeneraționale” - organizat de Florin Vancea, doctor în psihologie, psihoterapeut principal, formator în Psihoterapie Experienţială (24-27 februarie)",
        "Participare la Conferința Națională APAR - ediția XVIII, pe tema „TULBURĂRI NEUROCOGNITIVE”, conferință avizată de Colegiul Psihologilor din România cu 32 credite profesionale (20-23 aprilie)",
        "Participare la Conferința Națională de Psihiatrie și Psihologie medico-legală, Sibiu (23-25 noiembrie)",
        
      ],
      years: ["2023 - 2024"],
      bgColor: "rgb(255, 246, 245)",
      color: "rgb(208, 83, 64)",
      icon: "",
    },
    2: {
      // title: "Experiență profesională",
      achievements: [
        "Curs de specializare continuă în „Perspectiva traumei”- tabără rezidențială - Asociația Psihologilor Atestați din România (APAR) (25 - 28 august)",
        "Participare la Conferința Națională APAR - ediția XVII, pe tema „COMPETENȚE ADAPTATIVE ȘI DEZADAPTATIVE”, conferință avizată de Colegiul Psihologilor din România cu 20 credite ce s-a desfășurat online (8 - 10 mai)",
        "Curs specializare 12 luni intensiv „Psihosexologie - Evaluare și intervenție terapeutică” - Curs organizat de Institutul SPER (Societatea de Psihoterapie Experențială Română din București) (debutul în februarie)",
      ],
      years: ["2022 - 2023"],
      bgColor: "rgb(251, 250, 255)",
      color: "rgb(80, 47, 111)",
      icon: "",
    },
    3: {
      // title: "Workshop-uri",
      achievements: [
        "Participare la Conferința Națională internațională APAR editia XVI pe tematica „RESTRUCTURĂRI PSIHOLOGICE ÎN CRIZĂ”, conferință avizata de Colegiul Psihologilor din România cu 19 credite (12 - 16 mai)",
        "Curs de specializare formare continuă „Psihoterapia traumei” - Tabără rezidențială - Asociația Română de Psihoterapie Integrativă, (16 - 20 iunie)",
        "Certificat de participare la workshop-ul formativ, specializare „Evaluare si interventie clinica in traumă” - Curs avizat de Colegiul Psihologilor din România, Comisia psihoterapie și creditat cu 10 credite - Curs sustinut de membru Asociația Expert Psy - Psiholog clinician principal, Florina Bicoiu (20 februarie)",
        "Psihotraumă – evaluare și intervenţie psihologică",
        "Evaluarea psihologică în deteriorarea cognitivă a adultului",
      ],
      years: ["2021 - 2022"],
      bgColor: "rgb(245, 255, 251)",
      color: "rgb(38, 126, 93)",
      icon: "",
    },
    4: {
      // title: "Workshop-uri",
      achievements: [
        "Curs specializare 6 luni intensiv „Curs terapie sistemica” - Curs organizat de Asociația de Psihoterapie Integrativă și Psihologie clinică din Iași, Formator în psihoterapie sistemică de familie și cuplu, Psiholog clinician principal - Cristian Petrescu (octombrie 2020 - martie 2021)",
        "Curs de specializare formare continuă in „Transfromarea vieții și a scenariului de viață prin știința epigeneticii” - Tabără rezidențială - Asociația Română de Psihoterapie Integrativă (9 noiembrie)",
        "Certificat de participare la workshop-ul formativ, specializare „Tehnici de hipnoterapie aplicate in managementul stresului” - Curs avizat de Colegiul Psihologilor din România, Comisia psihoterapie și creditat cu 10 credite - Curs susținut de Asociația Română de Psihoterapie Integrativă / Președinte, psih.dr.Gina Chiriac (28 octombrie)",
        "Curs de formare continuă în psihologie clinica „Evaluarea psihologică clinică a copilului abuzat/neglijat”- Curs avizat de Colegiul Psihologilor din România, Comisia de Psihologie Clinică și Psihoterapie și creditat cu 10 credite - Curs susținut de Asociația Expert Psy / Președinte, psih.pr.dr.Armand VELEANOVICI (9 iunie)",
        "Curs de formare continuă în psihologie clinica „Evaluarea psihologică clinică în situații de divort” - Curs avizat de Colegiul Psihologilor din România, Comisia de Psihologie Clinică și Psihoterapie și creditat cu 10 credite - Curs susținut de Asociația Expert Psy/Președinte, psih.pr.dr.Armand VELEANOVICI (10 iunie)",
      ],
      years: ["2020 - 2021"],
      bgColor: "rgb(254, 250, 246)",
      color: "rgb(208, 83, 64)",
      icon: "",
    },
    5: {
      // title: "Workshop-uri",
      achievements: [
        "Curs specializare - „Consilier pentru dezvoltare personală” - Organizat de Confident Business Training SRL (22 - 28 ianuarie)",
        "Certificat de participare la workshop-ul formativ, „Gestionarea conflictelor în cuplu și stresul emoțional” - organizat de Gina Chiriac - Sediul Asociației Române de Psihoterapie Integrativă (4 octombrie)",
        "Certificat de participare la workshop-ul formativ, „Lucrul cu umbra” - organizat de Coralina Chiriac - Sediul Asociației Române de Psihoterapie Integrativă (28 octombrie)",
      ],
      years: ["2019 - 2020"],
      bgColor: "rgb(252, 251, 253)",
      color: "rgb(80, 47, 111)",
      icon: "",
    },
    6: {
      // title: "Workshop-uri",
      achievements: [
        "Curs de formare continuă in „Psihoterapia Transgenerațională” - Tabără rezidențială - Asociația Română de Psihoterapie Integrativă, 19 septembrie 2018",
        "Program Masteral Româno-Britanic de formare în Psihoterapie Integrativă absolvit la Asociația Română de Psihoterapie Integrativă, București - formare profesională în Psihoterapie integrativă, 2017-2019",
      ],
      years: ["2017 - 2019"],
      bgColor: "rgb(245, 255, 251)",
      color: "rgb(38, 126, 93)",
      icon: "",
    },
    7: {
      // title: "Workshop-uri",
      achievements: [
        "Facultatea de Psihologie şi Sociologie, Universitatea Spiru Haret, Bucureşti.",
      ],
      years: ["1998 - 2002"],
      bgColor: "rgb(253, 248, 241)",
      color: "rgb(208, 83, 64)",
      icon: "",
    },
  },
  experience: {
    0: {
      date: "2021 - prezent",
      title:
        "Psihoterapeut membru la Asociația Psihologilor Atestați din România (APAR)",
    },
    1: {
      date: "2019 - prezent",
      title:
        "Consilier Psihologic, Psiholog clinician și Psihoterapeut integrativ pentru adulți și copii la Cabinet Individual de Psihologie Adina Varodi, București",
    },
  },
  affiliations: {
    0: {
      date: "",
      title:
        "Membru al Asociației Psihologilor Atestați din Romania - A.P.A.R.",
    },
    1: {
      date: "",
      title:
        "Membru al Asociației de Cercetare, Consiliere și Psihoterapie Integrativă (ACCPI)",
    },
    2: {
      date: "",
      title: "Membru al Colegiului Psihologilor din România (COPSI)",
    },
    3: {
      date: "",
      title: "Membru al Federației Române de Psihoterapie Integrativă (FRP)",
    },
    4: {
      date: "",
      title: "Membru al Asociației Europene de Psihoterapie Integrativă (EAIP)",
    },
    5: {
      date: "",
      title:
        "Cabinet Individual de Psihologie Adina Varodi - cod unic înregistrare Colegiul Psihologilor 10B9556 | Str. Cpt. Juverdeanu nr.51, Sect.2, București",
    },
  },
  accreditations: {
    0: {
      date: "",
      title:
        "Certificat European de Psihoterapeut Integrativ eliberat de Asociația Europeană de Psihoterapie Integrativă",
    },
    1: {
      date: "",
      title:
        "Atestat de liberă practică în Psihologie clinică, nivel autonom, eliberat de Colegiul Psihologilor din România - Cod 23242",
    },
    2: {
      date: "",
      title:
        "Atestat de liberă practică în Psihoterapie Integrativa, nivel autonom, eliberat de Colegiul Psihologilor din România - Cod 23242",
    },
  },
  licensedTests: {
    0: {
      date: "iulie 2020",
      title:
        "Licență de utilizare Testul Arborelui - Karl Koch, Editura Profex (Testcentral)",
    },
    1: {
      date: "iulie 2020",
      title:
        "Licență de utilizare Inventarul de Depresie Beck (BDI-II) - Aaron T.Beck, Robert A. Steer, Gregory K. Brown (SC RTS Romanian Psychological Testing Services)",
    },
    2: {
      date: "18.01.2021",
      title:
        "Licența de utilizare Desenul Persoanei - Ada Abraham (Testcentral)",
    },
    3: {
      date: "14.12.2021",
      title:
        "Licența de utilizare Inventarul de personalitate DECAS (Psiho Proiect)",
    },
    4: {
      date: "18.03.2022 ",
      title:
        "Licență de utilizare Personality Clinical Form PCF (Psiho Proiect)",
    },
    5: {
      date: "06.11.2023",
      title:
        "Licenta de utilizare MMSE 2 Mini Mental State Examination (Testcentral)",
    },
  },
};
export const ROUTES = {
  HOME: "/",
  ABOUT: "/despre-mine",
  BLOG: "/blog",
  BLOG_POST: "/blog/:id",
  SERVICES: "/servicii",
  SERVICE_PAGE: "/servicii/:title",
  INDIVIDUAL: "/servicii/psihoterapie-individuala",
  COUPLE: "/servicii/psihoterapie-cuplu-familie",
  HIPNO: "/servicii/hipnoterapie",
  TRAUMA: "/servicii/trauma",
  EVALUATION: "/servicii/evaluare-psihologica",
  SEXOLOGY: "/servicii/psihosexologie",
  GROUP: "/servicii/psihoterapie-de-grup",
  ARTICLE: "/:articleID",
  NOT_FOUND: "*",
};
export const HomeAboutIntroListContent = {
  
  0: {
    text: "Sindromul stresului post-traumatic",
    angle: "0",
    color: "tints.yellow",
  },
  1: { text: "Probleme de sexualitate", angle: "180", color: "accents.lime" },
  2: { text: "Atacuri de panică", angle: "270", color: "tints.red" },
  3: { text: "Divorț", angle: "90", color: "accents.army" },
  4: { text: "Probleme în cuplu", angle: "180", color: "accents.yellow" },
  5: { text: "Conflict părinte-adolescent", angle: "90", color: "accents.red" },
  6: { text: "Lipsă de motivație/scop", angle: "270", color: "tints.lime" },
  7: { text: "Frici / fobii", angle: "0", color: "accents.army" },
  8: { text: " Anxietate", angle: "90", color: "neutral.dark" },
  9: {
    text: "Depresie",
    angle: "180",
    color: "accents.lime",
  },
  
  10: { text: "Grup de suport",tooltip: "Înființarea unui nou grup de suport - în curând!", linkText:" (click mai multe detalii!)", link: ROUTES.GROUP, angle: "0", color: "accents.red" },

};
export const socialProofReviews = [
  {
    name: "Ionela S.",
    age: "",
    thumbnail: "",
    date: "22 ianuarie 2023",
    caption:
      "Interacțiune foarte buna, o persoana deosebita și un profesionist actual și profund!! M a ajutat foarte mult in problema expusă de mine!! ",
    rating: "",
    bgColor: "tints.red",
    color: "accents.red",
    ratedService: "Psihoterapie individuala (online)",
  },
  {
    name: "Madalin S.",
    age: "",
    thumbnail: "",
    date: "12 ianuarie 2023",
    caption: "O doamna psiholoaga extraordinara , recomand!",
    rating: "",
    bgColor: "tints.yellow",
    color: "accents.lime",
    ratedService: "Psihoterapie individuala ",
  },
  {
    name: "Bianca A.",
    age: "",
    thumbnail: "",
    date: "20 septembrie 2022",
    caption:
      "O doamna de nota 10. Am reușit sa ma deschid din prima ședință, unde mi s-a oferit încrederea si spatiul necesar. Abia astept sa revin. ",
    rating: "",
    bgColor: "accents.red",
    color: "tints.red",
    ratedService: "Psihoterapie individuala",
  },
  {
    name: "Andrei C.",
    age: "",
    thumbnail: "",
    date: "1 august 2022",
    caption:
      "Am avut o prima ședință din care am reușit sa ma deschid datorita ei. Aștept cu nerăbdare ședințele următoare și sunt încrezător ca voi depăși obstacolele.",
    rating: "",
    bgColor: "tints.army",
    color: "accents.red",
    ratedService: "Psihoterapie individuala",
  },
  {
    name: "Daniela G.",
    age: "",
    thumbnail: "",
    date: "13 aprilie 2022",
    caption:
      "O persoana bine organizata care asculta si da sfaturi in consecinta, te simti in siguranta din momentul in care intri in cabinet.",
    rating: "",
    bgColor: "accents.lime",
    color: "tints.army",
    ratedService: "Psihoterapie individuala ",
  },
  {
    name: "Marcu F.",
    age: "",
    thumbnail: "",
    date: "6 ianuarie 2022",
    caption:
      "Foarte multumita. Copilul o place si vrea sa mearga in continuare.",
    rating: "",
    bgColor: "tints.red",
    color: "accents.army",
    ratedService: "Psihoterapie individuala (copii)",
  },
  {
    name: "Pandele A.",
    age: "",
    thumbnail: "",
    date: "8 ianuarie 2022",
    caption: "M-a ajutat cu tot ce am avut nevoie.",
    rating: "",
    bgColor: "tints.yellow",
    color: "accents.red",
    ratedService: "Psihoterapie individuala (online)",
  },
  {
    name: "Doina M.",
    age: "",
    thumbnail: "",
    date: "18 noiembrie 2021",
    caption: "Un adevarat profesionist, foarte prietenoasa, un bun ascultator.",
    rating: "",
    bgColor: "accents.army",
    color: "tints.lime",
    ratedService: "Psihoterapie individuala (online)",
  },
  {
    name: "Ana Maria Dan G.",
    age: "",
    thumbnail: "",
    date: "17 noiembrie 2021",
    caption:
      "Ma simt mai usoara dupa sedinte si am prins curaj sa fac si niste schimbari in viata mea",
    rating: "",
    bgColor: "tints.yellow",
    color: "neutrals.dark",
    ratedService: "Psihoterapie individuala (online)",
  },
  {
    name: "Albert V.",
    age: "",
    thumbnail: "",
    date: "12 noiembrie 2021",
    caption: "M-am simtit ajutat si inteles.",
    rating: "",
    bgColor: "accents.red",
    color: "neutrals.light",
    ratedService: "Psihoterapie individuala",
  },
  {
    name: "Diana F.",
    age: "",
    thumbnail: "",
    date: "12 octombrie 2021",
    caption:
      "O persoana foarte calda, m-am deschis cu usurinta si am putut comunica foarte bine.",
    rating: "",
    bgColor: "tints.red",
    color: "accents.army",
    ratedService: "Psihoterapie individuala (online)",
  },
  {
    name: "Alexandra A.",
    age: "",
    thumbnail: "",
    date: "20 septembrie 2021",
    caption:
      "Inca de la inceput mi-am dat seama ca Adina Varodi este un psiholog devotat, care a investit foarte mult timp pentru a-si dezvolta abilitatile terapeutice. Fiecare sedinta de terapie ma ajuta sa ma apropii si mai mult de telul meu si astfel astept cu nerabdare urmatoarea intalnire. Recomand cu incredere!!! ",
    rating: "",
    bgColor: "accents.yellow",
    color: "tints.yellow",
    ratedService: "Psihoterapie individuala",
  },
  {
    name: "Roxana D.",
    age: "",
    thumbnail: "",
    date: "22 iulie 2021",
    caption:
      "Apreciez faptul ca Adina este o persoana empatica si am reusit sa ma conectez cu ea inca din primele minute. Ii place ceea ce face si asta se vede. ",
    rating: "",
    bgColor: "tints.lime",
    color: "accents.army",
    ratedService: "Psihoterapie individuala",
  },
  {
    name: "Bogdan M.",
    age: "",
    thumbnail: "",
    date: "8 iulie 2021",
    caption:
      "Este fascinant cate lucruri se afla in inconstientul nostru si ne influenteaza viata. Eu inca ma aflu intr-un proces al descoperirii care imi imbunatateste viata prin schimbari mici dar cu un impact foarte mare. Recomand cu caldura.",
    rating: "",
    bgColor: "accents.lime",
    color: "tints.army",
    ratedService: "Psihoterapie individuala ",
  },
  {
    name: "Ionut Valentin P.",
    age: "",
    thumbnail: "",
    date: "5 iulie 2021",
    caption:
      "Încă de la prima ședință mi-am dat seama ca am făcut cea mai buna alegere. Merg o data pe săptămână iar terapia a început să funcționeze după prima ședință. Adina Varodi este un profesionist dedicat! ",
    rating: "",
    bgColor: "accents.army",
    color: "tints.red",
    ratedService: "Psihoterapie individuala ",
  },
];
