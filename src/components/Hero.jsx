import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-start bg-black px-4 pt-36 pb-20 sm:pt-48 sm:pb-28 text-center select-none overflow-hidden">
      {/* Decorative Botanical Graphic 1 (Top Left) */}
      <div className="absolute left-[-4vw] top-[12vh] w-[22vw] max-w-[240px] pointer-events-none opacity-40 select-none">
        <img
          src="/images/67446b8761145d75854e99d6_hero_botva_01@2.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative Botanical Graphic 2 (Top Right) */}
      <div className="absolute right-[-3vw] top-[24vh] w-[18vw] max-w-[200px] pointer-events-none opacity-30 select-none">
        <img
          src="/images/67446b8761145d75854e99d4_botva-3.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="redis-container-wide relative z-10 flex flex-col items-center justify-center text-center">
        {/* Kicker tag */}
        <motion.p
          className="font-sans-swiss text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          design support for major brands
        </motion.p>

        {/* Monumental Headline: Internet Sites — design support */}
        <motion.h1
          className="font-editorial text-white text-center font-normal tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 7.5vw, 6.8rem)",
            lineHeight: 0.88,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          Internet Sites
          <br />
          <span className="font-light italic text-white/90">— design support</span>
        </motion.h1>

        {/* Subtitle (.u-p-big) */}
        <motion.h2
          className="mt-12 sm:mt-16 font-sans-swiss text-lg sm:text-2xl font-normal text-white max-w-[620px] leading-snug"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.22 }}
        >
          Ultimate design partner for ambitious startups and worldwide brands
        </motion.h2>

        {/* Narrative Description */}
        <motion.p
          className="mt-4 sm:mt-6 font-sans-swiss text-sm sm:text-base text-white/65 max-w-[540px] leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          For over 17 years, we’ve been helping marketing, HR, and brand teams deliver thousands of projects — fast and always on brand.
        </motion.p>

        {/* Quick CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.38 }}
        >
          <button
            onClick={onOpenContact}
            className="redis-btn-pill text-sm py-2 px-7"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
