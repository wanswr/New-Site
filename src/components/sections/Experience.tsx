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
  const canvasRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500%",
        pin: true,
        scrub: 1.2,
        snap: {
          snapTo: [0, 0.2, 0.35, 0.55, 0.75, 0.9, 1],
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "expo.inOut"
        }
      }
    });

    const canvas = canvasRef.current;

    // --- SPATIAL JOURNEY ---

    // Scene 1: Hero (0,0)
    // Zoom into detail
    tl.to("#hero-bg-wrapper", { scale: 2.5, duration: 3, ease: "power2.inOut" }, 0)
      .to("#hero-content", { opacity: 0, y: -50, duration: 1 }, 0.5)
      .to("#ceiling-detail", { opacity: 1, duration: 1.5 }, 1.2);

    // MOVE TO EXPLORER (Right)
    tl.to(canvas, { xPercent: -100, duration: 2, ease: "expo.inOut" }, 3);

    // MOVE TO PORTFOLIO (Down from Explorer)
    tl.to(canvas, { yPercent: -100, duration: 2, ease: "expo.inOut" }, 5.5);

    // Portfolio Internal Transitions (Stay at yPercent: -100, xPercent: -100)
    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      const startTime = 7 + i * 1.5;
      if (i > 0) {
        tl.to(project, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" }, startTime);
        tl.fromTo(project.querySelector(".project-image-wrapper"),
          { yPercent: 20 }, { yPercent: 0, duration: 1.5, ease: "expo.out" }, startTime);
      }
      if (i < projects.length - 1) {
        tl.to(project.querySelector(".project-image-wrapper"), { yPercent: -20, duration: 1.5 }, startTime + 1.5);
      }
    });

    // MOVE TO CALCULATOR (Diagonal: Back to x:0, y: -200)
    tl.to(canvas, { xPercent: 0, yPercent: -200, duration: 2, ease: "expo.inOut" }, 11);

    // MOVE TO FAQ (Right from Calculator)
    tl.to(canvas, { xPercent: -100, yPercent: -200, duration: 2, ease: "expo.inOut" }, 13.5);

    // MOVE TO FINAL (Down from FAQ)
    tl.to(canvas, { xPercent: -100, yPercent: -300, duration: 2, ease: "expo.inOut" }, 16);

  }, { scope: containerRef });

  return (
    <div id="main-experience" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-premium-graphite">
      {/* Cinematic World Canvas */}
      <div
        ref={canvasRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {/* Spatial Grid Positioning */}

        {/* ROW 1 */}
        <div className="absolute top-0 left-0 w-full h-full">
           <HeroScene />
        </div>
        <div className="absolute top-0 left-full w-full h-full">
           <ExplorerScene />
        </div>

        {/* ROW 2 */}
        <div className="absolute top-full left-full w-full h-full">
           <PortfolioScene />
        </div>

        {/* ROW 3 */}
        <div className="absolute top-[200%] left-0 w-full h-full">
           <CalculatorScene />
        </div>
        <div className="absolute top-[200%] left-full w-full h-full">
           <FAQScene />
        </div>

        {/* ROW 4 */}
        <div className="absolute top-[300%] left-full w-full h-full">
           <FinalScene />
        </div>
      </div>

      {/* Global Grain/Noise for premium feel */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
