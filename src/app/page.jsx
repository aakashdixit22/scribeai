"use client";
import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Hero";
import DevelopersShowcase from "@/components/Developers";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Features } from "@/components/Features";
import Squares from "@/components/ui/Squares";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="fixed inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#404040"
          hoverFillColor="rgba(122, 122, 122, 0.2)"
        />
      </div>
      <div className="relative z-10">
        <HomeNavbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="developers">
          <DevelopersShowcase />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}