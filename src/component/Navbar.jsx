import React, { Suspense, lazy, useState } from "react";
import { Menu, X } from "lucide-react";

const CircularText = lazy(() => import("./CircularText"));

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-30 w-full px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 px-3 py-2 backdrop-blur-md shadow-lg shadow-purple-950/70 md:px-5">
        <div className="relative flex items-center justify-center h-15 w-15 md:h-20 md:w-20 z-20 md:border-2 md:border-[#B200ED] rounded-full">
          <img
            src="/MyPic.jpeg"
            alt="hero-img"
            className="absolute aspect-square h-[90%] w-[90%] rounded-full border-3 border-purple-400 object-cover object-top"
          />
          <Suspense
            fallback={
              <div className="h-16 w-16 rounded-full border border-purple-600/50 bg-slate-200/70 md:h-20 md:w-20" />
            }
          >
            <CircularText
              text="UJWAL*SINGH*"
              onHover="speedUp"
              spinDuration={15}
              className="custom-class h-24 w-24 md:h-32.5 md:w-32.5"
            />
          </Suspense>
        </div>

        <div className="hidden flex-1 items-center justify-end md:flex">
          <ul className="flex items-center justify-evenly gap-4 lg:gap-6 text-lg font-semibold text-slate-100">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-all duration-300 hover:text-[#B200ED] hover:text-xl text-lg font-semibold text-purple-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-black transition hover:border-fuchsia-400/60 hover:text-fuchsia-200 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-slate-950/30 md:hidden">
          <ul className="flex flex-col gap-3 font-semibold text-slate-100">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-fuchsia-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
