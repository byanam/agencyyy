import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const PADDING_BOTTOM = "0.14em";
const TRANSLATE_Y_HIDDEN = "118%";

// Lucide SVG Icons matching WhyCreatives
function ClapperboardIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

function SparklesIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function PaletteIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function FilmIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function GlobeIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function SmartphoneIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function PenToolIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function TrendingUpIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function SearchIcon({ className, strokeWidth = 2 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className, strokeWidth = 2.5 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

// Dual-arrow hover motion icon
function AnimatedArrow({ className = "h-3.5 w-3.5" }) {
  return (
    <span className="relative block h-3.5 w-3.5 overflow-hidden" aria-hidden="true">
      <ArrowUpRightIcon
        className={`absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full ${className}`}
        strokeWidth={2.5}
      />
      <ArrowUpRightIcon
        className={`absolute inset-0 h-full w-full -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 ${className}`}
        strokeWidth={2.5}
      />
    </span>
  );
}

const DESKTOP_LINES = [
  "An independent studio",
  "in India crafting video, motion",
  "design, websites, apps and",
  "brands built to grow.",
];

const MOBILE_FONT_SIZE = "clamp(2rem, 11vw, 4rem)";
const MOBILE_RATIO = 0.55;
const MOBILE_SUB_LINES = [
  "studio in India crafting video,",
  "motion design, websites, apps",
  "and brands built to grow.",
];

const MOBILE_LINES = [
  {
    text: "An independent",
    style: {
      fontSize: MOBILE_FONT_SIZE,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },
  },
  ...MOBILE_SUB_LINES.map((text, idx) => ({
    text,
    style: {
      fontSize: `calc(${MOBILE_FONT_SIZE} * ${MOBILE_RATIO})`,
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: "-0.02em",
      marginTop: idx === 0 ? "0.35em" : undefined,
    },
  })),
];

const SERVICES = [
  { label: "Web Development", Icon: GlobeIcon },
  { label: "App Development", Icon: SmartphoneIcon },
  { label: "Brand Identity", Icon: PenToolIcon },
  { label: "Performance Ads", Icon: TrendingUpIcon },
  { label: "SEO", Icon: SearchIcon },
  { label: "Video Editing", Icon: ClapperboardIcon },
  { label: "Motion Design", Icon: SparklesIcon },
  { label: "Colour Grading", Icon: PaletteIcon },
  { label: "Short-Form Reels", Icon: FilmIcon },
];

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Animated Typography Line Revealer matching WhyCreatives exact indent math
 */
function WordLineReveal({
  lines,
  className,
  style,
  nowrapFromLg = false,
  alignFirstLineRightEdge = false,
  duration = 0.9,
  stagger = 0.09,
  baseDelay = 0.08,
}) {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const normalizedLines = lines.map((l) => (typeof l === "string" ? { text: l } : l));
  const [indentEm, setIndentEm] = useState(0);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    if (!alignFirstLineRightEdge) return;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLg(mediaQuery.matches);
    const handler = (e) => setIsLg(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [alignFirstLineRightEdge]);

  const computeAlignment = useCallback(() => {
    if (!alignFirstLineRightEdge) return;
    const el = containerRef.current;
    const spans = lineRefs.current.slice(0, lines.length);
    if (!el || spans.length !== lines.length || spans.some((s) => !s)) return;
    const fs = parseFloat(window.getComputedStyle(el).fontSize);
    if (!fs) return;
    const widths = spans.map((s) => s.getBoundingClientRect().width);
    const maxWidth = Math.max(...widths);
    setIndentEm(Math.max(0, (maxWidth - widths[0]) / fs));
  }, [alignFirstLineRightEdge, lines.length]);

  useIsomorphicLayoutEffect(() => {
    if (!alignFirstLineRightEdge || !isLg) return;
    computeAlignment();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => computeAlignment());
    ro.observe(el);
    return () => ro.disconnect();
  }, [alignFirstLineRightEdge, isLg, computeAlignment]);

  useEffect(() => {
    if (!alignFirstLineRightEdge || !isLg || typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) computeAlignment();
    });
    return () => {
      active = false;
    };
  }, [alignFirstLineRightEdge, isLg, computeAlignment]);

  const firstLinePadding = alignFirstLineRightEdge && isLg ? `${indentEm}em` : undefined;

  return (
    <motion.span
      ref={containerRef}
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="sr-only">{normalizedLines.map((l) => l.text).join(" ")}</span>
      {normalizedLines.map((line, idx) => (
        <span
          key={line.text}
          aria-hidden="true"
          className={`block overflow-hidden${nowrapFromLg ? " lg:whitespace-nowrap" : ""}${
            line.className ? ` ${line.className}` : ""
          }`}
          style={{
            ...line.style,
            paddingBottom: PADDING_BOTTOM,
            marginBottom: idx === normalizedLines.length - 1 ? 0 : `-${PADDING_BOTTOM}`,
            paddingLeft: idx === 0 ? firstLinePadding : undefined,
          }}
        >
          <motion.span
            ref={(el) => {
              lineRefs.current[idx] = el;
            }}
            className="inline-block"
            variants={{
              hidden: { y: TRANSLATE_Y_HIDDEN },
              show: { y: "0%" },
            }}
            transition={{
              duration,
              ease,
              delay: baseDelay + idx * stagger,
            }}
            style={{ willChange: "transform" }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function AboutStrip() {
  const marqueeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsPlaying(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-black text-white"
      style={{
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(60px, 8vw, 130px)",
      }}
    >
      {/* ── Main Section Container ── */}
      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-20">
        
        {/* Left Badge: "• WHO ARE WE?" (exact match to WhyCreatives screenshot) */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/50 absolute left-8 lg:left-14 top-4 select-none">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
          WHO ARE WE?
        </div>

        {/* ── Centered Composition: Both headline and left-aligned buttons centered as a single unit on the screen ── */}
        <div className="mx-auto flex flex-col items-start w-fit max-w-full">
          {/* Main Headline (Serif typography matching screenshot) */}
          <h2
            className="text-left text-white"
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', Times, Georgia, serif",
              fontWeight: 400,
            }}
          >
            {/* Mobile View */}
            <span className="block md:hidden">
              <WordLineReveal lines={MOBILE_LINES} className="block" />
            </span>

            {/* Desktop View (MD+) with signature right-edge indent on first line */}
            <span
              className="hidden md:block"
              style={{
                fontSize: "clamp(2.4rem, 5.2vw, 5.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              <WordLineReveal
                lines={DESKTOP_LINES}
                className="block"
                nowrapFromLg={true}
                alignFirstLineRightEdge={true}
              />
            </span>
          </h2>

          {/* Action Buttons: Left-aligned with lines 2, 3, and 4 */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3.5 md:mt-10 lg:mt-12 font-['Schibsted_Grotesk',sans-serif]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            {/* Button 1: Solid White Pill with circular arrow badge */}
            <a
              href="#about"
              className="group inline-flex select-none items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[13px] md:text-[13.5px] font-bold leading-none text-black transition-all duration-300 ease-out hover:bg-white/90 active:scale-[0.98]"
            >
              <span>About WhyCreatives</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 ease-out group-hover:scale-105">
                <AnimatedArrow className="h-3 w-3 text-black" />
              </span>
            </a>

            {/* Button 2: Outlined Black Pill with diagonal arrow */}
            <a
              href="#contact"
              className="group inline-flex select-none items-center gap-2 rounded-full border border-white/25 bg-black px-5 py-2.5 text-[13px] md:text-[13.5px] font-medium leading-none text-white transition-all duration-300 ease-out hover:border-white/50 hover:bg-white/5 active:scale-[0.98]"
            >
              <span>Start a project</span>
              <AnimatedArrow className="h-3 w-3 text-white" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Infinite Services Marquee Strip (Serif font + icons matching screenshot) ── */}
      <div ref={marqueeRef} className="mt-16 md:mt-24 lg:mt-32">
        <div
          className="relative flex select-none overflow-hidden py-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
          aria-hidden="true"
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 items-center animate-[marquee-strip_48s_linear_infinite]"
              style={{ animationPlayState: isPlaying ? "running" : "paused" }}
            >
              {SERVICES.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex shrink-0 items-center gap-3 pr-10 text-white/90 sm:gap-4 sm:pr-16 lg:pr-20"
                >
                  <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 text-white/80" strokeWidth={2} />
                  <span
                    className="whitespace-nowrap text-[18px] sm:text-2xl lg:text-[28px] font-normal tracking-[-0.01em] text-white"
                    style={{
                      fontFamily: "'Playfair Display', 'Times New Roman', Times, Georgia, serif",
                    }}
                  >
                    {label}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
