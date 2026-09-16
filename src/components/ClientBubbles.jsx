import { useState } from "react";
import { motion } from "framer-motion";

const BUBBLES = [
  { id: 1, label: "01", image: "/byanam-avatar.webp" },
  { id: 2, label: "02", image: "/creative-office.webp" },
  { id: 3, label: "03", image: "/team-collab.webp" },
  { id: 4, label: "04", image: "/project-nth.webp" },
];

const ease = [0.16, 1, 0.3, 1];

export default function ClientBubbles() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      className="relative w-full bg-black px-4 py-28 sm:py-36 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div
        className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        {/* Redis Agency Style Section Header */}
        <motion.div
          className="mb-20 sm:mb-28 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <span
            className="mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50 text-center block w-full"
            style={{ textAlign: "center" }}
          >
            NETWORK & COLLECTIVE
          </span>
          <h2
            className="font-syncopate w-full font-bold uppercase tracking-tight text-white text-center"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            TRUSTED BY AMBITIOUS
            <br />
            BRANDS & FOUNDERS
          </h2>
        </motion.div>

        {/* 4 Circular Bubbles in a Row (Matching Paper w-67.5 h-67.5 bg-[#DDDDDD]) */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 w-full mx-auto"
          style={{ justifyContent: "center", margin: "0 auto" }}
        >
          {BUBBLES.map((bubble, idx) => {
            const isHovered = hoveredId === bubble.id;
            return (
              <motion.div
                key={bubble.id}
                className="group relative cursor-pointer flex flex-col items-center justify-center"
                onMouseEnter={() => setHoveredId(bubble.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: idx * 0.08 }}
              >
                <div className="relative aspect-square w-28 sm:w-36 md:w-44 overflow-hidden rounded-full border border-white/20 bg-[#DDDDDD] p-1 transition-transform duration-500 group-hover:scale-105 group-hover:border-white/60">
                  <div className="h-full w-full overflow-hidden rounded-full bg-neutral-900">
                    <img
                      src={bubble.image}
                      alt={`Client bubble ${bubble.label}`}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
