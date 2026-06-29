"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

const TYPES = [
  { id: 'matte', title: 'Матовый', image: IMAGES.types.matte, desc: 'Безупречная матовая поверхность. Эстетика классической штукатурки без лишнего блеска.' },
  { id: 'shadow', title: 'Теневой', image: IMAGES.types.shadow, desc: 'Технологичный зазор по периметру. Создает эффект "парящей" плоскости и идеальные линии.' },
  { id: 'floating', title: 'Световой', image: IMAGES.types.floating, desc: 'Мягкое заполняющее освещение. Потолок как основной источник атмосферы в интерьере.' }
];

export default function ExplorerScene() {
  const [activeType, setActiveType] = useState(TYPES[0]);

  return (
    <div id="explorer-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-black overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.id}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeType.image}
              alt={activeType.title}
              fill
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-32 z-10 overflow-y-auto scrollbar-hide py-24 md:py-0">
          <div className="max-w-3xl">
            <motion.span
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-premium-brass text-[10px] uppercase tracking-[0.8em] mb-8 md:mb-12 block"
            >
              Материалы
            </motion.span>

            <div className="space-y-2 md:space-y-4 mb-12 md:mb-16">
              {TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type)}
                  className="group flex items-center gap-4 md:gap-8 text-left transition-all duration-700"
                >
                  <div className={`h-[1px] transition-all duration-700 bg-premium-brass ${
                    activeType.id === type.id ? 'w-12 md:w-24' : 'w-0 group-hover:w-6 md:group-hover:w-12'
                  }`} />
                  <span className={`text-3xl md:text-[clamp(3rem,8vw,6rem)] font-serif transition-all duration-700 ${
                    activeType.id === type.id ? 'text-white' : 'text-white/20 hover:text-white/40'
                  }`}>
                    {type.title}
                  </span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeType.id + "-desc"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-md border-l border-premium-brass/30 pl-6 md:pl-12"
            >
              <p className="text-premium-grey text-xs md:text-base uppercase tracking-widest leading-relaxed">
                {activeType.desc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-12 right-12 flex flex-col items-end opacity-20">
           <span className="text-[8px] uppercase tracking-[1em] mb-4">Tactile Excellence</span>
           <div className="w-32 h-[1px] bg-white" />
        </div>
      </div>
    </div>
  );
}
