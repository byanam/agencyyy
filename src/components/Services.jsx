import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SKILLS = [
  {
    title: "Web Applications",
    blurb: "Fast, responsive apps built with modern frameworks.",
    image: null,
    color: "#4F46E5",
  },
  {
    title: "UI/UX Design",
    blurb: "Pixel-perfect interfaces with obsessive attention to detail.",
    image: null,
    color: "#DB2777",
  },
  {
    title: "3D & WebGL",
    blurb: "Immersive browser-based 3D experiences.",
    image: null,
    color: "#06B6D4",
  },
  {
    title: "Design Systems",
    blurb: "Consistent, scalable component libraries and tokens.",
    image: null,
    color: "#8B5CF6",
  },
  {
    title: "Open Source",
    blurb: "Free tools built for the community.",
    image: null,
    color: "#10B981",
  },
];

const HEADING_LINES = ["What I specialize", "in building"];
const ease = [0.16, 1, 0.3, 1];
const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };

function getCardSize(width) {
  return Math.round(Math.min(Math.max(width * 0.07, 72), 148));
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cardSize, setCardSize] = useState(120);
  const [cursorInSection, setCursorInSection] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => {
      setIsDesktop(mq.matches);
      setCardSize(getCardSize(window.innerWidth));
      if (!mq.matches) {
        setActiveIndex(null);
        setCursorInSection(false);
      }
    };
    update();
    let raf = 0;
    const onResize = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    mq.addEventListener("change", update);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [isDesktop, mouseX, mouseY]);

  const hasActive = activeIndex !== null;
  const gap = cardSize + 28;

  return (
    <div id="skills" className="w-full bg-background px-3 sm:px-5 md:px-6">
      <section className="w-full overflow-hidden rounded-[24px] bg-[#0A0A0C] font-['Schibsted_Grotesk',sans-serif] text-white md:rounded-[36px]">
        {/* Custom cursor */}
        {isDesktop && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[100] flex h-20 w-20 items-center justify-center rounded-full bg-white"
            style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
            initial={false}
            animate={{ scale: hasActive ? 1 : 0.2, opacity: cursorInSection ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.6 }}
          >
            <motion.span
              className="flex items-center justify-center text-black"
              initial={false}
              animate={{ opacity: hasActive ? 1 : 0, scale: hasActive ? 1 : 0.4 }}
              transition={{ duration: 0.25, ease }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </motion.span>
          </motion.div>
        )}

        <div
          style={{
            paddingTop: "clamp(84px, 9vw, 176px)",
            paddingBottom: "clamp(84px, 9vw, 176px)",
          }}
          onMouseEnter={() => setCursorInSection(true)}
          onMouseLeave={() => setCursorInSection(false)}
        >
          {/* Heading */}
          <motion.div
            className="mb-12 px-6 md:mb-20 md:px-[clamp(32px,5vw,80px)]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
              variants={{
                hidden: { opacity: 0, x: -8 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              Capabilities
            </motion.div>
            {HEADING_LINES.map((line, i) => (
              <motion.span
                key={i}
                className="block text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.035em]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.div>

          {/* Skill cards */}
          <div className="px-6 md:px-[clamp(32px,5vw,80px)]">
            <div className="grid gap-px md:grid-cols-2 lg:grid-cols-5">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  className="group relative cursor-pointer overflow-hidden border-t border-white/10 py-8 lg:border-l lg:border-t-0 lg:px-6 lg:py-10 first:lg:border-l-0"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                >
                  {/* Highlight background */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{ background: `linear-gradient(135deg, ${skill.color}15, transparent)` }}
                    animate={{ opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Number */}
                  <span className="relative mb-3 block font-['Space_Mono',monospace] text-[11px] text-white/30">
                    0{i + 1}
                  </span>

                  {/* Icon dot */}
                  <motion.div
                    className="relative mb-4 h-3 w-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    animate={{
                      scale: activeIndex === i ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Title */}
                  <h3 className="relative mb-2 text-lg font-semibold leading-tight">
                    {skill.title}
                  </h3>

                  {/* Blurb */}
                  <p className="relative text-sm leading-relaxed text-white/50">
                    {skill.blurb}
                  </p>

                  {/* Arrow on hover */}
                  <motion.div
                    className="relative mt-4"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: activeIndex === i ? 1 : 0,
                      x: activeIndex === i ? 0 : -8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={skill.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
