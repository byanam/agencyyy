import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Footer({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const primaryEmail = "hello@internetsites.agency";
  const directEmail = "anamrazzaque.work@gmail.com";

  const handleCopy = () => {
    navigator.clipboard?.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer className="relative w-full bg-black px-4 pt-36 pb-20 sm:pt-48 sm:pb-24 select-none flex flex-col items-center justify-center text-center">
      <div className="redis-container-wide flex flex-col items-center justify-center text-center">
        {/* Giant Redis Agency Style Email */}
        <motion.div
          className="group cursor-pointer w-full flex flex-col items-center justify-center text-center"
          onClick={handleCopy}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <a
            href={`mailto:${directEmail}`}
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            className="font-editorial font-light tracking-tight text-white hover:text-white/80 transition-colors"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.2rem)", lineHeight: 0.95 }}
          >
            hello@internetsites
            <br />
            <span className="italic">.agency</span>
          </a>

          <div className="mt-4 flex w-full justify-center text-center">
            <span className="font-suisse text-xs uppercase tracking-widest text-white/45">
              {copied ? "✓ Copied to clipboard" : "Click to copy email"}
            </span>
          </div>
        </motion.div>

        {/* Links Navigation matching Redis Agency */}
        <div className="mt-20 sm:mt-28 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-suisse text-xs sm:text-sm text-white/70">
          <a
            href="https://t.me/redisagency"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Telegram
          </a>
          <a
            href="https://www.behance.net/Redis_CA"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Behance
          </a>
          <a
            href="https://dribbble.com/redis_agency"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Dribbble
          </a>
          <button
            onClick={onOpenContact}
            className="transition-colors hover:text-white"
          >
            Get in touch
          </button>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-white/40 hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-16 sm:mt-20 border-t border-white/10 pt-8 w-full flex flex-col items-center justify-center text-center">
          <p className="font-suisse text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/35">
            © 2026 INTERNET SITES · DESIGN SUPPORT FOR MAJOR BRANDS
          </p>
        </div>
      </div>
    </footer>
  );
}
