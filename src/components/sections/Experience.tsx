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
        end: "+=1400%", // Slightly increased for more "weight" in transitions
        pin: true,
        scrub: 1.2,
        snap: {
          snapTo: [0, 0.22, 0.38, 0.68, 0.84, 1], // Re-aligned for new portfolio timings
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
      const startTime = 5.5 + i * 1.5;
      const title = project.querySelector(".project-title");
      const number = project.querySelector(".project-number");
      const meta = project.querySelector(".project-meta");
      const img = project.querySelector(".project-image-wrapper");

      // Entrance animation for each project (except the first which is visible)
      if (i > 0) {
        tl.to(project, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.inOut"
        }, startTime);

        // Parallax offset for the image to create a "sliding reveal" effect
        tl.fromTo(img,
          { yPercent: 20, scale: 1.2 },
          { yPercent: 0, scale: 1.1, duration: 1.5, ease: "expo.out" },
          startTime
        );

        // Staggered text reveals
        tl.fromTo([number, title, meta],
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" },
          startTime + 0.5
        );
      } else {
        // Initial state for first project
        tl.to(img, { scale: 1.2, duration: 3, ease: "none" }, 5.2);
      }

      // Exit/Transition out logic for previous project when next enters
      if (i < projects.length - 1) {
        tl.to(project.querySelector(".project-image-wrapper"), {
          yPercent: -15,
          duration: 1.5,
          ease: "expo.inOut"
        }, startTime + 1.5);
      }
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
