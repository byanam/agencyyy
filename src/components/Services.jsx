import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "AD CREATIVE",
    items: [
      "Key visuals and asset localization for digital and print",
      "Retail, outdoor and digital OOH campaign branding",
      "Private label packaging and premium POSM design",
      "High-conversion bespoke marketing web experiences",
    ],
  },
  {
    title: "BRAND IDENTITY & SYSTEMS",
    items: [
      "End-to-end brand identity and visual guidelines",
      "Sub-brand architecture and corporate design systems",
      "Investor pitch decks, annual reports and keynote presentations",
      "Custom typographic rules and iconographic libraries",
    ],
  },
  {
    title: "ILLUSTRATION & MOTION",
    items: [
      "Custom 2D / 3D illustration tailored to brand aesthetics",
      "High-precision 3D product rendering and lighting",
      "Dynamic motion graphics for social, digital ads and OOH",
      "Commercial brand films and interactive explainer animations",
    ],
  },
  {
    title: "DEVELOPMENT & INTERACTION",
    items: [
      "Interactive 3D WebGL and bespoke React/Next.js platforms",
      "Smooth momentum scrolling and micro-interaction mechanics",
      "Zero-compromise page speed and mobile responsiveness",
      "Headless CMS integration and scalable architectural foundation",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services({ isClone = false }) {
  return (
    <section
      id={isClone ? undefined : "services"}
      className="relative w-full bg-black px-4 py-32 sm:px-8 md:px-12 lg:py-44 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div
        className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        {/* WHAT WE GIVE TO OUR CLIENTS - Redis Agency Inspired Typography */}
        <motion.div
          className="mb-24 flex flex-col items-center justify-center text-center sm:mb-32 w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <span
            className="mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50 text-center block w-full"
            style={{ textAlign: "center" }}
          >
            SERVICES & EXPERTISE
          </span>
          <h2
            className="font-syncopate w-full font-bold uppercase tracking-tight text-white text-center"
            style={{
              fontSize: "clamp(2.2rem, 5.8vw, 5rem)",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            WHAT WE GIVE TO
            <br />
            OUR CLIENTS
          </h2>
        </motion.div>

        {/* Redis Agency Service Pillars - Generous spacing and clean dividers */}
        <div className="flex w-full flex-col divide-y divide-white/15 border-y border-white/15">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              className="flex w-full flex-col items-center justify-center gap-8 py-16 sm:py-20 text-center"
              style={{ textAlign: "center", margin: "0 auto" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease, delay: idx * 0.08 }}
            >
              {/* Pillar Title */}
              <h3
                className="font-syncopate w-full text-xl font-bold uppercase tracking-wider text-white sm:text-2xl md:text-3xl text-center"
                style={{ textAlign: "center" }}
              >
                {pillar.title}
              </h3>

              {/* Items List - Fully Centered with elegant spacing */}
              <div
                className="flex w-full flex-col items-center justify-center text-center"
                style={{ textAlign: "center", margin: "0 auto" }}
              >
                <div
                  className="space-y-4 font-space text-xs leading-relaxed text-white/90 sm:text-sm md:text-base text-center max-w-2xl flex flex-col items-center justify-center"
                  style={{ textAlign: "center", margin: "0 auto" }}
                >
                  {pillar.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex flex-col items-center justify-center gap-1 text-center w-full"
                      style={{ textAlign: "center" }}
                    >
                      <span
                        className="text-white/40 text-xs text-center select-none"
                        style={{ textAlign: "center" }}
                      >
                        —
                      </span>
                      <p
                        className="text-white/80 hover:text-white transition-colors text-center block w-full leading-relaxed"
                        style={{ textAlign: "center" }}
                      >
                        {item}
                      </p>
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
