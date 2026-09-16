import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_OPTIONS = [
  "AD Creative",
  "HR Branding & Comms",
  "Illustration & Motion",
  "Brand Identity & Guidelines",
  "Development",
];

export default function ContactDrawer({ isOpen, onClose }) {
  const [selectedServices, setSelectedServices] = useState(["AD Creative"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const drawerRef = useRef(null);

  const destinationEmail = "anamrazzaque.work@gmail.com";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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

  const toggleService = (srv) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Brief: ${selectedServices.join(", ")} - ${name || "Client"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${email}\nServices: ${selectedServices.join(", ")}\n\nProject details:\n${message}\n`
    );
    window.open(`mailto:${destinationEmail}?subject=${subject}&body=${body}`, "_blank");
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
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Slide-in Drawer */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="fixed bottom-0 right-0 top-0 z-[101] flex w-full max-w-[560px] flex-col border-l border-white/15 bg-black font-sans-swiss text-white"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <span className="font-editorial text-lg text-white">Internet Sites®</span>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8" data-lenis-prevent>
              <div className="mb-8">
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-white">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Tell us about your project, timeline, and goals. We’ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Services Checkboxes */}
                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    What can we help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_OPTIONS.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                            isSelected
                              ? "border-white bg-white text-black"
                              : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Your Name / Company
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

                {/* Email / Telegram */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Email Address or Telegram Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com or @telegram"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/[0.07]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe deliverables, scope, and target launch date..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/[0.07]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="redis-btn-pill w-full py-3.5 text-sm font-semibold justify-center"
                >
                  {submitted ? "Opening mail client..." : "Send Brief →"}
                </button>
              </form>

              {/* Direct Telegram */}
              <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-xs text-white/50">
                <span>Prefer direct chat?</span>
                <a
                  href="https://t.me/redisagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Message on Telegram ↗
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
