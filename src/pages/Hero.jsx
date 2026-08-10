import React from "react";
import ProfileEntry from "./PortfolioEntry";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import EducationSection from "../component/EducationSection";
import ProjectsSection from "../component/ProjectsSection";
import ContactSection from "../component/ContactSection";

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
