import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastY = window.scrollY;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      setIsFloating(y > 12);
      if (y < 96) {
        setIsHidden(false);
      } else if (delta > 6) {
        setIsHidden(true);
      } else if (delta < -6) {
        setIsHidden(false);
      }
      lastY = y;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const hidden = isHidden && !menuOpen;

  const scrollTo = useCallback((href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <header
        data-floating={isFloating ? "true" : "false"}
        className="fixed left-0 right-0 top-0 z-[60] px-3 font-['Schibsted_Grotesk',sans-serif] sm:px-4"
        style={{
          transform: `translate3d(0, ${hidden ? "-135%" : isFloating ? "14px" : "0px"}, 0)`,
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
            paddingLeft: isFloating ? 26 : "clamp(18px, 3.2vw, 80px)",
            paddingRight: isFloating ? 10 : "clamp(18px, 3.2vw, 80px)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="byanam home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
              <span className="text-sm font-bold">A</span>
            </div>
            <span
              className={`text-sm font-semibold tracking-tight transition-all duration-300 ${
                isFloating ? "w-0 overflow-hidden opacity-0" : "opacity-100"
              }`}
            >
              byanam
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative rounded-full px-4 py-2 text-[13px] font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            {/* CTA */}
            <a
              href="mailto:anamrazzaque.work@gmail.com"
              className={`ml-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background transition-all duration-200 hover:opacity-90 ${
                isFloating ? "" : "border border-foreground/10"
              }`}
            >
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-4 w-5">
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-foreground transition-all duration-300"
                style={{
                  top: menuOpen ? "50%" : "20%",
                  transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-foreground transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-foreground transition-all duration-300"
                style={{
                  bottom: menuOpen ? "50%" : "20%",
                  top: menuOpen ? "50%" : "auto",
                  transform: menuOpen ? "translateY(-50%) rotate(-45deg)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-xl md:hidden"
            style={{ paddingTop: 100 }}
          >
            <nav className="flex flex-col items-center gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full rounded-2xl py-4 text-center text-2xl font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4, ease }}
                className="mt-4 flex items-center gap-4"
              >
                <button
                  onClick={toggleTheme}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
                <a
                  href="mailto:anamrazzaque.work@gmail.com"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background"
                >
                  Let's Talk
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
