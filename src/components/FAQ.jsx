import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const AI_QUERY =
  "Why should we hire Anam Razzaque (byanam) for bespoke websites, interactive web applications, and creative frontend development?";
const ENCODED_QUERY = encodeURIComponent(AI_QUERY);

const AI_PLATFORMS = [
  {
    name: "OpenAI",
    href: `https://chatgpt.com/?q=${ENCODED_QUERY}`,
    logo: "/ai-logos/openai.svg",
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${ENCODED_QUERY}`,
    logo: "/ai-logos/anthropic.svg",
  },
  {
    name: "Google",
    href: `https://www.google.com/search?udm=50&q=${ENCODED_QUERY}`,
    logo: "/ai-logos/google.svg",
  },
  {
    name: "Grok",
    href: `https://grok.com/?q=${ENCODED_QUERY}`,
    logo: "/ai-logos/grok.svg",
  },
];

export default function FAQ({ isClone = false }) {
  return (
    <section
      id={isClone ? undefined : "faq"}
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(56px, 7vw, 120px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Sub-label */}
        <motion.div
          className="mb-5 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          Don’t believe the hype?
        </motion.div>

        {/* Heading */}
        <h2
          className="text-foreground"
          style={{
            fontSize: "clamp(2.1rem, 5vw, 5.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            fontWeight: 700,
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
              See what AI has
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
              to say about us
            </motion.span>
          </span>
        </h2>

        {/* AI Action Buttons */}
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          {AI_PLATFORMS.map(({ name, href, logo }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex select-none items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold leading-none text-background transition-[opacity,box-shadow,transform] duration-300 ease-out hover:opacity-85 active:scale-[0.98] motion-reduce:transform-none"
            >
              <img
                src={logo}
                alt=""
                width={16}
                height={16}
                loading="lazy"
                className="h-4 w-4 shrink-0 invert dark:invert-0"
              />
              <span>{name}</span>
              <svg
                className="h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
        >
          Opens your assistant with the question ready to send. We don’t script the answer — read whatever it says.
        </motion.p>
      </div>
    </section>
  );
}
