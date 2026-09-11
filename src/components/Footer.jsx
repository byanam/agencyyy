import { motion } from "framer-motion";

const FOOTER_LINKS = [
  {
    heading: "Navigation",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "Notes 101", href: "https://notes--101.web.app", external: true },
      { label: "PlayStation UI", href: "https://byanam.github.io/PlayStation-Store-UI/", external: true },
      { label: "Digital You", href: "https://byanam.github.io/digital-you/", external: true },
      { label: "Unbrief", href: "#", external: false },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/byanam", external: true },
      { label: "Email", href: "mailto:anamrazzaque.work@gmail.com", external: true },
    ],
  },
];

const MARQUEE_TEXT = "ANAM RAZZAQUE • DEVELOPER & DESIGNER • ";

const ease = [0.16, 1, 0.3, 1];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-12 w-full bg-background p-3 font-['Schibsted_Grotesk',sans-serif] [--footer-card:#0d0d0d] [--footer-frame:hsl(var(--background))] sm:mt-16 sm:p-5 md:p-6 dark:[--footer-card:#1c1c1c]">
      <div className="relative w-full overflow-hidden rounded-[24px] bg-[var(--footer-card)] md:rounded-[32px]">
        {/* Top-left notch */}
        <div
          className="absolute left-0 top-0 z-20 rounded-br-[24px] rounded-tl-[24px] bg-[var(--footer-frame)] md:rounded-tl-[32px]"
          style={{ width: "clamp(100px, 14vw, 200px)", height: "clamp(48px, 6vw, 80px)" }}
        >
          {/* Inner notch corners */}
          <div
            className="absolute bg-[var(--footer-card)]"
            style={{
              bottom: 0,
              right: "-16px",
              width: "16px",
              height: "16px",
            }}
          >
            <div className="h-full w-full rounded-bl-[16px] bg-[var(--footer-frame)]" />
          </div>
          <div
            className="absolute bg-[var(--footer-card)]"
            style={{
              top: "0",
              left: "100%",
              width: "16px",
              height: "16px",
            }}
          >
            <div className="h-full w-full rounded-tl-[16px] bg-[var(--footer-frame)]" />
          </div>

          {/* Back to top button inside notch */}
          <button
            onClick={scrollToTop}
            className="flex h-full w-full items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
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
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Top
          </button>
        </div>

        {/* Footer content */}
        <div className="px-6 pt-28 pb-8 md:px-12 md:pt-36 md:pb-10 lg:px-16">
          {/* Large footer heading */}
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              Let's create
              <br />
              <span className="text-white/30">something together.</span>
            </h2>
          </motion.div>

          {/* Footer marquee */}
          <div
            className="mb-12 overflow-hidden border-y border-white/5 py-4 md:mb-16"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex w-max gap-0"
              style={{ animation: "marquee-strip 48s linear infinite" }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-['Space_Mono',monospace] text-sm uppercase tracking-[0.25em] text-white/10"
                >
                  {MARQUEE_TEXT}
                </span>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <span className="text-sm font-bold">A</span>
                </div>
                <span className="text-sm font-semibold text-white">byanam</span>
              </div>
              <p className="text-xs leading-relaxed text-white/30">
                Developer & designer building polished digital experiences from
                the ground up.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  {group.heading}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={
                          !link.external
                            ? (e) => {
                                e.preventDefault();
                                const el = document.querySelector(link.href);
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                              }
                            : undefined
                        }
                        className="group flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                        {link.external && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            <path d="M7 17 17 7M7 7h10v10" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
            <p className="font-['Space_Mono',monospace] text-[11px] text-white/20">
              © {new Date().getFullYear()} Anam Razzaque. All rights reserved.
            </p>
            <p className="font-['Space_Mono',monospace] text-[11px] text-white/20">
              Crafted with obsessive attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
