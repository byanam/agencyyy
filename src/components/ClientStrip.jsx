import { motion } from "framer-motion";

const TECH_PARTNERS = [
  "React 19",
  "Next.js",
  "TypeScript",
  "Three.js / WebGL",
  "TailwindCSS",
  "Framer Motion",
  "Lenis Smooth Scroll",
  "GSAP",
  "Node.js",
  "Vite",
  "Firebase",
  "Supabase",
];

export default function ClientStrip() {
  return (
    <div className="w-full border-y border-black/[0.08] bg-black/[0.02] py-4 font-['Schibsted_Grotesk',sans-serif] dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-[1500px] items-center overflow-hidden">
        <div className="flex shrink-0 items-center gap-3 pl-6 pr-6 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Core Stack & Capabilities</span>
          <span className="text-white/20">/</span>
        </div>

        <div className="relative flex flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex shrink-0 items-center gap-8 py-1"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TECH_PARTNERS, ...TECH_PARTNERS].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{tech}</span>
                <span className="font-mono text-emerald-400/50">—</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
