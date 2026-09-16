import { useState } from "react";
import { motion } from "framer-motion";

const BUBBLES = [
  {
    id: 1,
    title: "Anam Razzaque",
    role: "Founder & Creative Lead",
    tag: "STUDIO",
    image: "/byanam-avatar.webp",
    fallback: "AR",
  },
  {
    id: 2,
    title: "Creative Engineering",
    role: "Awwwards-Grade Motion",
    tag: "TECH",
    image: "/creative-office.webp",
    fallback: "CE",
  },
  {
    id: 3,
    title: "Global Reach",
    role: "Worldwide Clients",
    tag: "IMPACT",
    image: "/team-collab.webp",
    fallback: "GL",
  },
  {
    id: 4,
    title: "Full-Stack Dev",
    role: "React 19 & Next.js 15",
    tag: "CODE",
    image: "/project-nth.webp",
    fallback: "FS",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function ClientBubbles() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative w-full bg-[#050505] px-4 py-28 sm:py-36 text-center font-space select-none">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Section Heading matching prototype */}
        <motion.h2
          className="font-syne font-black uppercase tracking-tight text-white mb-16 sm:mb-24"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          WHAT WE GIVE TO
          <br />
          OUR CLIENTS
        </motion.h2>

        {/* 4 Circular Bubbles in a Row */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 md:gap-12">
          {BUBBLES.map((bubble, idx) => {
            const isHovered = hoveredId === bubble.id;
            return (
              <motion.div
                key={bubble.id}
                className="group flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredId(bubble.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease, delay: idx * 0.08 }}
              >
                {/* Circular Bubble */}
                <div className="relative aspect-square w-28 sm:w-32 md:w-40 overflow-hidden rounded-full border-2 border-white/20 bg-[#161618] transition-all duration-500 group-hover:border-white group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                  <img
                    src={bubble.image}
                    alt={bubble.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-syne font-black text-xl text-white/40 group-hover:text-white transition-colors">
                    {bubble.fallback}
                  </div>
                </div>

                {/* Info underneath */}
                <div className="mt-4 flex flex-col items-center">
                  <span className="font-syne text-sm font-bold text-white group-hover:text-white sm:text-base">
                    {bubble.title}
                  </span>
                  <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/50">
                    {bubble.role}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
