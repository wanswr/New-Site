"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function AboutScene() {
  return (
    <div id="about-scene" className="relative w-full bg-luxury-bg py-32 md:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden group"
        >
          <Image
            src={IMAGES.details.texture}
            alt="Craftsmanship detail"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-12 left-12">
             <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-brass font-bold mb-2 block">Основатель</span>
             <h3 className="text-2xl font-serif text-luxury-text">Александр Белов</h3>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold"
          >
            Человеческий Фактор
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-luxury-text leading-[1.2] tracking-tighter"
          >
            Я создаю потолки, которые <br />
            <span className="italic text-luxury-brass/80 font-normal">становятся частью интерьера</span>
          </motion.h2>

          <div className="h-[1px] w-24 bg-luxury-brass/30" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-text-muted text-sm md:text-base tracking-[0.1em] leading-relaxed max-w-lg font-medium"
          >
            За каждым проектом стоит ручная работа, многолетний опыт и внимание к деталям.
            Мы не просто натягиваем полотно — мы проектируем свет и геометрию вашего пространства,
            чтобы каждый миллиметр выглядел безупречно.
          </motion.p>

          <div className="grid grid-cols-2 gap-12 pt-8">
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">10+</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Лет в индустрии</p>
             </div>
             <div className="space-y-4">
                <span className="text-2xl md:text-3xl font-serif text-luxury-text">1500+</span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-brass font-bold">Выполненных объектов</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
