import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Creative & Interactive Websites",
    description:
      "Bespoke digital flagships and high-conversion landing pages engineered with obsessive attention to fluid motion, tactile feedback, and sensory micro-interactions.",
    items: [
      "Bespoke landing pages & studio portfolios",
      "Tactile micro-interactions & spring physics",
      "WebGL 3D & canvas visual effects",
      "Fluid 120fps Lenis smooth scroll mechanics",
    ],
  },
  {
    number: "02",
    title: "Full-Stack Web Applications",
    description:
      "Modern, reactive web architectures built with React 19, Next.js, and real-time state synchronization that scale effortlessly under heavy production traffic.",
    items: [
      "React 19 & Next.js application platforms",
      "Realtime Firebase / Supabase data sync",
      "Intuitive UX & high-conversion dashboard flows",
      "Robust REST & GraphQL API integrations",
    ],
  },
  {
    number: "03",
    title: "Performance & Creative Engineering",
    description:
      "Uncompromising speed and reliability. We tune every asset, thread, and paint cycle to guarantee lightning-fast load times and pristine search ranking.",
    items: [
      "Sub-second TTFB & 99+ Core Web Vitals score",
      "Zero-layout-shift responsive engineering",
      "Custom GPU-accelerated CSS & SVG mechanics",
      "Deep SEO metadata & semantic schema architecture",
    ],
  },
  {
    number: "04",
    title: "Design Systems & Digital Brand",
    description:
      "Bridging the gap between avant-garde visual design and pixel-perfect production code. Modular design systems built for seamless team scaling.",
    items: [
      "Modular design systems & component libraries",
      "Editorial Swiss typography & color science",
      "Figma-to-code pixel-perfect translation",
      "Full WCAG accessibility & cross-browser fidelity",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ onOpenContact, isClone = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id={isClone ? undefined : "services"} className="flex w-full justify-center bg-background px-3 sm:px-5 md:px-6">
      <section
        className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] bg-[#0c0d0f] font-['Schibsted_Grotesk',sans-serif] text-white md:rounded-[36px] border border-white/5 shadow-2xl"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <div
          style={{
            paddingTop: "clamp(64px, 8vw, 140px)",
            paddingBottom: "calc(clamp(64px, 8vw, 140px) + clamp(180px, 20vw, 280px))",
          }}
        >
          {/* Header Grid: Redis Editorial Style */}
          <div className="grid grid-cols-1 gap-y-6 px-6 sm:px-8 md:px-[clamp(28px,5vw,120px)] lg:grid-cols-12 lg:gap-x-10">
            {/* Tag */}
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 lg:col-span-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              [ SERVICES & EXPERTISE ]
            </div>

            {/* Headline */}
            <div className="lg:col-span-6">
              <h2
                className="text-white"
                style={{
                  fontSize: "clamp(2.2rem, 4.2vw, 5.5rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                }}
              >
                Design & engineering capabilities for the modern web
              </h2>
            </div>

            {/* Right: Quick action */}
            <div className="flex flex-col items-start justify-between lg:col-span-3 lg:items-end">
              <p className="text-sm leading-relaxed text-white/60">
                From bespoke creative sites to production web platforms, we engineer digital products that captivate and convert.
              </p>
              <button
                onClick={onOpenContact}
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <span>Initiate a project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* Structured Multi-Column Grid (Redis Agency Layout) */}
          <div className="mt-14 px-6 sm:px-8 md:px-[clamp(28px,5vw,120px)] lg:mt-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <motion.div
                    key={service.number}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease, delay: index * 0.08 }}
                    className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                      isHovered
                        ? "border-white/30 bg-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    {/* Top: Number & Category Title */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-emerald-400">
                          {service.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                          Discipline
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-white/60">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom: Dashed Bullet Deliverables List */}
                    <div className="mt-8 border-t border-white/10 pt-5">
                      <ul className="space-y-2.5">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs font-medium text-white/75 transition-colors group-hover:text-white"
                          >
                            <span className="text-emerald-400/80 shrink-0 font-mono">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
