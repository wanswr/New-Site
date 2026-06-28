"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";

const TYPES = [
  { id: 'matte', title: 'Матовый', image: IMAGES.types.matte, desc: 'Классическая эстетика архитектурного бетона и штукатурки.' },
  { id: 'shadow', title: 'Теневой', image: IMAGES.types.shadow, desc: 'Эффект парящего потолка с идеальным зазором по периметру.' },
  { id: 'floating', title: 'Парящий', image: IMAGES.types.floating, desc: 'Мягкий свет, стирающий границы между стеной и потолком.' }
];

export default function ExplorerScene() {
  const [activeType, setActiveType] = useState(TYPES[0]);

  return (
    <div id="explorer-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-premium-ivory px-6 overflow-hidden">
      <div className="relative w-full h-full max-w-[2400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeType.image}
              alt={activeType.title}
              fill
              className="object-cover"
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Исследуйте фактуры</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type)}
                  className={`px-8 py-3 rounded-full border transition-all duration-500 uppercase text-xs tracking-widest ${
                    activeType.id === type.id
                    ? 'bg-premium-brass border-premium-brass text-black'
                    : 'border-white/30 text-white hover:border-white'
                  }`}
                >
                  {type.title}
                </button>
              ))}
            </div>
            <p className="text-xl text-premium-grey leading-relaxed">
              {activeType.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
