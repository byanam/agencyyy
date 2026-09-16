import { useState } from "react";
import { motion } from "framer-motion";

const CASES_DATA = [
  {
    id: 1,
    title: "Young & Yandex",
    description: "Web and marketing design for Yandex’s internship and youth education ecosystem",
    image: "/images/young-yandex-cover.webp",
    link: "https://www.behance.net/gallery/214026041/Young-Yandex",
  },
  {
    id: 2,
    title: "Yandex Cup",
    description: "Brand identity for an international programming competition hosted by Yandex",
    image: "/images/yandex-cup-cover.webp",
    link: "https://www.behance.net/gallery/234725005/YANDEX-CUP-2024",
  },
  {
    id: 3,
    title: "Locals Nomads",
    description: "Vibrant identity and illustrations for a wine bar in Lisbon",
    image: "/images/locals-nomads-cover.webp",
    link: "https://www.behance.net/gallery/176565157/Identity-for-LOCALS-NOMADS-wine-bar",
  },
  {
    id: 4,
    title: "Sakharov Space",
    description: "Virtual museum dedicated to the 100th anniversary of a great scientist and human rights activist",
    image: "/images/sakharov-space-cover.webp",
    link: "https://www.behance.net/gallery/146538495/SAKHAROVSPACE-Website-Design-Webflow",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Cases({ isClone = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={isClone ? undefined : "cases"}
      className="relative w-full bg-black px-4 py-32 sm:py-44 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div className="redis-container flex flex-col items-center justify-center text-center">
        {/* Section Heading: Cases */}
        <motion.div
          className="mb-20 sm:mb-28 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="font-editorial text-white text-center font-normal tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}
          >
            Cases
          </h2>
        </motion.div>

        {/* 4 Case Cards Stack matching Redis Agency */}
        <div className="flex w-full flex-col items-center justify-center gap-24 sm:gap-32">
          {CASES_DATA.map((item, idx) => (
            <motion.article
              key={item.id}
              className="w-full flex flex-col items-center justify-center text-center mx-auto"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full flex flex-col items-center text-center"
              >
                {/* Visual Cover Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0e0f11] transition-all duration-500 group-hover:border-white/35">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Content underneath */}
                <div className="mt-7 flex flex-col items-center justify-center text-center px-2 max-w-[560px]">
                  <h3 className="font-editorial text-2xl sm:text-4xl font-normal tracking-tight text-white transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans-swiss text-xs sm:text-sm text-white/70 leading-relaxed max-w-[480px]">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* View all Button */}
        <motion.div
          className="mt-20 sm:mt-28"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <a
            href="https://www.behance.net/Redis_CA"
            target="_blank"
            rel="noopener noreferrer"
            className="redis-btn-pill text-sm py-2 px-8"
          >
            View all
          </a>
        </motion.div>
      </div>
    </section>
  );
}
