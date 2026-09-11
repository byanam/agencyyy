import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    year: "2026",
    client: "Notes 101",
    title: "Minimal dark-themed note-taking app with A4 editor & Firebase sync",
    image: "/projects/notes101.webp",
    tags: ["Web App", "Firebase", "Design"],
    href: "https://notes--101.web.app",
    stage: {
      tone: "dark",
      phrases: [
        { words: ["A4", "editor"], color: "#67E8F9" },
        { words: ["Cloud", "sync"], color: "#BEF264" },
        { words: ["100+", "fonts"], color: "#F9A8D4" },
        { words: ["PDF", "export"], color: "#FFFFFF" },
      ],
    },
  },
  {
    id: 2,
    year: "2026",
    client: "PlayStation Store UI",
    title: "Animated concept landing page with 3D carousel & glassmorphic cart",
    image: "/projects/playstation.webp",
    tags: ["UI/UX", "Animation", "Vanilla JS"],
    href: "https://byanam.github.io/PlayStation-Store-UI/",
    stage: {
      tone: "light",
      phrases: [
        { words: ["3D", "carousel"], color: "#4F46E5" },
        { words: ["Scroll", "gradients"], color: "#DB2777" },
        { words: ["Glass", "morphism"], color: "#EA580C" },
        { words: ["Zero", "dependencies"], color: "#111111" },
      ],
    },
  },
  {
    id: 3,
    year: "2026",
    client: "Digital You",
    title: "3D avatar generator from two photos — runs entirely in the browser",
    image: "/projects/digitalyou.webp",
    tags: ["Next.js", "3D", "WebGL"],
    href: "https://byanam.github.io/digital-you/",
    stage: {
      tone: "accent",
      phrases: [
        { words: ["3D", "mesh"], color: "#141414" },
        { words: ["Photo", "to", "avatar"], color: "#3B1002" },
        { words: ["Browser", "based"], color: "#0C2E22" },
        { words: ["No", "API", "needed"], color: "#141414" },
      ],
    },
  },
];

const springConfig = { stiffness: 150, damping: 20, mass: 0.8 };

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      springX.jump(x);
      springY.jump(y);
    }
  };

  const bgColor =
    project.stage?.tone === "dark" ? "#3a3a3a" : "#141414";

  return (
    <motion.a
      ref={cardRef}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full cursor-pointer overflow-hidden rounded-[20px] bg-[#f5f5f3] dark:bg-[#1a1a1a] md:rounded-[28px]"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Tags */}
      <div className="absolute right-0 top-0 z-20 flex items-center gap-1.5 rounded-bl-2xl bg-background/95 p-3 dark:bg-[#1a1a1a]/95">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/10]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Stage text overlay */}
          <div className="flex flex-col items-center justify-center gap-3 p-8">
            {project.stage?.phrases.map((phrase, pi) => (
              <motion.span
                key={pi}
                className="text-center text-2xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl"
                style={{ color: phrase.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + pi * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {phrase.words.join(" ")}
              </motion.span>
            ))}
          </div>

          {/* Custom cursor follower */}
          {isHovered && (
            <motion.div
              className="pointer-events-none absolute z-30 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black"
              style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Info bar */}
      <div className="flex items-end justify-between px-5 py-4 md:px-7 md:py-5">
        <div>
          <div className="mb-1 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <span>{project.year}</span>
            <span className="h-px w-3 bg-muted-foreground/40" />
            <span>{project.client}</span>
          </div>
          <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base lg:text-lg">
            {project.title}
          </h3>
        </div>
        <motion.div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/40 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] text-foreground md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(64px, 8vw, 132px)",
        paddingBottom: "clamp(64px, 8vw, 132px)",
      }}
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <motion.div
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            Featured work
          </motion.div>
          <motion.h2
            id="featured-projects-heading"
            className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] text-foreground"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Selected projects
          </motion.h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <ProjectCard project={PROJECTS[0]} index={0} />
          </div>
          <ProjectCard project={PROJECTS[1]} index={1} />
          <ProjectCard project={PROJECTS[2]} index={2} />
        </div>
      </div>
    </section>
  );
}
