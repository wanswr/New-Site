"use client";

import { Plus } from "lucide-react";

export default function FAQScene() {
  const faqs = [
    {
      q: "Сколько времени занимает монтаж?",
      a: "В среднем, установка в одной комнате занимает от 3 до 5 часов в зависимости от сложности освещения."
    },
    {
      q: "Нужна ли подготовка помещения?",
      a: "Мы рекомендуем обеспечить доступ к стенам и накрыть мебель пленкой. Основная пыль собирается нашим инструментом с пылеудалением."
    },
    {
      q: "Какой срок службы у потолка?",
      a: "Гарантия на полотно составляет 15 лет, на монтажные работы — 3 года. Реальный срок службы превышает 25 лет."
    },
    {
      q: "Вы работаете с дизайн-проектами?",
      a: "Да, мы специализируемся на реализации сложных узлов: теневые примыкания, парящие линии и скрытые карнизы по вашим чертежам."
    }
  ];

  return (
    <div id="faq-scene" className="absolute inset-0 w-full h-full opacity-0 pointer-events-none flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Частые вопросы</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-4 group cursor-help">
              <div className="flex justify-between items-center py-4">
                <h3 className="text-lg md:text-xl font-light group-hover:text-premium-brass transition-colors">
                  {faq.q}
                </h3>
                <Plus size={20} className="text-premium-brass" />
              </div>
              <p className="text-premium-grey text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity max-h-0 group-hover:max-h-40 overflow-hidden">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-premium-grey mb-4">Остались вопросы?</p>
          <button className="border border-white/20 px-8 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            Связаться в WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
