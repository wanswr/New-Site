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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200%", // Reduced from 1800% for snappier experience
        pin: true,
        scrub: 1,
        snap: {
          snapTo: [0, 0.25, 0.42, 0.64, 0.81, 1], // Align with nav links
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "power1.inOut"
        }
      }
    });

    // --- SCENE 1: Hero Zoom In (0 to 3) ---
    tl.to("#hero-bg-wrapper", {
      scale: 3,
      duration: 3,
      ease: "power2.inOut"
    }, 0)
    .to("#hero-content", {
      opacity: 0,
      y: -100,
      duration: 1.2,
    }, 0.3)
    .to("#ceiling-detail", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
    }, 1.2)
    .to("#ceiling-detail img", {
      scale: 1,
      duration: 2.5,
      ease: "power2.out"
    }, 1.2);

    // --- SCENE 2: Explorer/About (3 to 5) ---
    tl.to("#hero-scene", {
      opacity: 0,
      scale: 1.5,
      filter: "blur(20px)",
      duration: 1.5,
    }, 3)
    .to("#explorer-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
    }, 3.3);

    // --- SCENE 3: Portfolio (5.2 to 7.5) ---
    tl.to("#explorer-scene", {
      xPercent: -100,
      opacity: 0,
      duration: 1.5,
    }, 5)
    .to("#portfolio-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1,
    }, 5.2);

    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      if (i > 0) {
        tl.to(projects[i-1], { opacity: 0, scale: 0.8, duration: 1 }, 6 + i * 1);
        tl.to(project, { opacity: 1, duration: 1 }, 6 + i * 1);
      }
      tl.to(project.querySelector("img"), { scale: 1.2, duration: 2 }, 5.5 + i * 1);
    });

    // --- SCENE 4: Calculator (8 to 9.5) ---
    tl.to("#portfolio-scene", {
      opacity: 0,
      yPercent: -20,
      duration: 1.2,
    }, 7.8)
    .to("#calculator-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.2,
    }, 8.2);

    // --- SCENE 5: FAQ (10 to 11.5) ---
    tl.to("#calculator-scene", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
    }, 9.8)
    .to("#faq-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.2,
    }, 10.2);

    // --- SCENE 6: Final (11.5+) ---
    tl.to("#faq-scene", {
      opacity: 0,
      filter: "blur(20px)",
      scale: 2,
      duration: 1.5,
    }, 11.5)
    .to("#final-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
    }, 11.8)
    .to("#final-bg", {
      scale: 1,
      duration: 3,
      ease: "power3.out"
    }, 11.8);

  }, { scope: containerRef });

  return (
    <div id="main-experience" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <HeroScene />
      <ExplorerScene />
      <PortfolioScene />
      <CalculatorScene />
      <FAQScene />
      <FinalScene />
    </div>
  );
}
