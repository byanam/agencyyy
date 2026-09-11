import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutStrip from "./components/AboutStrip";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import ProjectShowcase from "./components/ProjectShowcase";
import TechMarquee from "./components/TechMarquee";
import FAQ from "./components/FAQ";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function ScrollToTop() {
  return null; // Lenis handles this
}

function AppContent() {
  useLenis();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <AboutStrip />
      <FeaturedProjects />
      <Services />
      <ProjectShowcase />
      <TechMarquee />
      <FAQ />
      <GetInTouch />
      <Footer />
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
