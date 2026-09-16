import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Footer({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = "anamrazzaque.work@gmail.com";

  const handleCopy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer className="relative w-full bg-[#050505] px-4 pt-32 pb-16 text-center font-space select-none">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Giant Email Address Matching Prototype */}
        <motion.div
          className="relative group cursor-pointer"
          onClick={handleCopy}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <a
            href={`mailto:${email}`}
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            className="block font-syne font-black lowercase tracking-[-0.04em] text-white transition-opacity hover:opacity-80 break-all"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)", lineHeight: 0.95 }}
          >
            {email}
          </a>

          {/* Copy Tooltip */}
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70">
              {copied ? "✓ Copied to clipboard" : "Click to copy email"}
            </span>
          </div>
        </motion.div>

        {/* Minimal Social Links Grid Matching Prototype */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:mt-28">
          <button
            onClick={onOpenContact}
            className="font-syne text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white sm:text-base"
          >
            CONTACT
          </button>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syne text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white sm:text-base"
          >
            WHATSAPP
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syne text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white sm:text-base"
          >
            LINKEDIN
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syne text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white sm:text-base"
          >
            INSTAGRAM
          </a>
        </div>

        {/* Bottom Tag: MAKING SINCE 2020 */}
        <div className="mt-24 border-t border-white/10 pt-10 w-full flex flex-col items-center sm:mt-32">
          <p
            className="font-syne text-base font-extrabold uppercase tracking-[0.28em] text-white/40 sm:text-xl md:text-2xl"
          >
            MAKING SINCE 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
