import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";

// Lucide SVG Icons matching WhyCreatives reference
function ClapperboardIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

function SparklesIcon({ className, strokeWidth = 2.25 }) {
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

function PaletteIcon({ className, strokeWidth = 2.25 }) {
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

function FilmIcon({ className, strokeWidth = 2.25 }) {
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

function GlobeIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function SmartphoneIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function PenToolIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function TrendingUpIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function SearchIcon({ className, strokeWidth = 2.25 }) {
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

const HEADLINE_LINES = [
  "An independent studio",
  "in India crafting video, motion",
  "design, websites, apps and",
  "brands built to grow.",
];

const ease = [0.16, 1, 0.3, 1];

export default function AboutStrip() {
  const marqueeRef = useRef(null);
  const headlineRef = useRef(null);
  const lineSpansRef = useRef([]);
  const [padLeftEm, setPadLeftEm] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Measure the difference between Line 1 and the longest line to align Line 1's right edge
  // WITHOUT any w-full or stretching that would push the container off-center!
  const calculateRightEdgeAlignment = useCallback(() => {
    const root = headlineRef.current;
    const spans = lineSpansRef.current.filter(Boolean);
    if (!root || spans.length < 2) return;
    const fontSize = parseFloat(window.getComputedStyle(root).fontSize);
    if (!fontSize) return;
    const widths = spans.map((s) => s.getBoundingClientRect().width);
    const maxWidth = Math.max(...widths);
    // Line 0 is "An independent studio"
    const diff = Math.max(0, (maxWidth - widths[0]) / fontSize);
    setPadLeftEm(diff);
  }, []);

  useLayoutEffect(() => {
    calculateRightEdgeAlignment();
    const root = headlineRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => calculateRightEdgeAlignment());
    ro.observe(root);
    return () => ro.disconnect();
  }, [calculateRightEdgeAlignment]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) calculateRightEdgeAlignment();
    });
    return () => {
      active = false;
    };
  }, [calculateRightEdgeAlignment]);

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
      className="relative w-full overflow-hidden bg-black text-white select-none"
      style={{
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(60px, 8vw, 120px)",
      }}
    >
      {/* ── GUARANTEED DEAD-CENTER WRAPPER (Centers the centerpiece on the entire website) ── */}
      <div className="relative flex w-full justify-center px-4 sm:px-8 md:px-12">
        <motion.div
          className="mx-auto flex flex-col items-start"
          style={{ width: "fit-content", maxWidth: "100%" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Main 4-line Headline in Serif font matching WhyCreatives reference */}
          <h2
            ref={headlineRef}
            className="flex flex-col items-start text-white"
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', Times, Georgia, serif",
              fontSize: "clamp(1.85rem, 4.6vw, 5.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            {/* Line 1: Right edge aligns with Line 2 via dynamic paddingLeft (NEVER w-full) */}
            <div
              style={{
                paddingLeft: padLeftEm > 0 ? `${padLeftEm}em` : undefined,
                width: "fit-content",
              }}
            >
              <span
                ref={(el) => {
                  lineSpansRef.current[0] = el;
                }}
                className="inline-block whitespace-nowrap"
              >
                {HEADLINE_LINES[0]}
              </span>
            </div>

            {/* Line 2: Widest line defining the block width */}
            <div style={{ width: "fit-content" }}>
              <span
                ref={(el) => {
                  lineSpansRef.current[1] = el;
                }}
                className="inline-block whitespace-nowrap"
              >
                {HEADLINE_LINES[1]}
              </span>
            </div>

            {/* Line 3 */}
            <div style={{ width: "fit-content" }}>
              <span
                ref={(el) => {
                  lineSpansRef.current[2] = el;
                }}
                className="inline-block whitespace-nowrap"
              >
                {HEADLINE_LINES[2]}
              </span>
            </div>

            {/* Line 4 */}
            <div style={{ width: "fit-content" }}>
              <span
                ref={(el) => {
                  lineSpansRef.current[3] = el;
                }}
                className="inline-block whitespace-nowrap"
              >
                {HEADLINE_LINES[3]}
              </span>
            </div>
          </h2>

          {/* Action Buttons: Left-aligned with Lines 2, 3, and 4 inside the centered block */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5 md:mt-11 lg:mt-12 font-['Schibsted_Grotesk',sans-serif]">
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
          </div>
        </motion.div>
      </div>

      {/* ── Infinite Services Marquee Strip (Generous breathing room below headline & buttons) ── */}
      <div
        ref={marqueeRef}
        className="w-full pb-8 md:pb-12"
        style={{
          marginTop: "clamp(80px, 10vw, 150px)",
        }}
      >
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
