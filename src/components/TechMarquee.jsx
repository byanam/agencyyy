import { useRef, useState, useEffect } from "react";

const MARQUEE_TEXT = "Let's build a website worth remembering.";

function MarqueeRow({ reverse = false, duration = 28, running = true }) {
  return (
    <div className="flex w-max">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={`flex w-max shrink-0 ${
            reverse
              ? "animate-[marquee-right_linear_infinite]"
              : "animate-[marquee-left_linear_infinite]"
          }`}
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: running ? "running" : "paused",
          }}
        >
          {[0, 1].map((item) => (
            <span
              key={item}
              className="whitespace-nowrap pr-[0.35em] text-foreground"
              style={{
                fontSize: "clamp(2.75rem, 11vw, 13rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                fontWeight: 500,
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden bg-background font-['Schibsted_Grotesk',sans-serif]"
      style={{
        paddingTop: "clamp(56px, 7vw, 120px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
      aria-label="Let's work together"
    >
      <a
        href="#contact"
        className="group block select-none opacity-90 transition-opacity duration-500 hover:opacity-100"
      >
        <div className="overflow-hidden" aria-hidden="true">
          <MarqueeRow duration={26} running={isInView} />
        </div>
        <div className="mt-1 hidden overflow-hidden sm:block lg:mt-2" aria-hidden="true">
          <MarqueeRow reverse duration={32} running={isInView} />
        </div>
      </a>
    </section>
  );
}
