"use client";

import { useState } from "react";

import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

export default function CalculatorScene() {
  const [area, setArea] = useState(30);
  const [type, setType] = useState("premium");
  const [lights, setLights] = useState(8);

  const basePrices: Record<string, number> = {
    standard: 1200,
    premium: 2800,
    exclusive: 5500,
  };

  const estimatedPrice = area * basePrices[type] + lights * 1500;

  return (
    <div id="calculator-scene" className="absolute inset-0 w-full h-full pointer-events-auto bg-black overflow-hidden flex items-center justify-center">
      {/* Dynamic Environment Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={type}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="absolute inset-0"
          >
            <Image
              src={type === "exclusive" ? IMAGES.hero : IMAGES.details.floating}
              alt="Environment"
              fill
              className="object-cover"
              quality={100}
            />
            {/* Dynamic Light Overlay based on lighting state */}
            <motion.div
               animate={{ opacity: lights / 30 * 0.6 }}
               className="absolute inset-0 bg-premium-brass/20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-32 items-center py-20 lg:py-0 overflow-y-auto max-h-full scrollbar-hide">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-premium-brass text-[10px] uppercase tracking-[1em] mb-8 md:mb-12 block"
          >
            Конфигуратор
          </motion.span>

          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-serif text-white mb-6 md:mb-20 leading-[0.85] tracking-tighter">
            Математика <br />
            <span className="italic text-premium-brass/80">Качества</span>
          </h2>

          <div className="space-y-8 md:space-y-16">
             {/* Type Selection */}
             <div className="space-y-4 md:space-y-6">
                <span className="text-[8px] uppercase tracking-widest text-premium-brass/60">Система примыкания</span>
                <div className="flex flex-wrap gap-4 md:gap-8">
                   {Object.keys(basePrices).map((key) => (
                     <button
                       key={key}
                       onClick={() => setType(key)}
                       className={`text-xs md:text-sm uppercase tracking-[0.3em] transition-all duration-500 pb-2 border-b ${
                         type === key ? "text-white border-premium-brass" : "text-white/20 border-transparent hover:text-white/40"
                       }`}
                     >
                       {key === "standard" ? "Classic" : key === "premium" ? "Shadow" : "Seamless"}
                     </button>
                   ))}
                </div>
             </div>

             {/* Area Slider */}
             <div className="space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-[8px] uppercase tracking-widest text-premium-brass/60">Площадь</span>
                   <span className="text-2xl font-serif text-white">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-white/10 appearance-none cursor-none accent-premium-brass"
                />
             </div>

             {/* Lighting Slider */}
             <div className="space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-[8px] uppercase tracking-widest text-premium-brass/60">Световые точки</span>
                   <span className="text-2xl font-serif text-white">{lights} units</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={lights}
                  onChange={(e) => setLights(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-white/10 appearance-none cursor-none accent-premium-brass"
                />
             </div>
          </div>
        </div>

        {/* Price Output - Integrated */}
        <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-0">
           <div className="relative mb-6 md:mb-12">
             <motion.div
               key={estimatedPrice}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-[10vw] font-serif text-white leading-none tracking-tighter"
             >
               {estimatedPrice.toLocaleString()}
               <span className="text-2xl md:text-5xl text-premium-brass ml-2 md:ml-4">₽</span>
             </motion.div>
             <span className="absolute -top-10 lg:-top-12 right-0 text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-premium-brass text-right">Предварительный <br />расчет</span>
           </div>

           <p className="text-premium-grey/40 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-16 text-center lg:text-right max-w-xs">
             Стоимость включает оригинальные комплектующие и профессиональный монтаж по стандарту White Glove.
           </p>

           <button className="group relative w-full md:w-auto px-12 md:px-16 py-5 md:py-6 border border-white/20 overflow-hidden transition-all duration-700 hover:border-premium-brass mb-12 lg:mb-0">
              <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-white group-hover:text-black transition-colors duration-700">Обсудить проект</span>
              <div className="absolute inset-0 bg-premium-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
           </button>
        </div>
      </div>

      {/* Decorative architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
