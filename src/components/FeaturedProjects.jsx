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
        className="group block"
      >
        <div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={hasFinePointer ? handleMouseMove : undefined}
          onMouseLeave={() => setIsHovered(false)}
          className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-secondary lg:cursor-none shadow-[0_2px_4px_rgba(0,0,0,0.06),0_18px_36px_rgba(0,0,0,0.13)] transition-shadow duration-500 group-hover:shadow-[0_3px_6px_rgba(0,0,0,0.08),0_30px_56px_rgba(0,0,0,0.2)] dark:shadow-[0_2px_5px_rgba(0,0,0,0.5),0_22px_44px_rgba(0,0,0,0.65)]"
        >
          {/* Top-right tags */}
          <div className="absolute right-0 top-0 z-20 flex items-center gap-2.5 p-4 md:p-6">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                animate={isHovered ? { y: 2, opacity: 1, scale: 1.04 } : { y: 0, opacity: 0.85, scale: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 26, delay: isHovered ? tagIndex * 0.05 : 0 }}
                className="whitespace-nowrap rounded-full bg-foreground px-4 py-1.5 text-xs font-bold text-background"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Bottom-left meta */}
          <div className="absolute bottom-0 left-0 z-20 flex items-center gap-2 p-4 md:p-6 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
            <span>{project.year}</span>
            <span aria-hidden="true">•</span>
            <span className="whitespace-nowrap">{project.client}</span>
          </div>

          {/* Image presentation */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Cursor follower */}
          {hasFinePointer && isHovered && (
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 } }}
              className="pointer-events-none absolute left-0 top-0 z-30 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_35px_rgba(0,0,0,0.28)]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Title underneath the card */}
        <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-muted-foreground sm:text-lg">
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
      {/* Editorial 2-column asymmetric grid */}
      <div className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-32">
        {/* Header Block: Placed in Column 2, Row 1 on desktop */}
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

        {/* Project 0: Column 1, Row 1 & 2 */}
        <ProjectCard
          project={PROJECTS[0]}
          index={0}
          column="left"
          className="lg:col-start-1 lg:row-start-1 lg:row-span-2"
        />

        {/* Project 1: Column 2, Row 2 (staggered down with top margin) */}
        <ProjectCard
          project={PROJECTS[1]}
          index={1}
          column="right"
          className="lg:col-start-2 lg:row-start-2 lg:mt-[clamp(140px,16vw,240px)]"
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
