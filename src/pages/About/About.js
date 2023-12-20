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
import { Box, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <AboutHero id="story" />
      <AboutBanner />
      <PerformanceCounter />
      <AboutTherapeuticStyle />

      <Box my={{ xl: "20vw" }} fontFamily={"sans"}>
        <Box mb="10vw">
          <PageTitle mb="8vw">Studii si formare continua </PageTitle>
        </Box>

        <VerticalTimeline lineColor="rgb(0,0,0, 0.1)">
          {Object.keys(resumeData).map((index) => (
            <VerticalTimelineElement
              key={index}
              element={resumeData[index]}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: resumeData[index].bgColor,
                color: resumeData[index].color,
              }}
              contentArrowStyle={{
                borderRight: "7px solid  ",
                borderRightColor: resumeData[index].bgColor,
              }}
              date={resumeData[index].years}
              iconStyle={{
                background: resumeData[index].color,
                color: resumeData[index].bgColor,
              }}
            >
              <UnorderedList
                color={resumeData[index].color}
                spacing={3}
                fontWeight="500"
                letterSpacing={"-0.5px"}
              >
                {resumeData[index]?.achievements?.map((achievement) => (
                  <ListItem key={achievement}>{achievement}</ListItem>
                ))}
              </UnorderedList>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <AboutPhotoGallery id="personalGallery" />
      </Box>
    </>
  );
}
