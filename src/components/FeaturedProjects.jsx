import { useState } from "react";
import { motion } from "framer-motion";

const CASES = [
  {
    id: 1,
    title: "Young & Yandex",
    subtitle: "Web and marketing design for Yandex's internship and youth education ecosystem",
    category: "Web Design & Brand Identity",
    year: "2025",
    image: "/whycreatives-brand.webp",
    href: "https://byanam.github.io/nest/",
  },
  {
    id: 2,
    title: "PlayStation Store Spatial UI",
    subtitle: "Interactive 3D web experience with real-time spatial navigation and product staging",
    category: "3D Web Application",
    year: "2025",
    image: "/whycreatives-app.webp",
    href: "https://byanam.github.io/PlayStation-Store-UI/",
  },
  {
    id: 3,
    title: "Locals Nomads Cultural Identity",
    subtitle: "Vibrant visual identity, bespoke typography, and digital presence for a wine club",
    category: "Brand Identity & Web",
    year: "2024",
    image: "/whycreatives-ugc.webp",
    href: "https://notes--101.web.app",
  },
  {
    id: 4,
    title: "Sakharov Space Museum",
    subtitle: "Virtual museum dedicated to the centennial anniversary of human rights advocacy",
    category: "Virtual Museum & Webflow",
    year: "2024",
    image: "/creative-office.webp",
    href: "https://byanam.github.io/nest/",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function FeaturedProjects({ isClone = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={isClone ? undefined : "work"}
      className="relative w-full bg-black px-4 py-36 sm:py-48 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div className="container-redis-cases flex flex-col items-center justify-center text-center">
        {/* Section Title in Editorial Serif */}
        <motion.div
          className="mb-20 sm:mb-28 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="mb-3 font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
            Selected Works
          </span>
          <h2
            className="text-editorial-section text-white text-center"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Cases
          </h2>
        </motion.div>

        {/* Case Cards Stack - Contained Width, Zero Glow, Refined Typography */}
        <div className="flex w-full flex-col items-center justify-center gap-24 sm:gap-36">
          {CASES.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.article
                key={project.id}
                className="w-full flex flex-col items-center justify-center text-center mx-auto"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.85, ease, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full flex flex-col items-center text-center"
                >
                  {/* Clean Visual Preview Card with 1px border and smooth zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#0e0f11] transition-all duration-500 group-hover:border-white/35">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  {/* Editorial Text Content Underneath */}
                  <div className="mt-6 flex flex-col items-center justify-center text-center px-2 max-w-[540px]">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-swiss-body text-xs sm:text-sm text-white/70 leading-relaxed">
                      {project.subtitle}
                    </p>
                    <span className="mt-3 font-sans-swiss text-[11px] uppercase tracking-widest text-white/40">
                      {project.category} · {project.year}
                    </span>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
