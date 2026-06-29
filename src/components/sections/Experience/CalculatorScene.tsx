"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

export default function CalculatorScene() {
  const [area, setArea] = useState(45);
  const [type, setType] = useState("premium");
  const [lights, setLights] = useState(12);

  const basePrices: Record<string, number> = {
    standard: 1800,
    premium: 4500,
    exclusive: 8500,
  };

  const estimatedPrice = area * basePrices[type] + lights * 2500;

  return (
    <div id="calculator-scene" className="absolute inset-0 w-full h-full pointer-events-auto bg-luxury-bg overflow-hidden flex items-center justify-center">

      {/* Immersive Environment */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={type}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={type === "exclusive" ? IMAGES.hero : IMAGES.details.floating}
              alt="Atmosphere"
              fill
              className="object-cover grayscale"
              quality={95}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-bg/80 to-luxury-bg" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] px-6 md:px-32 grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-16">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[1.5em] block font-bold"
            >
              Конфигурация Пространства
            </motion.span>

            <h2 className="text-4xl md:text-[clamp(3rem,8vw,10rem)] font-serif text-luxury-text leading-[0.8] tracking-tighter">
              Архитектура <br />
              <span className="italic text-luxury-brass/80">Инвестиций</span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
             {/* System Selection */}
             <div className="space-y-8">
                <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Выбор Системы</span>
                <div className="flex flex-wrap gap-12">
                   {Object.keys(basePrices).map((key) => (
                     <button
                       key={key}
                       onClick={() => setType(key)}
                       className={`relative py-2 transition-all duration-700 cursor-none ${
                         type === key ? "text-luxury-text" : "text-luxury-text/10 hover:text-luxury-text/30"
                       }`}
                     >
                       <span className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold">
                         {key === "standard" ? "Classic" : key === "premium" ? "Shadow" : "Bespoke"}
                       </span>
                       {type === key && (
                         <motion.div layoutId="calc-underline" className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-brass" />
                       )}
                     </button>
                   ))}
                </div>
             </div>

             {/* Area & Lighting Control */}
             <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-4">
                     <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Площадь</span>
                     <span className="text-3xl font-serif text-luxury-text">{area} м²</span>
                  </div>
                  <input
                    type="range" min="10" max="250" value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-luxury-surface appearance-none cursor-none accent-luxury-brass"
                  />
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-4">
                     <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Свет</span>
                     <span className="text-3xl font-serif text-luxury-text">{lights} pts</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={lights}
                    onChange={(e) => setLights(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-luxury-surface appearance-none cursor-none accent-luxury-brass"
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Visualized Output */}
        <div className="flex flex-col items-center lg:items-end justify-center">
           <div className="relative group">
              <div className="absolute -inset-20 bg-luxury-brass/5 rounded-full blur-[100px] group-hover:bg-luxury-brass/10 transition-all duration-1000" />

              <div className="relative text-center lg:text-right">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-luxury-brass font-bold mb-4 block opacity-60">
                  Estimating Value
                </span>

                <motion.div
                  key={estimatedPrice}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-6xl md:text-[12vw] font-serif text-luxury-text leading-none tracking-tighter"
                >
                  {estimatedPrice.toLocaleString()}<span className="text-2xl md:text-4xl text-luxury-brass ml-2">₽</span>
                </motion.div>

                <p className="mt-12 text-luxury-text-muted text-[10px] uppercase tracking-[0.4em] leading-relaxed max-w-sm ml-auto font-medium">
                  Ориентировочная стоимость реализации проекта по стандартам Architectural Digest.
                </p>
              </div>
           </div>

           <div className="mt-24 w-full md:w-auto">
             <button className="group relative w-full md:w-80 h-20 bg-luxury-brass overflow-hidden cursor-none">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.8em] text-black font-bold transition-transform duration-700 group-hover:-translate-y-20 block">
                  Запросить Смету
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.8em] text-black font-bold translate-y-20 transition-transform duration-700 group-hover:translate-y-0">
                  Request Quote
                </span>
             </button>
           </div>
        </div>
      </div>

      {/* Background Cinematic Texture */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] border-l border-t border-luxury-brass/5 z-0" />
    </div>
  );
}
