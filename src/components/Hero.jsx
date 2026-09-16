import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-4 pt-32 pb-20 text-center font-space select-none">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[480px] w-[620px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Massive Headline: INTERNET SITES */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <h1
            className="font-syne font-black uppercase leading-[0.85] tracking-[-0.05em] text-white"
            style={{ fontSize: "clamp(4.2rem, 15vw, 13rem)" }}
          >
            INTERNET
            <br />
            SITES
          </h1>

          {/* Subheading: tell us what your building */}
          <motion.p
            className="mt-4 font-space text-lg font-light tracking-tight text-white/80 sm:text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            tell us what your building
          </motion.p>
        </motion.div>

        {/* Studio Manifesto / Description */}
        <motion.div
          className="mt-20 max-w-xl text-center sm:mt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          <p className="text-base font-normal leading-relaxed text-white/70 sm:text-lg md:text-xl">
            An independent studio in India crafting video, motion design, websites, apps and brands built to grow.
          </p>

          {/* Quick CTA Pill */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-2.5 text-xs font-mono font-medium uppercase tracking-widest text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span>Get in touch</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
