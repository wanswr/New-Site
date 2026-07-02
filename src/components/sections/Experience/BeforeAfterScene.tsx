"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { IMAGES } from "@/constants/content";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      }
    });

    // 1. Initial State: "Before" image (sepia/dull)
    // 2. Wipe Reveal of "After" image
    tl.fromTo(".after-image-container",
      { clipPath: "inset(0 0 0 100%)" },
      { clipPath: "inset(0 0 0 0%)", duration: 2, ease: "power2.inOut" },
      0.5
    );

    // 3. Zoom both images simultaneously
    tl.to([".before-image", ".after-image"], {
      scale: 1.2,
      duration: 3,
      ease: "none"
    }, 0);

    // 4. Text Reveal
    if (headlineRef.current) {
      const split = new SplitType(headlineRef.current, { types: "chars,words" });
      gsap.set(split.chars, { willChange: "transform, opacity" });
      tl.fromTo(split.chars,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.02, ease: "expo.out", clearProps: "all" },
        1.5
      );
    }

    // 5. Labels Reveal
    tl.fromTo(".ba-label",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2 },
      2
    );

  }, { scope: containerRef });

  return (
    <div id="before-after-scene" ref={containerRef} className="relative w-full h-screen bg-luxury-bg overflow-hidden">
      {/* Before Layer (Static Background) */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.details.before_after}
          alt="Before Transformation"
          fill
          className="before-image object-cover grayscale sepia brightness-50"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20">
           <span className="ba-label text-white/40 text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold">Состояние: ДО</span>
        </div>
      </div>

      {/* After Layer (Revealed) */}
      <div className="after-image-container absolute inset-0 z-10">
        <Image
          src={IMAGES.details.before_after}
          alt="After Transformation"
          fill
          className="after-image object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute top-12 right-12 md:top-24 md:right-24 z-20 text-right">
           <span className="ba-label text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold">Результат: ПОСЛЕ</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
         <h2 ref={headlineRef} className="text-4xl md:text-8xl font-serif text-luxury-text tracking-tighter leading-none max-w-5xl whitespace-nowrap">
           Радикальное <br />
           <span className="italic text-luxury-brass">Преображение</span>
         </h2>

         <div className="mt-12 flex items-center gap-6 ba-label">
            <div className="w-12 h-[1px] bg-luxury-brass" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-luxury-text-muted font-bold">
              От старого интерьера к архитектурному шедевру
            </p>
            <div className="w-12 h-[1px] bg-luxury-brass" />
         </div>
      </div>

      {/* Comparison Slider Mockup (Static center line) */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-luxury-brass/30 z-20" />
    </div>
  );
}
