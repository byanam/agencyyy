import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "What technologies do you work with?",
    a: "I primarily work with React, Next.js, Astro, and vanilla JavaScript for the frontend. For styling, I use TailwindCSS and vanilla CSS with custom properties. I also work with Three.js/WebGL for 3D experiences, Firebase for backend services, and Framer Motion for animations.",
  },
  {
    q: "Are your projects open source?",
    a: "Yes — all my public projects are open source and available on GitHub. I believe in building tools that anyone can learn from, contribute to, and use freely. Every project includes proper documentation and MIT licensing.",
  },
  {
    q: "How do you approach a new project?",
    a: "I start with understanding the core problem, then design the architecture before writing code. I prioritize performance, accessibility, and clean code. Every interface is designed with obsessive attention to micro-interactions, typography, and visual hierarchy.",
  },
  {
    q: "Can I hire you for freelance work?",
    a: "I'm open to select freelance projects — especially those involving creative web experiences, design systems, or interactive UI. Reach out via email at anamrazzaque.work@gmail.com and let's discuss your project.",
  },
  {
    q: "What makes your work different?",
    a: "I don't ship minimum viable products. Every project I build has premium-grade polish — from scroll-driven animations to custom cursor effects to responsive dark modes. I treat every pixel as a design decision.",
  },
];

const ease = [0.16, 1, 0.3, 1];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      className="border-b border-border/40"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left md:py-7"
      >
        <span className="pr-8 text-base font-semibold text-foreground md:text-lg">
          {item.q}
        </span>
        <motion.div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/40"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="insights"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(56px, 7vw, 120px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
        {/* Left heading */}
        <motion.div
          className="mb-10 shrink-0 lg:mb-0 lg:w-[340px] lg:pt-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            FAQ
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
            Common
            <br />
            questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Everything you might want to know about working with me.
          </p>
        </motion.div>

        {/* Right accordion */}
        <div className="flex-1 border-t border-border/40">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
