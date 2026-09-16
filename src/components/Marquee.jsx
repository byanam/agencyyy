import { motion } from "framer-motion";

const BRANDS = [
  "YANDEX",
  "LOCALS NOMADS",
  "SAKHAROV SPACE",
  "NEST STUDIO",
  "SONY PLAYSTATION",
  "WEBFLOW",
  "VERCEL",
  "FRAMER",
  "APPLE",
  "NIKE LAB",
];

export default function Marquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black py-6 sm:py-8 select-none">
      <div className="flex w-full overflow-hidden">
        <div className="redis-marquee-track flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {BRANDS.concat(BRANDS).map((brand, i) => (
            <span
              key={i}
              className="font-editorial text-sm sm:text-base font-normal uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white"
            >
              {brand}
              <span className="ml-12 sm:ml-16 inline-block text-white/20">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
