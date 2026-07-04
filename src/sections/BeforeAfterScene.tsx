"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
        let splitInstance: SplitType | null = null;

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
        }
        });

        tl.fromTo(".after-image-container",
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 2, ease: "power2.inOut" },
        0.5
        );

        tl.to([".before-image", ".after-image"], {
        scale: 1.05,
        duration: 3,
        ease: "none"
        }, 0);

        if (headlineRef.current) {
        splitInstance = new SplitType(headlineRef.current, { types: "words" });
        gsap.set(splitInstance.words, { willChange: "transform, opacity" });
        tl.fromTo(splitInstance.words,
            { opacity: 0, y: 30, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.1, ease: "expo.out", clearProps: "all" },
            1.5
        );
        }

        tl.fromTo(".ba-label",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2 },
        2
        );

        return () => {
            if (splitInstance) splitInstance.revert();
        };
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="before-after-scene" ref={containerRef} className="relative w-full h-screen bg-[#0F0F0F] overflow-hidden flex items-center justify-center">
      {/* Before Layer */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.details.before_after}
          alt="Потолок ДО"
          fill
          className="before-image object-cover grayscale sepia brightness-[0.3]"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute top-8 left-8 z-20">
           <span className="ba-label text-white/30 text-[9px] uppercase tracking-[0.8em] font-bold ">ДО РЕМОНТА</span>
        </div>
      </div>

      {/* After Layer */}
      <div className="after-image-container absolute inset-0 z-10">
        <Image
          src={IMAGES.details.before_after}
          alt="Потолок ПОСЛЕ"
          fill
          className="after-image object-cover"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute top-8 right-8 z-20 text-right">
           <span className="ba-label text-luxury-brass text-[9px] uppercase tracking-[0.8em] font-bold ">ИДЕАЛЬНЫЙ РЕЗУЛЬТАТ</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 text-center">
         <h2 ref={headlineRef} className="text-4xl md:text-8xl font-serif text-luxury-text tracking-tighter leading-none ">
           Превращаем <br />
           <span className="italic text-luxury-brass">хаос в эстетику</span>
         </h2>

         <div className="mt-8 flex items-center justify-center gap-4 ba-label">
            <div className="w-8 h-[1px] bg-luxury-brass/30" />
            <p className="text-[9px] uppercase tracking-[0.5em] text-luxury-text-muted font-bold ">
              Чисто • Быстро • Безупречно
            </p>
            <div className="w-8 h-[1px] bg-luxury-brass/30" />
         </div>
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-luxury-brass/20 z-20" />
    </div>
  );
}
