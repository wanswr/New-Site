"use client";

import { useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";
import type SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Image reveal
      tl.from(imageRef.current, {
        opacity: 0,
        x: -50,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power3.out"
      }, 0);

      // Parallax for the image inner
      gsap.to(".about-image-inner", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text animations
      let splitInstance: SplitType | null = null;
      if (titleRef.current) {
        const revealResult = splitTextReveal(titleRef.current);
        if (revealResult) {
          tl.add(revealResult.tween, 0.3);
          splitInstance = revealResult.split;
        }
      }

      tl.add(cinematicReveal(".about-reveal"), 0.5);

      // We need to return a cleanup that reverts SplitType since GSAP context doesn't know about it
      return () => {
        if (splitInstance) splitInstance.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="about-scene" ref={containerRef} className="relative w-full bg-[#050505] py-24 md:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div
          ref={imageRef}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden group will-change-transform"
        >
          <Image
            src={IMAGES.details.texture}
            alt="Александр Белов - эксперт по потолкам"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="about-image-inner object-cover grayscale transition-all duration-1000 scale-110 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-12 left-12 about-reveal">
             <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-brass font-bold mb-2 block">Основатель</span>
             <h3 className="text-2xl font-serif text-luxury-text">Александр Белов</h3>
          </div>
        </div>

        <div className="space-y-12">
          <span className="about-reveal text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold">
            Доверие и Опыт
          </span>

          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-serif text-luxury-text leading-[1.2] tracking-tighter"
          >
            12 лет создаем <br />
            <span className="italic text-luxury-brass/80 font-normal">безупречные пространства</span>
          </h2>

          <div className="about-reveal h-[1px] w-24 bg-luxury-brass/30" />

          <p className="about-reveal text-luxury-text-muted text-sm md:text-base tracking-[0.1em] leading-relaxed max-w-lg font-medium uppercase">
            Мы реализовали более 5000 проектов в Москве и области. Моя команда — это отобранные мастера с опытом от 7 лет. Мы не просто ставим потолки, мы решаем инженерные задачи любой сложности: от теневых примыканий до интеграции умного освещения.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-8 about-reveal">
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">12 лет</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Опыта</p>
             </div>
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">5000+</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Объектов</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
