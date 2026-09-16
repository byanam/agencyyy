import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Footer({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = "hello@redis.agency";
  const studioEmail = "anamrazzaque.work@gmail.com";

  const handleCopy = () => {
    navigator.clipboard?.writeText(studioEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer className="relative w-full bg-black px-4 pt-36 pb-24 sm:pt-44 sm:pb-28 select-none flex flex-col items-center justify-center text-center">
      <div className="container-redis-hero flex flex-col items-center justify-center text-center">
        <span className="mb-6 font-sans-swiss text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
          Get In Touch
        </span>

        {/* Big Editorial Email */}
        <motion.div
          className="group cursor-pointer w-full flex flex-col items-center justify-center text-center"
          onClick={handleCopy}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <a
            href={`mailto:${studioEmail}`}
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            className="font-editorial font-normal lowercase tracking-tight text-white hover:text-white/80 transition-colors break-all"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
          >
            {studioEmail}
          </a>

          <div className="mt-4 flex w-full justify-center text-center">
            <span className="font-sans-swiss text-xs uppercase tracking-widest text-white/50">
              {copied ? "✓ Copied to clipboard" : "Click to copy email"}
            </span>
          </div>
        </motion.div>

        {/* Links Navigation */}
        <div className="mt-16 sm:mt-24 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans-swiss text-white/70">
          <button onClick={onOpenContact} className="transition-colors hover:text-white">
            Contact
          </button>
          <a href="https://t.me/redisagency" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Telegram
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Behance
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Dribbble
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-20 sm:mt-28 border-t border-white/10 pt-8 w-full flex flex-col items-center justify-center text-center">
          <p className="font-sans-swiss text-xs uppercase tracking-[0.2em] text-white/40">
            © 2026 BYANAM DESIGN STUDIO · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
