import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";

function CodeIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayoutIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function MonitorIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function ZapIcon({ className, strokeWidth = 2.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
  { label: "Responsive Websites", Icon: GlobeIcon },
  { label: "Web Applications", Icon: CodeIcon },
  { label: "Interactive Landing Pages", Icon: MonitorIcon },
  { label: "UI / UX Design", Icon: LayoutIcon },
  { label: "Speed & Performance", Icon: ZapIcon },
  { label: "Creative Development", Icon: PenToolIcon },
  { label: "SEO & Optimization", Icon: SearchIcon },
  { label: "Mobile-First Design", Icon: SmartphoneIcon },
  { label: "Conversion Optimization", Icon: TrendingUpIcon },
];

const HEADLINE_LINES = [
  "An independent studio",
  "crafting bespoke websites,",
  "interactive digital products &",
  "high-speed web experiences.",
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
              className="group inline-flex select-none items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold leading-none text-black transition-all duration-300 ease-out hover:opacity-85 active:scale-[0.98] motion-reduce:transform-none"
            >
              <span>About byanam</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-black/20 motion-reduce:transform-none">
                <AnimatedArrow className="h-3.5 w-3.5 text-black" />
              </span>
            </a>

            {/* Button 2: Outlined Pill with diagonal arrow */}
            <a
              href="#contact"
              className="group inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold leading-none text-white transition-all duration-300 ease-out hover:border-white hover:bg-white hover:text-black active:scale-[0.98] motion-reduce:transform-none"
            >
              <span>Start a project</span>
              <AnimatedArrow className="h-3.5 w-3.5" />
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
