import { useState, useEffect } from "react";
import { scrollToTarget } from "../hooks/useLenis";

const NAV_ITEMS = [
  { label: "Cases", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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
    <header className="fixed left-0 right-0 top-5 sm:top-6 z-50 flex w-full justify-center px-4 font-sans-swiss select-none">
      {/* Top Floating Pill Bar Matching Redis Agency */}
      <div
        className={`flex items-center gap-5 sm:gap-8 rounded-full border px-5 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 ${
          isFloating
            ? "border-white/20 bg-black/90 backdrop-blur-md"
            : "border-white/15 bg-black/75 backdrop-blur-sm"
        }`}
      >
        {/* Brand / Logo in Editorial Serif */}
        <button
          onClick={() => scrollToTarget(0)}
          className="font-editorial text-sm sm:text-base font-medium tracking-tight text-white hover:text-white/80 transition-colors"
        >
          Byanam®
        </button>

        <span className="h-3 w-px bg-white/20" />

        {/* Navigation Items */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-normal text-white/70">
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

        {/* Get In Touch Pill Button */}
        <button
          onClick={onOpenContact}
          className="rounded-full bg-white px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-normal text-black transition-all duration-200 hover:bg-white/90 hover:scale-105"
        >
          Get in touch
        </button>
      </div>
    </header>
  );
}
