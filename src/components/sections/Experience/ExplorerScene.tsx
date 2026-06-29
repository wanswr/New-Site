"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

const TYPES = [
  { id: 'matte', title: 'Matte', ru: 'Матовый', image: IMAGES.types.matte, desc: 'Безупречная матовая поверхность. Эстетика классической штукатурки без лишнего блеска.' },
  { id: 'shadow', title: 'Shadow', ru: 'Теневой', image: IMAGES.types.shadow, desc: 'Технологичный зазор по периметру. Создает эффект "парящей" плоскости и идеальные линии.' },
  { id: 'floating', title: 'Light', ru: 'Световой', image: IMAGES.types.floating, desc: 'Мягкое заполняющее освещение. Потолок как основной источник атмосферы в интерьере.' }
];

export default function ExplorerScene() {
  const [activeType, setActiveType] = useState(TYPES[0]);

  return (
    <div id="explorer-scene" className="relative w-full min-h-screen flex items-center justify-center bg-luxury-bg overflow-hidden py-32 md:py-64">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeType.image}
              alt={activeType.title}
              fill
              className="object-cover object-center grayscale-[0.3]"
              quality={95}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] mb-12 block font-bold"
          >
            Философия Пространства
          </motion.span>

          <div className="space-y-4 mb-16">
            {TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type)}
                className="group flex items-center gap-8 text-left cursor-none"
              >
                <div className={`h-[1px] transition-all duration-1000 bg-luxury-brass ${
                  activeType.id === type.id ? 'w-20' : 'w-0 group-hover:w-10'
                }`} />
                <span className={`text-3xl md:text-5xl font-serif transition-all duration-700 ${
                  activeType.id === type.id ? 'text-luxury-text' : 'text-luxury-text/20 hover:text-luxury-text/40'
                }`}>
                  {type.ru}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeType.id + "-desc"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="max-w-md border-l border-luxury-brass/30 pl-8 md:pl-12 py-2"
            >
              <p className="text-luxury-text-muted text-sm md:text-base tracking-widest leading-relaxed font-medium">
                {activeType.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:flex justify-end">
           <div className="relative w-80 h-[500px] border border-luxury-brass/20 overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeType.id + "-thumb"}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -50 }}
                 transition={{ duration: 1, ease: "circOut" }}
                 className="absolute inset-0"
               >
                 <Image
                   src={activeType.image}
                   alt={activeType.title}
                   fill
                   className="object-cover"
                 />
               </motion.div>
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}
