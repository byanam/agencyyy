import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "STABILITY",
    items: [
      "Production-tested, resilient architectures that never break",
      "Robust error handling, graceful fallbacks, and zero layout shift",
      "Flawless cross-browser compatibility across Safari, Chrome, and Firefox",
      "Strict semantic HTML with full accessibility standards (WCAG)",
    ],
  },
  {
    title: "SCALABILITY",
    items: [
      "Next.js 15 & React 19 platforms built to handle millions of requests",
      "Real-time state synchronization and reactive API infrastructure",
      "Modular design systems and tokens ready for rapid brand expansion",
      "Clean TypeScript definitions and automated deployment pipelines",
    ],
  },
  {
    title: "VELOCITY",
    items: [
      "Sub-second load times and 99+ Google Core Web Vitals performance",
      "Buttery 120fps Lenis smooth scroll and GPU-accelerated motion",
      "Rapid turnaround from visual design to live production code",
      "Comprehensive search engine optimization (SEO) and social graph indexing",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ isClone = false }) {
  return (
    <section
      id={isClone ? undefined : "services"}
      className="relative w-full bg-[#050505] px-4 py-28 sm:px-8 md:px-12 lg:py-36 font-space select-none"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        {/* Section Heading: WHAT WE GIVE TO OUR CLIENTS */}
        <motion.h2
          className="font-syne text-center font-black uppercase tracking-tight text-white mb-20 sm:mb-28"
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

        {/* 3 Rows with Left Extended Word and Right Dashed Details */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              className="grid grid-cols-1 gap-8 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: idx * 0.1 }}
            >
              {/* Left Column: Extended Futuristic Word */}
              <div className="lg:col-span-5 flex items-start">
                <h3
                  className="font-syne font-extrabold tracking-widest text-white/90 sm:tracking-[0.18em]"
                  style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)", lineHeight: 1 }}
                >
                  {pillar.title}
                </h3>
              </div>

              {/* Right Column: Dashed Bullet Points */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <ul className="space-y-4">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                    >
                      <span className="font-mono text-white/40 shrink-0 font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
