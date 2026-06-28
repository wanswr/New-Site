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
        end: "+=1800%",
        pin: true,
        scrub: 1.5,
      }
    });

    // --- SCENE 1: Hero Zoom In (0 to 4) ---
    tl.to("#hero-bg-wrapper", {
      scale: 3,
      duration: 3,
      ease: "power2.inOut"
    }, 0)
    .to("#hero-content", {
      opacity: 0,
      y: -100,
      duration: 1.5,
    }, 0.5)
    .to("#ceiling-detail", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 2,
    }, 1.5)
    .to("#ceiling-detail img", {
      scale: 1,
      duration: 3,
      ease: "power2.out"
    }, 1.5);

    // --- SCENE 2: Explorer/About (4 to 7) ---
    tl.to("#hero-scene", {
      opacity: 0,
      scale: 1.5,
      filter: "blur(20px)",
      duration: 2,
    }, 4)
    .to("#explorer-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 2,
    }, 4.5);

    // --- SCENE 3: Portfolio (7.5 to 11) ---
    tl.to("#explorer-scene", {
      xPercent: -100,
      opacity: 0,
      duration: 2,
    }, 7)
    .to("#portfolio-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1,
    }, 7.5);

    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      if (i > 0) {
        tl.to(projects[i-1], { opacity: 0, scale: 0.8, duration: 1.5 }, 8.5 + i * 1.5);
        tl.to(project, { opacity: 1, duration: 1.5 }, 8.5 + i * 1.5);
      }
      tl.to(project.querySelector("img"), { scale: 1.2, duration: 2.5 }, 8 + i * 1.5);
    });

    // --- SCENE 4: Calculator (11 to 14) ---
    tl.to("#portfolio-scene", {
      opacity: 0,
      yPercent: -20,
      duration: 1.5,
    }, 11)
    .to("#calculator-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
    }, 11.5);

    // --- SCENE 5: FAQ (14 to 17) ---
    tl.to("#calculator-scene", {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
    }, 14)
    .to("#faq-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1.5,
    }, 14.5);

    // --- SCENE 6: Final (17+) ---
    tl.to("#faq-scene", {
      opacity: 0,
      filter: "blur(20px)",
      scale: 2,
      duration: 2,
    }, 17)
    .to("#final-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 2,
    }, 17.5)
    .to("#final-bg", {
      scale: 1,
      duration: 4,
      ease: "power3.out"
    }, 17.5);

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
