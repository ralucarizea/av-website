import React from "react";
import AboutHero, { PageTitle } from "./sections/AboutHero";
import PerformanceCounter from "../../components/PerformanceCounter";
import AboutTherapeuticStyle from "./sections/AboutTherapeuticStyle";
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
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MDfont } from "../../assets/styles/theme";
import { Link } from "react-router-dom";
const StyledVerticalTimeline = styled(VerticalTimeline)`
  &:before {
    width: 2px;
    margin-left: -1px;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  min-height: 15vw;
  height: 100%;
  padding-left: 36px;
  padding-top: 48px;
  color: inherit;
`;
export default function About() {
  const [isMobile] = useMediaQuery("(max-width: 1170px)");

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <AboutHero />
      <AboutBanner />
      <PerformanceCounter />
      <AboutTherapeuticStyle />
      <Box
        my={{ base: "28vw", sm: "10vw", md: "8vw", lg: "16vw", xl: "20vw" }}
        fontFamily={"sans"}
      >
        <Box mb={{ base: "20vw", md: "10vw", xl: "8vw" }} id="certifications">
          <PageTitle mb={"8vw"}>Studii si formare continua</PageTitle>
        </Box>

        <StyledVerticalTimeline lineColor="#eaeaea">
          {Object.keys(resumeData.certifications).map((index) => (
            <VerticalTimelineElement
              key={index}
              element={resumeData.certifications[index]}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: resumeData.certifications[index].bgColor,
                color: resumeData.certifications[index].color,
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  ",
                borderRightColor: resumeData.certifications[index].bgColor,
              }}
              date={resumeData.certifications[index].years}
              iconStyle={{
                background: resumeData.certifications[index].color,
                border: "none",
                boxShadow: "none",
                width: "18px",
                height: "18px",
                marginLeft: isMobile ? "10px" : "-10px",
                marginTop: "20px",
              }}
            >
              <UnorderedList
                color={resumeData.certifications[index].color}
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
                fontSize={{
                  base: "13.5px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                }}
              >
                {resumeData.certifications[index]?.achievements?.map(
                  (achievement) => (
                    <ListItem key={achievement}>{achievement}</ListItem>
                  )
                )}
              </UnorderedList>
            </VerticalTimelineElement>
          ))}
        </StyledVerticalTimeline>
        <Tabs
          my={{ base: "28vw", sm: "18vw", md: "16vw", lg: "16vw", xl: "20vw" }}
          // isFitted
          align="start"
          variant="enclosed"
          px={{ base: "3vw", md: "10vw" }}
          h="fit"
          fontSize={MDfont}
        >
          <TabList
            borderLeft="0"
            color="accents.army"
            borderColor="accents.army"
          >
            <Tab
              pt="8px"
              pb="4px"
              px={{ base: "8px", lg: "10px" }}
              fontWeight="600"
              // color="tints.red"
              // bgColor="accents.red"
              fontSize={MDfont}
            >
              Afilieri
            </Tab>
            <Tab
              // h="90%"
              pt="8px"
              pb="4px"
              px={{ base: "8px", lg: "10px" }}
              fontWeight="600"
              // color="tints.army"
              // bgColor="accents.army"
              fontSize={MDfont}
            >
              Experiență profesională
            </Tab>
            <Tab
              pt="8px"
              pb="4px"
              px={{ base: "8px", lg: "10px" }}
              fontWeight="600"
              // color="tints.lime"
              // bgColor="accents.lime"
              fontSize={MDfont}
            >
              Acreditări
            </Tab>
            <Tab
              pt="8px"
              pb="4px"
              px={{ base: "8px", lg: "10px" }}
              fontWeight="600"
              // color="tints.yellow"
              // bgColor="accents.yellow"
              fontSize={MDfont}
            >
              Teste de specialitate cu licență
            </Tab>
          </TabList>
          <TabPanels color="accents.army">
            <StyledTabPanel>
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.affiliations).map((index) => (
                  <ListItem key={index}>
                    {resumeData.affiliations[index].title}
                    {resumeData.affiliations[index].date}
                  </ListItem>
                ))}
              </UnorderedList>
            </StyledTabPanel>
            <StyledTabPanel>
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.experience).map((index) => (
                  <ListItem key={index}>
                    <strong>{resumeData.experience[index].date}: </strong>
                    {resumeData.experience[index].title}
                  </ListItem>
                ))}
              </UnorderedList>
            </StyledTabPanel>

            <StyledTabPanel>
              <UnorderedList
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {Object.keys(resumeData.accreditations).map((index) => (
                  <ListItem key={index}>
                    {resumeData.accreditations[index].title}
                    {resumeData.accreditations[index].date}
                  </ListItem>
                ))}
              </UnorderedList>{" "}
            </StyledTabPanel>
            <StyledTabPanel>
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
        <AboutPhotoGallery />
      </Box>
    </>
  );
}
