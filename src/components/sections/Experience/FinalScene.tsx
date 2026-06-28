"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function FinalScene() {
  return (
    <div id="final-scene" className="absolute inset-0 w-full h-full pointer-events-auto">
      <div id="final-bg" className="absolute inset-0 scale-150">
         <Image
          src={IMAGES.hero}
          alt="Final Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-premium-graphite/90 backdrop-blur-xl p-12 md:p-24 max-w-4xl w-full border border-premium-brass/20">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 text-center">Начните свое <span className="text-premium-brass">путешествие</span></h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest text-premium-grey">Ваше имя</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-premium-brass outline-none transition-colors" />
            </div>
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest text-premium-grey">Телефон</label>
              <input type="tel" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-premium-brass outline-none transition-colors" />
            </div>
            <button className="md:col-span-2 bg-premium-brass text-black py-6 uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-500">
              Заказать вызов замерщика
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
