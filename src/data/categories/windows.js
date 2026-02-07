// Услуги по ремонту пластиковых окон - 21 услуга
export const windowsServices = [
  {
    id: "window-adjustment",
    categoryId: "windows",
    title: "Регулировка створки окна + смазка фурнитуры",
    shortDescription: "Регулировка и смазка окон",
    fullDescription:
      "Профессиональная регулировка створки окна с полной смазкой фурнитуры. Устранение провисания, скрипа, затрудненного открывания.",
    image: "/assets/products/img6.jpg",
    priceFrom: 600,
    features: [
      "Регулировка по всем осям",
      "Смазка всех механизмов",
      "Проверка плотности прилегания",
      "Настройка прижима",
    ],
    priceTable: [
      {
        name: "Регулировка створки окна + смазка фурнитуры",
        unit: "шт.",
        price: "600",
      },
    ],
    order: 1,
  },
  {
    id: "balcony-door-adjustment",
    categoryId: "windows",
    title: "Регулировка балконной двери",
    shortDescription: "Регулировка балконных дверей",
    fullDescription:
      "Регулировка балконной двери: устранение провисания, настройка прижима, смазка фурнитуры. Восстановление плавного хода.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1380,
    features: [
      "Устранение провисания",
      "Настройка прижима",
      "Смазка механизмов",
      "Проверка работы",
    ],
    priceTable: [
      { name: "Регулировка балконной двери", unit: "шт.", price: "1380" },
    ],
    order: 2,
  },
  {
    id: "sash-geometry-restoration",
    categoryId: "windows",
    title: "Восстановление геометрии створки",
    shortDescription: "Восстановление геометрии окна",
    fullDescription:
      "Восстановление правильной геометрии створки окна. Устранение перекосов, выравнивание, настройка работы механизмов.",
    image: "/assets/products/img6.jpg",
    priceFrom: 900,
    features: [
      "Выявление перекосов",
      "Выравнивание створки",
      "Настройка механизмов",
      "Проверка герметичности",
    ],
    priceTable: [
      {
        name: "Восстановление геометрии створки",
        unit: "шт.",
        price: "900",
      },
    ],
    order: 3,
  },
  {
    id: "door-geometry-restoration",
    categoryId: "windows",
    title: "Восстановление геометрии балконной двери",
    shortDescription: "Восстановление геометрии двери",
    fullDescription:
      "Восстановление геометрии балконной двери. Устранение перекосов, выравнивание полотна, настройка фурнитуры.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1600,
    features: [
      "Диагностика перекосов",
      "Выравнивание полотна",
      "Настройка петель",
      "Проверка работы",
    ],
    priceTable: [
      {
        name: "Восстановление геометрии балконной двери",
        unit: "шт.",
        price: "1600",
      },
    ],
    order: 4,
  },
  {
    id: "single-chamber-glass-replacement",
    categoryId: "windows",
    title: "Замена однокамерного стеклопакета",
    shortDescription: "Замена стеклопакетов",
    fullDescription:
      "Замена однокамерного стеклопакета. Демонтаж старого, установка нового с герметизацией. Работаем с любыми размерами.",
    image: "/assets/products/img6.jpg",
    priceFrom: 7000,
    features: [
      "Демонтаж старого стеклопакета",
      "Замер и изготовление",
      "Установка нового",
      "Герметизация",
    ],
    priceTable: [
      {
        name: "Замена однокамерного стеклопакета",
        unit: "м²",
        price: "7000",
      },
    ],
    order: 5,
  },
  {
    id: "double-chamber-glass-replacement",
    categoryId: "windows",
    title: "Замена двухкамерного стеклопакета",
    shortDescription: "Замена двухкамерных стеклопакетов",
    fullDescription:
      "Замена двухкамерного стеклопакета. Повышенная тепло- и звукоизоляция. Профессиональный монтаж с гарантией.",
    image: "/assets/products/img6.jpg",
    priceFrom: 8000,
    features: [
      "Демонтаж старого",
      "Изготовление по размерам",
      "Установка с герметизацией",
      "Проверка герметичности",
    ],
    priceTable: [
      {
        name: "Замена двухкамерного стеклопакета",
        unit: "м²",
        price: "8000",
      },
    ],
    order: 6,
  },
  {
    id: "glass-replacement",
    categoryId: "windows",
    title: "Замена стекла 4-6 мм",
    shortDescription: "Замена разбитого стекла",
    fullDescription:
      "Замена разбитого или треснувшего стекла толщиной 4-6 мм. Быстрый монтаж с герметизацией.",
    image: "/assets/products/img6.jpg",
    priceFrom: 5000,
    features: [
      "Демонтаж разбитого стекла",
      "Установка нового",
      "Герметизация",
      "Уборка осколков",
    ],
    priceTable: [{ name: "Замена стекла 4-6 мм", unit: "м²", price: "5000" }],
    order: 7,
  },
  {
    id: "handle-replacement-white",
    categoryId: "windows",
    title: "Замена ручки белого цвета",
    shortDescription: "Замена оконных ручек",
    fullDescription:
      "Замена оконной ручки белого цвета. Установка качественной фурнитуры с гарантией.",
    image: "/assets/products/img6.jpg",
    priceFrom: 600,
    features: [
      "Демонтаж старой ручки",
      "Установка новой",
      "Проверка работы",
      "Регулировка",
    ],
    priceTable: [
      { name: "Замена ручки белого цвета", unit: "шт.", price: "600" },
    ],
    order: 8,
  },
  {
    id: "handle-replacement-colored",
    categoryId: "windows",
    title: "Замена цветной оконной ручки",
    shortDescription: "Замена цветных ручек",
    fullDescription:
      "Замена оконной ручки цветной (под дерево, золото, серебро). Широкий выбор цветов и дизайнов.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1000,
    features: [
      "Подбор цвета",
      "Демонтаж старой",
      "Установка новой",
      "Проверка механизма",
    ],
    priceTable: [
      { name: "Замена цветной оконной ручки", unit: "шт.", price: "1000" },
    ],
    order: 9,
  },
  {
    id: "child-lock",
    categoryId: "windows",
    title: "Детский замок",
    shortDescription: "Установка детских замков",
    fullDescription:
      "Установка детского замка на окно для безопасности детей. Блокировка открывания створки в режиме проветривания.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1600,
    features: [
      "Установка замка",
      "Настройка блокировки",
      "Проверка надежности",
      "Инструктаж",
    ],
    priceTable: [{ name: "Детский замок", unit: "шт.", price: "1600" }],
    order: 10,
  },
  {
    id: "handle-with-key",
    categoryId: "windows",
    title: "Ручка с ключом",
    shortDescription: "Установка ручек с замком",
    fullDescription:
      "Установка оконной ручки с ключом. Защита от несанкционированного открывания и безопасность для детей.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1800,
    features: [
      "Установка ручки с замком",
      "Комплект ключей",
      "Настройка механизма",
      "Проверка работы",
    ],
    priceTable: [{ name: "Ручка с ключом", unit: "шт.", price: "1800" }],
    order: 11,
  },
  {
    id: "hinge-replacement",
    categoryId: "windows",
    title: "Замена петель для окна/двери ПВХ",
    shortDescription: "Замена оконных петель",
    fullDescription:
      "Замена изношенных или сломанных петель на окнах и дверях ПВХ. Восстановление плавного хода створки.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1200,
    features: [
      "Демонтаж старых петель",
      "Установка новых",
      "Регулировка створки",
      "Смазка механизмов",
    ],
    priceTable: [
      {
        name: "Замена петель для окна/двери ПВХ",
        unit: "шт.",
        price: "1200",
      },
    ],
    order: 12,
  },
  {
    id: "seal-replacement",
    categoryId: "windows",
    title: "Замена уплотнителя",
    shortDescription: "Замена резинового уплотнителя",
    fullDescription:
      "Замена изношенного уплотнителя на окнах. Восстановление герметичности, устранение продувания и промерзания.",
    image: "/assets/products/img6.jpg",
    priceFrom: 500,
    features: [
      "Демонтаж старого уплотнителя",
      "Очистка пазов",
      "Установка нового",
      "Проверка герметичности",
    ],
    priceTable: [{ name: "Замена уплотнителя", unit: "м.п.", price: "500" }],
    order: 13,
  },
  {
    id: "mosquito-net-installation",
    categoryId: "windows",
    title: "Изготовление и установка москитных сеток",
    shortDescription: "Установка москитных сеток",
    fullDescription:
      "Изготовление москитных сеток по размерам окна. Установка на крепления. Защита от насекомых.",
    image: "/assets/products/img6.jpg",
    priceFrom: 2400,
    features: [
      "Замер окна",
      "Изготовление сетки",
      "Установка креплений",
      "Монтаж сетки",
    ],
    priceTable: [
      {
        name: "Изготовление и установка москитных сеток",
        unit: "шт.",
        price: "2400",
      },
    ],
    order: 14,
  },
  {
    id: "mosquito-net-repair",
    categoryId: "windows",
    title: "Ремонт москитных сеток",
    shortDescription: "Ремонт поврежденных сеток",
    fullDescription:
      "Ремонт москитных сеток: замена полотна, ремонт рамки, замена креплений. Восстановление функциональности.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1800,
    features: [
      "Диагностика повреждений",
      "Замена полотна",
      "Ремонт рамки",
      "Замена креплений",
    ],
    priceTable: [
      { name: "Ремонт москитных сеток", unit: "шт.", price: "1800" },
    ],
    order: 15,
  },
  {
    id: "windowsill-installation",
    categoryId: "windows",
    title: "Установка подоконника",
    shortDescription: "Монтаж подоконников",
    fullDescription:
      "Установка подоконника ПВХ. Подгонка по размеру, монтаж на пену, герметизация стыков.",
    image: "/assets/products/img6.jpg",
    priceFrom: 2980,
    features: [
      "Замер и подгонка",
      "Монтаж на пену",
      "Герметизация стыков",
      "Установка заглушек",
    ],
    priceTable: [
      { name: "Установка подоконника", unit: "м.п.", price: "2980" },
    ],
    order: 16,
  },
  {
    id: "drip-cap-installation",
    categoryId: "windows",
    title: "Установка отлива",
    shortDescription: "Монтаж оконных отливов",
    fullDescription:
      "Установка отлива на окно. Защита от осадков, герметизация монтажного шва. Работаем с любыми материалами.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1000,
    features: [
      "Замер и подгонка",
      "Монтаж отлива",
      "Герметизация",
      "Проверка стока воды",
    ],
    priceTable: [{ name: "Установка отлива", unit: "м.п.", price: "1000" }],
    order: 17,
  },
  {
    id: "slopes-installation",
    categoryId: "windows",
    title: "Изготовление и монтаж откосов ПВХ",
    shortDescription: "Установка пластиковых откосов",
    fullDescription:
      "Изготовление и монтаж откосов из ПВХ панелей. Утепление, герметизация, финишная отделка.",
    image: "/assets/products/img6.jpg",
    priceFrom: 1300,
    features: [
      "Замер откосов",
      "Утепление",
      "Монтаж панелей",
      "Установка уголков",
    ],
    priceTable: [
      {
        name: "Изготовление и монтаж откосов ПВХ",
        unit: "м.п.",
        price: "1300",
      },
    ],
    order: 18,
  },
  {
    id: "lubrication-cleaning",
    categoryId: "windows",
    title: "Полная переборка, чистка, смазка окон",
    shortDescription: "Комплексное обслуживание окон",
    fullDescription:
      "Полное техническое обслуживание окон: разборка механизмов, чистка, смазка, регулировка. Продление срока службы.",
    image: "/assets/products/img6.jpg",
    priceFrom: 2000,
    features: [
      "Разборка механизмов",
      "Чистка деталей",
      "Смазка фурнитуры",
      "Регулировка",
    ],
    priceTable: [
      {
        name: "Полная переборка, чистка, смазка окон",
        unit: "шт.",
        price: "2000",
      },
    ],
    order: 19,
  },
  {
    id: "seal-cleaning",
    categoryId: "windows",
    title: "Чистка и смазка уплотнителя на створке и раме окна",
    shortDescription: "Обслуживание уплотнителя",
    fullDescription:
      "Чистка и смазка резинового уплотнителя специальными средствами. Продление срока службы, сохранение эластичности.",
    image: "/assets/products/img6.jpg",
    priceFrom: 600,
    features: [
      "Очистка уплотнителя",
      "Смазка силиконом",
      "Проверка прилегания",
      "Рекомендации по уходу",
    ],
    priceTable: [
      {
        name: "Чистка и смазка уплотнителя на створке и раме окна",
        unit: "шт.",
        price: "600",
      },
    ],
    order: 20,
  },
  {
    id: "plastic-repair",
    categoryId: "windows",
    title: "Затирка пластика окон и дверей",
    shortDescription: "Ремонт повреждений пластика",
    fullDescription:
      "Затирка трещин, царапин, сколов и термоожогов на пластиковых окнах и дверях. Восстановление внешнего вида.",
    image: "/assets/products/img6.jpg",
    priceFrom: 4000,
    features: [
      "Подготовка поверхности",
      "Заполнение дефектов",
      "Шлифовка",
      "Полировка",
    ],
    priceTable: [
      {
        name: "Затирка пластика окон и дверей (трещины, царапины, сколы, термоожоги)",
        unit: "услуга",
        price: "4000",
      },
    ],
    order: 21,
  },
];
