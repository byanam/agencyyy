import { useState, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientStrip from "./components/ClientStrip";
import AboutStrip from "./components/AboutStrip";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import ProjectShowcase from "./components/ProjectShowcase";
import TechMarquee from "./components/TechMarquee";
import FAQ from "./components/FAQ";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import ContactDrawer from "./components/ContactDrawer";

function PageBody({ isClone = false, onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <ClientStrip />
      <AboutStrip isClone={isClone} />
      <FeaturedProjects isClone={isClone} />
      <Services onOpenContact={onOpenContact} isClone={isClone} />
      <ProjectShowcase isClone={isClone} />
      <TechMarquee />
      <FAQ isClone={isClone} />
      <GetInTouch onOpenContact={onOpenContact} isClone={isClone} />
      <Footer onOpenContact={onOpenContact} isClone={isClone} />
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
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar onOpenContact={handleOpenContact} />
      <ContactDrawer isOpen={contactOpen} onClose={handleCloseContact} />

      {/* ── Redis Agency-Style Continuous Loop Container ── */}
      <main data-loop-scroll="main" className="relative w-full">
        {/* Primary Page Wrap (Measured for seamless scroll wrapping) */}
        <div ref={wrapRef} data-loop-scroll="wrap" className="relative w-full">
          <PageBody onOpenContact={handleOpenContact} />
        </div>

        {/* Secondary Page Wrap (Visual loop clone for uninterrupted continuous flow) */}
        <div
          data-loop-scroll="wrap"
          aria-hidden="true"
          className="relative w-full"
        >
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
