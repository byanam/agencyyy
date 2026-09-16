import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "AD Creative",
    deliverables: [
      "Key visuals and asset localization for digital and print",
      "Retail and OOH branding",
      "Private label packaging and POSM design",
      "Web design and development",
    ],
  },
  {
    title: "HR Branding & Internal Comms",
    deliverables: [
      "Presentations: pitch decks, reports, annual reviews",
      "Branded merchandise and giveaways",
      "HR and internal communication platforms",
    ],
  },
  {
    title: "Illustration & Motion Design",
    deliverables: [
      "Custom 2D / 3D illustration in any visual style",
      "3D product renderings",
      "Motion graphics for ads and social media",
      "Commercial videos and explainers",
    ],
  },
  {
    title: "Brand Identity & Guidelines",
    deliverables: [
      "Event branding",
      "Sub-brand and employer-brand identity",
      "Brand updates and visual guidelines",
    ],
  },
  {
    title: "Development",
    deliverables: [
      "Fast, high-quality marketing websites built with modern code",
      "Interactive 3D WebGL experiences and micro-interactions",
      "Full responsive optimization and accessibility compliance",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ isClone = false }) {
  return (
    <section
      id={isClone ? undefined : "services"}
      className="relative w-full bg-black px-4 py-32 sm:py-44 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div className="container-redis-services flex flex-col items-center justify-center text-center">
        {/* Section Header */}
        <motion.div
          className="mb-20 sm:mb-28 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="mb-3 font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
            Expertise
          </span>
          <h2
            className="text-editorial-section text-white text-center"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Services
          </h2>
        </motion.div>

        {/* 2-Column Editorial Grid matching Redis Agency */}
        <div className="flex w-full flex-col border-t border-white/12">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 border-b border-white/12 py-12 sm:py-16 text-center md:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease, delay: idx * 0.08 }}
            >
              {/* Column 1: Service Title in Editorial Serif */}
              <div className="flex flex-col items-center md:items-start justify-start">
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  {service.title}
                </h3>
              </div>

              {/* Column 2: Deliverables List with Em-dashes */}
              <ul className="flex flex-col items-center md:items-start gap-4">
                {service.deliverables.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-swiss-body text-sm sm:text-base text-white/75"
                  >
                    <span className="text-white/40 select-none">—</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
