"use client";

import { useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

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
    if (titleRef.current) {
      const reveal = splitTextReveal(titleRef.current);
      if (reveal) tl.add(reveal, 0.3);
    }

    tl.add(cinematicReveal(".about-reveal"), 0.5);

  }, { scope: containerRef });

  return (
    <div id="about-scene" ref={containerRef} className="relative w-full bg-luxury-bg py-24 md:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div
          ref={imageRef}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden group will-change-transform"
        >
          <Image
            src={IMAGES.details.texture}
            alt="Craftsmanship detail"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="about-image-inner object-cover grayscale transition-all duration-1000 scale-110 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-12 left-12 about-reveal">
             <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-brass font-bold mb-2 block">Основатель</span>
             <h3 className="text-2xl font-serif text-luxury-text">Александр Белов</h3>
          </div>
        </div>

        <div className="space-y-12">
          <span className="about-reveal text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold">
            Человеческий Фактор
          </span>

          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-serif text-luxury-text leading-[1.2] tracking-tighter"
          >
            Гарантирую результат, <br />
            <span className="italic text-luxury-brass/80 font-normal">которым вы будете гордиться</span>
          </h2>

          <div className="about-reveal h-[1px] w-24 bg-luxury-brass/30" />

          <p className="about-reveal text-luxury-text-muted text-sm md:text-base tracking-[0.1em] leading-relaxed max-w-lg font-medium">
            За 10 лет я собрал команду лучших монтажников Москвы, чтобы воплощать проекты любой сложности.
            Мы берем на себя всё: от инженерного проекта освещения до идеальной натяжки полотна с гарантией 15 лет.
            Моя цель — сделать процесс для вас невидимым, а результат — безупречным.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-8 about-reveal">
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">10+</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Лет в индустрии</p>
             </div>
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">1500+</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Выполненных объектов</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
