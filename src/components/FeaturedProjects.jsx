import { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Nest Studio",
    description: "Interactive web & digital design for next-generation creative agency",
    category: "INTERACTIVE WEBSITE",
    year: "2025",
    image: "/whycreatives-brand.webp",
    href: "https://byanam.github.io/nest/",
  },
  {
    id: 2,
    title: "PlayStation Store UI",
    description: "Immersive 3D web application with smooth spatial navigation",
    category: "3D WEB APPLICATION",
    year: "2025",
    image: "/whycreatives-app.webp",
    href: "https://byanam.github.io/PlayStation-Store-UI/",
  },
  {
    id: 3,
    title: "Notes 101 Web App",
    description: "Full-stack cloud productivity ecosystem built for modern workflows",
    category: "FULL-STACK PLATFORM",
    year: "2024",
    image: "/whycreatives-ugc.webp",
    href: "https://notes--101.web.app",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function FeaturedProjects({ isClone = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={isClone ? undefined : "work"}
      className="relative w-full bg-black px-4 py-32 sm:px-8 md:px-12 lg:py-44 font-space select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div
        className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        {/* Section Title in Redis Agency style */}
        <motion.div
          className="mb-24 sm:mb-32 flex flex-col items-center justify-center text-center w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <span
            className="mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50 text-center block w-full"
            style={{ textAlign: "center" }}
          >
            SELECTED CASES
          </span>
          <h2
            className="font-syncopate w-full text-center font-bold tracking-tight text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            OUR WORKS
          </h2>
        </motion.div>

        {/* Centered Cards Stack with Redis Agency Spacing */}
        <div className="flex w-full flex-col items-center justify-center gap-24 sm:gap-36">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.article
                key={project.id}
                className="w-full max-w-[620px] flex flex-col items-center justify-center text-center mx-auto"
                style={{ textAlign: "center", margin: "0 auto" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full flex flex-col items-center text-center"
                  style={{ textAlign: "center" }}
                >
                  {/* Card Frame matching Paper bg-[#DDDDDD] with clean borders */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300/30 bg-[#DDDDDD] p-2 transition-all duration-500 group-hover:scale-[1.015]">
                    <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Caption underneath - Redis Agency typography & centered */}
                  <div
                    className="mt-6 flex flex-col items-center justify-center text-center px-2 w-full"
                    style={{ textAlign: "center", margin: "0 auto" }}
                  >
                    <h3
                      className="font-syncopate text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-white text-center w-full"
                      style={{ textAlign: "center" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mt-2 max-w-md font-space text-xs sm:text-sm text-white/70 text-center leading-relaxed"
                      style={{ textAlign: "center", margin: "0 auto" }}
                    >
                      {project.description}
                    </p>
                    <span
                      className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/40 text-center"
                      style={{ textAlign: "center" }}
                    >
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
