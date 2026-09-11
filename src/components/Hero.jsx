import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";

/*
  Nu = ["One stop solution for", "all creative needs", "and goals"]
  Text adapted for Anam's portfolio.
*/
const HERO_LINES = ["One stop solution for", "all creative needs", "and goals"];
const ease = [0.16, 1, 0.3, 1];

/* ── helpers ── */
const R = (n) => Math.round(n * 100) / 100;
const arc = (r, sweep, x, y) =>
  `A ${R(r)} ${R(r)} 0 0 ${sweep} ${R(x)} ${R(y)}`;

/**
 * Builds the SVG clip-path for the dark video panel.
 * The path is a rounded rectangle with step-shaped notches on the
 * left side where each line of hero text "cuts into" the panel.
 *
 * @param {number} w      - container width
 * @param {number} h      - container height
 * @param {Array}  corners - array of {right, bottom} for each text element
 * @param {number} r      - outer corner radius
 * @param {number} s      - inner step corner radius
 * @param {number} i      - left inset for the brand-label notch (optional)
 */
function buildClipPath(w, h, corners, r, s, i = 0) {
  const lastBottom = corners[corners.length - 1].bottom;
  const firstBottom = corners[0].bottom;
  const l = Math.max(4, Math.min(r * 0.6, i / 3));
  const hasBrandNotch =
    i > 12 && firstBottom >= r + l && firstBottom <= lastBottom - 2 * l;

  const d = [];

  /* ── top edge: start after the first text block, go right ── */
  d.push(`M ${R(corners[0].right)} 0`);
  d.push(`H ${R(w - r)}`);
  d.push(arc(r, 1, w, r));

  /* ── right edge ── */
  d.push(`V ${R(h - r)}`);
  d.push(arc(r, 1, w - r, h));

  /* ── bottom edge ── */
  d.push(`H ${R(r)}`);
  d.push(arc(r, 1, 0, h - r));

  /* ── left edge: either with brand-notch or plain ── */
  if (hasBrandNotch) {
    d.push(`V ${R(firstBottom + l)}`);
    d.push(arc(l, 1, l, firstBottom));
    d.push(`H ${R(i - l)}`);
    d.push(arc(l, 1, i, firstBottom + l));
    d.push(`V ${R(lastBottom - l)}`);
    d.push(arc(l, 0, i + l, lastBottom));
  } else {
    d.push(`V ${R(lastBottom + r)}`);
    d.push(arc(r, 1, r, lastBottom));
  }

  /* ── step notches going upward through each text line ── */
  for (let idx = corners.length - 1; idx >= 0; idx--) {
    const right = corners[idx].right;
    const prevBottom = idx === 0 ? 0 : corners[idx - 1].bottom;

    if (idx === corners.length - 1) {
      const g = Math.min(s, (corners[idx].bottom - prevBottom) / 2);
      d.push(`H ${R(right - g)}`);
      d.push(arc(g, 0, right, corners[idx].bottom - g));
    }

    if (idx === 0) {
      d.push("V 0");
      break;
    }

    const prevRight = corners[idx - 1].right;
    const segAbove = prevBottom - (idx - 2 >= 0 ? corners[idx - 2].bottom : 0);
    const segBelow = corners[idx].bottom - prevBottom;
    const m = Math.max(3, Math.min(s, Math.abs(prevRight - right) / 2, segAbove / 2, segBelow / 2));

    if (prevRight > right) {
      d.push(`V ${R(prevBottom + m)}`);
      d.push(arc(m, 1, right + m, prevBottom));
      d.push(`H ${R(prevRight - m)}`);
      d.push(arc(m, 0, prevRight, prevBottom - m));
    } else {
      d.push(`V ${R(prevBottom + m)}`);
      d.push(arc(m, 0, right - m, prevBottom));
      d.push(`H ${R(prevRight + m)}`);
      d.push(arc(m, 1, prevRight, prevBottom - m));
    }
  }

  d.push("Z");
  return d.join(" ");
}

