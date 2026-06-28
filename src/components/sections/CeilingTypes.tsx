"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CEILING_TYPES } from "@/constants/content";
import { cn } from "@/lib/utils";

export default function CeilingTypes() {
  const [activeType, setActiveType] = useState(CEILING_TYPES[0]);

  return (
    <section id="types" className="py-24 px-6 md:px-12 bg-premium-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">
            Коллекция решений
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-premium-graphite">
            Выберите свою фактуру
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Menu */}
          <div className="lg:col-span-4 space-y-2">
            {CEILING_TYPES.map((type) => (
              <button
                key={type.id}
                onMouseEnter={() => setActiveType(type)}
                onClick={() => setActiveType(type)}
                className={cn(
                  "w-full text-left py-4 border-b border-premium-grey/30 transition-all duration-500 flex items-center group",
                  activeType.id === type.id ? "pl-4" : "pl-0 hover:pl-2"
                )}
              >
                <span
                  className={cn(
                    "text-xl md:text-2xl font-serif transition-colors duration-500",
                    activeType.id === type.id ? "text-premium-brass" : "text-premium-graphite/40"
                  )}
                >
                  {type.title}
                </span>
                {activeType.id === type.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="ml-4 w-2 h-2 rounded-full bg-premium-brass"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Interactive Scene */}
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeType.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeType.image}
                  alt={activeType.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Info Card Overlay */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md bg-premium-white/90 backdrop-blur-sm p-8"
                >
                  <h3 className="text-2xl font-serif mb-4 text-premium-graphite">{activeType.title}</h3>
                  <p className="text-premium-graphite/70 font-light leading-relaxed mb-6">
                    {activeType.description}
                  </p>
                  <button className="text-xs uppercase tracking-widest text-premium-brass font-bold border-b border-premium-brass pb-1 hover:text-premium-graphite hover:border-premium-graphite transition-colors">
                    Узнать подробнее
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
