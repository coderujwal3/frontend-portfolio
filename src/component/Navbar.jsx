import React, { Suspense, lazy } from "react";

const CircularText = lazy(() => import("./CircularText"));

const Navbar = () => {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-4">
      <div className="relative h-20 flex items-center justify-center">
        <img
          src="/MyPic.jpeg"
          alt="hero-img"
          height="80"
          width="80"
          className="rounded-full absolute object-cover aspect-square object-top border-purple-600 border-2"
        />
        <Suspense
          fallback={
            <div className="h-20 w-20 rounded-full border border-purple-600/50 bg-slate-200/70" />
          }
        >
          <CircularText
            text="UJWAL*SINGH*"
            onHover="speedUp"
            spinDuration={15}
            className="custom-class"
          />
        </Suspense>
      </div>
      <div className="text-lg font-semibold w-[50%]">
        <ul className="flex items-start justify-evenly gap-3">
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
