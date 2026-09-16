import { motion } from "framer-motion";

const PILLARS = [
  {
    id: "creatives",
    title: "AD Creative",
    items: [
      "Key visuals and asset localization for digital and print",
      "Retail and OOH branding",
      "Private label packaging and POSM design",
      "Web design and development",
    ],
  },
  {
    id: "hr-brand",
    title: "HR Branding & Internal Comms",
    items: [
      "Presentations: pitch decks, reports, annual reviews",
      "Branded merchandise and giveaways",
      "HR and internal communication platforms",
    ],
  },
  {
    id: "motion",
    title: "Illustration & Motion Design",
    items: [
      "Custom 2D / 3D illustration in any visual style",
      "3D product renderings",
      "Motion graphics for ads and social media",
      "Commercial videos and explainers",
    ],
  },
  {
    id: "identity",
    title: "Brand Identity & Guidelines",
    items: [
      "Event branding",
      "Sub-brand and employer-brand identity",
      "Brand updates and visual guidelines",
    ],
  },
  {
    id: "dev",
    title: "Development",
    isDevelopment: true,
    desc: "Fast, high-quality marketing websites built with no-code and low-code tools.",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ isClone = false, onOpenContact }) {
  return (
    <section
      id={isClone ? undefined : "services"}
      className="relative w-full bg-black px-4 py-32 sm:py-44 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div className="redis-container-wide flex flex-col items-center justify-center text-center">
        {/* Section Heading: Services */}
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
            Services
          </h2>
        </motion.div>

        {/* 2-Column Grid Architecture matching Redis Agency .TextColumn-module */}
        <div className="flex w-full flex-col border-t border-white/15">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 border-b border-white/15 py-12 sm:py-16 text-center md:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease, delay: idx * 0.08 }}
            >
              {/* Column 1: Pillar Title (.u-times-small) */}
              <div className="flex flex-col items-center md:items-start justify-start">
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  {pillar.title}
                </h3>
              </div>

              {/* Column 2: Deliverables with Em-Dashes or Development Info */}
              <div className="flex flex-col items-center md:items-start justify-start">
                {pillar.isDevelopment ? (
                  <div className="flex flex-col items-center md:items-start gap-3">
                    <p className="font-suisse text-sm sm:text-base text-white/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                    <button
                      onClick={onOpenContact}
                      className="font-suisse text-xs sm:text-sm text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                    >
                      Learn more →
                    </button>
                  </div>
                ) : (
                  <ul className="flex flex-col items-center md:items-start gap-4 w-full">
                    {pillar.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 font-suisse text-sm sm:text-base text-white/75"
                      >
                        <span className="text-white/40 select-none">—</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Get in touch CTA */}
        <motion.div
          className="mt-20 sm:mt-28"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <button
            onClick={onOpenContact}
            className="redis-btn-pill text-sm py-2 px-8"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
