"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function FinalScene() {
  return (
    <div id="final-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-black">
      <div id="final-bg" className="absolute inset-0">
         <Image
          src={IMAGES.hero}
          alt="Final Background"
          fill
          className="object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto py-20 scrollbar-hide">
        <div className="max-w-6xl w-full">
           <div className="mb-12 md:mb-24 text-center">
              <span className="text-premium-brass text-[10px] uppercase tracking-[1em] mb-8 md:mb-12 block">Контакт</span>
              <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-serif text-white mb-8 md:mb-12 leading-[0.8] tracking-tighter">
                Создадим <br />
                <span className="italic text-premium-brass/80">Пространство</span>
              </h2>
           </div>

           <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
             <form className="space-y-12 md:space-y-16">
               <div className="group relative">
                 <label className="block text-[8px] uppercase tracking-[0.4em] text-premium-brass mb-2 md:mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Ваше имя</label>
                 <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 md:py-4 text-lg md:text-2xl font-serif text-white focus:border-premium-brass outline-none transition-all placeholder:text-white/5" placeholder="Александр" />
               </div>
               <div className="group relative">
                 <label className="block text-[8px] uppercase tracking-[0.4em] text-premium-brass mb-2 md:mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Телефон</label>
                 <input type="tel" className="w-full bg-transparent border-b border-white/10 py-2 md:py-4 text-lg md:text-2xl font-serif text-white focus:border-premium-brass outline-none transition-all placeholder:text-white/5" placeholder="+7" />
               </div>

               <button className="group relative w-full py-6 md:py-8 border border-white/10 overflow-hidden transition-all duration-700 hover:border-premium-brass">
                 <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.8em] text-white group-hover:text-black transition-colors duration-700">Отправить запрос</span>
                 <div className="absolute inset-0 bg-premium-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
               </button>
             </form>

             <div className="space-y-12 md:space-y-16 pt-8 md:pt-0">
                <div className="space-y-4 md:space-y-8">
                   <span className="text-premium-brass text-[8px] uppercase tracking-widest block opacity-40">Офис</span>
                   <p className="text-lg md:text-2xl font-serif text-white/80 leading-relaxed">
                     Москва, Кутузовский проспект, 12 <br />
                     <span className="text-[10px] md:text-sm uppercase tracking-widest text-premium-grey/40 font-sans">Boutique Showroom</span>
                   </p>
                </div>

                <div className="space-y-4 md:space-y-8">
                   <span className="text-premium-brass text-[8px] uppercase tracking-widest block opacity-40">Связь</span>
                   <div className="flex flex-col gap-2 md:gap-4 text-lg md:text-2xl font-serif text-white/80">
                      <a href="tel:+74950000000" className="hover:text-premium-brass transition-colors">+7 (495) 000-00-00</a>
                      <a href="mailto:office@potolokbel.ru" className="hover:text-premium-brass transition-colors">office@potolokbel.ru</a>
                   </div>
                </div>

                <div className="flex gap-8 md:gap-12 pt-4 md:pt-8">
                   <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-premium-grey/40 hover:text-premium-brass transition-colors">Telegram</a>
                   <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-premium-grey/40 hover:text-premium-brass transition-colors">WhatsApp</a>
                   <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-premium-grey/40 hover:text-premium-brass transition-colors">Pinterest</a>
                </div>
             </div>
           </div>
        </div>

        {/* Brand Coda */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-10">
           <span className="text-[8px] uppercase tracking-[2em] whitespace-nowrap text-white">PotolokBel Architectural Surfaces</span>
        </div>
      </div>
    </div>
  );
}
