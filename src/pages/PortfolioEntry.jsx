import React from "react";
import ScrollExpand from "../component/ScrollExpand";

const PortfolioEntry = () => {
  return (
    <ScrollExpand
      src="/hero.jpg"
      alt=""
      title="Scroll Me"
      scrollHint=""
      mediaZoom={1.35}
      scrollDistance={1}
      holdDistance={0.35}
      smoothing={0.1}
      overlayScrim={0.45}
      enabled
      useWindowScroll
      className="block min-h-screen"
    >
      <h2 className="text-5xl font-bold text-white shadow-md">
        Welcome, {window.location.hostname}!
      </h2>
    </ScrollExpand>
  );
};

export default PortfolioEntry;