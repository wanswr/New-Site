"use client";

import { useState } from "react";

export default function CalculatorScene() {
  const [area, setArea] = useState(20);
  const [type, setType] = useState("premium");
  const [corners, setCorners] = useState(4);
  const [lights, setLights] = useState(4);

  const basePrices: Record<string, number> = {
    standard: 400,
    premium: 850,
    exclusive: 1600,
  };

  const PRICE_PER_CORNER = 150;
  const PRICE_PER_LIGHT = 500;

  const estimatedPrice =
    (area * basePrices[type]) +
    (Math.max(0, corners - 4) * PRICE_PER_CORNER) +
    (lights * PRICE_PER_LIGHT);

  return (
    <div id="calculator-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-premium-white text-premium-graphite px-6 overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_450px] gap-24 items-center">
        <div className="space-y-12">
          <div>
            <span className="text-premium-brass text-xs uppercase tracking-[0.5em] mb-4 block">Project Estimator</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Value your <br /><span className="italic">Vision</span></h2>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-premium-brass font-bold">Selection</label>
              <div className="flex flex-wrap gap-3">
                {Object.keys(basePrices).map((key) => (
                  <button
                    key={key}
                    onClick={() => setType(key)}
                    className={`px-8 py-3 text-[10px] uppercase tracking-widest transition-all duration-500 border ${
                      type === key ? "bg-premium-graphite text-white border-premium-graphite" : "border-premium-graphite/10 text-premium-graphite/40 hover:border-premium-graphite/30"
                    }`}
                  >
                    {key === "standard" ? "Essentials" : key === "premium" ? "Curated" : "Signature"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                   <label className="text-[10px] uppercase tracking-widest text-premium-graphite/60">Surface Area</label>
                   <span className="font-serif text-2xl">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-premium-graphite/10 appearance-none cursor-none accent-premium-brass"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                   <label className="text-[10px] uppercase tracking-widest text-premium-graphite/60">Complexity Points</label>
                   <span className="font-serif text-2xl">{corners}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="20"
                  value={corners}
                  onChange={(e) => setCorners(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-premium-graphite/10 appearance-none cursor-none accent-premium-brass"
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <div className="flex justify-between items-end">
                   <label className="text-[10px] uppercase tracking-widest text-premium-graphite/60">Integrated Lighting</label>
                   <span className="font-serif text-2xl">{lights} units</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={lights}
                  onChange={(e) => setLights(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-premium-graphite/10 appearance-none cursor-none accent-premium-brass"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative group p-1 bg-gradient-to-tr from-premium-brass/20 to-transparent">
          <div className="bg-white p-12 shadow-2xl relative z-10">
            <div className="flex justify-between items-start mb-16">
              <div className="w-12 h-[1px] bg-premium-brass mt-3" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-premium-brass font-bold text-right">Investment <br />Estimation</span>
            </div>

            <div className="mb-16">
              <span className="text-6xl md:text-7xl font-serif text-premium-graphite block mb-2">
                {estimatedPrice.toLocaleString()} <span className="text-2xl font-sans text-premium-brass">₽</span>
              </span>
              <p className="text-[9px] uppercase tracking-widest text-premium-graphite/30">Preliminary project valuation</p>
            </div>

            <div className="space-y-6 mb-16">
              <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-premium-brass transition-transform group-hover/item:scale-150" />
                <span className="text-xs uppercase tracking-widest text-premium-graphite/70">MSD Evolution Textiles</span>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-premium-brass transition-transform group-hover/item:scale-150" />
                <span className="text-xs uppercase tracking-widest text-premium-graphite/70">EuroKraab Shadow Systems</span>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-premium-brass transition-transform group-hover/item:scale-150" />
                <span className="text-xs uppercase tracking-widest text-premium-graphite/70">White Glove Installation</span>
              </div>
            </div>

            <button className="w-full border border-premium-graphite text-premium-graphite py-5 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-premium-graphite hover:text-white transition-all duration-700">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
