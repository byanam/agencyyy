import { useState } from "react";
import { motion } from "framer-motion";

const PHASES = [
  { step: "01", title: "Moodboard", desc: "Art direction research, aesthetic benchmarking, and creative alignment" },
  { step: "02", title: "Efficient", desc: "Rapid prototyping, wireframing, and iterative design sprints" },
  { step: "03", title: "Winning", desc: "High-fidelity production, interactive motion, and brand polish" },
  { step: "04", title: "Testing", desc: "Cross-platform QA, performance benchmarking, and launch deployment" },
];

const ease = [0.16, 1, 0.3, 1];

export default function ProcessStack() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="relative w-full bg-black px-4 py-32 sm:py-44 text-center select-none flex flex-col items-center justify-center">
      <div className="container-redis-cases flex flex-col items-center justify-center text-center">
        <motion.div
          className="mb-16 sm:mb-24 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="mb-3 font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
            Methodology
          </span>
          <h2
            className="text-editorial-section text-white text-center"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            How We Take It To The Next Level
          </h2>
        </motion.div>

        {/* Process Phases in Editorial Serif */}
        <div className="flex w-full flex-col divide-y divide-white/10 border-y border-white/15">
          {PHASES.map((phase, idx) => {
            const isHovered = activeStep === idx;
            return (
              <motion.div
                key={phase.step}
                className="group cursor-pointer py-8 sm:py-10 flex flex-col items-center justify-center transition-all duration-300"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease, delay: idx * 0.08 }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-sans-swiss text-xs font-mono uppercase text-white/40">
                    {phase.step}
                  </span>
                  <h3
                    className={`font-editorial text-3xl sm:text-5xl font-normal transition-colors duration-300 ${
                      isHovered ? "text-white" : activeStep !== null ? "text-white/30" : "text-white/80"
                    }`}
                  >
                    {phase.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-swiss-body text-xs sm:text-sm max-w-[420px] transition-opacity duration-300 ${
                    isHovered ? "text-white/80 opacity-100" : "text-white/40 opacity-70"
                  }`}
                >
                  {phase.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
