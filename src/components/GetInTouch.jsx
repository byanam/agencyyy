import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const ACCENT_COLOR = "#c8ff00";

export default function GetInTouch() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-[clamp(40px,6vw,88px)] pt-[clamp(72px,11vw,168px)] sm:px-6 md:px-[clamp(32px,5vw,96px)]"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          {/* Badge */}
          <motion.span
            className="mb-4 inline-block rounded-[3px] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black sm:mb-5 sm:text-[11px]"
            style={{ backgroundColor: ACCENT_COLOR, rotate: -4 }}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.92 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.55, ease },
              },
            }}
          >
            Get in touch
          </motion.span>

          {/* Large heading */}
          <h2 className="text-[clamp(2.75rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-foreground">
            {["Let's build", "something great"].map((line) => (
              <motion.span
                key={line}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease },
                  },
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          {/* Subtitle + CTA */}
          <motion.div
            className="mt-8 flex flex-col gap-6 sm:mt-12 md:flex-row md:items-end md:justify-between"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
          >
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether it's a full web app, a landing page, or a creative
              experiment — I'd love to hear about your project. Let's make
              something that people remember.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="mailto:anamrazzaque.work@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all duration-300 hover:gap-4"
              >
                Send an email
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <a
                href="https://github.com/byanam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-foreground/5"
              >
                GitHub
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-16 h-px w-full bg-border/30 md:mt-24"
          style={{ opacity }}
        />
      </div>
    </section>
  );
}
