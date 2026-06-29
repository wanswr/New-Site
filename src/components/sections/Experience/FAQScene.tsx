"use client";

export default function FAQScene() {
  const faqs = [
    {
      q: "Architectural Timing",
      ru: "Сроки реализации",
      a: "От 3 до 5 часов на одно пространство. Мы ценим ваше время и работаем с хирургической точностью."
    },
    {
      q: "Living Standards",
      ru: "Подготовка интерьера",
      a: "Минимальная. Наше оборудование с системой пылеудаления позволяет проводить работы в жилых интерьерах."
    },
    {
      q: "Legacy Quality",
      ru: "Гарантия и долговечность",
      a: "15 лет на полотно и безупречное состояние конструкции. Реальный срок службы не ограничен."
    },
    {
      q: "Professional Language",
      ru: "Работа с проектами",
      a: "Мы говорим на языке архитекторов. Теневые узлы, сложные световые сценарии и скрытые системы — наша специализация."
    }
  ];

  return (
    <div id="faq-scene" className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center bg-luxury-bg text-luxury-text px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-24 items-center relative z-10">

        {/* Abstract Background Element */}
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-luxury-brass/5 rounded-full blur-[80px]" />

        <div className="space-y-12">
           <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[1.5em] mb-12 block font-bold">
             Диалог о Качестве
           </span>
           <h2 className="text-[clamp(3rem,8vw,10rem)] font-serif mb-16 leading-[0.8] tracking-tighter">
             Детали <br />
             <span className="italic text-luxury-brass/80">Мастерства</span>
           </h2>
           <div className="h-[1px] w-40 bg-luxury-brass/30" />
           <p className="text-luxury-text-muted text-[10px] uppercase tracking-[0.5em] leading-relaxed max-w-xs font-medium">
             В премиальном сегменте нет мелочей. Каждая деталь — это подтверждение нашего стандарта White Glove.
           </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-luxury-brass/10 group cursor-none">
              <div className="flex justify-between items-center py-10 transition-all duration-700 group-hover:pl-8">
                <div className="space-y-2">
                   <span className="text-[8px] uppercase tracking-widest text-luxury-brass/40 font-bold block">{faq.q}</span>
                   <h3 className="text-xl md:text-3xl font-serif group-hover:text-luxury-brass transition-colors">
                     {faq.ru}
                   </h3>
                </div>
                <div className="w-12 h-[1px] bg-luxury-brass/20 group-hover:w-24 group-hover:bg-luxury-brass transition-all duration-700" />
              </div>
              <div className="max-h-0 group-hover:max-h-60 overflow-hidden transition-all duration-1000 ease-expo">
                <p className="text-luxury-text-muted text-[10px] md:text-xs uppercase tracking-[0.4em] leading-loose pb-12 font-medium pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Frame */}
      <div className="absolute inset-20 border border-luxury-brass/5 pointer-events-none" />
    </div>
  );
}
