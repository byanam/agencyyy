import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [activeHref, setActiveHref] = useState("#services");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsFloating(y > 20);
    };

    // Run once on mount to establish initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = useCallback((href) => {
    setMenuOpen(false);
    setActiveHref(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <header
        data-floating={isFloating ? "true" : "false"}
        className="group/nav fixed left-0 right-0 top-0 z-[60] px-3 font-['Schibsted_Grotesk',sans-serif] sm:px-4"
        style={{
          transform: `translate3d(0, ${isFloating ? "14px" : "0px"}, 0)`,
          transition: "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        <div
          className={`mx-auto flex items-center justify-between border ${
            isFloating
              ? "max-w-[1120px] rounded-full border-black/[0.07] bg-[#f2f2ef] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#1c1d1b] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:bg-[#f2f2ef]/90 sm:backdrop-blur-md sm:dark:bg-[#1c1d1b]/90"
              : "max-w-full rounded-none border-transparent bg-transparent shadow-none"
          }`}
          style={{
            transition:
              "max-width 520ms cubic-bezier(0.16,1,0.3,1), padding 520ms cubic-bezier(0.16,1,0.3,1), border-radius 380ms ease, background-color 380ms ease, border-color 380ms ease, box-shadow 380ms ease",
            paddingTop: isFloating ? 10 : 24,
            paddingBottom: isFloating ? 10 : 24,
            paddingLeft: isFloating ? 24 : "clamp(18px, 3.2vw, 80px)",
            paddingRight: isFloating ? 24 : "clamp(18px, 3.2vw, 80px)",
          }}
        >
          {/* Left: Logo (flex-1 to balance center nav) */}
          <div className="flex flex-1 items-center justify-start min-w-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex shrink-0 items-center gap-2.5 select-none"
              aria-label="WhyCreatives home"
            >
              <img
                src="/logo.png"
                alt="WhyCreatives logo"
                width={36}
                height={36}
                className="h-7 w-7 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none dark:invert md:h-8 md:w-8"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-black transition-colors duration-300 dark:text-white">
                WhyCreatives.
              </span>
            </a>
          </div>

          {/* Center: Desktop nav (centered at the center of the screen) */}
          <nav
            className="hidden lg:flex shrink-0 items-center justify-center gap-10 text-[13px] font-bold text-black/80 transition-colors duration-300 dark:text-white/80"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative py-1 text-inherit transition-colors hover:text-black dark:hover:text-white"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left rounded-full bg-current transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right: Action Cluster (flex-1 to balance center nav) */}
          <div className="flex flex-1 items-center justify-end gap-4 min-w-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {/* Sun icon */}
              <svg
                className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem] transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              {/* Moon icon */}
              <svg
                className="absolute h-5 w-5 md:h-[1.35rem] md:w-[1.35rem] transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Start a project CTA */}
            <button
              onClick={() => scrollTo("#contact")}
              className="group hidden sm:inline-flex shrink-0 select-none items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-[13px] font-bold text-background transition-opacity hover:opacity-85"
            >
              Start a project
              <span className="text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[60] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (exact match to WhyCreatives) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-white px-6 pb-10 pt-28 font-['Schibsted_Grotesk',sans-serif] dark:bg-[#111] lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-2xl font-bold text-black transition-opacity hover:opacity-60 dark:text-white sm:text-3xl"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-black/10 pt-8 dark:border-white/10">
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-bold text-background"
              >
                Start a project ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
