import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function ProjectShowcase() {
  return (
    <div
      id="client-story"
      className="relative z-10 w-full scroll-mt-24 px-3 pb-[clamp(28px,4vw,64px)] sm:px-5 md:px-6"
      style={{ marginTop: "-40px" }}
    >
      <motion.figure
        className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] bg-[#111] md:rounded-[32px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
      >
        {/* Gradient background */}
        <div
          className="relative flex flex-col items-center justify-center px-6 py-20 md:flex-row md:py-28 lg:py-36"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(79,70,229,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(219,39,119,0.12) 0%, transparent 60%), #111",
          }}
        >
          {/* Left: showcase text */}
          <div className="max-w-xl md:flex-1 md:pr-12">
            <motion.div
              className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              Spotlight
            </motion.div>

            <motion.h3
              className="mb-4 text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              Unbrief
            </motion.h3>

            <motion.p
              className="mb-6 text-sm leading-relaxed text-white/60 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease }}
            >
              Turn messy client briefs and discovery calls into scoped,
              defensibly priced 3-tier proposals in 8 minutes. Engineered for
              digital and creative agency leaders.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease }}
            >
              {["SaaS Tool", "Design System", "Swiss Modernist", "AI-Powered"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium text-white/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-white/30">
                Key features
              </span>
            </motion.div>

            <motion.ul
              className="mt-4 space-y-2 text-sm text-white/50"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } } }}
            >
              {[
                "Messy input ingest — emails, briefs, audio transcripts",
                "Ambiguity & risk scanner before quoting",
                "3-tier Good/Better/Best pricing architecture",
                "Interactive web proposals with e-signatures",
              ].map((item) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: visual */}
          <motion.div
            className="mt-12 flex-1 md:mt-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl md:max-w-lg">
              {/* Fake app UI */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-auto font-['Space_Mono',monospace] text-[10px] text-white/20">
                  unbrief.app
                </span>
              </div>

              {/* Content blocks */}
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded bg-white/5" />
                <div className="h-4 w-1/2 rounded bg-white/5" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Good", "Better", "Best"].map((tier, i) => (
                    <div
                      key={tier}
                      className={`rounded-lg border p-3 text-center ${
                        i === 1
                          ? "border-indigo-500/40 bg-indigo-500/10"
                          : "border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        {tier}
                      </div>
                      <div className="font-['Space_Mono',monospace] text-lg font-bold text-white/70">
                        ${(i + 1) * 2.5}k
                      </div>
                      <div className="mt-2 space-y-1">
                        {Array.from({ length: 2 + i }).map((_, j) => (
                          <div key={j} className="h-2 w-full rounded bg-white/5" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-3 w-full rounded bg-white/5" />
                <div className="h-3 w-2/3 rounded bg-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.figure>
    </div>
  );
}
