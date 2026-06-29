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
    <div id="explorer-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-luxury-bg overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.id}
            initial={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            animate={{ opacity: 0.5, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(30px)" }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
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
            {/* Dark editorial vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-32 z-10">
          <div className="max-w-4xl">
            <motion.span
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-luxury-brass text-[10px] uppercase tracking-[1.5em] mb-12 block font-bold"
            >
              Философия Пространства
            </motion.span>

            <div className="space-y-6 mb-20">
              {TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type)}
                  className="group flex items-center gap-12 text-left transition-all duration-700 cursor-none"
                >
                  <div className={`h-[1px] transition-all duration-1000 bg-luxury-brass ${
                    activeType.id === type.id ? 'w-32' : 'w-0 group-hover:w-16'
                  }`} />
                  <div className="relative overflow-hidden">
                    <span className={`text-5xl md:text-[clamp(3.5rem,10vw,8rem)] font-serif transition-all duration-1000 ${
                      activeType.id === type.id ? 'text-luxury-text' : 'text-luxury-text/5 hover:text-luxury-text/20'
                    }`}>
                      {type.ru}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={activeType.id + "-desc"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
              className="max-w-xl border-l border-luxury-brass/20 pl-16 py-4"
            >
              <p className="text-luxury-text-muted text-sm md:text-lg tracking-widest leading-relaxed font-medium">
                {activeType.desc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Global Cinematic Elements */}
        <div className="absolute top-1/2 right-1/2 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-luxury-brass/20 to-transparent translate-x-[400px] -translate-y-1/2 opacity-30" />
      </div>
    </div>
  );
}
