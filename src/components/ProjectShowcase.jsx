import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function ProjectShowcase({ isClone = false }) {
  return (
    <div
      id={isClone ? undefined : "client-story"}
      className="relative z-10 flex w-full justify-center scroll-mt-24 px-3 pb-[clamp(28px,4vw,64px)] sm:px-5 md:px-6 font-['Schibsted_Grotesk',sans-serif]"
      style={{ marginTop: "calc(-1 * clamp(220px, 24vw, 320px))" }}
    >
      <motion.figure
        className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] bg-secondary shadow-[0_40px_90px_-50px_rgba(0,0,0,0.7)] md:rounded-[40px]"
        style={{
          height: "clamp(520px, 56vw, 760px)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
      >
        {/* Background Team Collaboration Image */}
        <img
          src="/team-collab.webp"
          alt="Designing and engineering web projects"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/10 to-black/45"
        />

        {/* Centered Quote Badge & Content (Dead Center Vertically & Horizontally) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto max-w-[min(92%,36rem)]">
            <motion.div
              className="relative w-full rounded-2xl bg-white px-5 py-4 text-center text-black sm:px-8 sm:py-6 shadow-2xl"
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.15 }}
            >
              <p
                className="font-bold tracking-[-0.03em]"
                style={{ fontSize: "clamp(1.05rem, 2.2vw, 2.2rem)", lineHeight: 1.16 }}
              >
                <svg
                  className="mr-1.5 inline-block h-[0.7em] w-[0.7em] -translate-y-[0.15em] text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
                From first wireframe to pixel-perfect website launch
              </p>
              {/* Speech bubble tail */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 rounded-[3px] bg-white"
              />
            </motion.div>

            {/* Author Figcaption */}
            <motion.figcaption
              className="mt-3.5 inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 text-black sm:gap-3 sm:px-4 sm:py-2.5 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease, delay: 0.32 }}
            >
              <img
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
              />
              <span className="leading-tight text-left">
                <span className="block text-xs font-bold sm:text-sm">byanam · Anam Razzaque</span>
                <span className="block text-[10px] text-black/50 sm:text-xs">
                  Website designer & creative developer
                </span>
              </span>
            </motion.figcaption>

            {/* Center Action Buttons below the badge */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease, delay: 0.4 }}
            >
              <a
                href="#work"
                className="group inline-flex select-none items-center justify-center gap-2 rounded-full bg-white py-2.5 pl-4 pr-2 text-xs font-bold leading-none text-black transition-colors duration-300 hover:bg-white/85 active:scale-[0.98] sm:text-sm sm:py-3 sm:pl-5 sm:pr-2.5"
              >
                <span>See website projects</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none sm:h-6 sm:w-6">
                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <a
                href="#about"
                className="group inline-flex select-none items-center justify-center gap-2 rounded-full bg-black/85 py-2.5 pl-4 pr-2 text-xs font-bold leading-none text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black active:scale-[0.98] sm:text-sm sm:py-3 sm:pl-5 sm:pr-2.5"
              >
                <span>About byanam</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none sm:h-6 sm:w-6">
                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
}
