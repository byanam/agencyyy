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
    <footer className="relative w-full bg-black px-4 pt-32 pb-20 text-center select-none">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* anamrazzaque.work@gmail.com in Syncopate from Paper */}
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
            className="block font-syncopate font-bold lowercase tracking-normal text-white transition-opacity hover:opacity-80 break-all"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.8rem)", lineHeight: 1.15 }}
          >
            {email}
          </a>

          {/* Copy indicator */}
          <div className="mt-4 flex justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              {copied ? "✓ Copied to clipboard" : "Click to copy"}
            </span>
          </div>
        </motion.div>

        {/* Links Grid in Syncopate from Paper */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:mt-28">
          <button
            onClick={onOpenContact}
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm md:text-base"
          >
            contact
          </button>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm md:text-base"
          >
            whatsapp
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm md:text-base"
          >
            Linkdin
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm md:text-base"
          >
            instagram
          </a>
        </div>

        {/* making since 2020 in Syncopate from Paper */}
        <div className="mt-24 border-t border-white/10 pt-10 w-full flex flex-col items-center sm:mt-32">
          <p
            className="font-syncopate text-sm font-bold uppercase tracking-[0.25em] text-white/40 sm:text-lg md:text-xl"
          >
            making since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
