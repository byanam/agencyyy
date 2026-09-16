import { motion } from "framer-motion";
import { scrollToTarget } from "../hooks/useLenis";

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start bg-black px-4 pt-28 pb-32 sm:pt-36 sm:pb-44 text-center select-none">
      <div className="container-redis-hero flex flex-col items-center justify-center text-center">
        {/* Subtitle Pill / Tagline */}
        <motion.div
          className="mb-10 sm:mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/70">
            Design support for ambitious brands
          </span>
        </motion.div>

        {/* Main Headline in Editorial Serif - Tight, High-Fashion, Balanced */}
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <h1
            className="text-editorial-hero text-white text-center"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            }}
          >
            Internet Sites
            <br />
            <span className="italic font-light text-white/90">& Digital Products</span>
          </h1>
        </motion.div>

        {/* Editorial Subtitle with Proportional Width to Prevent Text Stretching */}
        <motion.div
          className="mt-8 sm:mt-10 max-w-[560px] px-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
        >
          <p className="text-swiss-body text-base sm:text-lg text-white/75 leading-relaxed">
            Ultimate design partner for ambitious startups and worldwide brands.
            Delivering thousands of projects — fast and always on brand.
          </p>
        </motion.div>

        {/* Action Buttons: Get in Touch & View Cases */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          <button onClick={onOpenContact} className="btn-redis-pill">
            Get in touch
          </button>
          <button
            onClick={() => scrollToTarget("#work")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 font-sans-swiss text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
          >
            Explore Cases ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
}
