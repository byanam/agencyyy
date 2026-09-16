import { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Nest Studio",
    category: "INTERACTIVE WEBSITE",
    year: "2025",
    image: "/whycreatives-brand.webp",
    href: "https://byanam.github.io/nest/",
  },
  {
    id: 2,
    title: "PlayStation Store UI",
    category: "3D WEB APPLICATION",
    year: "2025",
    image: "/whycreatives-app.webp",
    href: "https://byanam.github.io/PlayStation-Store-UI/",
  },
  {
    id: 3,
    title: "Notes 101 Web App",
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
      className="relative w-full bg-black px-4 py-28 sm:px-8 md:px-12 lg:py-36 font-space select-none flex flex-col items-center justify-center text-center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        {/* OUR WORKS Title - Centered */}
        <motion.h2
          className="font-syncopate mb-20 w-full text-center font-bold tracking-widest text-white sm:mb-28"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          OUR WORKS
        </motion.h2>

        {/* Centered Cards Stack - Down the exact center spine */}
        <div className="flex w-full flex-col items-center justify-center gap-16 sm:gap-24">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.article
                key={project.id}
                className="w-full max-w-[500px] flex flex-col items-center justify-center text-center mx-auto"
                initial={{ opacity: 0, y: 36 }}
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
                >
                  {/* Card Frame matching Paper bg-[#DDDDDD] */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-neutral-400/30 bg-[#DDDDDD] p-2 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="relative h-full w-full overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Caption underneath - Completely Centered */}
                  <div className="mt-5 flex flex-col items-center justify-center text-center px-1">
                    <h3 className="font-syncopate text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">
                      {project.category} · {project.year}
                    </p>
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
