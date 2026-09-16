import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToTarget } from "../hooks/useLenis";

const NAV_LINKS = [
  { label: "Cases", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Ask AI", href: "#faq" },
];

export default function Navbar({ onOpenContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [activeHref, setActiveHref] = useState("#work");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsFloating(y > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((href) => {
    setMenuOpen(false);
    setActiveHref(href);
    scrollToTarget(href);
  }, []);

  return (
    <>
      <header
        data-floating={isFloating ? "true" : "false"}
        className="fixed left-0 right-0 top-0 z-[60] flex w-full justify-center px-3 font-['Schibsted_Grotesk',sans-serif] sm:px-5"
        style={{
          transform: `translate3d(0, ${isFloating ? "12px" : "0px"}, 0)`,
          transition: "transform 480ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        <div
          className={`w-full mx-auto flex items-center justify-between border ${
            isFloating
              ? "max-w-[1140px] rounded-full border-black/[0.08] bg-[#f4f4f1]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#121314]/90 dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              : "max-w-full rounded-none border-transparent bg-transparent shadow-none"
          }`}
          style={{
            transition:
              "max-width 480ms cubic-bezier(0.16,1,0.3,1), padding 480ms cubic-bezier(0.16,1,0.3,1), border-radius 380ms ease, background-color 380ms ease, border-color 380ms ease, box-shadow 380ms ease",
            paddingTop: isFloating ? 10 : 22,
            paddingBottom: isFloating ? 10 : 22,
            paddingLeft: isFloating ? 24 : "clamp(18px, 3.2vw, 64px)",
            paddingRight: isFloating ? 24 : "clamp(18px, 3.2vw, 64px)",
          }}
        >
          {/* Left: Navigation links (Editorial Redis Agency style) */}
          <nav
            className="hidden md:flex flex-1 items-center justify-start gap-8 text-[13px] font-semibold text-black/75 transition-colors duration-300 dark:text-white/75"
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
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left rounded-full bg-current transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Center: Brand Monogram / Logo */}
          <div className="flex shrink-0 items-center justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(0);
              }}
              className="group flex items-center gap-2 select-none"
              aria-label="byanam home"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-black transition-colors duration-300 dark:text-white">
                byanam
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </a>
          </div>

          {/* Right: Actions (Redis "Get in touch" button + Mobile burger) */}
          <div className="flex flex-1 items-center justify-end gap-3 min-w-0">
            {/* Direct Get in touch CTA */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex shrink-0 select-none items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2 text-[12px] sm:text-[13px] font-bold leading-none text-background transition hover:opacity-90 shadow-sm"
            >
              <span>Get in touch</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[60] flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-4.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0e0f10] px-6 pb-10 pt-28 font-['Schibsted_Grotesk',sans-serif] text-white md:hidden"
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
                    className="text-left text-2xl font-bold text-white transition-opacity hover:opacity-60 sm:text-3xl"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenContact();
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-bold text-black shadow-lg"
              >
                Get in touch ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
