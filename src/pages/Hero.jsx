import React from "react";
import ProfileEntry from "./PortfolioEntry";
import HeroSection from "../component/HeroSection";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-visible">
      <ProfileEntry />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
