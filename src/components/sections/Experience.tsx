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
    const sections = ["#hero-scene", "#explorer-scene", "#portfolio-scene", "#calculator-scene", "#faq-scene", "#final-scene"];

    // Reset all sections to a base state
    gsap.set(sections, {
      autoAlpha: 0,
      yPercent: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    });

    // Initial state for Hero
    gsap.set("#hero-scene", { autoAlpha: 1, pointerEvents: "auto" });
    // Prepare upcoming sections
    gsap.set(sections.slice(1), { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1600%", // Slightly longer for smoother narrative
        pin: true,
        scrub: 1,
        snap: {
          snapTo: "labels", // Use labels for precise snapping
          duration: { min: 0.5, max: 1.2 },
          delay: 0.1,
          ease: "power2.inOut"
        }
      }
    });

    // --- SCENE 0: HERO NARRATIVE ---
    tl.addLabel("hero-start");
    tl.to("#hero-bg-wrapper", { scale: 1.1, duration: 4, ease: "power2.inOut" }, "hero-start")
      .to("#hero-content", { autoAlpha: 0, y: -100, duration: 2, ease: "power2.inIn" }, "hero-start+=0.5")
      .to("#ceiling-detail", { autoAlpha: 1, duration: 2.5, ease: "expo.inOut" }, "hero-start+=1.5");
    tl.addLabel("hero-end");

    // --- TRANSITION: HERO -> EXPLORER ---
    tl.addLabel("transition-explorer");
    tl.to("#explorer-scene", { autoAlpha: 1, yPercent: 0, pointerEvents: "auto", duration: 3, ease: "expo.inOut" }, "transition-explorer")
      .to("#hero-scene", { yPercent: -30, autoAlpha: 0, pointerEvents: "none", duration: 3, ease: "expo.inOut" }, "transition-explorer");
    tl.addLabel("explorer-main");

    // --- TRANSITION: EXPLORER -> PORTFOLIO ---
    tl.addLabel("transition-portfolio");
    tl.to("#portfolio-scene", { autoAlpha: 1, yPercent: 0, pointerEvents: "auto", duration: 3, ease: "expo.inOut" }, "transition-portfolio")
      .to("#explorer-scene", { yPercent: -30, autoAlpha: 0, pointerEvents: "none", duration: 3, ease: "expo.inOut" }, "transition-portfolio");
    tl.addLabel("portfolio-0");

    // --- PORTFOLIO NARRATIVE (Sequential projects) ---
    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      if (i > 0) {
        const label = `portfolio-${i}`;
        tl.addLabel(label);

        // Reveal next project
        tl.to(project, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 3,
          ease: "expo.inOut"
        }, label);

        // Content animations for the project
        tl.from(project.querySelector(".project-title"), {
          yPercent: 50,
          autoAlpha: 0,
          duration: 2,
          ease: "power4.out"
        }, label + "+=1");

        tl.from(project.querySelector(".project-image-wrapper"), {
          scale: 1.2,
          duration: 4,
          ease: "power2.out"
        }, label);

        // Enable pointer events for current project and hide previous
        tl.set(project, { pointerEvents: "auto" }, label + "+=2.5");
        if (i > 0) {
           tl.to(projects[i-1], { autoAlpha: 0, pointerEvents: "none", duration: 0.1 }, label + "+=2.5");
        }
      }
    });
    tl.addLabel("portfolio-end");

    // --- TRANSITION: PORTFOLIO -> CALCULATOR ---
    tl.addLabel("transition-calculator");
    tl.to("#calculator-scene", { autoAlpha: 1, yPercent: 0, pointerEvents: "auto", duration: 3, ease: "expo.inOut" }, "transition-calculator")
      .to("#portfolio-scene", { yPercent: -30, autoAlpha: 0, pointerEvents: "none", duration: 3, ease: "expo.inOut" }, "transition-calculator");
    tl.addLabel("calculator-main");

    // --- TRANSITION: CALCULATOR -> FAQ ---
    tl.addLabel("transition-faq");
    tl.to("#faq-scene", { autoAlpha: 1, yPercent: 0, pointerEvents: "auto", duration: 3, ease: "expo.inOut" }, "transition-faq")
      .to("#calculator-scene", { yPercent: -30, autoAlpha: 0, pointerEvents: "none", duration: 3, ease: "expo.inOut" }, "transition-faq");
    tl.addLabel("faq-main");

    // --- TRANSITION: FAQ -> FINAL ---
    tl.addLabel("transition-final");
    tl.to("#final-scene", { autoAlpha: 1, yPercent: 0, pointerEvents: "auto", duration: 3, ease: "expo.inOut" }, "transition-final")
      .to("#faq-scene", { yPercent: -30, autoAlpha: 0, pointerEvents: "none", duration: 3, ease: "expo.inOut" }, "transition-final")
      .to("#final-bg", { scale: 1, duration: 5, ease: "power2.out" }, "transition-final");
    tl.addLabel("final-main");

  }, { scope: containerRef });

  return (
    <div id="main-experience" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Layers are stacked with z-index */}
      <div className="absolute inset-0 z-10"><HeroScene /></div>
      <div className="absolute inset-0 z-20"><ExplorerScene /></div>
      <div className="absolute inset-0 z-30"><PortfolioScene /></div>
      <div className="absolute inset-0 z-40"><CalculatorScene /></div>
      <div className="absolute inset-0 z-50"><FAQScene /></div>
      <div className="absolute inset-0 z-60"><FinalScene /></div>

      {/* Global Grain/Noise */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
