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

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      // Slow zoom effect on video (Idle)
      gsap.to(videoRef.current, {
        scale: 1.05,
        duration: 20,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Cinematic Scroll Transition
      gsap.to(videoRef.current, {
        scale: 1.3,
        y: 100,
        scrollTrigger: {
           trigger: containerRef.current,
           start: "top top",
           end: "bottom top",
           scrub: true
        }
      });

      gsap.to(titleRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
      });

      // Text animation - STICK TO WORDS TO PREVENT CHARACTER STACKING
      const split = new SplitType(titleRef.current, { types: "words" });
      gsap.set(split.words, {
        opacity: 0,
        y: 40,
        filter: "blur(15px)",
      });

      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.8,
        clearProps: "all"
      });

      // Reveal other elements
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="hero-scene" ref={containerRef} className="w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-interior-design-of-a-living-room-with-a-fireplace-34538-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="w-full">
          <div className="hero-reveal mb-8">
            <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold whitespace-nowrap">
              POTOLKBEL • НАТЯЖНЫЕ ПОТОЛКИ В МОСКВЕ
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-[clamp(2rem,10vw,120px)] font-serif leading-[1] text-luxury-text mb-10 tracking-tighter whitespace-nowrap flex flex-wrap justify-center md:justify-start"
          >
            Натяжные потолки <br className="hidden md:block" />
            <span className="italic text-luxury-brass font-normal ml-0 md:ml-4">за 1 день без пыли</span>
          </h1>

          <p className="hero-reveal text-[10px] md:text-lg uppercase tracking-[0.4em] text-luxury-text-muted mb-12 font-medium leading-relaxed whitespace-nowrap">
            Бесплатный замер • Фиксированная цена • Гарантия 15 лет
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button
                onClick={() => {
                   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                   window.scrollTo({ top: scrollHeight * 0.95, behavior: 'smooth' });
                }}
                className="px-12 py-5 bg-luxury-brass text-luxury-bg text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white transition-colors duration-700 cursor-pointer whitespace-nowrap"
            >
                Рассчитать стоимость
            </button>

            <button
                onClick={() => window.open('https://wa.me/placeholder', '_blank')}
                className="px-12 py-5 border border-luxury-brass/30 text-luxury-text text-[10px] uppercase tracking-[0.5em] font-bold hover:border-luxury-brass transition-all duration-700 cursor-pointer whitespace-nowrap"
            >
                Вызвать замерщика
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-16 right-16 hidden lg:flex flex-col gap-12 text-right">
         <div className="hero-stat group">
            <div className="text-6xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors duration-700 whitespace-nowrap">12 лет</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-luxury-brass font-bold mt-2 whitespace-nowrap">опыта работы</div>
         </div>
         <div className="hero-stat group">
            <div className="text-6xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors duration-700 whitespace-nowrap">5000+</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-luxury-brass font-bold mt-2 whitespace-nowrap">объектов сдали</div>
         </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
         <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-luxury-brass to-transparent" />
         <span className="text-[7px] uppercase tracking-[1em] mt-4 text-luxury-text font-bold whitespace-nowrap">листайте вниз</span>
      </div>
    </div>
  );
}
