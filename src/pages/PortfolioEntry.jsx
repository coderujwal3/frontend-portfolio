import React, { useState, useEffect, useRef } from "react";
import ScrollExpand from "../component/ScrollExpand";
import SplitText from "../component/SplitText";
import { ChevronsDown } from "lucide-react";

const PortfolioEntry = () => {
  const [lettersDone, setLettersDone] = useState(false);
  const wrapperRef = useRef(null);

  const handleAnimationComplete = () => {
    setLettersDone(true);
  };

  // smooth scroll helper
  const scrollToId = (id, duration = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + (targetY - startY) * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!lettersDone) return;

    // small lift animation for emphasis
    const el = wrapperRef.current;
    if (el) {
      el.style.transition = "transform 700ms cubic-bezier(0.22,1,0.36,1)";
      el.style.transform = "translateY(-12px)";
      setTimeout(() => {
        if (el) el.style.transform = "";
      }, 400);
    }

    const timer = setTimeout(() => {
      scrollToId("hero-nav", 1000);
    }, 200);

    return () => clearTimeout(timer);
  }, [lettersDone]);

  return (
    <div className="relative min-h-[220vh] w-full overflow-visible bg-linear-to-b from-transparent to-purple-950 z-999">
      <ScrollExpand
        src="/hero.jpg"
        alt=""
        title="Getting Bio..."
        scrollHint="Scroll Inside the Frame"
        mediaZoom={1.35}
        scrollDistance={1}
        holdDistance={0.35}
        smoothing={0.1}
        overlayScrim={0.45}
        enabled
        useWindowScroll
        className="block min-h-screen -z-1"
      >
        <div
          ref={wrapperRef}
          className="h-screen w-full absolute p-6 bg-linear-to-b from-transparent to-gray-800"
        >
          <SplitText
            text={`Welcome, ${window.location.hostname}!!!`}
            className="text-4xl md:text-2xl pt-30 lg:text-6xl flex justify-center items-center font-sans capitalize text-white font-bold"
            delay={150}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
          <div className="absolute inset-0 z-10 h-full w-full min-h-screen flex flex-col justify-center items-center">
            <p className="text-gray-300 text-center mt-4 text-4xl md:text-3xl sm:text-2xl font-semibold capitalize">
              Scroll down to know me
            </p>
            <ChevronsDown className="mx-auto mt-10 h-20 w-20 text-gray-300 animate-bounce" />
          </div>
        </div>
      </ScrollExpand>
    </div>
  );
};

export default PortfolioEntry;
