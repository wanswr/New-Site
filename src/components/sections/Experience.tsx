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

    // Set initial state: all sections except first are moved down
    sections.slice(1).forEach((id) => {
      gsap.set(id, { yPercent: 100 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200%", // Increased for better control
        pin: true,
        scrub: 1,
        snap: {
          snapTo: [0, 0.1, 0.2, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
          duration: { min: 0.5, max: 1.2 },
          delay: 0,
          ease: "power2.inOut"
        }
      }
    });

    // --- STACKED LAYER JOURNEY (Like Opora Sibiri) ---

    // 0. Hero zoom-in detail
    tl.to("#hero-bg-wrapper", { scale: 1.1, duration: 2, ease: "power2.inOut" }, 0)
      .to("#hero-content", { opacity: 0, y: -100, scale: 1.1, filter: "blur(20px)", duration: 1.5 }, 0.2)
      .to("#ceiling-detail", { opacity: 1, duration: 2, ease: "power4.inOut" }, 1);

    // 1. Move to Explorer (Cover effect)
    tl.to("#explorer-scene", { yPercent: 0, duration: 2, ease: "expo.inOut" }, 2);
    // Parallax background for scene 1 while scene 2 covers it
    tl.to("#hero-scene", { yPercent: -30, duration: 2, ease: "expo.inOut" }, 2);

    // 2. Move to Portfolio
    tl.to("#portfolio-scene", { yPercent: 0, duration: 2, ease: "expo.inOut" }, 4.5);
    tl.to("#explorer-scene", { yPercent: -30, duration: 2, ease: "expo.inOut" }, 4.5);

    // 3. Portfolio internal steps with high-end reveals
    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      const startTime = 5.5 + i * 1.5;
      if (i > 0) {
        tl.to(project, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          ease: "expo.inOut"
        }, startTime);

        // Parallax sliding for text elements
        tl.from(project.querySelector(".project-title"), {
          yPercent: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out"
        }, startTime + 0.8);

        tl.from(project.querySelector(".project-image-wrapper"), {
          scale: 1.3,
          duration: 2.5,
          ease: "power2.out"
        }, startTime);
      }
    });

    // 4. Move to Calculator
    tl.to("#calculator-scene", { yPercent: 0, duration: 2, ease: "expo.inOut" }, 13);
    tl.to("#portfolio-scene", { yPercent: -30, duration: 2, ease: "expo.inOut" }, 13);

    // 5. Move to FAQ
    tl.to("#faq-scene", { yPercent: 0, duration: 2, ease: "expo.inOut" }, 15.5);
    tl.to("#calculator-scene", { yPercent: -30, duration: 2, ease: "expo.inOut" }, 15.5);

    // 6. Move to Final
    tl.to("#final-scene", { yPercent: 0, duration: 2, ease: "expo.inOut" }, 18);
    tl.to("#faq-scene", { yPercent: -30, duration: 2, ease: "expo.inOut" }, 18);

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
