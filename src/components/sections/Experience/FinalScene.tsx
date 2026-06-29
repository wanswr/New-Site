"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function FinalScene() {
  return (
    <div id="final-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-luxury-bg">
      <div id="final-bg" className="absolute inset-0">
         <Image
          src={IMAGES.hero}
          alt="Final Background"
          fill
          className="object-cover opacity-10 scale-110 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-32">
        <div className="max-w-7xl w-full">
           <div className="mb-24 md:mb-32 text-center">
              <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[1.5em] mb-12 block font-bold">
                The Masterpiece Awaits
              </span>
              <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-serif text-luxury-text mb-12 leading-[0.8] tracking-tighter">
                Создадим <br />
                <span className="italic text-luxury-brass/80">Ваш Интерьер</span>
              </h2>
           </div>

           <div className="grid md:grid-cols-2 gap-24 md:gap-48 items-start">
             <form className="space-y-16 md:space-y-24">
               <div className="group relative">
                 <label className="block text-[10px] uppercase tracking-[0.6em] text-luxury-brass mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold">Name</label>
                 <input type="text" className="w-full bg-transparent border-b border-luxury-brass/20 py-4 text-xl md:text-3xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-luxury-text/5 cursor-none" placeholder="Alexander" />
               </div>
               <div className="group relative">
                 <label className="block text-[10px] uppercase tracking-[0.6em] text-luxury-brass mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold">Phone</label>
                 <input type="tel" className="w-full bg-transparent border-b border-luxury-brass/20 py-4 text-xl md:text-3xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-luxury-text/5 cursor-none" placeholder="+7" />
               </div>

               <button className="group relative w-full h-24 bg-luxury-brass overflow-hidden transition-all duration-700 cursor-none">
                 <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[1em] text-black font-bold">Begin Project</span>
                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
               </button>
             </form>

             <div className="space-y-16 md:space-y-24 pt-12 md:pt-0">
                <div className="space-y-8">
                   <span className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block opacity-60 font-bold">Atelier</span>
                   <p className="text-xl md:text-3xl font-serif text-luxury-text leading-relaxed">
                     Москва, Кутузовский проспект, 12 <br />
                     <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-luxury-text-muted font-sans font-bold block mt-4 italic">Boutique Showroom</span>
                   </p>
                </div>

                <div className="space-y-8">
                   <span className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block opacity-60 font-bold">Dialogue</span>
                   <div className="flex flex-col gap-6 text-xl md:text-3xl font-serif text-luxury-text">
                      <a href="tel:+74950000000" className="hover:text-luxury-brass transition-colors cursor-none">+7 (495) 000-00-00</a>
                      <a href="mailto:office@potolokbel.ru" className="hover:text-luxury-brass transition-colors cursor-none">office@potolokbel.ru</a>
                   </div>
                </div>

                <div className="flex gap-12 pt-12 border-t border-luxury-brass/10">
                   <a href="#" className="text-[10px] uppercase tracking-[0.5em] text-luxury-text-muted hover:text-luxury-brass transition-colors cursor-none font-bold">Telegram</a>
                   <a href="#" className="text-[10px] uppercase tracking-[0.5em] text-luxury-text-muted hover:text-luxury-brass transition-colors cursor-none font-bold">Pinterest</a>
                </div>
             </div>
           </div>
        </div>

        {/* Cinematic Coda */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-20">
           <span className="text-[8px] uppercase tracking-[2.5em] whitespace-nowrap text-luxury-text font-bold">PotolokBel Architectural Surfaces</span>
        </div>
      </div>
    </div>
  );
}
