import { useState, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Cases from "./components/Cases";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ContactDrawer from "./components/ContactDrawer";

function PageBody({ isClone = false, onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <ClientLogos />
      <Cases isClone={isClone} />
      <Services isClone={isClone} onOpenContact={onOpenContact} />
      <Team />
      <Footer onOpenContact={onOpenContact} />
    </>
  );
}

function AppContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const wrapRef = useRef(null);

  useLenis({ wrapRef });

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Top Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Slide-In Contact Drawer */}
      <ContactDrawer isOpen={contactOpen} onClose={handleCloseContact} />

      {/* ── Continuous Infinite Scroll Loop Container (Redis Agency Mechanics) ── */}
      <main data-loop-scroll="main" className="relative w-full">
        {/* Primary Page Wrap */}
        <div ref={wrapRef} data-loop-scroll="wrap" className="relative w-full">
          <PageBody onOpenContact={handleOpenContact} />
        </div>

        {/* Secondary Page Wrap (Visual Loop Clone for seamless flow) */}
        <div data-loop-scroll="wrap" aria-hidden="true" className="relative w-full">
          <PageBody isClone={true} onOpenContact={handleOpenContact} />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="byanam-theme">
      <AppContent />
    </ThemeProvider>
  );
}
