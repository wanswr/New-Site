"use client";

import { useState } from "react";
import { Calculator as CalcIcon, CheckCircle2 } from "lucide-react";

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
    <div id="calculator-scene" className="absolute inset-0 w-full h-full opacity-0 pointer-events-none flex items-center justify-center bg-premium-graphite text-white px-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Рассчитайте ваш проект</h2>
          <p className="text-premium-grey mb-8">
            Получите предварительную оценку стоимости с учетом премиальных материалов и систем освещения.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2 text-premium-grey">Тип полотна</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(basePrices).map((key) => (
                  <button
                    key={key}
                    onClick={() => setType(key)}
                    className={`py-3 text-[10px] uppercase tracking-tighter border transition-all ${
                      type === key ? "border-premium-brass text-premium-brass" : "border-white/20 text-white/60"
                    }`}
                  >
                    {key === "standard" ? "Стандарт" : key === "premium" ? "Премиум" : "Эксклюзив"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                  <span>Площадь</span>
                  <span className="text-premium-brass">{area} м²</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-brass"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                    <span>Углы</span>
                    <span className="text-premium-brass">{corners}</span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="20"
                    value={corners}
                    onChange={(e) => setCorners(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-brass"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                    <span>Светильники</span>
                    <span className="text-premium-brass">{lights}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={lights}
                    onChange={(e) => setLights(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-premium-brass"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-lg">
          <div className="flex items-center justify-between mb-8">
            <CalcIcon className="text-premium-brass" size={32} />
            <span className="text-xs uppercase tracking-widest text-premium-grey">Оценка стоимости</span>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-serif text-premium-brass">
              {estimatedPrice.toLocaleString()} <span className="text-xl">₽</span>
            </span>
            <p className="text-xs text-white/40 mt-2">*Точная стоимость после замера</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm gap-2 text-white/80">
              <CheckCircle2 size={16} className="text-premium-brass" /> {type === 'exclusive' ? 'Эксклюзивные полотна' : 'Полотно MSD Premium'}
            </li>
            <li className="flex items-center text-sm gap-2 text-white/80">
              <CheckCircle2 size={16} className="text-premium-brass" /> Алюминиевый профиль EuroKraab
            </li>
            <li className="flex items-center text-sm gap-2 text-white/80">
              <CheckCircle2 size={16} className="text-premium-brass" /> Чистый монтаж с пылесосом
            </li>
          </ul>

          <button className="w-full bg-premium-brass text-premium-graphite py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all">
            Записаться на замер
          </button>
        </div>
      </div>
    </div>
  );
}
