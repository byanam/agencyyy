import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "React", "Next.js", "Astro", "TypeScript", "JavaScript",
  "TailwindCSS", "Framer Motion", "Three.js", "WebGL",
  "Firebase", "Node.js", "HTML5", "CSS3", "Figma",
  "Vanilla JS", "Vite", "Git", "REST APIs",
];

const ease = [0.22, 1, 0.36, 1];

export default function AboutStrip() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-background font-['Schibsted_Grotesk',sans-serif]"
      style={{
        paddingTop: "clamp(64px, 8vw, 140px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
    >
      {/* Content */}
      <div className="relative px-4 md:px-[clamp(32px,6vw,160px)]">
        {/* Label */}
        <motion.div
          className="mb-7 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:absolute lg:left-6 lg:top-2 lg:mb-0 lg:text-sm"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          Who am I?
        </motion.div>

        {/* Main text */}
        <div className="mx-auto max-w-5xl lg:text-center">
          <motion.h2
            className="text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            I'm Anam — a developer and designer who builds{" "}
            <span className="text-muted-foreground">polished, high-performance web experiences</span>{" "}
            from the ground up. Every project is crafted with{" "}
            <span className="text-muted-foreground">obsessive attention to detail</span>,{" "}
            clean architecture, and{" "}
            <span className="text-muted-foreground">pixel-perfect execution</span>.
          </motion.h2>
        </div>

        {/* Stats row */}
        <motion.div
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:mt-16 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { value: "5+", label: "Projects shipped" },
            { value: "100%", label: "Open source" },
            { value: "3", label: "Frameworks mastered" },
            { value: "∞", label: "Attention to detail" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div
        className="mt-16 w-full overflow-hidden border-y border-border/50 py-5 md:mt-20"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div
          className="flex w-max gap-8"
          style={{
            animation: isVisible ? "marquee-left 32s linear infinite" : "none",
          }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
