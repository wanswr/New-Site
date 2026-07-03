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

      // Text animation
      const split = new SplitType(titleRef.current, { types: "words" });
      gsap.set(split.words, {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      });

      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Reveal other elements
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1
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
          const x = (clientX - (left + width / 2)) * 0.1;
          const y = (clientY - (top + height / 2)) * 0.1;
          gsap.to(stat, { x, y, duration: 0.4, ease: "power2.out" });
      };

      const onMouseLeave = (stat: Element) => {
          gsap.to(stat, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      };

      stats?.forEach((stat) => {
          const mouseMoveHandler = (e: Event) => onMouseMove(e as MouseEvent, stat);
          const mouseLeaveHandler = () => onMouseLeave(stat);
          stat.addEventListener("mousemove", mouseMoveHandler);
          stat.addEventListener("mouseleave", mouseLeaveHandler);
      });
    }, containerRef);

    return () => {
        ctx.revert();
    };
  }, []);

  return (
    <div id="hero-scene" ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-interior-design-of-a-living-room-with-a-fireplace-34538-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="hero-reveal mb-6">
            <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
              Москва и область • Работаем без выходных
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-[clamp(2rem,7vw,90px)] font-serif leading-[1.1] text-luxury-text mb-8 tracking-tighter"
          >
            Натяжные потолки <br />
            <span className="italic text-luxury-brass">за 1 день без пыли и грязи</span>
          </h1>

          <div className="hero-reveal flex flex-wrap gap-x-8 gap-y-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-luxury-brass rounded-full" />
              <span className="text-luxury-text-muted text-sm uppercase tracking-widest">Бесплатный замер</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-luxury-brass rounded-full" />
              <span className="text-luxury-text-muted text-sm uppercase tracking-widest">Фиксированная цена</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-luxury-brass rounded-full" />
              <span className="text-luxury-text-muted text-sm uppercase tracking-widest">Гарантия 15 лет</span>
            </div>
          </div>

          <div className="hero-reveal flex flex-col sm:flex-row gap-6">
            <button
                onClick={() => document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-luxury-brass text-luxury-bg text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-500 cursor-pointer"
            >
                Рассчитать стоимость
            </button>

            <button
                onClick={() => window.open('https://wa.me/placeholder', '_blank')}
                className="px-12 py-6 border border-luxury-brass/30 text-luxury-text text-xs uppercase tracking-[0.3em] font-bold hover:border-luxury-brass transition-colors duration-500 cursor-pointer"
            >
                Вызвать замерщика
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-12">
         <div className="hero-stat text-right">
            <div className="text-4xl font-serif text-luxury-text">12 лет</div>
            <div className="text-[10px] uppercase tracking-widest text-luxury-brass">опыта работы</div>
         </div>
         <div className="hero-stat text-right">
            <div className="text-4xl font-serif text-luxury-text">5000+</div>
            <div className="text-[10px] uppercase tracking-widest text-luxury-brass">объектов сдали</div>
         </div>
      </div>
    </div>
  );
}
