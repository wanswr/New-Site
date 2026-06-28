"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IMAGES } from "@/constants/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Premium Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-premium-white px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span className="bg-premium-brass/20 backdrop-blur-sm border border-premium-brass/30 text-premium-brass px-4 py-1 text-[10px] uppercase tracking-[0.3em] font-bold inline-block">
            Работаем в Москве и МО
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1]"
        >
          Натяжные потолки в Москве<br />
          как искусство интерьера
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="text-lg md:text-2xl font-sans mb-10 text-premium-white/90 font-light tracking-wide max-w-3xl mx-auto"
        >
          Профессиональный монтаж систем любой сложности за 1 день с гарантией 15 лет
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-premium-brass text-premium-white px-12 py-5 text-sm uppercase tracking-widest hover:bg-premium-gold transition-all duration-300 min-w-[260px] shadow-xl shadow-premium-brass/20 group relative overflow-hidden"
          >
            <span className="relative z-10 font-bold">Рассчитать стоимость</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border border-premium-white/40 text-premium-white px-12 py-5 text-sm uppercase tracking-widest hover:bg-premium-white hover:text-premium-graphite transition-all duration-300 min-w-[260px] backdrop-blur-sm"
          >
            Вызвать замерщика
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-10"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-premium-brass">15 лет</span>
            <span className="text-[10px] uppercase tracking-widest opacity-70">официальная гарантия</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-premium-brass">За 24ч</span>
            <span className="text-[10px] uppercase tracking-widest opacity-70">чистый монтаж</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-premium-brass">0 ₽</span>
            <span className="text-[10px] uppercase tracking-widest opacity-70">выезд и замер</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-premium-brass">Европа</span>
            <span className="text-[10px] uppercase tracking-widest opacity-70">эко-материалы</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-premium-white/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-premium-brass to-transparent" />
      </motion.div>
    </section>
  );
}
