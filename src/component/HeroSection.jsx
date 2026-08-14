import React, { Suspense, lazy, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import ProfileCard from "../component/ProfileCard";

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
    <section
      id="hero-nav"
      className="relative isolate w-full min-h-screen overflow-hidden"
      ref={navRef}
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_top,#5227FF,#111827_60%,#000000)]" />
        }
      >
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="##EE82EE"
          crestColor="#B200ED"
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
          brightness={0.8}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
          className="*:absolute inset-0 -z-10 block h-full w-full min-h-screen"
        />
      </Suspense>

      <div className="absolute inset-0 z-20 h-screen w-full p-10" id="hero-nav">
        {/* Navbar */}
        <Navbar />
        
        {/* Hero Section */}
        <div className="mt-10 flex h-[80%] items-center justify-evenly">
          <div className="relative top-[6vh] flex h-full flex-col flex-wrap gap-4 p-4 pl-4 md:w-[60%]">
            <h1 className="text-[40px] md:text-6xl lg:text-8xl font-bold text-purple-950 text-shadow-[3px_3px_2px_#800080]/80 md:text-shadow-[4px_4px_0px_#800080]/80 lg:text-shadow-[5px_5px_0px_#800080]/80">
              Ujwal Singh
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-purple-950/60 text-shadow-[8px_8px_4px_#CF9FFF]/80">
              Frontend{" "}
              <Suspense
                fallback={
                  <span className="inline-block min-w-65 text-purple-950">
                    DEVELOPER
                  </span>
                }
              >
                <SplitFlapText
                  words={["DEVELOPER", "SYSTEM DESIGNER", "UI/UX DESIGNER"]}
                  flipDuration={0.12}
                  stagger={0.06}
                  cycleDelay={2400}
                  charset="alphanumeric"
                  flipsPerChar={2}
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
            <p className="mt-4 max-w-[80%] text-2xl text-gray-700 text-wrap">
              I'm a Frontend Developer with a passion for creating visually
              stunning and user-friendly web applications. I specialize in
              building responsive and interactive interfaces that provide
              seamless user experiences across devices.
            </p>
            <br />
            <div className="flex w-[90%] items-center justify-end">
              <Suspense
                fallback={
                  <button className="w-[30%] rounded-[18px] border border-purple-600 bg-slate-200 px-8 py-4 text-2xl text-black">
                    Resume
                  </button>
                }
              >
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

          <div className="hidden h-[60%] w-[28%] justify-evenly lg:flex md:flex-col translate-y-[-5vh]">
            <ProfileCard
              name=""
              title="Frontend Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/MyPic.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;