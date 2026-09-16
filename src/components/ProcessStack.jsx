import { useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "MOODBOARD",
    desc: "Visual exploration, creative direction, and digital aesthetic foundation.",
  },
  {
    title: "EFFICIENT",
    desc: "Streamlined modern architectures, clean codebases, and sub-second performance.",
  },
  {
    title: "WINNING",
    desc: "Awwwards-grade digital craft that commands attention and converts visitors.",
  },
  {
    title: "TESTING",
    desc: "Rigorous cross-browser QA, mobile device optimization, and zero layout shift.",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function ProcessStack() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-[#050505] px-4 py-28 sm:py-36 text-center font-space select-none">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Centered Tag: HOW WE TAKE IT TO THE NEXT LEVEL */}
        <motion.div
          className="mb-14 font-mono text-xs uppercase tracking-[0.25em] text-white/50 sm:mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          HOW WE TAKE IT TO THE NEXT LEVEL
        </motion.div>

        {/* Stack of Massive Words */}
        <div className="flex w-full flex-col items-center gap-3 sm:gap-5">
          {STEPS.map((step, idx) => {
            const isHovered = activeIndex === idx;
            return (
              <motion.div
                key={step.title}
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease, delay: idx * 0.08 }}
              >
                <h2
                  className={`font-syne font-extrabold uppercase tracking-tight transition-all duration-300 ${
                    isHovered
                      ? "text-white scale-105"
                      : activeIndex !== null
                      ? "text-white/20"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.95 }}
                >
                  {step.title}
                </h2>

                {/* Micro blurb appearing on hover */}
                <motion.p
                  className="mx-auto mt-2 max-w-md font-space text-xs text-white/60 sm:text-sm"
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
