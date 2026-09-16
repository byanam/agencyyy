import { motion } from "framer-motion";

const SOCIAL_RAIL = [
  { href: "https://github.com/byanam", label: "GitHub" },
  { href: "https://www.linkedin.com/company/whycreatives/", label: "LinkedIn" },
  { href: "https://twitter.com/why_creatives", label: "X" },
  { href: "https://www.instagram.com/why.creatives/", label: "Instagram" },
];

const SOCIAL_SVGS = {
  instagram:
    "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  github:
    "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
  x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
};

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <span className="shrink-0 select-none font-mono text-[0.72em] font-bold leading-none tracking-tight grid place-content-center">
        in
      </span>
    );
  }
  const slug = label === "GitHub" ? "github" : label === "Instagram" ? "instagram" : "x";
  const path = SOCIAL_SVGS[slug];
  if (!path) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-12 w-full bg-background p-3 font-['Schibsted_Grotesk',sans-serif] [--footer-card:#0d0d0d] [--footer-frame:hsl(var(--background))] sm:mt-16 sm:p-5 md:p-6 dark:[--footer-card:#1c1c1c]">
      <div
        className="relative w-full overflow-hidden rounded-[24px] md:rounded-[32px]"
        style={{
          "--rail-icon": "2.25rem",
          "--rail-gap": "0.625rem",
          "--rail-inset": "0.625rem",
          "--rail-top": "1rem",
          "--rail-notch": "24px",
          "--rail-count": SOCIAL_RAIL.length,
          "--rail-w": "calc(2 * var(--rail-inset) + var(--rail-icon))",
          "--rail-h":
            "calc(var(--rail-top) + var(--rail-count) * var(--rail-icon) + (var(--rail-count) - 1) * var(--rail-gap) + var(--rail-inset) + var(--rail-notch))",
        }}
      >
        {/* Left Social Notch Frame */}
        <div
          className="absolute left-0 top-0 z-20 hidden bg-[var(--footer-frame)] rounded-br-[24px] rounded-tl-[24px] md:block md:rounded-tl-[32px]"
          style={{ width: "var(--rail-w)", height: "var(--rail-h)" }}
        >
          {/* Inner cutout rounded curve */}
          <div
            className="absolute z-20 bg-[var(--footer-card)]"
            style={{
              top: "calc(var(--rail-h) - var(--rail-notch))",
              left: "calc(var(--rail-w) - var(--rail-notch))",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="h-full w-full rounded-br-[24px] bg-[var(--footer-frame)]" />
          </div>
          {/* Right edge smooth corner */}
          <div
            className="absolute top-0 z-20 bg-[var(--footer-frame)]"
            style={{
              left: "var(--rail-w)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="h-full w-full rounded-tl-[24px] bg-[var(--footer-card)]" />
          </div>
          {/* Bottom edge smooth corner */}
          <div
            className="absolute left-0 z-20 bg-[var(--footer-frame)]"
            style={{
              top: "var(--rail-h)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="h-full w-full rounded-tl-[24px] bg-[var(--footer-card)]" />
          </div>
        </div>

        {/* Floating Social Icons inside the rail */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute z-30 hidden flex-col md:flex"
          style={{
            top: "var(--rail-top)",
            left: "var(--rail-inset)",
            gap: "var(--rail-gap)",
          }}
        >
          {SOCIAL_RAIL.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ width: "var(--rail-icon)", height: "var(--rail-icon)" }}
              className="flex select-none items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 active:scale-95"
            >
              <SocialIcon label={label} />
            </a>
          ))}
        </motion.div>

        {/* Top-Right "Send me back up" Pill with decorative notched corners */}
        <div
          onClick={scrollToTop}
          className="absolute right-0 top-0 z-20 hidden h-[44px] cursor-pointer select-none items-center justify-center gap-1.5 rounded-bl-[24px] rounded-tr-[24px] bg-[var(--footer-frame)] px-6 text-xs font-semibold leading-none text-neutral-800 transition-opacity hover:opacity-90 md:flex md:rounded-tr-[32px] dark:text-neutral-200"
        >
          <div className="absolute -left-[24px] top-0 z-20 h-[24px] w-[24px] bg-[var(--footer-frame)]">
            <div className="h-full w-full rounded-tr-[24px] bg-[var(--footer-card)]" />
          </div>
          <div className="absolute right-0 top-[44px] z-20 h-[24px] w-[24px] bg-[var(--footer-frame)]">
            <div className="h-full w-full rounded-tr-[24px] bg-[var(--footer-card)]" />
          </div>
          <span>Sh*t I've gone too far, send me back up</span>
          <span className="text-sm leading-none">👆</span>
        </div>

        {/* Mobile version of the back to top pill */}
        <div
          onClick={scrollToTop}
          className="absolute bottom-0 right-0 z-20 flex h-[44px] cursor-pointer select-none items-center justify-center gap-1.5 rounded-br-[24px] rounded-tl-[24px] bg-[var(--footer-frame)] px-4 text-[11px] font-semibold leading-none text-neutral-800 transition-opacity hover:opacity-90 md:hidden dark:text-neutral-200"
        >
          <div className="absolute -top-[24px] right-0 z-20 h-[24px] w-[24px] bg-[var(--footer-frame)]">
            <div className="h-full w-full rounded-br-[24px] bg-[var(--footer-card)]" />
          </div>
          <div className="absolute -left-[24px] bottom-0 z-20 h-[24px] w-[24px] bg-[var(--footer-frame)]">
            <div className="h-full w-full rounded-br-[24px] bg-[var(--footer-card)]" />
          </div>
          <span>Sh*t I've gone too far, send me back up</span>
          <span className="text-sm leading-none">👆</span>
        </div>

        {/* Footer content */}
        <footer className="relative overflow-hidden rounded-[24px] bg-[var(--footer-card)] px-4 pb-16 pt-8 text-white sm:px-8 md:pb-12 md:pt-12 md:rounded-[32px] lg:px-20 lg:pt-16">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-12 pb-12 pt-4 pl-0 sm:pl-4 md:pl-16 lg:flex-row lg:gap-16 lg:pl-20">
              {/* Left Column: Brand & CTA */}
              <div className="flex max-w-sm flex-col items-start gap-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="group inline-flex select-none items-center gap-3"
                  aria-label="byanam home"
                >
                  <img
                    src="/logo.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 object-contain invert transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none sm:h-11 sm:w-11"
                  />
                  <span className="text-xl font-black tracking-tighter text-white sm:text-2xl">
                    byanam.
                  </span>
                </a>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  Do you like
                  <br />
                  what you see?
                </h2>

                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href="#contact"
                    className="group inline-flex select-none items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold leading-none text-black transition-all hover:scale-[1.03] hover:bg-white/85 active:scale-[0.98] motion-reduce:transform-none"
                  >
                    <span>Start a project</span>
                    <svg
                      className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
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
                    {SOCIAL_RAIL.map(({ label, href }) => (
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
              <p>© {new Date().getFullYear()} Anam Razzaque. All rights reserved.</p>
              <p>Specialized in bespoke websites & interactive web applications.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
