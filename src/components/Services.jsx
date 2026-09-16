import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SERVICES_LIST = [
  {
    title: "Interactive Websites",
    blurb: "Bespoke sites with fluid tactile mechanics & kinetic micro-interactions.",
    href: "#work",
    image: "/project-nth.webp",
  },
  {
    title: "Web Applications",
    blurb: "Modern, reactive web apps with robust state & intuitive UX.",
    href: "#work",
    image: "/whycreatives-app.webp",
  },
  {
    title: "Creative Development",
    blurb: "Translating bold designs into high-performance browser code.",
    href: "#work",
    image: "/whycreatives-brand.webp",
  },
  {
    title: "Speed & Performance",
    blurb: "Sub-second load times, smooth scrolling & pristine Core Web Vitals.",
    href: "#work",
    image: "/creative-office.webp",
  },
  {
    title: "Full-Stack Web",
    blurb: "Frontend finesse paired with scalable backend APIs and Firebase.",
    href: "#work",
    image: "/video-gear.webp",
  },
];

const ease = [0.16, 1, 0.3, 1];
const springConfig = { stiffness: 320, damping: 26, mass: 0.6 };
const thumbSpring = { type: "spring", stiffness: 420, damping: 30 };

function calcCardSize(w) {
  return Math.round(Math.min(Math.max(w * 0.07, 72), 148));
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cardSize, setCardSize] = useState(120);
  const [isHoveringList, setIsHoveringList] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => {
      setIsDesktop(mq.matches);
      setCardSize(calcCardSize(window.innerWidth));
      if (!mq.matches) {
        setActiveIndex(null);
        setIsHoveringList(false);
      }
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    mq.addEventListener("change", update);
    return () => {
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isDesktop, mouseX, mouseY]);

  const hasActive = activeIndex !== null;
  const titleShift = cardSize + 28;

  return (
    <div id="services" className="w-full bg-background px-3 sm:px-5 md:px-6">
      <section className="w-full overflow-hidden rounded-[24px] bg-[#0A0A0C] font-['Schibsted_Grotesk',sans-serif] text-white md:rounded-[36px]">
        {/* Floating cursor on desktop */}
        {isDesktop && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[100] flex h-20 w-20 items-center justify-center rounded-full bg-white"
            style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
            initial={false}
            animate={{ scale: hasActive ? 1 : 0.2, opacity: isHoveringList ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.6 }}
          >
            <motion.span
              className="flex items-center justify-center text-black"
              initial={false}
              animate={{ opacity: hasActive ? 1 : 0, scale: hasActive ? 1 : 0.4 }}
              transition={{ duration: 0.25, ease }}
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </motion.span>
          </motion.div>
        )}

        <div
          style={{
            paddingTop: "clamp(84px, 9vw, 176px)",
            paddingBottom: "calc(clamp(84px, 9vw, 176px) + clamp(220px, 24vw, 320px))",
          }}
        >
          {/* Header Grid: 12 Columns */}
          <div className="grid grid-cols-1 gap-y-8 px-5 md:px-[clamp(28px,5vw,120px)] lg:grid-cols-12 lg:gap-x-10">
            {/* Left: Our Expertise */}
            <div className="flex items-start gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 lg:col-span-3 lg:pt-3">
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/60" />
              Our Expertise
            </div>

            {/* Center: Headline */}
            <h2
              className="block lg:col-span-6 lg:text-center"
              style={{
                fontSize: "clamp(2.15rem, 3.9vw, 6.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 500,
              }}
            >
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
                <motion.span
                  className="inline-block"
                  initial={{ y: "118%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease }}
                >
                  How we take your
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  className="inline-block"
                  initial={{ y: "118%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease, delay: 0.09 }}
                >
                  business to the next level
                </motion.span>
              </span>
            </h2>

            {/* Right: CTA & Brief */}
            <motion.div
              className="lg:col-span-3 lg:pt-2"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <p className="hidden max-w-sm text-[13px] leading-relaxed text-white/55 sm:block lg:text-sm">
                Bespoke web development and interactive design to bring your digital presence to life.
              </p>
              <a
                href="#services"
                className="group mt-5 inline-flex select-none items-center justify-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] leading-none text-black transition-colors hover:bg-white/85 active:scale-[0.98] motion-reduce:transform-none"
              >
                <span>See all services</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Interactive Service List */}
          <div
            className="mt-14 grid grid-cols-1 gap-y-10 px-5 md:px-[clamp(28px,5vw,120px)] lg:mt-24 lg:cursor-none lg:grid-cols-12 lg:gap-x-10"
            onPointerEnter={() => isDesktop && setIsHoveringList(true)}
            onPointerLeave={() => {
              setActiveIndex(null);
              setIsHoveringList(false);
            }}
          >
            <ul className="lg:col-span-12">
              {SERVICES_LIST.map((service, idx) => {
                const isActive = isDesktop && activeIndex === idx;
                const isDimmed = isDesktop && hasActive && activeIndex !== idx;

                return (
                  <motion.li
                    key={service.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease, delay: idx * 0.05 }}
                    className="border-b border-zinc-800"
                  >
                    <motion.div
                      animate={{ opacity: isDimmed ? 0.28 : 1 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <a
                        href={service.href}
                        onPointerEnter={() => isDesktop && setActiveIndex(idx)}
                        onFocus={() => isDesktop && setActiveIndex(idx)}
                        onBlur={() => setActiveIndex(null)}
                        className="relative flex items-center gap-4 py-5 outline-none lg:block lg:cursor-none lg:py-[0.12em]"
                        style={{
                          fontSize: "clamp(2.1rem, 7vw, 10.5rem)",
                          lineHeight: 1.04,
                          letterSpacing: "-0.04em",
                          fontWeight: 500,
                        }}
                      >
                        {isDesktop ? (
                          <>
                            {/* Sliding thumbnail image container */}
                            <motion.span
                              aria-hidden="true"
                              className="absolute left-0 top-1/2 block overflow-hidden rounded-2xl bg-white/5"
                              style={{
                                width: cardSize,
                                height: cardSize,
                                originX: 0,
                                originY: 0.5,
                              }}
                              initial={false}
                              animate={{
                                scale: isActive ? 1 : 0.8,
                                opacity: isActive ? 1 : 0,
                                y: "-50%",
                              }}
                              transition={thumbSpring}
                            >
                              <img
                                src={service.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </motion.span>

                            {/* Title sliding right */}
                            <motion.span
                              className="block whitespace-nowrap"
                              initial={false}
                              animate={{ x: isActive ? titleShift : 0 }}
                              transition={thumbSpring}
                            >
                              {service.title}
                            </motion.span>
                          </>
                        ) : (
                          /* Mobile / Tablet layout */
                          <>
                            <span
                              aria-hidden="true"
                              className="block h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/5 sm:h-20 sm:w-20"
                            >
                              <img
                                src={service.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-xl font-semibold sm:text-2xl">
                                {service.title}
                              </span>
                              <span className="mt-1.5 block text-[13px] font-normal leading-relaxed text-white/50">
                                {service.blurb}
                              </span>
                            </span>
                            <span className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white sm:flex">
                              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17 17 7M7 7h10v10" />
                              </svg>
                            </span>
                          </>
                        )}
                      </a>
                    </motion.div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
