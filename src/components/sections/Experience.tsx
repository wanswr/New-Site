"use client";

import HeroScene from "./Experience/HeroScene";
import NarrativeScene from "./Experience/NarrativeScene";
import FloatingAtmosphere from "../ui/FloatingAtmosphere";
import TransformationScene from "./Experience/TransformationScene";
import LightingScene from "./Experience/LightingScene";
import MacroDetailScene from "./Experience/MacroDetailScene";
import BeforeAfterScene from "./Experience/BeforeAfterScene";
import ProcessScene from "./Experience/ProcessScene";
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

      {/* Ambient Depth Layer */}
      <FloatingAtmosphere />

      <section className="relative w-full">
        <HeroScene />
      </section>
      <section className="relative w-full">
        <NarrativeScene />
      </section>
      <section className="relative w-full">
        <TransformationScene />
      </section>
      <section className="relative w-full">
        <LightingScene />
      </section>
      <section className="relative w-full">
        <MacroDetailScene />
      </section>
      <section className="relative w-full">
        <BeforeAfterScene />
      </section>
      <section className="relative w-full">
        <ProcessScene />
      </section>
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <AboutScene />
        <ExplorerScene />
        <PortfolioScene />
        <CalculatorScene />
        <FAQScene />
        <FinalScene />
      </div>
    </div>
  );
}
