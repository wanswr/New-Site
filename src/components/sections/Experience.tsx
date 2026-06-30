"use client";

import HeroScene from "./Experience/HeroScene";
import AboutScene from "./Experience/AboutScene";
import ExplorerScene from "./Experience/ExplorerScene";
import PortfolioScene from "./Experience/PortfolioScene";
import CalculatorScene from "./Experience/CalculatorScene";
import FAQScene from "./Experience/FAQScene";
import FinalScene from "./Experience/FinalScene";

export default function Experience() {
  return (
    <div id="main-experience" className="relative w-full bg-luxury-bg">
      {/* Global Cinematic Grain */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="relative w-full min-h-screen">
        <HeroScene />
      </section>
      <section className="relative w-full">
        <AboutScene />
      </section>
      <section className="relative w-full min-h-screen">
        <ExplorerScene />
      </section>
      <section className="relative w-full min-h-screen">
        <PortfolioScene />
      </section>
      <section className="relative w-full min-h-screen">
        <CalculatorScene />
      </section>
      <section className="relative w-full min-h-screen">
        <FAQScene />
      </section>
      <section className="relative w-full min-h-screen">
        <FinalScene />
      </section>
    </div>
  );
}
