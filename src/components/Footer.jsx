import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/why.creatives/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/whycreatives" },
  { label: "X", href: "https://twitter.com/whycreatives" },
  { label: "WhatsApp", href: "https://wa.me/918210198880" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-12 w-full bg-background p-3 font-['Schibsted_Grotesk',sans-serif] [--footer-card:#0d0d0d] [--footer-frame:hsl(var(--background))] sm:mt-16 sm:p-5 md:p-6 dark:[--footer-card:#1c1c1c]">
      <div className="relative w-full overflow-hidden rounded-[24px] bg-[var(--footer-card)] md:rounded-[32px]">
        {/* Top-Right "Send me back up" Pill */}
        <div
          onClick={scrollToTop}
          className="absolute right-0 top-0 z-20 hidden h-[44px] cursor-pointer items-center gap-1.5 rounded-bl-[24px] rounded-tr-[24px] bg-[var(--footer-frame)] px-6 text-xs font-semibold text-neutral-800 transition-opacity hover:opacity-90 md:flex md:rounded-tr-[32px] dark:text-neutral-200 select-none"
        >
          <span>Sh*t I've gone too far, send me back up</span>
          <span className="text-sm">👆</span>
        </div>

        {/* Mobile version of the back to top pill */}
        <div
          onClick={scrollToTop}
          className="absolute bottom-0 right-0 z-20 flex h-[40px] cursor-pointer items-center gap-1.5 rounded-br-[24px] rounded-tl-[24px] bg-[var(--footer-frame)] px-4 text-[11px] font-semibold text-neutral-800 transition-opacity hover:opacity-90 md:hidden dark:text-neutral-200 select-none"
        >
          <span>Back to top</span>
          <span className="text-xs">👆</span>
        </div>

        {/* Footer content */}
        <footer className="relative overflow-hidden px-5 pb-16 pt-12 text-white sm:px-8 sm:pt-16 md:pb-12 md:pt-20 lg:px-20">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-12 pb-12 pt-4 lg:flex-row lg:gap-16">
              {/* Left Column: Brand & CTA */}
              <div className="flex max-w-sm flex-col items-start gap-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="group inline-flex items-center gap-3 select-none"
                  aria-label="WhyCreatives home"
                >
                  <img
                    src="/logo.png"
                    alt="WhyCreatives logo"
                    width={44}
                    height={44}
                    className="h-9 w-9 shrink-0 object-contain invert transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
                  />
                  <span className="text-xl font-black tracking-tighter text-white sm:text-2xl">
                    WhyCreatives.
                  </span>
                </a>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  Do you like
                  <br />
                  what you see?
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:scale-[1.03] hover:bg-white/85"
                  >
                    <span>Start a project</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                  <div className="flex flex-col gap-1 leading-none">
                    <span className="text-[11px] font-semibold text-white">
                      Scope-led proposals
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Built around your brief
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Columns: Nav Links */}
              <div className="grid w-full flex-1 grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:w-auto">
                {/* Learn Column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white opacity-95">
                    Learn
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs text-neutral-300 sm:text-sm">
                    {["About", "Culture", "Client work", "Processes", "FAQs", "Blog"].map((item) => (
                      <li key={item}>
                        <a
                          href="#about"
                          className="group relative inline-block transition-colors hover:text-white"
                        >
                          <span>{item}</span>
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white opacity-95">
                    Explore
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs text-neutral-300 sm:text-sm">
                    {[
                      { label: "Services", href: "#services" },
                      { label: "Case Studies", href: "#work" },
                      { label: "Client story", href: "#client-story" },
                      { label: "Ask AI", href: "#faq" },
                      { label: "Contact", href: "#contact" },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="group relative inline-block transition-colors hover:text-white"
                        >
                          <span>{label}</span>
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white opacity-95">
                    Social
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs text-neutral-300 sm:text-sm">
                    {SOCIAL_LINKS.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-block transition-colors hover:text-white"
                        >
                          <span>{label}</span>
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-neutral-400">
              <p>© {new Date().getFullYear()} WhyCreatives. All rights reserved.</p>
              <p>One team for video, digital products, and growth.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
