import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Team() {
  return (
    <section className="relative w-full bg-black px-4 py-28 sm:py-36 select-none flex flex-col items-center justify-center text-center">
      <div className="redis-container flex flex-col items-center justify-center text-center">
        {/* Team Cover Frame */}
        <motion.div
          className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0e0f11] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease }}
        >
          <img
            src="/images/team-cover.webp"
            alt="Internet Sites Studio Team"
            className="w-full h-auto object-cover grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
          />
        </motion.div>

        {/* Studio Manifesto / Description from Redis Agency */}
        <motion.div
          className="mt-12 sm:mt-16 max-w-[580px] px-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="font-editorial text-xl sm:text-3xl font-light text-white leading-snug">
            Internet Sites consists of five boutiques and a design factory with over 35 employees, including multidisciplinary art directors and managers, all under one roof.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
