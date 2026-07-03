"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { IMAGES } from "@/constants/content";

gsap.registerPlugin(ScrollTrigger);

export default function MacroDetailScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        pin: true,
      }
    });

    // Initial state
    gsap.set(".macro-label", { opacity: 0, y: 30, filter: "blur(10px)", willChange: "transform, opacity" });
    gsap.set(".macro-image", { willChange: "transform" });

    // 1. Extreme Zoom into the image
    tl.to(".macro-image", {
      scale: 2.8,
      xPercent: -10,
      yPercent: 15,
      duration: 3,
      ease: "power2.inOut"
    }, 0);

    // 2. Dim the background more for text readability
    tl.to(".macro-overlay", {
      backgroundColor: "rgba(0,0,0,0.7)",
      duration: 1.5
    }, 1);

    // 3. Headline reveal with SplitType
    if (titleRef.current) {
      const split = new SplitType(titleRef.current, { types: "chars" });
      gsap.set(split.chars, { willChange: "transform, opacity" });
      tl.from(split.chars, {
        opacity: 0,
        y: 40,
        filter: "blur(20px)",
        stagger: 0.03,
        duration: 1.5,
        ease: "expo.out",
        clearProps: "all"
      }, 0.5);

      tl.to(split.chars, {
        opacity: 0.05,
        duration: 1,
        ease: "power2.inOut"
      }, 2);
    }

    // 4. Reveal technical labels
    tl.to(".label-1", {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }, 1.5);

    tl.to(".label-2", {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }, 2);

    // 5. Final transition: scale out slightly and fade overlay
    tl.to(".macro-image", {
      scale: 2.5,
      duration: 1,
      ease: "power2.inOut"
    }, 3);

  }, { scope: containerRef });

  return (
    <div id="macro-detail-scene" ref={containerRef} className="relative w-full h-screen bg-luxury-bg overflow-hidden perspective-2000">
      {/* Visual Layer */}
      <div className="absolute inset-0 macro-image-container overflow-hidden">
        <Image
          src={IMAGES.details.shadow}
          alt="Technical Detail"
          fill
          className="macro-image object-cover grayscale opacity-60"
          quality={100}
          sizes="100vw"
        />
        <div className="macro-overlay absolute inset-0 bg-black/40 transition-colors duration-1000" />
      </div>

      {/* Floating Atmosphere Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] bg-luxury-brass/5 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute bottom-1/4 right-1/3 w-[40vw] h-[40vw] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-24">

        {/* Giant Background Title */}
        <h2
          ref={titleRef}
          className="text-[clamp(4rem,15vw,250px)] font-serif text-luxury-text tracking-[0.1em] uppercase leading-none text-center w-full"
        >
          Детали
        </h2>

        {/* Technical Callouts */}
        <div className="macro-label label-1 absolute top-[25%] left-[10%] md:left-[20%] text-luxury-text max-w-xs">
           <div className="w-16 h-[1px] bg-luxury-brass mb-6" />
           <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-luxury-brass font-bold block mb-4">Прецизионная точность</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter leading-none mb-6">Профиль EuroKraab</h3>
           <p className="text-[11px] md:text-sm text-luxury-text-muted tracking-[0.2em] leading-relaxed font-medium">
             Хирургически точный теневой зазор, который исключает потребность в багетах, создавая чистый переход между стеной и потолком.
           </p>
        </div>

        <div className="macro-label label-2 absolute bottom-[20%] right-[10%] md:right-[20%] text-right text-luxury-text max-w-xs">
           <div className="w-16 h-[1px] bg-luxury-brass mb-6 ml-auto" />
           <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-luxury-brass font-bold block mb-4">Тактильное совершенство</span>
           <h3 className="text-3xl md:text-5xl font-serif italic tracking-tighter leading-none mb-6">Матовое полотно</h3>
           <p className="text-[11px] md:text-sm text-luxury-text-muted tracking-[0.2em] leading-relaxed font-medium ml-auto">
             Европейский текстиль с нулевой рефлексией, имитирующий идеально выровненную минеральную штукатурку высшего качества.
           </p>
        </div>

      </div>

      {/* Progress Mark */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
         <span className="text-[8px] uppercase tracking-[1em] mb-4 text-luxury-text font-bold">микро-перфекционизм</span>
         <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-brass to-transparent" />
      </div>
    </div>
  );
}
