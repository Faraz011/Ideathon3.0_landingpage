import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TracksSection from "./TracksSection";
import TimelineSection from "./TimelineSection";
import RegisterSection from "./RegisterSection";
import Footer from "./Footer";
import PolygonNetworkBackground from "./PolygonNetworkBackground";
import FeaturedSpeaker from "./FeaturedSpeaker";
import Sponsors from "./sponsors";
const IdeathonLanding = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 z-10">
        <PolygonNetworkBackground />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col pb-10 px-4 sm:px-6 md:px-8">
          <main className="flex-1">
            <HeroSection />
            <AboutSection />
            <TracksSection />
            <TimelineSection />
            <FeaturedSpeaker />
            <Sponsors />
            <RegisterSection />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default IdeathonLanding;
