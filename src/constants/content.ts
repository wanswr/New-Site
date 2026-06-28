export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  minimalInterior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  modernCeiling: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  portfolio: [
    {
      url: "https://images.unsplash.com/photo-1616489953149-75517454e48e?q=80&w=2000&auto=format&fit=crop",
      title: "Квартира в ЖК 'Пресня'",
      area: "85 м²",
      solution: "Теневой профиль EuroKRAAB",
      price: "125 000 ₽",
      type: "Гостиная"
    },
    {
      url: "https://images.unsplash.com/photo-1616137422495-1e9e47e2177e?q=80&w=2000&auto=format&fit=crop",
      title: "Загородный дом в Барвихе",
      area: "240 м²",
      solution: "Световые линии + Ткань DESCOR",
      price: "480 000 ₽",
      type: "Дом"
    },
    {
      url: "https://images.unsplash.com/photo-1617806118233-18e1db208fa0?q=80&w=2000&auto=format&fit=crop",
      title: "Пентхаус 'Москва-Сити'",
      area: "120 м²",
      solution: "Парящий потолок с RGB-подсветкой",
      price: "210 000 ₽",
      type: "Спальня"
    }
  ],
  reviews: [
    {
      name: "Елена Волкова",
      district: "Хамовники",
      text: "Потрясающее качество исполнения. Теневой профиль выглядит идеально ровно, никаких зазоров. Команда работала очень чисто.",
      photo: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Дмитрий Соколов",
      district: "Крылатское",
      text: "Заказывал световые линии в гостиную. Все сделали за один день. Результат превзошел ожидания — освещение стало частью архитектуры.",
      photo: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
    }
  ]
};

export const CEILING_TYPES = [
  {
    id: "matte",
    title: "Матовые",
    description: "Классическая фактура, имитирующая идеально ровную оштукатуренную поверхность. Идеально для спален и гостиных.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "glossy",
    title: "Глянцевые",
    description: "Визуально расширяют пространство за счет зеркального эффекта. Подходят для небольших помещений и современных интерьеров.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "shadow",
    title: "Теневые",
    description: "Премиальное решение с идеальным зазором между стеной и потолком. Создает эффект 'парящего' потолка без плинтусов.",
    image: "https://images.unsplash.com/photo-1618219740975-d4298032738c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "floating",
    title: "Парящие",
    description: "Потолки со встроенной по периметру подсветкой, которая визуально отделяет потолок от стен.",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "light",
    title: "С подсветкой",
    description: "Инновационные световые линии и световые окна. Потолок становится основным источником света в интерьере.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "fabric",
    title: "Тканевые",
    description: "Экологичные дышащие полотна высокой прочности. Не имеют швов и выдерживают перепады температур.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
  }
];
