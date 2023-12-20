import React from "react";
import AboutHero, { PageTitle } from "./sections/AboutHero";
import PerformanceCounter from "../../components/PerformanceCounter";
import AboutTherapeuticStyle from "./sections/AboutTherapeuticStyle";
import AboutParallaxPiece from "./sections/AboutParallaxPiece";
import AboutBanner from "./sections/AboutBanner";
import AboutPhotoGallery from "./sections/AboutPhotoGallery";
import { resumeData } from "../../assets/constants/data";
import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Box,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MDfont } from "../../assets/styles/theme";
const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  min-height: 15vw;
  height: 100%;
  padding-left: 36px;
  padding-top: 48px;
`;
export default function About() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <AboutHero id="story" />
      <AboutBanner />
      <PerformanceCounter />
      <AboutTherapeuticStyle />
      <Box
        my={{ base: "12vw", sm: "10vw", md: "8vw", lg: "16vw", xl: "20vw" }}
        fontFamily={"sans"}
      >
        <Box mb="10vw">
          <PageTitle mb="8vw">Studii si formare continua </PageTitle>
        </Box>

        <VerticalTimeline lineColor="rgb(0,0,0, 0.1)">
          {Object.keys(resumeData.certifications).map((index) => (
            <VerticalTimelineElement
              key={index}
              element={resumeData.certifications[index]}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: resumeData.certifications[index].bgColor,
                color: resumeData.certifications[index].color,
              }}
              contentArrowStyle={{
                borderRight: "7px solid  ",
                borderRightColor: resumeData.certifications[index].bgColor,
              }}
              date={resumeData.certifications[index].years}
              iconStyle={{
                background: resumeData.certifications[index].color,
                color: resumeData.certifications[index].bgColor,
              }}
            >
              <UnorderedList
                color={resumeData.certifications[index].color}
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {resumeData.certifications[index]?.achievements?.map(
                  (achievement) => (
                    <ListItem key={achievement}>{achievement}</ListItem>
                  )
                )}
              </UnorderedList>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <Tabs
          my={{ base: "12vw", sm: "10vw", md: "16vw", lg: "16vw", xl: "20vw" }}
          isFitted
          // variant="enclosed"
          px="10vw"
          h="fit"
          fontSize={MDfont}
        >
          <TabList borderLeft="0">
            <Tab
              py={{ base: "16px", sm: "22px", lg: "32px" }}
              fontWeight="600"
              color="tints.army"
              bgColor="accents.army"
              fontSize={MDfont}
            >
              Experiență profesională
            </Tab>
            <Tab
              py={{ base: "16px", sm: "22px", lg: "32px" }}
              fontWeight="600"
              color="tints.red"
              bgColor="accents.red"
              fontSize={MDfont}
            >
              Afilieri
            </Tab>
            <Tab
              py={{ base: "16px", sm: "22px", lg: "32px" }}
              fontWeight="600"
              color="tints.lime"
              bgColor="accents.lime"
              fontSize={MDfont}
            >
              Acreditări
            </Tab>
            <Tab
              py={{ base: "16px", sm: "22px", lg: "32px" }}
              fontWeight="600"
              color="tints.yellow"
              bgColor="accents.yellow"
              fontSize={MDfont}
            >
              Teste de specialitate cu licență
            </Tab>
          </TabList>
          <TabPanels>
            <StyledTabPanel color="accents.army" bgColor="tints.army">
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.experience).map((index) => (
                  <ListItem key={index}>
                    <strong>{resumeData.experience[index].date}:</strong>
                    {resumeData.experience[index].title}
                  </ListItem>
                ))}
              </UnorderedList>
            </StyledTabPanel>
            <StyledTabPanel color="accents.red" bgColor="tints.red">
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.affiliations).map((index) => (
                  <ListItem key={index}>
                    {resumeData.affiliations[index].title} -{" "}
                    {resumeData.affiliations[index].date}
                  </ListItem>
                ))}
              </UnorderedList>
            </StyledTabPanel>
            <StyledTabPanel color="accents.lime" bgColor="tints.lime">
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.accreditations).map((index) => (
                  <ListItem key={index}>
                    {resumeData.accreditations[index].title} -{" "}
                    {resumeData.accreditations[index].date}
                  </ListItem>
                ))}
              </UnorderedList>{" "}
            </StyledTabPanel>
            <StyledTabPanel color="accents.yellow" bgColor="rgb(253, 248, 241)">
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.licensedTests).map((index) => (
                  <ListItem key={index}>
                    {resumeData.licensedTests[index].title} -{" "}
                    <strong>{resumeData.licensedTests[index].date} </strong>
                  </ListItem>
                ))}
              </UnorderedList>
            </StyledTabPanel>
          </TabPanels>
        </Tabs>
        <AboutPhotoGallery id="personalGallery" />
      </Box>
    </>
  );
}
