import React, { useEffect, useRef } from "react";
import ProfileEntry from "./PortfolioEntry";
import HeroSection from "../component/HeroSection";

const Hero = () => {
  return (
    <div className="relative min-h-[220vh] w-full overflow-visible">
      <ProfileEntry />
      <HeroSection />
    </div>
  );
};

export default Hero;
