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
      scale: 1,
      z: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    });

    // Initial state
    gsap.set("#scene-wrapper-hero", { autoAlpha: 1, pointerEvents: "auto" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1600%", // Longer for smoother cinematic flow
        pin: true,
        scrub: 1.5, // Even smoother
        snap: {
          snapTo: [0, 0.15, 0.35, 0.55, 0.75, 0.9, 1],
          duration: { min: 0.5, max: 1.2 },
          delay: 0.2,
          ease: "power3.inOut"
        }
      }
    });

    // --- GLOBAL CAMERA LIGHTING ---
    tl.to("#lighting-overlay", { backgroundColor: "#FFF6E8", opacity: 0.03, duration: 5 }, "start")
      .to("#lighting-overlay", { backgroundColor: "#B08D57", opacity: 0.02, duration: 5 }, "portfolio");

    // --- SCENE 1: HERO (Z-Axis Zoom In) ---
    tl.addLabel("hero");
    tl.to("#scene-wrapper-hero", {
      scale: 1.5,
      z: 500,
      autoAlpha: 0,
      duration: 10,
      ease: "power2.in"
    }, "hero");

    // --- SCENE 2: EXPLORER (Brings from Z-depth) ---
    tl.fromTo("#scene-wrapper-explorer",
      { autoAlpha: 0, scale: 0.8, z: -500 },
      { autoAlpha: 1, scale: 1, z: 0, duration: 6, ease: "power2.out", pointerEvents: "auto" },
      "hero+=4"
    );
    tl.addLabel("explorer");
    tl.to("#scene-wrapper-explorer", {
      scale: 1.2,
      z: 200,
      autoAlpha: 0,
      duration: 8,
      ease: "power2.in"
    }, "explorer+=4");

    // --- SCENE 3: PORTFOLIO ---
    tl.fromTo("#scene-wrapper-portfolio",
      { autoAlpha: 0, scale: 0.9, z: -300 },
      { autoAlpha: 1, scale: 1, z: 0, duration: 6, ease: "power2.out", pointerEvents: "auto" },
      "explorer+=8"
    );
    tl.addLabel("portfolio");

    // Portfolio inner timeline would be driven by scroll too
    // We'll add a dwell time
    tl.to({}, { duration: 10 });

    tl.to("#scene-wrapper-portfolio", {
      scale: 1.3,
      z: 400,
      autoAlpha: 0,
      duration: 8,
      ease: "power2.in"
    }, "portfolio+=10");

    // --- SCENE 4: CALCULATOR ---
    tl.fromTo("#scene-wrapper-calculator",
      { autoAlpha: 0, scale: 0.85, z: -400 },
      { autoAlpha: 1, scale: 1, z: 0, duration: 6, ease: "power2.out", pointerEvents: "auto" },
      "portfolio+=14"
    );
    tl.addLabel("calculator");
    tl.to("#scene-wrapper-calculator", {
      autoAlpha: 0,
      scale: 1.1,
      duration: 6,
      ease: "power2.in"
    }, "calculator+=6");

    // --- SCENE 5: FAQ & FINAL ---
    tl.fromTo("#scene-wrapper-faq",
      { autoAlpha: 0, yPercent: 20 },
      { autoAlpha: 1, yPercent: 0, duration: 6, ease: "power3.out", pointerEvents: "auto" },
      "calculator+=10"
    );
    tl.addLabel("faq");
    tl.to("#scene-wrapper-faq", { autoAlpha: 0, scale: 0.9, duration: 6 }, "faq+=6");

    tl.fromTo("#scene-wrapper-final",
      { autoAlpha: 0, scale: 1.1 },
      { autoAlpha: 1, scale: 1, duration: 6, ease: "power2.out", pointerEvents: "auto" },
      "faq+=10"
    );
    tl.addLabel("final");

  }, { scope: containerRef });

  return (
    <div id="main-experience" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-luxury-bg">
      {/* Global Lighting Overlay */}
      <div id="lighting-overlay" className="pointer-events-none fixed inset-0 z-[80] mix-blend-screen opacity-0 will-change-[background-color,opacity]" />

      <div className="perspective-container absolute inset-0 w-full h-full" style={{ perspective: "1000px" }}>
        <div id="scene-wrapper-hero" className="absolute inset-0 z-10"><HeroScene /></div>
        <div id="scene-wrapper-explorer" className="absolute inset-0 z-20 invisible opacity-0"><ExplorerScene /></div>
        <div id="scene-wrapper-portfolio" className="absolute inset-0 z-30 invisible opacity-0"><PortfolioScene /></div>
        <div id="scene-wrapper-calculator" className="absolute inset-0 z-40 invisible opacity-0"><CalculatorScene /></div>
        <div id="scene-wrapper-faq" className="absolute inset-0 z-50 invisible opacity-0"><FAQScene /></div>
        <div id="scene-wrapper-final" className="absolute inset-0 z-60 invisible opacity-0"><FinalScene /></div>
      </div>

      {/* Global Cinematic Grain */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
