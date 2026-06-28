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
        end: "+=1600%",
        pin: true,
        scrub: 1.5, // Increased for a more 'weighted' and fluid feel
        snap: {
          snapTo: [0, 0.2, 0.35, 0.55, 0.72, 0.88, 1],
          duration: { min: 0.5, max: 1.5 }, // Smoother snap
          delay: 0,
          ease: "power3.inOut"
        }
      }
    });

    const canvas = canvasRef.current;

    // --- GAMIFIED FLUID JOURNEY ---

    // Ambient floating depth
    tl.to("#canvas-depth", { y: -500, duration: 20, ease: "none" }, 0);

    // Scene 1: Hero (0,0)
    tl.to("#hero-bg-wrapper", { scale: 2.2, duration: 3, ease: "power2.inOut" }, 0)
      .to("#hero-content", { opacity: 0, scale: 0.9, filter: "blur(10px)", duration: 1.5 }, 0.5)
      .to("#ceiling-detail", { opacity: 1, y: 0, duration: 2, ease: "power3.out" }, 1.2);

    // FLUID TRAVEL 1: TO EXPLORER (Right)
    // "Leap" effect: Zoom out slightly while traveling
    tl.to(canvas, { scale: 0.9, duration: 1, ease: "power2.in" }, 3)
      .to(canvas, { xPercent: -100, duration: 2, ease: "power3.inOut" }, 3)
      .to(canvas, { scale: 1, duration: 1, ease: "power2.out" }, 4.5);

    // FLUID TRAVEL 2: TO PORTFOLIO (Down)
    tl.to(canvas, { scale: 0.85, duration: 1, ease: "power2.in" }, 5.5)
      .to(canvas, { yPercent: -100, duration: 2, ease: "power3.inOut" }, 5.5)
      .to(canvas, { scale: 1, duration: 1, ease: "power2.out" }, 7);

    // Portfolio reveals: Weighted & overlapping
    const projects: HTMLElement[] = gsap.utils.toArray(".portfolio-project");
    projects.forEach((project, i) => {
      const startTime = 7.5 + i * 1.5;
      if (i > 0) {
        tl.to(project, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "power4.inOut" }, startTime);
        tl.fromTo(project.querySelector(".project-image-wrapper"),
          { yPercent: 30, scale: 1.2 }, { yPercent: 0, scale: 1.1, duration: 1.8, ease: "power3.out" }, startTime);
      }
      if (i < projects.length - 1) {
        tl.to(project.querySelector(".project-image-wrapper"), { yPercent: -30, duration: 1.8, ease: "power3.inOut" }, startTime + 1);
      }
    });

    // FLUID TRAVEL 3: TO CALCULATOR (Diagonal back)
    tl.to(canvas, { scale: 0.8, duration: 1, ease: "power2.in" }, 11)
      .to(canvas, { xPercent: 0, yPercent: -200, duration: 2.5, ease: "power3.inOut" }, 11)
      .to(canvas, { scale: 1, duration: 1, ease: "power2.out" }, 13);

    // FLUID TRAVEL 4: TO FAQ (Right)
    tl.to(canvas, { scale: 0.9, duration: 1, ease: "power2.in" }, 13.5)
      .to(canvas, { xPercent: -100, yPercent: -200, duration: 2, ease: "power3.inOut" }, 13.5)
      .to(canvas, { scale: 1, duration: 1, ease: "power2.out" }, 15);

    // FLUID TRAVEL 5: FINAL (Down)
    tl.to(canvas, { scale: 0.85, duration: 1, ease: "power2.in" }, 16)
      .to(canvas, { xPercent: -100, yPercent: -300, duration: 2, ease: "power4.inOut" }, 16)
      .to(canvas, { scale: 1, duration: 1, ease: "power2.out" }, 17.5);

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

      {/* Ambient Depth Elements */}
      <div id="canvas-depth" className="pointer-events-none fixed inset-0 z-0 opacity-20">
         <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-premium-brass/10 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute top-[60%] right-[15%] w-96 h-96 bg-white/5 blur-[150px] rounded-full" />
      </div>

      {/* Global Grain/Noise for premium feel */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
