import { useState } from "react";
import { motion } from "framer-motion";

const STEPS = ["MOODBOARD", "EFFICIENT", "WINNING", "TESTING"];
const ease = [0.16, 1, 0.3, 1];

export default function ProcessStack() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-black px-4 py-32 sm:py-44 text-center select-none flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        {/* HOW WE TAKE IT TO THE NEXT LEVEL */}
        <motion.h3
          className="font-syncopate mb-16 w-full text-center font-bold tracking-widest text-white sm:mb-24"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          HOW WE TAKE IT TO THE NEXT LEVEL
        </motion.h3>

        {/* Stack of Words in Syncopate - STRICTLY CENTERED */}
        <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8 text-center">
          {STEPS.map((step, idx) => {
            const isHovered = activeIndex === idx;
            return (
              <motion.div
                key={step}
                className="group relative w-full flex items-center justify-center text-center cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease, delay: idx * 0.08 }}
              >
                <h2
                  className={`font-syncopate w-full text-center font-bold uppercase tracking-wider transition-all duration-300 ${
                    isHovered
                      ? "text-white scale-105"
                      : activeIndex !== null
                      ? "text-white/20"
                      : "text-white/80 hover:text-white"
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