export default function Hero() {
  /* refs for clip-path measurement */
  const containerRef = useRef(null);   // the aspect-ratio wrapper
  const textGroupRef = useRef(null);   // the text overlay group (left-top positioned)
  const labelRef = useRef(null);       // "byanam" label above h1
  const lineRefs = useRef([]);         // each h1 line <span>
  const ctaRef = useRef(null);         // CTA row below h1

  const [clipPath, setClipPath] = useState(null);

  const computeClip = useCallback(() => {
    const container = containerRef.current;
    const textGroup = textGroupRef.current;
    const label = labelRef.current;
    const ctaEl = ctaRef.current;
    const lines = lineRefs.current.filter(Boolean);

    if (!container || !textGroup || !label || !ctaEl || lines.length !== HERO_LINES.length)
      return;

    const cRect = container.getBoundingClientRect();
    const w = cRect.width;
    const h = cRect.height;
    if (w < 2 || h < 2) return;

    const rad = Math.max(14, Math.min(34, w * 0.026));

    /* measure each element relative to the container */
    const rel = (el) => {
      const r = el.getBoundingClientRect();
      return { right: r.right - cRect.left, bottom: r.bottom - cRect.top };
    };

    const labelPos = rel(label);
    const linePositions = lines.map(rel);
    const ctaPos = rel(ctaEl);

    /* merge the measurements into "corners" array */
    let corners = [...linePositions, ctaPos];

    /* merge corners that are very close together */
    for (let i = corners.length - 2; i >= 0; i--) {
      corners[i] = {
        ...corners[i],
        right: Math.max(corners[i].right, corners[i + 1].right),
      };
    }

    const maxRight = w - rad - 4;
    const merged = [];
    for (const c of corners) {
      const capped = {
        right: Math.min(c.right, maxRight),
        bottom: Math.min(c.bottom, h - rad - 4),
      };
      const last = merged[merged.length - 1];
      if (last && Math.abs(capped.right - last.right) < rad * 1.4) {
        last.right = Math.max(last.right, capped.right);
        last.bottom = Math.max(last.bottom, capped.bottom);
        continue;
      }
      if (last && capped.bottom <= last.bottom + 8) {
        last.right = Math.max(last.right, capped.right);
        last.bottom = Math.max(last.bottom, capped.bottom);
        continue;
      }
      merged.push(capped);
    }

    if (!merged.length) return;

    // Add the label's corner at the front
    const allCorners = [
      { right: Math.max(labelPos.right, merged[0].right), bottom: merged[0].bottom },
      ...merged.slice(1),
    ];

    const leftInset = Math.max(0, textGroup.getBoundingClientRect().left - cRect.left);
    setClipPath(buildClipPath(w, h, allCorners, rad, rad, leftInset));
  }, []);

  useLayoutEffect(() => {
    computeClip();
    const container = containerRef.current;
    const textGroup = textGroupRef.current;
    if (!container || !textGroup) return;

    let rafId = 0;
    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(() => { rafId = 0; computeClip(); });
    };
    const ro = new ResizeObserver(schedule);
    ro.observe(container);
    ro.observe(textGroup);
    return () => { ro.disconnect(); if (rafId) cancelAnimationFrame(rafId); };
  }, [computeClip]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => { if (active) computeClip(); });
    return () => { active = false; };
  }, [computeClip]);

  const padL = "var(--pad-l)";
  const padR = "var(--pad-r)";

  return (
    <section className="relative min-h-svh w-full bg-white transition-colors duration-300 md:min-h-0 dark:bg-[#111]">
      <div
        className="w-full px-3 md:px-[clamp(28px,4.5vw,120px)]"
        style={{
          paddingTop: "clamp(100px, 11vw, 112px)",
          paddingBottom: "clamp(30px, 4vw, 76px)",
        }}
      >
        <div
          ref={containerRef}
          className="relative w-full aspect-[9/16] md:aspect-video"
          style={{ "--panel-w": "calc(100vw - 24px)" }}
        >
          {/* ── Dark video/background panel (clipped) ── */}
          <div
            className="absolute inset-0 overflow-hidden bg-[#161616] dark:bg-[#202020]"
            style={{
              clipPath: clipPath ? `path("${clipPath}")` : undefined,
              WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
              borderRadius: clipPath ? undefined : "clamp(20px, 2.6vw, 34px)",
            }}
          >
            {/* Animated gradient background (replacing video) */}
            <div className="absolute inset-0">
              {/* Base gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 40%, rgba(30,30,60,0.8) 0%, transparent 55%), radial-gradient(ellipse at 75% 60%, rgba(20,20,50,0.6) 0%, transparent 55%), #0a0a0f",
                }}
              />
              {/* Floating orbs */}
              {[
                { color: "rgba(99,102,241,0.15)", x: "20%", y: "30%", size: 300, dur: 12 },
                { color: "rgba(236,72,153,0.1)", x: "70%", y: "60%", size: 250, dur: 15 },
                { color: "rgba(6,182,212,0.1)", x: "50%", y: "20%", size: 200, dur: 18 },
              ].map((orb, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full blur-3xl"
                  style={{
                    width: orb.size,
                    height: orb.size,
                    background: `radial-gradient(circle, ${orb.color}, transparent)`,
                    left: orb.x,
                    top: orb.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    x: [0, 40 * (i % 2 ? 1 : -1), 0],
                    y: [0, -30 * (i % 2 ? -1 : 1), 0],
                  }}
                  transition={{
                    duration: orb.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
          </div>

          {/* ── Text overlay (positioned OUTSIDE the clip, top-left) ── */}
          <div
            ref={textGroupRef}
            className="absolute left-0 top-0 z-10 flex flex-col items-start [--pad-l:12px] [--pad-r:16px] md:left-[min(7vw,104px)] md:[--pad-l:clamp(20px,2.2vw,34px)] md:[--pad-r:clamp(20px,2vw,30px)]"
          >
            {/* Brand label */}
            <div
              ref={labelRef}
              className="w-fit"
              style={{
                paddingLeft: padL,
                paddingRight: padR,
                paddingTop: "clamp(12px, 1.4vw, 20px)",
                paddingBottom: "clamp(10px, 1.2vw, 18px)",
              }}
            >
              <motion.span
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-black dark:bg-white" />
                <span className="whitespace-nowrap text-[12px] font-medium leading-none text-black sm:text-[13px] lg:text-[15px] dark:text-white">
                  byanam
                </span>
              </motion.span>
            </div>

            {/* Headline */}
            <h1
              className="font-['Schibsted_Grotesk','Plus_Jakarta_Sans',sans-serif] text-black dark:text-white"
              style={{
                fontSize: "clamp(1.6rem, 7.5vw, 104px)",
                fontWeight: 500,
                letterSpacing: "-0.022em",
                margin: 0,
              }}
            >
              {HERO_LINES.map((line, i) => (
                <span
                  key={line}
                  ref={(el) => { lineRefs.current[i] = el; }}
                  className="block w-fit overflow-hidden whitespace-nowrap"
                  style={{
                    lineHeight: 1,
                    paddingLeft: padL,
                    paddingRight: padR,
                    paddingBottom: "0.14em",
                    marginBottom: i === HERO_LINES.length - 1 ? 0 : "-0.25em",
                  }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "108%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      ease,
                      delay: 0.08 + i * 0.09,
                    }}
                    style={{ willChange: "transform" }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* CTA buttons */}
            <div
              ref={ctaRef}
              className="w-fit"
              style={{
                paddingLeft: padL,
                paddingRight: padR,
                paddingTop: "clamp(14px, 1.6vw, 24px)",
                paddingBottom: "clamp(14px, 1.6vw, 24px)",
              }}
            >
              <motion.div
                className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.45 }}
              >
                <a
                  href="#projects"
                  className="group flex items-center gap-2.5 rounded-full bg-[#161616] py-2 pl-5 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-black lg:text-[15px] dark:bg-white dark:text-black dark:hover:bg-white/85"
                >
                  View my work
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 dark:bg-black/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </span>
                </a>
                <a
                  href="mailto:anamrazzaque.work@gmail.com"
                  className="group flex items-center gap-1.5 pl-5 text-[14px] font-semibold text-black transition-opacity hover:opacity-60 md:pl-0 lg:text-[15px] dark:text-white"
                >
                  Start a project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
