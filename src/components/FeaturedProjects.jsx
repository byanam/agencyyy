import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    year: "2025",
    client: "Nest Studio",
    title: "High-impact neo-brutalist landing page with bespoke tactile physics",
    image: "/whycreatives-brand.webp",
    tags: ["Interactive Web", "Landing Page"],
    href: "https://byanam.github.io/nest/",
    stage: {
      tone: "light",
      phrases: [
        { words: ["Tactile", "physics"], color: "#4F46E5" },
        { words: ["Fluid", "scroll"], color: "#DB2777" },
        { words: ["Neo-brutalist", "UI"], color: "#EA580C" },
        { words: ["Awwwards", "grade"], color: "#111111" },
      ],
    },
  },
  {
    id: 2,
    year: "2025",
    client: "PlayStation Store UI",
    title: "Next-generation game storefront UI with interactive 3D carousels & cart",
    image: "/whycreatives-app.webp",
    tags: ["Web App", "Storefront UI"],
    href: "https://byanam.github.io/PlayStation-Store-UI/",
    stage: {
      tone: "dark",
      phrases: [
        { words: ["Interactive", "3D"], color: "#67E8F9" },
        { words: ["Dynamic", "cart"], color: "#BEF264" },
        { words: ["Web", "Audio"], color: "#F9A8D4" },
        { words: ["Next-gen", "UI"], color: "#FFFFFF" },
      ],
    },
  },
  {
    id: 3,
    year: "2024",
    client: "Notes 101 Web App",
    title: "Full-stack note-taking platform built with an IDE & Photoshop aesthetic",
    image: "/whycreatives-ugc.webp",
    tags: ["Web App", "Firebase"],
    href: "https://notes--101.web.app",
    stage: {
      tone: "accent",
      phrases: [
        { words: ["IDE", "design"], color: "#141414" },
        { words: ["Realtime", "sync"], color: "#3B1002" },
        { words: ["Clean", "architecture"], color: "#0C2E22" },
        { words: ["Bespoke", "tools"], color: "#141414" },
      ],
    },
  },
];

const ease = [0.16, 1, 0.3, 1];
const springConfig = { stiffness: 420, damping: 26 };

