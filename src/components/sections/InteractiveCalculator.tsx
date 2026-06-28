"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CEILING_PRICES = {
  matte: 800,
  glossy: 850,
  shadow: 1500,
  floating: 1800,
  light: 2500,
  fabric: 2200,
};

export default function InteractiveCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    area: 20,
    rooms: 1,
    type: "matte",
    lighting: "spots", // spots, lines, chandelier
  });

  const totalCost = useMemo(() => {
    const basePrice = CEILING_PRICES[formData.type as keyof typeof CEILING_PRICES] || 800;
    let cost = formData.area * basePrice;

    // Add room complexity
    cost += (formData.rooms - 1) * 2000;

    // Add lighting
    if (formData.lighting === "spots") cost += formData.area * 300;
    if (formData.lighting === "lines") cost += formData.area * 800;
    if (formData.lighting === "chandelier") cost += 1500;

    return cost;
  }, [formData]);

  const steps = [
    { id: 1, title: "Параметры" },
    { id: 2, title: "Тип потолка" },
    { id: 3, title: "Освещение" },
    { id: 4, title: "Результат" },
  ];

  return (
    <section id="calculator" className="py-32 px-6 md:px-12 bg-premium-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">
            Онлайн расчет
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-premium-graphite">
            Калькулятор стоимости
          </h2>
        </div>

        <div className="bg-premium-white shadow-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <div className="bg-premium-graphite md:w-64 p-8 text-premium-white flex flex-col justify-between">
            <div className="space-y-6">
              {steps.map((s) => (
                <div
                  key={s.id}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-300",
                    step === s.id ? "opacity-100 translate-x-2" : "opacity-40"
                  )}
                >
                  <span className="w-8 h-8 rounded-full border border-premium-brass flex items-center justify-center text-xs">
                    {s.id}
                  </span>
                  <span className="text-xs uppercase tracking-widest">{s.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-0">
               <Calculator className="text-premium-brass mb-4" size={32} />
               <p className="text-[10px] uppercase tracking-widest opacity-50">Предварительный расчет</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-12 flex flex-col relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 h-full"
                >
                  <div>
                    <label className="text-xs uppercase tracking-widest text-premium-graphite/60 block mb-4">
                      Площадь помещения ({formData.area} м²)
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) })}
                      className="w-full h-1 bg-premium-ivory accent-premium-brass appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-premium-graphite/60 block mb-4">
                      Количество комнат
                    </label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          onClick={() => setFormData({ ...formData, rooms: n })}
                          className={cn(
                            "w-12 h-12 border transition-all duration-300 font-serif",
                            formData.rooms === n ? "bg-premium-graphite text-premium-white border-premium-graphite" : "border-premium-grey hover:border-premium-graphite"
                          )}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-2 gap-4 h-full"
                >
                  {Object.entries(CEILING_PRICES).map(([key, price]) => (
                    <button
                      key={key}
                      onClick={() => setFormData({ ...formData, type: key })}
                      className={cn(
                        "p-4 border text-left transition-all duration-300 flex flex-col justify-between",
                        formData.type === key ? "bg-premium-graphite text-premium-white border-premium-graphite" : "border-premium-grey hover:border-premium-graphite"
                      )}
                    >
                      <span className="text-xs uppercase tracking-widest block mb-2">{key === 'matte' ? 'Матовый' : key === 'glossy' ? 'Глянцевый' : key === 'shadow' ? 'Теневой' : key === 'floating' ? 'Парящий' : key === 'light' ? 'С подсветкой' : 'Тканевый'}</span>
                      <span className="text-lg font-serif">от {price} ₽/м²</span>
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 h-full"
                >
                  {[
                    { id: "spots", label: "Точечные светильники", desc: "Равномерное освещение по всей площади" },
                    { id: "lines", label: "Световые линии", desc: "Современное дизайнерское решение" },
                    { id: "chandelier", label: "Классическая люстра", desc: "Установка закладной под ваш светильник" },
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setFormData({ ...formData, lighting: l.id })}
                      className={cn(
                        "w-full p-6 border text-left transition-all duration-300 flex items-center justify-between",
                        formData.lighting === l.id ? "bg-premium-graphite text-premium-white border-premium-graphite" : "border-premium-grey hover:border-premium-graphite"
                      )}
                    >
                      <div>
                        <span className="block font-serif text-lg">{l.label}</span>
                        <span className="text-xs opacity-60">{l.desc}</span>
                      </div>
                      {formData.lighting === l.id && <Check size={20} className="text-premium-brass" />}
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 h-full flex flex-col justify-center items-center"
                >
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest text-premium-brass font-bold block mb-2">Ваш предварительный расчет готов</span>
                    <span className="text-5xl md:text-6xl font-serif text-premium-graphite">
                      ~ {totalCost.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="w-full max-w-sm bg-premium-ivory p-6 md:p-8 rounded-lg border border-premium-grey/20">
                    <p className="text-premium-graphite text-sm mb-6 font-medium">
                      Получите точную стоимость и PDF-каталог материалов после бесплатного замера
                    </p>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-4 border border-premium-grey focus:border-premium-brass outline-none transition-colors text-center font-serif text-lg"
                      />
                      <button
                        className="w-full bg-premium-brass text-premium-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-premium-graphite transition-all shadow-lg shadow-premium-brass/20"
                        onClick={() => alert("Спасибо! Мы перезвоним вам в течение 15 минут.")}
                      >
                        Записаться на замер
                      </button>
                    </form>
                    <p className="text-[9px] uppercase tracking-widest text-premium-graphite/40 mt-4">
                      Перезвоним в течение 15 минут
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="mt-auto flex justify-between pt-8 border-t border-premium-grey/20">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  className={cn("text-xs uppercase tracking-widest hover:text-premium-brass transition-colors", step === 1 && "invisible")}
                >
                  Назад
                </button>
                <button
                  onClick={() => setStep(Math.min(4, step + 1))}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-premium-brass font-bold group"
                >
                  Далее <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
