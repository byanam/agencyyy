import { useState } from "react";
import { motion } from "framer-motion";

const COLLABORATORS = [
  { id: 1, name: "Studio Director", role: "Creative Direction", image: "/byanam-avatar.webp" },
  { id: 2, name: "Engineering Lead", role: "Spatial WebGL", image: "/creative-office.webp" },
  { id: 3, name: "Brand Architect", role: "Identity Systems", image: "/team-collab.webp" },
  { id: 4, name: "Motion Designer", role: "3D & Cinema", image: "/project-nth.webp" },
];

const ease = [0.16, 1, 0.3, 1];

export default function ClientBubbles() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative w-full bg-black px-4 py-36 sm:py-48 select-none flex flex-col items-center justify-center text-center">
      <div className="container-redis-cases flex flex-col items-center justify-center text-center">
        <motion.div
          className="mb-16 sm:mb-24 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="mb-3 font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
            Collective
          </span>
          <h2
            className="text-editorial-section text-white text-center"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            Network & Collaborators
          </h2>
        </motion.div>

        {/* 4 Circular Bubbles in a Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 w-full mx-auto">
          {COLLABORATORS.map((item, idx) => (
            <motion.div
              key={item.id}
              className="group relative cursor-pointer flex flex-col items-center justify-center text-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: idx * 0.08 }}
            >
              <div className="relative aspect-square w-24 sm:w-32 md:w-36 overflow-hidden rounded-full border border-white/20 bg-[#0e0f11] p-1 transition-all duration-500 group-hover:border-white group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <p className="mt-3 font-editorial text-sm sm:text-base font-normal text-white">
                {item.name}
              </p>
              <span className="font-sans-swiss text-[11px] text-white/50 uppercase tracking-wider">
                {item.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
