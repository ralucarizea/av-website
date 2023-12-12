import React from "react";
import HomeHero from "./sections/HomeHero.js";
import HomeAboutIntro from "./sections/HomeAboutIntro.js";
import HomeInfoBanner from "./sections/HomeInfoBanner.js";
import HomeServicesMenu from "./sections/HomeServicesMenu.js";
import HomeParallax from "./sections/HomeParallax.js";
import SocialProof from "../../layouts/SocialProof";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HomeHero />
      <HomeAboutIntro />
      <HomeInfoBanner />
      <HomeServicesMenu />
      <HomeParallax />
      <SocialProof />
    </>
  );
}

export default Home;
