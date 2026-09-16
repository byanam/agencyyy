import { useState, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedProjects from "./components/FeaturedProjects";
import ProcessStack from "./components/ProcessStack";
import Services from "./components/Services";
import ClientBubbles from "./components/ClientBubbles";
import Footer from "./components/Footer";
import ContactDrawer from "./components/ContactDrawer";

function PageBody({ isClone = false, onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <Marquee />
      <FeaturedProjects isClone={isClone} />
      <div id={isClone ? undefined : "process"}>
        <ProcessStack />
      </div>
      <Services isClone={isClone} />
      <ClientBubbles />
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
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* Top Floating Pill Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Slide-In Contact Drawer */}
      <ContactDrawer isOpen={contactOpen} onClose={handleCloseContact} />

      {/* Continuous Infinite Scroll Loop Container (Redis Agency Mechanics) */}
      <main data-loop-scroll="main" className="relative w-full">
        <div ref={wrapRef} data-loop-scroll="wrap" className="relative w-full">
          <PageBody onOpenContact={handleOpenContact} />
        </div>

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
