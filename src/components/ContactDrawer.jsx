import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_TYPES = [
  "Interactive Website",
  "Creative Frontend",
  "Full-Stack Web App",
  "Design System",
  "Speed & 60fps Optimization",
];

export default function ContactDrawer({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(["Interactive Website"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const drawerRef = useRef(null);

  const directEmail = "anamrazzaque.work@gmail.com";

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard?.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${selectedTypes.join(", ")} - ${name || "New Client"}`
    );
    const body = encodeURIComponent(
      `Hi Anam,\n\nName: ${name}\nEmail: ${email}\nServices: ${selectedTypes.join(", ")}\n\nProject details:\n${message}\n`
    );
    window.open(`mailto:${directEmail}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Slide-in Drawer */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="fixed bottom-0 right-0 top-0 z-[101] flex w-full max-w-[560px] flex-col border-l border-white/15 bg-black font-space text-white"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Available for new projects
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                aria-label="Close drawer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Drawer Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8" data-lenis-prevent>
              {/* Title & Copy */}
              <div className="mb-8">
                <p className="mb-2 text-xs font-mono uppercase tracking-widest text-white/50">
                  [ INITIATE COLLABORATION ]
                </p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Let’s build something unforgettable.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Have an ambitious website, web application, or creative development project in mind? Let’s talk details.
                </p>
              </div>

              {/* Direct email quick action */}
              <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                      Direct Email
                    </span>
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {directEmail}
                    </p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
                  >
                    {copied ? (
                      <>
                        <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-white">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Types Selection */}
                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    What are you looking to create?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = selectedTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleType(type)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                            isSelected
                              ? "border-white bg-white text-black"
                              : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Your Name / Studio
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/[0.07]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/[0.07]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the goals, timeline, and deliverables for your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/[0.07]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-black transition hover:bg-white/90 disabled:opacity-50"
                >
                  {submitted ? (
                    <span>Opening mail client...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </>
                  )}
                </button>
              </form>

              {/* Social / Studio Links */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                  Connect & Inspect Code
                </span>
                <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                  <a
                    href="https://github.com/byanam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    X / Twitter ↗
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
