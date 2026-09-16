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
    colClass: "lg:self-start lg:ml-6",
  },
  {
    id: 2,
    title: "PlayStation Store UI",
    category: "3D WEB APPLICATION",
    year: "2025",
    image: "/whycreatives-app.webp",
    href: "https://byanam.github.io/PlayStation-Store-UI/",
    colClass: "lg:self-center lg:my-16",
  },
  {
    id: 3,
    title: "Notes 101 Web App",
    category: "FULL-STACK PLATFORM",
    year: "2024",
    image: "/whycreatives-ugc.webp",
    href: "https://notes--101.web.app",
    colClass: "lg:self-end lg:mr-6",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function FeaturedProjects({ isClone = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={isClone ? undefined : "work"}
      className="relative w-full bg-black px-4 py-28 sm:px-8 md:px-12 lg:py-36 font-space select-none"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* OUR WORKS Title from Paper */}
        <motion.h2
          className="font-syncopate mb-20 text-center font-bold tracking-widest text-white sm:mb-28"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          OUR WORKS
        </motion.h2>

        {/* 3 Staggered Cascade Cards (Left, Center, Right) Matching Paper Export */}
        <div className="flex w-full flex-col gap-12 sm:gap-16 lg:gap-0">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.article
                key={project.id}
                className={`w-full max-w-[430px] self-center ${project.colClass}`}
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
                  className="group block w-full"
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

                  {/* Caption underneath */}
                  <div className="mt-4 flex items-center justify-between px-1">
                    <div>
                      <h3 className="font-syncopate text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
                        {project.category}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-white/40">
                      {project.year}
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
