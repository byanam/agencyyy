import { useEffect, useRef } from "react";

let globalLenis = null;

export function scrollToTarget(target, options = {}) {
  if (globalLenis) {
    globalLenis.scrollTo(target, {
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function useLenis({ wrapRef } = {}) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let lenis;
    let raf;
    let ro;
    let wrapHeight = 0;

    async function init() {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.8,
          infinite: false, // We control the seamless wrap precisely across our dual-wrap DOM
        });

        lenisRef.current = lenis;
        globalLenis = lenis;
        if (typeof window !== "undefined") {
          window.__lenis = lenis;
        }

        // Measure wrap height dynamically to support font/image shifts
        const updateWrapHeight = () => {
          if (wrapRef?.current) {
            wrapHeight = wrapRef.current.offsetHeight;
          }
        };

        if (wrapRef?.current) {
          updateWrapHeight();
          ro = new ResizeObserver(updateWrapHeight);
          ro.observe(wrapRef.current);
        }

        // Infinite loop handler on scroll
        lenis.on("scroll", () => {
          if (!wrapHeight || wrapHeight <= 0) return;

          // When scrolled past wrap 1 into wrap 2
          if (lenis.animatedScroll >= wrapHeight) {
            const shift = wrapHeight;
            lenis.animatedScroll -= shift;
            lenis.targetScroll -= shift;
            if (lenis.animate) {
              lenis.animate.value -= shift;
              lenis.animate.to -= shift;
              lenis.animate.from -= shift;
            }
            window.scrollTo(0, lenis.animatedScroll);
          } else if (lenis.animatedScroll < 0) {
            // When scrolled up past the top of wrap 1
            const shift = wrapHeight;
            lenis.animatedScroll += shift;
            lenis.targetScroll += shift;
            if (lenis.animate) {
              lenis.animate.value += shift;
              lenis.animate.to += shift;
              lenis.animate.from += shift;
            }
            window.scrollTo(0, lenis.animatedScroll);
          }
        });

        function animate(time) {
          lenis.raf(time);
          raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);
      } catch (e) {
        console.warn("Lenis initialization skipped, falling back to native scroll", e);
      }
    }

    init();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      if (lenis) {
        lenis.destroy();
        if (globalLenis === lenis) globalLenis = null;
      }
    };
  }, [wrapRef]);

  return lenisRef;
}
