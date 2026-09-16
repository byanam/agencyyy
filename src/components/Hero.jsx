import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start bg-black px-4 pt-10 pb-28 text-center select-none">
      {/* Top Silver Metallic Capsule Bar from Paper */}
      <motion.div
        className="mx-auto h-5 sm:h-6 md:h-7 w-full max-w-[420px] rounded-full shadow-md cursor-pointer transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(180deg, #E5E5E5 0%, #B7B7B7 69%)",
        }}
        onClick={onOpenContact}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      />

      <div className="relative z-10 mx-auto mt-14 sm:mt-20 flex w-full max-w-6xl flex-col items-center">
        {/* INTERNET SITES */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <h1
            className="font-syne font-extrabold uppercase leading-[0.82] text-white"
            style={{
              fontSize: "clamp(3.8rem, 14vw, 13rem)",
              letterSpacing: "-0.10em",
            }}
          >
            INTERNET
            <br />
            SITES
          </h1>

          {/* tell us what your building */}
          <p
            className="mt-6 font-syne font-light text-white sm:mt-8"
            style={{
              fontSize: "clamp(1.4rem, 5.5vw, 4.2rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
            }}
          >
            tell us what your building
          </p>
        </motion.div>

        {/* Studio Manifesto from Paper */}
        <motion.div
          className="mt-24 max-w-3xl px-4 text-center sm:mt-36"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
        >
          <p
            className="font-[system-ui,sans-serif] font-normal leading-[1.35] text-white/95"
            style={{ fontSize: "clamp(1.2rem, 3.2vw, 2.4rem)" }}
          >
            An independent studio in India crafting video, motion design, websites, apps and brands built to grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
