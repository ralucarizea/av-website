import React from "react";
import AboutHero from "./sections/AboutHero";
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
import { Box, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

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

      <Box my={{ xl: "20vw" }} fontFamily={"sans"}>
        <VerticalTimeline lineColor="rgb(251, 238, 224)">
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
                borderRightColor: resumeData[index].bgColor
              }}
              date={resumeData[index].years}
              iconStyle={{
                background: resumeData[index].color,
                color: resumeData[index].bgColor,
              }}
            >
              <UnorderedList color={resumeData[index].color} spacing={3} fontWeight="400">
                {resumeData[index]?.achievements?.map((achievement) => (
                  <ListItem key={achievement}>{achievement}</ListItem>
                ))}
              </UnorderedList>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {/* <VerticalTimeline lineColor={"rgb(232, 170, 94)"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "aliceblue", color: "purple" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "accents.lime" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
        <AboutPhotoGallery id="personalGallery" /> */}
      </Box>
    </>
  );
}
