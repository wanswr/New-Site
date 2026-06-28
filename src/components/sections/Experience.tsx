"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScene from "./Experience/HeroScene";
import ExplorerScene from "./Experience/ExplorerScene";
import PortfolioScene from "./Experience/PortfolioScene";
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
        end: "+=1200%",
        pin: true,
        scrub: 1.5,
      }
    });

    // --- SCENE 1: Hero Zoom In ---
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

    // --- TRANSITION TO EXPLORER ---
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

    // --- TRANSITION TO PORTFOLIO ---
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

    // PORTFOLIO ZOOM SEQUENCE
    const projects = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project: any, i) => {
      if (i > 0) {
        tl.to(projects[i-1] as any, { opacity: 0, scale: 0.8, duration: 1.5 }, 8.5 + i * 2);
        tl.to(project, { opacity: 1, duration: 1.5 }, 8.5 + i * 2);
      }
      tl.to((project as HTMLElement).querySelector("img"), { scale: 1.2, duration: 3 }, 8 + i * 2);
    });

    // --- FINAL TRANSITION ---
    tl.to("#portfolio-scene", {
      opacity: 0,
      filter: "blur(20px)",
      scale: 2,
      duration: 2,
    }, 15)
    .to("#final-scene", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 2,
    }, 15.5)
    .to("#final-bg", {
      scale: 1,
      duration: 4,
      ease: "power3.out"
    }, 15.5);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Scenes will be layered here and controlled via opacity/scale/z-index */}
      <HeroScene />
      <ExplorerScene />
      <PortfolioScene />
      <FinalScene />
    </div>
  );
}
