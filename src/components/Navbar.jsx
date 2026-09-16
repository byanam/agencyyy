import { useState, useEffect } from "react";
import { scrollToTarget } from "../hooks/useLenis";

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
    <header className="fixed left-0 right-0 top-0 z-50 flex w-full justify-between items-center px-4 py-4 sm:px-8 sm:py-6 font-suisse select-none">
      {/* Left Links: Cases, Services */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => scrollToTarget("#cases")}
          className="redis-btn-pill text-xs sm:text-sm py-1.5 px-4 sm:px-5"
        >
          Cases
        </button>
        <button
          onClick={() => scrollToTarget("#services")}
          className="redis-btn-pill text-xs sm:text-sm py-1.5 px-4 sm:px-5"
        >
          Services
        </button>
      </div>

      {/* Center Brand: Internet Sites */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => scrollToTarget(0)}
          className="font-editorial text-lg sm:text-2xl font-normal tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Internet Sites
        </button>
      </div>

      {/* Right Action: Language & Get in touch */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden md:flex items-center gap-1.5 text-xs text-white/60 mr-2">
          <span className="text-white font-medium cursor-pointer">en</span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer transition-colors">ru</span>
        </div>
        <button
          onClick={onOpenContact}
          className="redis-btn-pill text-xs sm:text-sm py-1.5 px-4 sm:px-6"
        >
          Get in touch
        </button>
      </div>
    </header>
  );
}
