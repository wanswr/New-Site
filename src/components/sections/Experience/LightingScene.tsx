"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function LightingScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      }
    });

    // 1. Initial State: Dark Room
    // 2. Line 1: Left Wall Line
    tl.to("#light-line-1", { opacity: 1, duration: 1 }, 0.5);
    tl.to("#dark-overlay", { opacity: 0.8, duration: 1 }, 0.5);

    // 3. Line 2: Right Wall Line
    tl.to("#light-line-2", { opacity: 1, duration: 1 }, 1.5);
    tl.to("#dark-overlay", { opacity: 0.6, duration: 1 }, 1.5);

    // 4. Line 3: Central Track
    tl.to("#light-line-3", { opacity: 1, duration: 1 }, 2.5);
    tl.to("#dark-overlay", { opacity: 0.3, duration: 1 }, 2.5);

    // 5. Final State: Full Illumination
    tl.to("#full-light", { opacity: 1, duration: 1.5 }, 3.5);
    tl.to("#dark-overlay", { opacity: 0, duration: 1.5 }, 3.5);

    // Progress Line animation
    tl.to(".lighting-progress-line", {
      width: "100%",
      ease: "none",
      duration: 3.5
    }, 0);

    if (headlineRef.current) {
      const split = new SplitType(headlineRef.current, { types: "words,chars" });
      tl.fromTo(split.chars,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.03 },
        3.8
      );
    }

  }, { scope: containerRef });

  return (
    <div id="lighting-scene" ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Background Base (Dark Room) */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/detail-slot.png"
          alt="Luxury Lighting Base"
          fill
          className="object-cover grayscale-[0.8]"
        />
        <div id="dark-overlay" className="absolute inset-0 bg-black/95 z-10" />
      </div>

      {/* Light Lines Sequence */}
      <div className="absolute inset-0 z-20 pointer-events-none">
         {/* Line 1 */}
         <div id="light-line-1" className="absolute top-[20%] left-0 w-[40%] h-[2px] bg-luxury-brass blur-[2px] opacity-0 shadow-[0_0_20px_#B08D57]" />
         {/* Line 2 */}
         <div id="light-line-2" className="absolute bottom-[30%] right-0 w-[40%] h-[2px] bg-luxury-brass blur-[2px] opacity-0 shadow-[0_0_20px_#B08D57]" />
         {/* Line 3 */}
         <div id="light-line-3" className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-white blur-[1px] opacity-0 shadow-[0_0_30px_#FFFFFF]" />
      </div>

      {/* Full Light State */}
      <div id="full-light" className="absolute inset-0 z-15 opacity-0">
         <Image
          src="/images/projects/detail-slot.png"
          alt="Luxurious Lighting Final"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center px-6">
             <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold mb-8 block opacity-40">
               Световой Сценарий
             </span>
             <h2 ref={headlineRef} className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter max-w-4xl leading-tight">
               Свет, который <br />
               <span className="italic text-luxury-brass font-normal">создает жизнь</span>
             </h2>
          </div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-12 left-12 md:left-24 z-30 flex flex-col items-start gap-4 opacity-30">
        <span className="text-[7px] uppercase tracking-[0.4em] text-luxury-text font-bold">scene 04</span>
        <div className="h-[1px] w-24 bg-white/10 relative">
           <div className="absolute top-0 left-0 h-full bg-luxury-brass lighting-progress-line" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
}
