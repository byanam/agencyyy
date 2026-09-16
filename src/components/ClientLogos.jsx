const LOGOS = [
  { name: "Ozon Fresh", src: "/images/logos/ozon-fresh-logo.svg" },
  { name: "X5 Group", src: "/images/logos/x5-logo.svg" },
  { name: "Yandex Lavka", src: "/images/logos/lavka-logo.svg" },
  { name: "Pfizer", src: "/images/logos/phizer-logo.svg" },
  { name: "Bayer", src: "/images/logos/bayer-logo.svg" },
  { name: "Amway", src: "/images/logos/amway-logo.svg" },
  { name: "Metro", src: "/images/logos/metro-logo.svg" },
  { name: "Yango", src: "/images/logos/yango-logo.svg" },
  { name: "Kuper", src: "/images/logos/kuper-logo.svg" },
  { name: "Otello", src: "/images/logos/otello-logo.svg" },
];

export default function ClientLogos() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black py-10 sm:py-14 select-none">
      <div className="flex w-full overflow-hidden">
        <div className="redis-marquee-carousel flex items-center gap-14 sm:gap-20 whitespace-nowrap">
          {LOGOS.concat(LOGOS).map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-10 sm:h-12 w-28 sm:w-36 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto max-w-full object-contain filter invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
