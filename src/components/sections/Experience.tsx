"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScene from "./Experience/HeroScene";
import ExplorerScene from "./Experience/ExplorerScene";
import PortfolioScene from "./Experience/PortfolioScene";
import CalculatorScene from "./Experience/CalculatorScene";
import FAQScene from "./Experience/FAQScene";
import FinalScene from "./Experience/FinalScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scenes = [
      "#scene-wrapper-hero",
      "#scene-wrapper-explorer",
      "#scene-wrapper-portfolio",
      "#scene-wrapper-calculator",
      "#scene-wrapper-faq",
      "#scene-wrapper-final"
    ];

    // Reset all scenes to a base state
    gsap.set(scenes, {
      autoAlpha: 0,
      yPercent: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    });

    // Initial state
    gsap.set("#scene-wrapper-hero", { autoAlpha: 1, pointerEvents: "auto" });
    gsap.set([
      "#scene-wrapper-explorer",
      "#scene-wrapper-portfolio",
      "#scene-wrapper-calculator",
      "#scene-wrapper-faq",
      "#scene-wrapper-final"
    ], { autoAlpha: 0, pointerEvents: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200%", // Reduced for faster navigation
        pin: true,
        scrub: 1.5, // Increased for smoother movement
        // Removed snap to prevent "jumping"
      }
    });

    // --- GLOBAL LIGHTING FLOW ---
    tl.to("#lighting-overlay", { backgroundColor: "#fef3c7", opacity: 0.15, duration: 5 }, "hero-start") // Morning
      .to("#lighting-overlay", { backgroundColor: "#ffffff", opacity: 0, duration: 5 }, "explorer-main") // Day
      .to("#lighting-overlay", { backgroundColor: "#f59e0b", opacity: 0.2, duration: 5 }, "portfolio-0") // Golden Hour
      .to("#lighting-overlay", { backgroundColor: "#1e1b4b", opacity: 0.6, duration: 5 }, "calculator-main"); // Evening

    // --- SCENE 0: HERO NARRATIVE ---
    tl.addLabel("hero-start");
    tl.to("#hero-content", { autoAlpha: 0, y: -30, duration: 4, ease: "power2.in" }, "hero-start")
      .to("#hero-bg-wrapper", { scale: 1.2, duration: 8, ease: "power2.inOut" }, "hero-start")
      .to("#ceiling-detail", { autoAlpha: 1, duration: 6, ease: "power2.inOut" }, "hero-start+=2");
    tl.addLabel("hero-end");
    tl.to({}, { duration: 2 }); // Dwell

    // --- TRANSITION: HERO -> EXPLORER ---
    tl.addLabel("transition-explorer");
    tl.to("#scene-wrapper-hero", { autoAlpha: 0, pointerEvents: "none", duration: 2 }, "transition-explorer")
      .to("#scene-wrapper-explorer", { autoAlpha: 1, pointerEvents: "auto", duration: 2 }, "transition-explorer")
      .fromTo("#explorer-scene", { yPercent: 20 }, { yPercent: 0, duration: 4, ease: "power2.out" }, "transition-explorer");
    tl.addLabel("explorer-main");
    tl.to({}, { duration: 6 }); // Dwell

    // --- TRANSITION: EXPLORER -> PORTFOLIO ---
    tl.addLabel("transition-portfolio");
    tl.to("#scene-wrapper-explorer", { autoAlpha: 0, pointerEvents: "none", duration: 2 }, "transition-portfolio")
      .to("#explorer-scene", { xPercent: -100, duration: 4, ease: "expo.inOut" }, "transition-portfolio")
      .to("#scene-wrapper-portfolio", { autoAlpha: 1, pointerEvents: "auto", duration: 2 }, "transition-portfolio")
      .fromTo("#portfolio-scene",
        { xPercent: 100 },
        { xPercent: 0, duration: 4, ease: "expo.inOut" },
        "transition-portfolio"
      );
    tl.addLabel("portfolio-0");

    // --- PORTFOLIO NARRATIVE ---
    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      if (i > 0) {
        tl.to({}, { duration: 4 }); // Dwell on current project
        const label = `portfolio-${i}`;
        tl.addLabel(label);

        tl.to(projects[i-1], { autoAlpha: 0, duration: 4, ease: "power2.in" }, label)
          .to(project, { autoAlpha: 1, duration: 4, ease: "power2.out" }, label);
      }
    });
    tl.to({}, { duration: 4 }); // Dwell on last project
    tl.addLabel("portfolio-end");

    // --- TRANSITION: PORTFOLIO -> CALCULATOR ---
    tl.addLabel("transition-calculator");
    tl.to("#scene-wrapper-portfolio", { autoAlpha: 0, pointerEvents: "none", duration: 2 }, "transition-calculator")
      .to("#scene-wrapper-calculator", { autoAlpha: 1, pointerEvents: "auto", duration: 2 }, "transition-calculator")
      .fromTo("#calculator-scene", { yPercent: 20 }, { yPercent: 0, duration: 4, ease: "power2.out" }, "transition-calculator");
    tl.addLabel("calculator-main");
    tl.to({}, { duration: 6 }); // Dwell

    // --- TRANSITION: CALCULATOR -> FAQ/FINAL ---
    tl.addLabel("transition-final");
    tl.to("#scene-wrapper-calculator", { autoAlpha: 0, pointerEvents: "none", duration: 2 }, "transition-final")
      .to("#calculator-scene", { yPercent: -100, duration: 4, ease: "expo.inOut" }, "transition-final")
      .to("#scene-wrapper-faq", { autoAlpha: 1, pointerEvents: "auto", duration: 2 }, "transition-final")
      .to("#faq-scene", { yPercent: 0, duration: 4, ease: "expo.inOut" }, "transition-final");
    tl.addLabel("faq-main");
    tl.to({}, { duration: 6 }); // Dwell on FAQ

    tl.addLabel("transition-final-form");
    tl.to("#scene-wrapper-faq", { autoAlpha: 0, pointerEvents: "none", duration: 2 }, "transition-final-form")
      .to("#scene-wrapper-final", { autoAlpha: 1, pointerEvents: "auto", duration: 2 }, "transition-final-form");
    tl.addLabel("final-main");

  }, { scope: containerRef });

  return (
    <div id="main-experience" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Global Lighting Overlay */}
      <div id="lighting-overlay" className="pointer-events-none fixed inset-0 z-[80] mix-blend-multiply opacity-0 will-change-[background-color,opacity]" />

      {/* Layers are stacked with z-index and explicit scene-wrapper IDs for GSAP targeting */}
      <div id="scene-wrapper-hero" className="absolute inset-0 z-10 bg-black overflow-hidden"><HeroScene /></div>
      <div id="scene-wrapper-explorer" className="absolute inset-0 z-20 bg-black overflow-hidden invisible opacity-0"><ExplorerScene /></div>
      <div id="scene-wrapper-portfolio" className="absolute inset-0 z-30 bg-black overflow-hidden invisible opacity-0"><PortfolioScene /></div>
      <div id="scene-wrapper-calculator" className="absolute inset-0 z-40 bg-black overflow-hidden invisible opacity-0"><CalculatorScene /></div>
      <div id="scene-wrapper-faq" className="absolute inset-0 z-50 bg-black overflow-hidden invisible opacity-0"><FAQScene /></div>
      <div id="scene-wrapper-final" className="absolute inset-0 z-60 bg-black overflow-hidden invisible opacity-0"><FinalScene /></div>

      {/* Global Grain/Noise - Further reduced opacity for performance */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.01] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
