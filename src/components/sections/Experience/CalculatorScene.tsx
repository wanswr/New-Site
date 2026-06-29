"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion } from "framer-motion";

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
    <div id="calculator-scene" className="relative w-full min-h-screen bg-luxury-bg overflow-hidden flex items-center justify-center py-32 md:py-64">

      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20">
         <Image
           src={type === "exclusive" ? IMAGES.hero : IMAGES.details.floating}
           alt="Atmosphere"
           fill
           className="object-cover grayscale"
           quality={95}
         />
         <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-bg/80 to-luxury-bg" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold"
            >
              Конфигурация Стоимости
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-serif text-luxury-text leading-tight tracking-tighter">
              Архитектура <br />
              <span className="italic text-luxury-brass/80 font-normal">Инвестиций</span>
            </h2>
          </div>

          <div className="space-y-12">
             <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Выбор Системы</span>
                <div className="flex flex-wrap gap-8">
                   {Object.keys(basePrices).map((key) => (
                     <button
                       key={key}
                       onClick={() => setType(key)}
                       className={`relative py-2 transition-all duration-700 cursor-none ${
                         type === key ? "text-luxury-text" : "text-luxury-text/20 hover:text-luxury-text/40"
                       }`}
                     >
                       <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                         {key === "standard" ? "Classic" : key === "premium" ? "Shadow" : "Bespoke"}
                       </span>
                       {type === key && (
                         <motion.div layoutId="calc-underline" className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-brass" />
                       )}
                     </button>
                   ))}
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-2">
                     <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Площадь</span>
                     <span className="text-2xl font-serif text-luxury-text">{area} м²</span>
                  </div>
                  <input
                    type="range" min="10" max="250" value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-luxury-surface appearance-none cursor-none accent-luxury-brass"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-2">
                     <span className="text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Свет</span>
                     <span className="text-2xl font-serif text-luxury-text">{lights} pts</span>
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

        <div className="flex flex-col items-center lg:items-end">
           <div className="relative text-center lg:text-right">
              <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-brass font-bold mb-4 block opacity-60">
                Предварительная Оценка
              </span>

              <motion.div
                key={estimatedPrice}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-7xl font-serif text-luxury-text leading-none tracking-tighter"
              >
                {estimatedPrice.toLocaleString()}<span className="text-xl md:text-2xl text-luxury-brass ml-2">₽</span>
              </motion.div>

              <p className="mt-8 text-luxury-text-muted text-[10px] uppercase tracking-[0.3em] leading-relaxed max-w-xs lg:ml-auto font-medium">
                Финальная стоимость уточняется после инженерного замера.
              </p>
           </div>

           <div className="mt-16 w-full lg:w-auto">
             <button className="group relative w-full lg:w-72 h-16 bg-luxury-brass overflow-hidden cursor-none">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.6em] text-black font-bold transition-transform duration-700 group-hover:-translate-y-20 block text-center">
                  Запросить Смету
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.6em] text-black font-bold translate-y-20 transition-transform duration-700 group-hover:translate-y-0">
                  Обсудить Проект
                </span>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
