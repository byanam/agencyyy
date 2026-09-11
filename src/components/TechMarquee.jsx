import { useRef, useState, useEffect } from "react";

const TECH_ITEMS = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Astro", icon: "🚀" },
  { name: "TypeScript", icon: "TS" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Framer Motion", icon: "✦" },
  { name: "Three.js", icon: "🧊" },
  { name: "Firebase", icon: "🔥" },
  { name: "Node.js", icon: "⬢" },
  { name: "Figma", icon: "◈" },
  { name: "Vite", icon: "⚡" },
  { name: "Git", icon: "⎇" },
];

export default function TechMarquee() {
  const trackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section
      ref={trackRef}
      className="w-full overflow-hidden bg-background py-10 md:py-14"
    >
      {/* Top marquee — left */}
      <div
        className="mb-4 flex w-max gap-6"
        style={{
          animation: isVisible ? "marquee-left 48s linear infinite" : "none",
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={`top-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border/40 bg-card/50 px-5 py-2.5 transition-colors hover:border-border hover:bg-card"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="whitespace-nowrap text-sm font-medium text-foreground/70">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom marquee — right */}
      <div
        className="flex w-max gap-6"
        style={{
          animation: isVisible ? "marquee-right 48s linear infinite" : "none",
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {[...items].reverse().map((item, i) => (
          <div
            key={`bottom-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border/40 bg-card/50 px-5 py-2.5 transition-colors hover:border-border hover:bg-card"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="whitespace-nowrap text-sm font-medium text-foreground/70">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
