"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    // Slow zoom effect on video
    gsap.to(videoRef.current, {
      scale: 1.15,
      duration: 30,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Fly-forward effect on scroll (Cinematic Camera)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true
      }
    });

    tl.to("#hero-content-wrapper", {
      z: 500,
      scale: 1.5,
      opacity: 0,
      ease: "power2.in"
    }, 0);

    tl.to(videoRef.current, {
      scale: 1.5,
      opacity: 0,
      ease: "power2.in"
    }, 0);

    // Text animation: words, y-shift, blur, fade
    const split = new SplitType(titleRef.current, { types: "words" });

    gsap.set(split.words, {
      opacity: 0,
      y: 60,
      filter: "blur(20px)"
    });

    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.15,
      duration: 2,
      ease: "expo.out",
      delay: 0.8
    });

    // Subtext and Button entry
    gsap.from(".hero-reveal", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      delay: 1.5
    });

    // Right side stats entry
    gsap.from(".hero-stat", {
      opacity: 0,
      x: 30,
      duration: 1.5,
      stagger: 0.1,
      ease: "power3.out",
      delay: 2
    });

    // Mouse reaction for stats
    const stats = containerRef.current?.querySelectorAll(".hero-stat");
    stats?.forEach((stat) => {
      stat.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const { clientX, clientY } = mouseEvent;
        const { left, top, width, height } = stat.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.2;
        const y = (clientY - (top + height / 2)) * 0.2;
        gsap.to(stat, { x, y, duration: 0.4, ease: "power2.out" });
      });
      stat.addEventListener("mouseleave", () => {
        gsap.to(stat, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      });
    });

  }, { scope: containerRef });

  return (
    <div id="hero-scene" ref={containerRef} className="relative w-full min-h-screen bg-[#050505] overflow-hidden perspective-2000">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[0.2] will-change-transform"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-interior-design-of-a-living-room-with-a-fireplace-34538-large.mp4" type="video/mp4" />
        </video>
        {/* Darkening Overlay 45% */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-[#050505]" />
      </div>

      <div id="hero-content-wrapper" className="relative z-10 w-full min-h-screen max-w-[2000px] mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end pt-32 pb-24 md:pb-48 will-change-transform">

        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl w-full">
          <div className="hero-reveal mb-8 md:mb-12">
            <p className="text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-luxury-brass font-bold">
              POTOLKBEL • НАТЯЖНЫЕ ПОТОЛКИ И СВЕТОВЫЕ РЕШЕНИЯ
            </p>
          </div>

          <h1
            ref={titleRef}
            className="hero-title text-[clamp(2rem,7vw,110px)] font-serif leading-[1.1] tracking-tighter text-luxury-text mb-8 md:mb-12"
          >
            Архитектурные потолки <br className="hidden md:block" />
            бизнес-класса <br className="hidden md:block" />
            <span className="italic text-luxury-brass font-normal">для вашего дома</span>
          </h1>

          <p className="hero-reveal text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-luxury-text-muted mb-12 md:mb-16 font-medium max-w-2xl">
            Проектируем свет и безупречную геометрию без щелей, плинтусов и компромиссов.
          </p>

          <button
            onClick={() => document.getElementById('calculator-scene')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-reveal group relative px-10 md:px-16 py-5 md:py-6 bg-black border border-luxury-brass/40 overflow-hidden transition-all duration-700 cursor-none"
          >
            <span className="relative z-10 text-[11px] uppercase tracking-[0.6em] text-luxury-text font-bold">
              Получить расчет
            </span>
            {/* Glow Border Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shadow-[inset_0_0_20px_rgba(176,141,87,0.3)] border border-luxury-brass" />
          </button>
        </div>

        {/* Right Stats */}
        <div ref={statsRef} className="hidden md:flex flex-col items-end space-y-16 mb-8">
           <div className="hero-stat flex flex-col items-end opacity-40 hover:opacity-100 transition-all duration-700 cursor-none group">
              <span className="text-7xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors">10+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-3 text-luxury-text-muted">лет опыта</span>
           </div>
           <div className="hero-stat flex flex-col items-end opacity-40 hover:opacity-100 transition-all duration-700 cursor-none group">
              <span className="text-7xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors">500+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-3 text-luxury-text-muted">проектов</span>
           </div>
           <div className="hero-stat flex flex-col items-end opacity-40 hover:opacity-100 transition-all duration-700 cursor-none group">
              <span className="text-7xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors">5 лет</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-3 text-luxury-text-muted">гарантии</span>
           </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
           <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-luxury-brass to-transparent" />
           <span className="text-[7px] uppercase tracking-[0.8em] mt-4 text-luxury-text-muted font-bold">листайте вниз</span>
        </div>
      </div>
    </div>
  );
}
