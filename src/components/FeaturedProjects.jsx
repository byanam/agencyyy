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
    colClass: "lg:self-start lg:ml-8",
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
    colClass: "lg:self-end lg:mr-8",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function FeaturedProjects({ isClone = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={isClone ? undefined : "work"}
      className="relative w-full bg-[#050505] px-4 py-24 sm:px-6 md:px-10 lg:py-32 font-space select-none"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Centered Tag: OUR WORKS */}
        <motion.div
          className="mb-16 flex items-center justify-center font-mono text-xs uppercase tracking-[0.25em] text-white/50 sm:mb-24"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          OUR WORKS
        </motion.div>

        {/* Staggered Cascade Grid (Left, Center, Right) Matching Prototype */}
        <div className="flex w-full flex-col gap-12 sm:gap-16 lg:gap-0">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.article
                key={project.id}
                className={`w-full max-w-[420px] self-center ${project.colClass}`}
                initial={{ opacity: 0, y: 30 }}
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
                  {/* Clean Minimalist Showcase Card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#121214] shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Hover Arrow Overlay */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      <span className="font-bold text-sm">↗</span>
                    </div>
                  </div>

                  {/* Caption underneath */}
                  <div className="mt-4 flex items-center justify-between px-1">
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-white/50">
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
