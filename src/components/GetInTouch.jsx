import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const YELLOW_ACCENT = "#F0E040";
const ease = [0.16, 1, 0.3, 1];

function MarqueeRow({ reverse = false, outlined = false, seconds = 26 }) {
  return (
    <div aria-hidden="true" className="flex select-none overflow-hidden">
      <div
        className={`flex shrink-0 ${
          reverse
            ? "animate-[marquee-right_linear_infinite]"
            : "animate-[marquee-left_linear_infinite]"
        } motion-reduce:animate-none`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex shrink-0">
            {[0, 1, 2].map((itemIndex) => (
              <span
                key={itemIndex}
                className={`whitespace-nowrap px-4 text-[clamp(3rem,11vw,9rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] sm:px-8 ${
                  outlined
                    ? "text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.22)] sm:[-webkit-text-stroke:1.5px_hsl(var(--foreground)/0.22)]"
                    : "text-foreground/[0.07]"
                }`}
              >
                Let’s connect
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GetInTouch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative overflow-hidden px-4 pb-[clamp(40px,6vw,88px)] pt-[clamp(72px,11vw,168px)] font-['Schibsted_Grotesk',sans-serif] sm:px-6 md:px-[clamp(32px,5vw,96px)]"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Top: Rotated Yellow Badge & Giant Heading */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          {/* Yellow Rotated Badge */}
          <motion.span
            className="mb-4 inline-block rounded-[3px] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black sm:mb-5 sm:text-[11px]"
            style={{ backgroundColor: YELLOW_ACCENT, rotate: -4 }}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.92 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
            }}
          >
            Get in touch
          </motion.span>

          {/* Heading */}
          <h2 className="text-[clamp(2.75rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-foreground">
            {["Tell us what", "you're building"].map((line) => (
              <motion.span
                key={line}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Scroll scale divider line */}
        <motion.div
          className="mt-[clamp(32px,5vw,72px)] h-px origin-left bg-foreground/20"
          style={{ scaleX }}
        />
      </div>

      {/* Dual Background Marquee with Centered Yellow CTA */}
      <div className="relative -mx-4 mt-[clamp(48px,7vw,112px)] sm:-mx-6 md:-mx-[clamp(32px,5vw,96px)]">
        <div className="pointer-events-none">
          <MarqueeRow seconds={26} />
          <MarqueeRow reverse outlined seconds={34} />
        </div>

        {/* Centered Yellow CTA Pill Button */}
        <div className="absolute inset-0 grid place-items-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
          >
            <a
              href="mailto:hello@whycreatives.in"
              className="group inline-flex select-none items-center justify-center gap-3 rounded-full border-2 border-foreground px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] leading-none text-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none sm:gap-4 sm:px-9 sm:py-5 sm:text-lg"
              style={{ backgroundColor: YELLOW_ACCENT }}
            >
              <span>Let’s connect</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none sm:h-11 sm:w-11">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
