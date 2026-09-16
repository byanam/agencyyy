import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Stabality",
    items: [
      "Key visuals and asset localization for digital and print",
      "Retail and OOH branding",
      "Private label packaging and POSM design",
      "Web design and development",
    ],
  },
  {
    title: "Stabality",
    items: [
      "Key visuals and asset localization for digital and print",
      "Retail and OOH branding",
      "Private label packaging and POSM design",
      "Web design and development",
    ],
  },
  {
    title: "Stabality",
    items: [
      "Key visuals and asset localization for digital and print",
      "Retail and OOH branding",
      "Private label packaging and POSM design",
      "Web design and development",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ isClone = false }) {
  return (
    <section
      id={isClone ? undefined : "services"}
      className="relative w-full bg-black px-4 py-28 sm:px-8 md:px-12 lg:py-36 select-none flex flex-col items-center justify-center text-center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        {/* WHAT WE GIVE TO OUR CLIENTS in Syncopate - Centered */}
        <motion.h2
          className="font-syncopate mb-24 w-full text-center font-bold uppercase tracking-tight text-white sm:mb-32"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.8rem)", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          WHAT WE GIVE TO
          <br />
          OUR CLIENTS
        </motion.h2>

        {/* Rows - Completely Centered in the middle */}
        <div className="flex w-full flex-col divide-y divide-white/15 border-y border-white/15">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="flex w-full flex-col items-center justify-center gap-6 py-12 sm:py-16 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: idx * 0.1 }}
            >
              {/* Stabality Centered */}
              <h3 className="font-syncopate w-full text-center text-2xl font-bold tracking-wider text-white sm:text-3xl md:text-4xl">
                {pillar.title}
              </h3>

              {/* Bullet points Centered */}
              <div className="flex w-full flex-col items-center justify-center text-center">
                <div className="space-y-4 font-syncopate text-xs leading-relaxed text-white sm:text-sm md:text-base text-center max-w-xl">
                  {pillar.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col items-center justify-center gap-1 text-center">
                      <span className="text-white/60">• —</span>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
