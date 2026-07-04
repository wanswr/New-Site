"use client";

import { useRef, useEffect } from "react";
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

      // Slow zoom effect on video
      gsap.to(videoRef.current, {
        scale: 1.1,
        duration: 20,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Text animation - Horizontal only
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

  // Mouse reaction for stats with proper cleanup
  useEffect(() => {
    const stats = containerRef.current?.querySelectorAll(".hero-stat");
    const ctx = gsap.context(() => {
      const onMouseMove = (e: MouseEvent, stat: Element) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = stat.getBoundingClientRect();
          const x = (clientX - (left + width / 2)) * 0.15;
          const y = (clientY - (top + height / 2)) * 0.15;
          gsap.to(stat, { x, y, duration: 0.4, ease: "power2.out" });
      };

      const onMouseLeave = (stat: Element) => {
          gsap.to(stat, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      };

      stats?.forEach((stat) => {
          const mm = (e: Event) => onMouseMove(e as MouseEvent, stat);
          const ml = () => onMouseLeave(stat);
          stat.addEventListener("mousemove", mm);
          stat.addEventListener("mouseleave", ml);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="hero-scene" ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden">
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

      <div className="relative z-10 w-full h-full max-w-[2000px] mx-auto px-6 md:px-24 flex flex-col justify-center">
        <div className="max-w-6xl">
          <div className="hero-reveal mb-8">
            <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold">
              POTOLKBEL • НАТЯЖНЫЕ ПОТОЛКИ В МОСКВЕ
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-[clamp(2.5rem,10vw,140px)] font-serif leading-[1] text-luxury-text mb-12 tracking-tighter whitespace-nowrap"
          >
            Натяжные потолки <br />
            <span className="italic text-luxury-brass font-normal">за 1 день без пыли</span>
          </h1>

          <p className="hero-reveal text-[11px] md:text-base uppercase tracking-[0.4em] text-luxury-text-muted mb-16 font-medium max-w-2xl leading-relaxed">
            Бесплатный замер • Фиксированная цена • Гарантия 15 лет
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row gap-8">
            <button
                onClick={() => {
                   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                   window.scrollTo({ top: scrollHeight * 0.95, behavior: 'smooth' });
                }}
                className="px-16 py-7 bg-luxury-brass text-luxury-bg text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-white transition-colors duration-700 cursor-pointer"
            >
                Рассчитать стоимость
            </button>

            <button
                onClick={() => window.open('https://wa.me/placeholder', '_blank')}
                className="px-16 py-7 border border-luxury-brass/30 text-luxury-text text-[10px] uppercase tracking-[0.5em] font-bold hover:border-luxury-brass transition-all duration-700 cursor-pointer"
            >
                Вызвать замерщика
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-24 right-24 hidden lg:flex flex-col gap-20">
         <div className="hero-stat text-right group">
            <div className="text-7xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors duration-700">12 лет</div>
            <div className="text-[10px] uppercase tracking-[0.5em] text-luxury-brass font-bold mt-4">опыта работы</div>
         </div>
         <div className="hero-stat text-right group">
            <div className="text-7xl font-serif text-luxury-text leading-none group-hover:text-luxury-brass transition-colors duration-700">5000+</div>
            <div className="text-[10px] uppercase tracking-[0.5em] text-luxury-brass font-bold mt-4">объектов сдали</div>
         </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
         <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-luxury-brass to-transparent" />
         <span className="text-[8px] uppercase tracking-[1em] mt-6 text-luxury-text font-bold">листайте вниз</span>
      </div>
    </div>
  );
}
