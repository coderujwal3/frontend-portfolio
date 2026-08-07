import React, { Suspense, lazy, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const GradientWaves = lazy(() => import("./GradientWaves"));
const SplitFlapText = lazy(() => import("./SplitFlapText"));
const SpecularButton = lazy(() => import("./SpecularButton"));

const HeroSection = () => {
    const navRef = useRef(null);

    useEffect(() => {
      const target = navRef.current;
      if (!target) return;

      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + window.scrollY;
      const duration = 1200;
      let startTime = null;

      const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + (targetY - startY) * easeInOut(progress));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, []);
  return (
    <div
      className="absolute inset-0 z-10 top-[100vh] flex h-full w-full items-end overflow-hidden"
      ref={navRef}
    >
      <Suspense fallback={<div className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_top,_#5227FF,_#111827_60%,_#000000)]" />}>
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#DA70D6"
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
      </Suspense>
      <div className="absolute h-screen p-10 z-20 w-full" id="hero-nav">
        <Navbar />
        <div className="h-[80%] flex justify-center items-center mt-10">
          <div className="relative h-full md:w-[60%] flex flex-col flex-wrap top-[6vh] gap-4 p-4 pl-4">
            <h1 className="text-8xl font-bold text-purple-950 text-shadow-[5px_5px_0px_#800080]/80">
              Ujwal Singh
            </h1>
            <h2 className="text-6xl font-semibold text-purple-950/60 text-shadow-[8px_8px_4px_#CF9FFF]/80">
              Frontend{" "}
              <Suspense fallback={<span className="inline-block min-w-[260px] text-purple-950">DEVELOPER</span>}>
                <SplitFlapText
                  words={["DEVELOPER", "SYSTEM DESIGNER", "UI/UX DESIGNER"]}
                  flipDuration={0.12}
                  stagger={0.06}
                  cycleDelay={2400}
                  charset="alphanumeric"
                  flipsPerChar={8}
                  tileColor="#111827"
                  textColor="#f8fafc"
                  tileRadius={8}
                  gap={6}
                  fontSize={42}
                  loop
                  padTo={12}
                />
              </Suspense>
            </h2>
            <p className="text-gray-700 text-2xl mt-4 max-w-[80%] text-wrap">
              I'm a Frontend Developer with a passion for creating visually
              stunning and user-friendly web applications. I specialize in
              building responsive and interactive interfaces that provide
              seamless user experiences across devices.
            </p>
            <br />
            <div className="w-[90%] flex justify-end items-center">
              <Suspense fallback={<button className="w-[30%] rounded-[18px] border border-purple-600 bg-slate-200 px-8 py-4 text-2xl text-black">Resume</button>}>
                <SpecularButton
                  size="lg"
                  radius={18}
                  tint="#ffffff"
                  tintOpacity={0}
                  blur={8}
                  textColor="#000"
                  lineColor="#800080"
                  baseColor="#525252"
                  intensity={2}
                  shineSize={10}
                  shineFade={40}
                  thickness={1.5}
                  speed={0.8}
                  followMouse
                  proximity={250}
                  autoAnimate={true}
                  onClick={() => console.log("clicked")}
                  className="w-[30%] text-center text-2xl"
                >
                  Resume
                </SpecularButton>
              </Suspense>
            </div>
          </div>
          <div className="relative w-[35%] h-[60%] md:flex md:flex-col justify-evenly gap-14 hidden">
            <div className="absolute h-full w-full [clip-path:polygon(100%_0,0_0,100%_100%)] bg-[linear-gradient(135deg,#111827_0%,#800080_100%)] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full"></div>
            <div className="absolute h-full w-full [clip-path:polygon(0_0,0_100%,100%_100%)] bg-[linear-gradient(135deg,#800080_0%,#111827_100%)] shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;