function ProjectCard({ project, index, column, className = "", style }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    setHasFinePointer(mq.matches);
    const handler = (e) => setHasFinePointer(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (!hasFinePointer) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      smoothX.jump(x);
      smoothY.jump(y);
    }
  };

  const initialX = column === "right" ? 40 : -40;

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
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* ── Outer 3D Folder Canvas (Compact Size) ── */}
        <div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={hasFinePointer ? handleMouseMove : undefined}
          onMouseLeave={() => setIsHovered(false)}
          className="relative mb-5 aspect-[16/11] w-full max-w-[440px] select-none pt-3 lg:cursor-none"
          style={{ perspective: 1200 }}
        >
          {/* 1. BACK FOLDER BASE (MacBook Folder Silhouette with Tab) */}
          <div className="absolute inset-0 z-0 overflow-hidden drop-shadow-xl">
            <svg
              viewBox="0 0 500 375"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id={`folderBackGrad-${project.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e4a7a" />
                  <stop offset="50%" stopColor="#13365c" />
                  <stop offset="100%" stopColor="#0d2440" />
                </linearGradient>
                <linearGradient id={`folderHighlight-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                  <stop offset="35%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </linearGradient>
              </defs>
              {/* Back folder body + top-left tab */}
              <path
                d="M 12 36 C 12 18, 22 14, 38 14 L 176 14 C 190 14, 198 22, 208 32 L 222 46 C 232 56, 244 60, 260 60 L 468 60 C 484 60, 496 72, 496 88 L 496 352 C 496 366, 484 374, 468 374 L 28 374 C 14 374, 4 366, 4 352 L 4 52 C 4 42, 6 36, 12 36 Z"
                fill={`url(#folderBackGrad-${project.id})`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
              />
              {/* Top rim highlight line */}
              <path
                d="M 38 15 L 176 15 C 190 15, 198 23, 208 33 L 222 47 C 232 57, 244 61, 260 61 L 468 61"
                fill="none"
                stroke={`url(#folderHighlight-${project.id})`}
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 2. THE IMAGE (Clean Project Screenshot that pops out on hover) */}
          <motion.div
            className="absolute inset-x-4 sm:inset-x-6 bottom-4 top-5 z-10 overflow-hidden rounded-xl bg-black border border-white/20 shadow-2xl transition-shadow"
            initial={false}
            animate={
              isHovered
                ? {
                    y: -46,
                    scale: 1.03,
                    rotate: -1,
                    boxShadow: "0 28px 50px -12px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.25)",
                  }
                : {
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    boxShadow: "0 14px 25px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15)",
                  }
            }
            transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* 3. FRONT FOLDER FLAP (Hinges open forward in 3D on hover) */}
          <div
            className="absolute inset-x-0 bottom-0 top-[32%] z-20 pointer-events-none"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative h-full w-full drop-shadow-2xl"
              style={{
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={isHovered ? { rotateX: -26 } : { rotateX: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <svg
                viewBox="0 0 500 255"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id={`frontFlapGrad-${project.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="35%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#172554" />
                  </linearGradient>
                  <linearGradient id={`frontRimHighlight-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
                  </linearGradient>
                </defs>
                {/* Front flap body with scooped top pocket rim */}
                <path
                  d="M 4 24 C 4 12, 14 6, 28 6 L 190 6 C 206 6, 216 16, 230 20 C 242 22, 258 22, 270 20 C 284 16, 294 6, 310 6 L 472 6 C 486 6, 496 12, 496 24 L 496 235 C 496 248, 484 255, 468 255 L 28 255 C 14 255, 4 248, 4 235 Z"
                  fill={`url(#frontFlapGrad-${project.id})`}
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.5"
                />
                {/* Top rim glowing edge */}
                <path
                  d="M 28 7 L 190 7 C 206 7, 216 17, 230 21 C 242 23, 258 23, 270 21 C 284 17, 294 7, 310 7 L 472 7"
                  fill="none"
                  stroke={`url(#frontRimHighlight-${project.id})`}
                  strokeWidth="2.5"
                />
              </svg>

              {/* Front Flap Bottom Info Bar (Clean without extra icons) */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3.5 sm:p-5 text-white">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white/95">
                  {project.client}
                </span>
                <span className="rounded-full bg-black/30 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-widest text-sky-200 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 4. CURSOR FOLLOWER */}
          {hasFinePointer && isHovered && (
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 },
              }}
              className="pointer-events-none absolute left-0 top-0 z-40 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Title underneath the folder */}
        <div className="flex w-full max-w-[440px] items-center justify-between gap-3 px-1">
          <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-muted-foreground sm:text-lg">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs font-semibold text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">
            Open ↗
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      aria-labelledby="featured-projects-heading"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] text-foreground sm:px-6 md:px-8 lg:px-12"
      style={{
        paddingTop: "clamp(64px, 8vw, 132px)",
        paddingBottom: "clamp(64px, 8vw, 132px)",
      }}
    >
      {/* Centered container with perfectly equal margins on both left and right */}
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Editorial 2-column grid */}
        <div className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-28 xl:gap-x-24">
          {/* Header Block: Placed in Column 2, Row 1 on desktop */}
          <div className="flex flex-col items-center text-center lg:col-start-2 lg:row-start-1 lg:items-start lg:text-left">
            <div className="w-full max-w-[440px]">
              <motion.div
                className="mb-4 flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:justify-start"
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
                    fontSize: "clamp(2.1rem, 3.8vw, 4.2rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    fontWeight: 600,
                  }}
                >
                  <span className="block overflow-hidden" style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
                    <motion.span
                      className="inline-block"
                      initial={{ y: "118%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease }}
                    >
                      Design in the
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                    <motion.span
                      className="inline-block"
                      initial={{ y: "118%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease, delay: 0.09 }}
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
                Bespoke web experiences, interactive landing pages, and web apps — engineered with obsessive attention to fluid motion, tactile feedback, and clean code.
              </motion.p>
            </div>
          </div>

          {/* Project 0: Column 1, Row 1 & 2 */}
          <ProjectCard
            project={PROJECTS[0]}
            index={0}
            column="left"
            className="flex flex-col items-center lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:items-end"
          />

          {/* Project 1: Column 2, Row 2 (staggered down with top margin) */}
          <ProjectCard
            project={PROJECTS[1]}
            index={1}
            column="right"
            className="flex flex-col items-center lg:col-start-2 lg:row-start-2 lg:items-start lg:mt-[clamp(80px,10vw,160px)]"
          />

          {/* Project 2: Column 1, Row 3 */}
          <ProjectCard
            project={PROJECTS[2]}
            index={2}
            column="left"
            className="flex flex-col items-center lg:col-start-1 lg:row-start-3 lg:items-end"
          />
        </div>
      </div>
    </section>
  );
}
