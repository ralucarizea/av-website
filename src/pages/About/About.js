import React from "react";
import AboutHero from "./sections/AboutHero";
import PerformanceCounter from "../../components/PerformanceCounter";
import AboutTherapeuticStyle from "./sections/AboutTherapeuticStyle";
import AboutParallaxPiece from "./sections/AboutParallaxPiece";
import AboutBanner from "./sections/AboutBanner";
import AboutPhotoGallery from "./sections/AboutPhotoGallery";
import { resumeData } from "../../assets/constants/data";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <AboutHero />
      <PerformanceCounter />
      <AboutTherapeuticStyle />
      {Object.keys(resumeData).map((index) => (
        <AboutParallaxPiece key={index} element={resumeData[index]} />
      ))}
      <AboutBanner />
      <AboutPhotoGallery />
    </>
  );
}
