import { useState } from "react";
import { motion } from "framer-motion";

const STEPS = ["MOODBOARD", "EFFICIENT", "WINNING", "TESTING"];
const ease = [0.16, 1, 0.3, 1];

export default function ProcessStack() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-black px-4 py-32 sm:py-44 text-center select-none">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* HOW WE TAKE IT TO THE NEXT LEVEL */}
        <motion.h3
          className="font-syncopate mb-16 text-center font-bold tracking-widest text-white sm:mb-24"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          HOW WE TAKE IT TO THE NEXT LEVEL
        </motion.h3>

        {/* Stack of Words in Syncopate */}
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          {STEPS.map((step, idx) => {
            const isHovered = activeIndex === idx;
            return (
              <motion.div
                key={step}
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease, delay: idx * 0.08 }}
              >
                <h2
                  className={`font-syncopate font-bold uppercase tracking-widest transition-all duration-300 ${
                    isHovered
                      ? "text-white scale-105 drop-shadow-[0_0_24px_rgba(255,255,255,0.5)]"
                      : activeIndex !== null
                      ? "text-white/20"
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", lineHeight: 1.1 }}
                >
                  {step}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
