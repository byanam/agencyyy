import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    year: "2024",
    client: "WhyCreatives Branding",
    title: "Minimalist brand identity, positioning & creative direction",
    image: "/whycreatives-brand.webp",
    tags: ["Branding", "Strategy"],
    href: "#work",
    stage: {
      tone: "light",
      phrases: [
        { words: ["Brand", "identity"], color: "#4F46E5" },
        { words: ["Clear", "positioning"], color: "#DB2777" },
        { words: ["Creative", "direction"], color: "#EA580C" },
        { words: ["One", "clear", "voice"], color: "#111111" },
      ],
    },
  },
  {
    id: 2,
    year: "2024",
    client: "Web, Apps & Search",
    title: "Custom web & mobile apps, built to be found",
    image: "/whycreatives-app.webp",
    tags: ["Web", "Apps", "SEO"],
    href: "#services",
    stage: {
      tone: "dark",
      phrases: [
        { words: ["Web", "and", "apps"], color: "#67E8F9" },
        { words: ["Built", "to", "rank"], color: "#BEF264" },
        { words: ["Grows", "with", "you"], color: "#F9A8D4" },
        { words: ["Secure", "by", "design"], color: "#FFFFFF" },
      ],
    },
  },
  {
    id: 3,
    year: "2024",
    client: "WhyCreatives UGC",
    title: "UGC reels, viral scriptwriting & creator marketing",
    image: "/whycreatives-ugc.webp",
    tags: ["UGC Reels", "Social"],
    href: "#work",
    stage: {
      tone: "accent",
      phrases: [
        { words: ["UGC", "reels"], color: "#141414" },
        { words: ["Hooks", "that", "hold"], color: "#3B1002" },
        { words: ["Real", "product", "stories"], color: "#0C2E22" },
        { words: ["Made", "to", "convert"], color: "#141414" },
      ],
    },
  },
];

const ease = [0.16, 1, 0.3, 1];
const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
const STAGE_INTERVAL = 1350;
const ACCENT_COLOR = "#FF6B42";

const dt = (num) => Math.round(num * 100) / 100;
const arc = (rad, sweep, x, y) => `A ${dt(rad)} ${dt(rad)} 0 0 ${sweep} ${dt(x)} ${dt(y)}`;

