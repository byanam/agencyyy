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
    <footer
      className="relative w-full bg-black px-4 pt-36 pb-24 sm:pt-44 sm:pb-28 select-none flex flex-col items-center justify-center text-center"
      style={{ textAlign: "center" }}
    >
      <div
        className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        {/* Redis Agency Style Contact Heading */}
        <span
          className="mb-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50 text-center block w-full"
          style={{ textAlign: "center" }}
        >
          START A CONVERSATION
        </span>

        {/* anamrazzaque.work@gmail.com in Syncopate */}
        <motion.div
          className="relative group cursor-pointer w-full flex flex-col items-center justify-center text-center"
          style={{ textAlign: "center", margin: "0 auto" }}
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
            className="block font-syncopate font-bold lowercase tracking-normal text-white transition-opacity hover:opacity-75 break-all w-full text-center"
            style={{
              fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            {email}
          </a>

          {/* Copy indicator */}
          <div className="mt-4 flex w-full justify-center text-center">
            <span
              className="font-mono text-xs uppercase tracking-widest text-white/50 text-center"
              style={{ textAlign: "center" }}
            >
              {copied ? "✓ Copied to clipboard" : "Click to copy"}
            </span>
          </div>
        </motion.div>

        {/* Links Navigation matching Redis Agency */}
        <div
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 sm:mt-28 w-full text-center"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <button
            onClick={onOpenContact}
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm"
          >
            Contact
          </button>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm"
          >
            Whatsapp
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-sm"
          >
            Instagram
          </a>
        </div>

        {/* Footer Bottom Bar */}
        <div
          className="mt-24 border-t border-white/10 pt-10 w-full flex flex-col items-center justify-center text-center sm:mt-32"
          style={{ textAlign: "center" }}
        >
          <p
            className="font-syncopate text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/40 w-full text-center"
            style={{ textAlign: "center" }}
          >
            making since 2020 · byanam design studio
          </p>
        </div>
      </div>
    </footer>
  );
}
