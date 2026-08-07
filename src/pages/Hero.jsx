import React from "react";
import GradientWaves from "../component/GradientWaves";
import ProfileEntry from "./PortfolioEntry";
import CircularText from "../component/CircularText";

const Hero = () => {
  return (
    <div className="relative min-h-[220vh] w-full overflow-visible">
      <ProfileEntry />
      <div className="absolute inset-0 z-10 top-[100vh] flex h-full w-full items-end overflow-hidden">
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
          className="*:absolute inset-0 z-10 h-full w-full block min-h-screen"
        />
        <div className="absolute p-8 z-20 bottom-[82vh] w-full text-black">
          <nav className="h-20 w-full flex items-center justify-between px-4">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <img
                src="/hero.jpg"
                alt="hero-img"
                height="80"
                width="80"
                className="rounded-full absolute object-cover aspect-square object-center border-purple-600 border-2"
              />
              <CircularText
                text="UJWAL*SINGH*DEV*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
            <div className="text-lg font-semibold w-[50%]">
              <ul className="flex items-center justify-evenly gap-3">
                <li>About</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hero;
