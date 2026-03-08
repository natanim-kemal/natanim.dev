import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridBackground from "@/components/GridBackground";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Work from "@/components/Work";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: 'var(--background-base)' }}>
      <GridBackground />
      <Navbar />
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <div className="mt-4">
          <TechMarquee />
        </div>
        <About />
        <Work />
        <OpenSource />
        <Contact />
      </div>
    </main>
  );
}
