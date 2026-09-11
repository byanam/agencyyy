import { useEffect, useRef } from "react";

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    let lenis;
    let raf;

    async function init() {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function animate(time) {
          lenis.raf(time);
          raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);
      } catch (e) {
        console.warn("Lenis not available, using native scroll");
      }
    }

    init();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return lenisRef;
}
