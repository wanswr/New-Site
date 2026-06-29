"use client";

export default function FAQScene() {
  const faqs = [
    {
      q: "Сроки реализации",
      a: "От 3 до 5 часов на одно пространство. Мы ценим ваше время и работаем с хирургической точностью."
    },
    {
      q: "Подготовка интерьера",
      a: "Минимальная. Наше оборудование с системой пылеудаления позволяет проводить работы в жилых интерьерах."
    },
    {
      q: "Гарантия и долговечность",
      a: "15 лет на полотно и безупречное состояние конструкции. Реальный срок службы не ограничен."
    },
    {
      q: "Работа с проектами",
      a: "Мы говорим на языке архитекторов. Теневые узлы, сложные световые сценарии и скрытые системы — наша специализация."
    }
  ];

  return (
    <div id="faq-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-premium-white text-premium-graphite px-6 overflow-y-auto py-20 md:py-0 scrollbar-hide">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
           <span className="text-premium-brass text-[10px] uppercase tracking-[0.8em] mb-8 md:mb-12 block">Вопросы</span>
           <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-serif mb-10 md:mb-16 leading-[0.85] tracking-tighter">
             Детали <br />
             <span className="italic text-premium-brass/80">Мастерства</span>
           </h2>
           <p className="text-premium-graphite/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em] leading-relaxed max-w-xs font-bold">
             Мы верим, что в премиальном сегменте нет мелочей. Каждый вопрос — это возможность подтвердить наш стандарт.
           </p>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-premium-brass/10 group cursor-none">
              <div className="flex justify-between items-center py-6 md:py-10 transition-all duration-700 group-hover:pl-4">
                <h3 className="text-lg md:text-2xl font-serif group-hover:text-premium-brass transition-colors">
                  {faq.q}
                </h3>
                <div className="w-8 md:w-12 h-[1px] bg-premium-brass/30 group-hover:w-24 transition-all duration-700" />
              </div>
              <div className="max-h-0 group-hover:max-h-60 overflow-hidden transition-all duration-700 ease-in-out">
                <p className="text-premium-graphite/60 text-[10px] md:text-sm uppercase tracking-widest leading-loose pb-8 md:pb-10 font-bold">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
