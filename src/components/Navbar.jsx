import { useState, useEffect } from "react";
import { scrollToTarget } from "../hooks/useLenis";

const NAV_ITEMS = [
  { label: "WORKS", href: "#work" },
  { label: "PROCESS", href: "#process" },
  { label: "SERVICES", href: "#services" },
];

export default function Navbar({ onOpenContact }) {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsFloating(y > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-6 z-50 flex w-full justify-center px-4 font-space select-none">
      {/* Top Floating Pill Bar Matching Prototype & Redis Agency */}
      <div
        className={`flex items-center gap-6 sm:gap-8 rounded-full border px-5 py-2 sm:px-7 sm:py-2.5 transition-all duration-300 ${
          isFloating
            ? "border-white/20 bg-[#101112]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "border-white/15 bg-[#141517]/75 backdrop-blur-sm shadow-lg"
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToTarget(0)}
          className="font-syne text-xs sm:text-sm font-black tracking-widest text-white hover:text-white/80 transition-colors"
        >
          BYANAM
        </button>

        <span className="h-3 w-px bg-white/20" />

        {/* Section Links */}
        <nav className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold tracking-wider text-white/70">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToTarget(item.href)}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <span className="h-3 w-px bg-white/20" />

        {/* Contact Action */}
        <button
          onClick={onOpenContact}
          className="rounded-full bg-white px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-black transition-transform hover:scale-105 active:scale-95"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
