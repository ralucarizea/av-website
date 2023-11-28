import React from "react";
import Navbar from "../../layouts/Navbar.js";
import HomeHero from "./sections/HomeHero.js";
import HomeAboutIntro from "./sections/HomeAboutIntro.js";
import HomeInfoBanner from "./sections/HomeInfoBanner.js";
import HomeServicesMenu from "./sections/HomeServicesMenu.js";
import HomeParallax from "./sections/HomeParallax.js";
import FAQ from "../../layouts/FAQ";
import SocialProof from "../../layouts/SocialProof";
import Footer from "../../layouts/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeAboutIntro />
      <HomeInfoBanner />
      <HomeServicesMenu />
      <HomeParallax />
      <SocialProof />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
