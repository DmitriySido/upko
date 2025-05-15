// @ts-nocheck

import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection/FeaturesSection";
import ThreeImagesSection from "../components/home/ThreeImagesSection/ThreeImagesSection";
import AboutSection from "../components/home/AboutSection/AboutSection";
import VideoSection from "../components/home/VideoSection/VideoSection"
import PartnersSection from "../components/home/PartnersSection/PartnersSection";
import ParallaxSection from "../components/home/ParallaxSection/ParallaxSection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection/FeaturedProductsSection";
import ShowroomsSection from "../components/home/ShowroomsSection/ShowroomsSection";
import ReviewsSection from "../components/home/ReviewsSection/ReviewsSection";

const Home: React.FC = () => {
  return (
    <main style={{ background: "#fff", width: "100%", minHeight: "100vh" }}>
      <HeroSection />
      <FeaturesSection />
      <ThreeImagesSection />
      <AboutSection />
      <VideoSection />
      <PartnersSection />
      <ParallaxSection />
      <FeaturedProductsSection />

      {/* Global Showrooms section */}
      <ShowroomsSection />
      <ReviewsSection />
      {/* ...другие секции Home по макету, аналогично... */}
    </main>
  );
};

export default Home;