function buildNotchedPath(width, height, topRight, bottomLeft, cornerRadius, innerRadius) {
  return [
    `M ${dt(cornerRadius)} 0`,
    `H ${dt(width - topRight.w - innerRadius)}`,
    arc(innerRadius, 1, width - topRight.w, innerRadius),
    `V ${dt(topRight.h - innerRadius)}`,
    arc(innerRadius, 0, width - topRight.w + innerRadius, topRight.h),
    `H ${dt(width - innerRadius)}`,
    arc(innerRadius, 1, width, topRight.h + innerRadius),
    `V ${dt(height - cornerRadius)}`,
    arc(cornerRadius, 1, width - cornerRadius, height),
    `H ${dt(bottomLeft.w + innerRadius)}`,
    arc(innerRadius, 1, bottomLeft.w, height - innerRadius),
    `V ${dt(height - bottomLeft.h + innerRadius)}`,
    arc(innerRadius, 0, bottomLeft.w - innerRadius, height - bottomLeft.h),
    `H ${dt(innerRadius)}`,
    arc(innerRadius, 1, 0, height - bottomLeft.h - innerRadius),
    `V ${dt(cornerRadius)}`,
    arc(cornerRadius, 1, cornerRadius, 0),
    "Z",
  ].join(" ");
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

function NotchedFrame({
  tags,
  meta,
  children,
  overlay,
  className = "",
  radiusClassName = "rounded-2xl md:rounded-[28px]",
  surfaceClassName = "bg-secondary",
  tagsClassName = "gap-2",
  tagsPaddedClassName = "pb-4 pl-5",
  metaClassName = "gap-2",
  metaPaddedClassName = "pr-5 pt-4",
  shadowClassName = "",
  bezelWidth = 0,
  bezelColor = "#141414",
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  frameRef,
}) {
  const localRef = useRef(null);
  const frame = frameRef ?? localRef;
  const tagsRef = useRef(null);
  const metaRef = useRef(null);
  const [clipPath, setClipPath] = useState(null);
  const [size, setSize] = useState(null);

  const calculatePath = useCallback(() => {
    const el = frame.current;
    const tEl = tagsRef.current;
    const mEl = metaRef.current;
    if (!el || !tEl || !mEl) return;
    const W = el.clientWidth;
    const H = el.clientHeight;
    const tRect = { w: tEl.offsetWidth, h: tEl.offsetHeight };
    const mRect = { w: mEl.offsetWidth, h: mEl.offsetHeight };
    const radius = parseFloat(window.getComputedStyle(el).borderTopLeftRadius) || 16;
    
    setSize((prev) => (prev?.w === W && prev?.h === H ? prev : { w: W, h: H }));
    
    if (W < 2 || H < 2 || tRect.w < 2 || tRect.h < 2 || mRect.w < 2 || mRect.h < 2) {
      setClipPath((prev) => (prev === null ? prev : null));
      return;
    }
    const innerRadius = Math.max(4, Math.min(radius, 24, tRect.w / 2, tRect.h / 2, mRect.w / 2, mRect.h / 2));
    if (
      !(
        tRect.w + innerRadius + radius <= W &&
        mRect.w + innerRadius + radius <= W &&
        tRect.h + innerRadius + radius <= H &&
        mRect.h + innerRadius + radius <= H &&
        tRect.h + mRect.h + 2 * innerRadius < H
      )
    ) {
      setClipPath((prev) => (prev === null ? prev : null));
      return;
    }
    const newPath = buildNotchedPath(W, H, tRect, mRect, radius, innerRadius);
    setClipPath((prev) => (prev === newPath ? prev : newPath));
  }, [frame]);

  useLayoutEffect(() => {
    calculatePath();
    const el = frame.current;
    const tEl = tagsRef.current;
    const mEl = metaRef.current;
    if (!el || !tEl || !mEl) return;
    const ro = new ResizeObserver(() => calculatePath());
    ro.observe(el);
    ro.observe(tEl);
    ro.observe(mEl);
    return () => ro.disconnect();
  }, [calculatePath, frame]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) calculatePath();
    });
    return () => {
      active = false;
    };
  }, [calculatePath]);

  return (
    <div
      ref={frame}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative w-full ${radiusClassName} ${className}`}
    >
      {/* Top right tags */}
      <div
        ref={tagsRef}
        className={`absolute right-0 top-0 z-20 flex items-center ${tagsClassName} ${
          clipPath ? tagsPaddedClassName : "rounded-bl-2xl bg-background/95 p-3"
        }`}
      >
        {tags}
      </div>

      {/* Bottom left meta */}
      <div
        ref={metaRef}
        className={`absolute bottom-0 left-0 z-20 flex items-center ${metaClassName} ${
          clipPath ? metaPaddedClassName : "rounded-tr-2xl bg-background/95 p-3"
        }`}
      >
        {meta}
      </div>

      {/* Drop Shadow Wrapper */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-[filter] duration-500 ease-out ${shadowClassName}`}
      >
        <div
          className={`h-full w-full ${radiusClassName} ${surfaceClassName}`}
          style={{
            clipPath: clipPath ? `path("${clipPath}")` : undefined,
            WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
          }}
        />
      </div>

      {/* Main Content with Clip Path */}
      <div className="absolute inset-0">
        <div
          className={`relative h-full w-full overflow-hidden ${radiusClassName} ${surfaceClassName}`}
          style={{
            clipPath: clipPath ? `path("${clipPath}")` : undefined,
            WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
            boxShadow: bezelWidth && !clipPath ? `inset 0 0 0 ${bezelWidth}px ${bezelColor}` : undefined,
          }}
        >
          {children}
          {bezelWidth > 0 && clipPath && size && (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w} ${size.h}`}
            >
              <path
                d={clipPath}
                fill="none"
                stroke={bezelColor}
                strokeWidth={bezelWidth * 2}
              />
            </svg>
          )}
        </div>
      </div>

      {overlay}
    </div>
  );
}

function TypographicStage({ phrases, tone, seed = 0 }) {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(seed % phrases.length);
  const [isInView, setIsInView] = useState(false);
  const isMd = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || phrases.length < 2) return;
    let timer;
    const timeout = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % phrases.length);
      }, STAGE_INTERVAL);
    }, (seed % 4) * 340);

    return () => {
      window.clearTimeout(timeout);
      if (timer) window.clearInterval(timer);
    };
  }, [isInView, phrases.length, seed]);

  const currentPhrase = phrases[activeIdx];
  const bgColor =
    tone === "light" ? "#f1f1ef" : tone === "accent" ? ACCENT_COLOR : "#151515";
  const blurIn = isMd ? 14 : 0;
  const blurOut = isMd ? 12 : 0;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 select-none"
      style={{ backgroundColor: bgColor }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIdx}
          className="relative max-w-[9ch] text-balance text-center"
          style={{
            color: currentPhrase.color,
            fontSize: "clamp(2.75rem, 9vw, 7rem)",
            lineHeight: 0.86,
            letterSpacing: "-0.055em",
            fontWeight: 800,
          }}
          initial="hidden"
          animate="show"
          exit="out"
          variants={{
            show: { transition: { staggerChildren: 0.055 } },
            out: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
          }}
        >
          {currentPhrase.words.map((word, wordIdx) => (
            <motion.span
              key={`${word}-${wordIdx}`}
              className="mr-[0.28em] inline-block last:mr-0"
              variants={{
                hidden: { opacity: 0, y: "0.32em", filter: `blur(${blurIn}px)` },
                show: {
                  opacity: 1,
                  y: "0em",
                  filter: "blur(0px)",
                  transition: { duration: 0.36, ease },
                },
                out: {
                  opacity: 0,
                  y: "-0.24em",
                  filter: `blur(${blurOut}px)`,
                  transition: { duration: 0.2, ease },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </AnimatePresence>

      {/* Pill indicator bars at bottom */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
        {phrases.map((phrase, idx) => (
          <span
            key={phrase.words.join("-")}
            className="h-[3px] w-4 rounded-full transition-colors duration-200 sm:w-5"
            style={{
              backgroundColor:
                idx === activeIdx
                  ? currentPhrase.color
                  : tone === "light" || tone === "accent"
                  ? "rgba(0,0,0,0.22)"
                  : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>
      <span className="sr-only">
        {phrases.map((p) => p.words.join(" ")).join(". ")}
      </span>
    </div>
  );
}

function ProjectCard({ project, index, className = "", style, column }) {
  const isLg = useMediaQuery("(min-width: 1024px)");
  const initialX = isLg && column ? (column === "right" ? 40 : -40) : 0;
  const hasFinePointer = useMediaQuery("(pointer: fine) and (min-width: 1024px)");
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const getRelativePos = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseMove = (e) => {
    const pos = getRelativePos(e);
    if (pos) {
      mouseX.set(pos.x);
      mouseY.set(pos.y);
    }
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (!hasFinePointer) return;
    const pos = getRelativePos(e);
    if (pos) {
      mouseX.set(pos.x);
      mouseY.set(pos.y);
      smoothX.jump(pos.x);
      smoothY.jump(pos.y);
    }
  };

  const bezelColor = project.stage?.tone === "dark" ? "#3a3a3a" : "#141414";

  return (
    <motion.article
      className={className}
      style={style}
      initial={{ opacity: 0, y: 36, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        opacity: { duration: 0.5, ease },
        x: { duration: 0.85, ease },
        y: { duration: 0.85, ease },
      }}
    >
      <a href={project.href} className="group block">
        <NotchedFrame
          frameRef={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={hasFinePointer ? handleMouseMove : undefined}
          onMouseLeave={() => setIsHovered(false)}
          className="mb-5 aspect-[4/3] lg:cursor-none"
          radiusClassName="rounded-2xl md:rounded-3xl"
          shadowClassName="[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.06))_drop-shadow(0_18px_36px_rgba(0,0,0,0.13))] group-hover:[filter:drop-shadow(0_3px_6px_rgba(0,0,0,0.08))_drop-shadow(0_30px_56px_rgba(0,0,0,0.2))] dark:[filter:drop-shadow(0_2px_5px_rgba(0,0,0,0.5))_drop-shadow(0_22px_44px_rgba(0,0,0,0.65))] dark:group-hover:[filter:drop-shadow(0_3px_8px_rgba(0,0,0,0.6))_drop-shadow(0_34px_64px_rgba(0,0,0,0.8))]"
          bezelWidth={8}
          bezelColor={bezelColor}
          tagsClassName="gap-2.5"
          tagsPaddedClassName="pb-5 pl-6"
          metaClassName="gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
          metaPaddedClassName="pr-6 pt-5"
          tags={project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tag}
              animate={isHovered ? { y: 5, opacity: 1, scale: 1.04 } : { y: 0, opacity: 0.82, scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 26, delay: isHovered ? tagIdx * 0.05 : 0 }}
              className="whitespace-nowrap rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background"
            >
              {tag}
            </motion.span>
          ))}
          meta={
            <>
              <span>{project.year}</span>
              <span aria-hidden="true">•</span>
              <span className="whitespace-nowrap">{project.client}</span>
            </>
          }
          overlay={
            <AnimatePresence>
              {hasFinePointer && isHovered && (
                <motion.div
                  style={{ x: smoothX, y: smoothY }}
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 } }}
                  exit={{ scale: 0.2, opacity: 0, transition: { duration: 0.35, ease } }}
                  className="pointer-events-none absolute left-0 top-0 z-30 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_35px_rgba(0,0,0,0.28)]"
                >
                  <motion.span
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.3, ease, delay: 0.08 } }}
                    exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.15, ease } }}
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          }
        >
          {project.stage ? (
            <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
              <TypographicStage tone={project.stage.tone} phrases={project.stage.phrases} seed={index} />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full grayscale contrast-110 object-cover transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:contrast-125 motion-reduce:transform-none"
            />
          )}

          {/* Bottom gradient on hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

          {/* Bottom right "View project ↗" */}
          <div className="pointer-events-none absolute bottom-6 right-6 overflow-hidden">
            <span className="flex translate-y-full items-center gap-2 text-sm font-bold text-white transition-transform duration-[550ms] ease-out group-hover:translate-y-0 motion-reduce:transform-none">
              View project
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </div>
        </NotchedFrame>

        {/* Title underneath the card */}
        <h3
          className="text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
          style={{
            fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            fontWeight: 700,
          }}
        >
          {project.title}
        </h3>
      </a>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      aria-labelledby="featured-projects-heading"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] text-foreground md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(64px, 8vw, 132px)",
        paddingBottom: "clamp(64px, 8vw, 132px)",
      }}
    >
      <div className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-32">
        {/* Header Block: In Column 2, Row 1 on desktop */}
        <div className="lg:col-start-2 lg:row-start-1">
          <motion.div
            className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            Selected work
          </motion.div>

          <a href="#work" className="group inline-block">
            <h2
              id="featured-projects-heading"
              className="text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 4.5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              <span className="block overflow-hidden lg:whitespace-nowrap">
                <motion.span
                  className="inline-block"
                  initial={{ y: "118%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease, delay: 0.08 }}
                >
                  Design in the
                </motion.span>
              </span>
              <span className="block overflow-hidden lg:whitespace-nowrap">
                <motion.span
                  className="inline-block"
                  initial={{ y: "118%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease, delay: 0.17 }}
                >
                  real world ↗
                </motion.span>
              </span>
            </h2>
          </a>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            Brand, video, web and apps handled by one team — built so the work scales up as your business does, instead of being rebuilt.
          </motion.p>
        </div>

        {/* Project 0: Column 1, Row 1 & 2 */}
        <ProjectCard
          project={PROJECTS[0]}
          index={0}
          column="left"
          className="lg:col-start-1 lg:row-start-1 lg:row-span-2"
        />

        {/* Project 1: Column 2, Row 2 (offset down with exact formula from WhyCreatives) */}
        <ProjectCard
          project={PROJECTS[1]}
          index={1}
          column="right"
          className="lg:col-start-2 lg:row-start-2"
          style={{
            marginTop: "calc(0.1875 * (100vw - 2 * clamp(32px, 6vw, 160px) - 56px))",
          }}
        />

        {/* Project 2: Column 1, Row 3 */}
        <ProjectCard
          project={PROJECTS[2]}
          index={2}
          column="left"
          className="lg:col-start-1 lg:row-start-3"
        />
      </div>
    </section>
  );
}
