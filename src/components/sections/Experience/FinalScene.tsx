"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function FinalScene() {
  return (
    <div id="final-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-y-auto lg:overflow-hidden">
      <div id="final-bg" className="absolute inset-0 scale-125">
         <Image
          src={IMAGES.hero}
          alt="Final Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="bg-premium-graphite/90 backdrop-blur-xl p-12 md:p-24 max-w-4xl w-full border border-premium-brass/20 mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 text-center leading-tight">Project <br /><span className="italic text-premium-brass">Consultation</span></h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-premium-brass font-bold">Identity</label>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-premium-brass outline-none transition-colors placeholder:text-white/10" />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-premium-brass font-bold">Contact</label>
              <input type="tel" placeholder="+7 (___) ___ __ __" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-premium-brass outline-none transition-colors placeholder:text-white/10" />
            </div>
            <button className="md:col-span-2 bg-premium-brass text-black py-6 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-white transition-all duration-700">
              Submit Request
            </button>
          </form>
        </div>

        {/* Minimal Narrative Footer */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12 text-white/40">
           <div className="space-y-4">
              <h3 className="text-xl font-serif text-premium-brass">PotolokBel</h3>
              <p className="text-[10px] uppercase tracking-widest leading-relaxed max-w-xs">
                Architectural surfaces for <br />
                distinguished interiors. <br />
                Est. 2014 • Moscow
              </p>
           </div>

           <div className="flex gap-24 text-[10px] uppercase tracking-[0.3em]">
              <div className="space-y-4">
                <span className="text-premium-brass font-bold">Inquiries</span>
                <p>+7 (495) 000-00-00 <br /> office@potolokbel.ru</p>
              </div>
              <div className="space-y-4">
                <span className="text-premium-brass font-bold">Social</span>
                <p className="flex flex-col gap-2">
                  <a href="#" className="hover:text-white transition-colors">Telegram</a>
                  <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
