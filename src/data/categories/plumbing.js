// Сантехнические услуги - 27 услуг
export const plumbingServices = [
  {
    id: "sink-installation",
    title: "Установка раковины",
    shortDescription: "Монтаж раковин любых типов",
    fullDescription:
      "Профессиональная установка раковин в ванной комнате и на кухне. Работаем с любыми типами раковин.",
    image: "/assets/products/img1.jpg",
    priceFrom: 2400,
    features: [
      "Демонтаж старой раковины",
      "Установка новой раковины",
      "Подключение к коммуникациям",
      "Герметизация соединений",
    ],
    priceTable: [{ name: "Установка раковины", unit: "шт.", price: "2400" }],
  },
  {
    id: "sink-removal",
    title: "Демонтаж раковины",
    shortDescription: "Демонтаж старых раковин",
    fullDescription: "Аккуратный демонтаж раковин с сохранением коммуникаций.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1100,
    features: [
      "Отключение от коммуникаций",
      "Демонтаж раковины",
      "Уборка мусора",
    ],
    priceTable: [{ name: "Демонтаж раковины", unit: "шт.", price: "1100" }],
  },
  {
    id: "kitchen-sink-installation",
    title: "Монтаж мойки",
    shortDescription: "Установка кухонных моек",
    fullDescription:
      "Установка кухонных моек из нержавейки, керамики и других материалов.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1300,
    features: [
      "Врезка в столешницу",
      "Подключение к канализации",
      "Установка смесителя",
    ],
    priceTable: [{ name: "Монтаж мойки", unit: "шт.", price: "1300" }],
  },
  {
    id: "kitchen-sink-removal",
    title: "Демонтаж мойки",
    shortDescription: "Демонтаж кухонных моек",
    fullDescription: "Демонтаж старых кухонных моек с сохранением столешницы.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1100,
    features: [
      "Отключение коммуникаций",
      "Демонтаж мойки",
      "Заделка отверстий",
    ],
    priceTable: [{ name: "Демонтаж мойки", unit: "шт.", price: "1100" }],
  },
  {
    id: "faucet-installation",
    title: "Установка смесителя",
    shortDescription: "Монтаж смесителей всех типов",
    fullDescription:
      "Установка смесителей для кухни, ванной, душа с гарантией герметичности.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1300,
    features: [
      "Подключение к водопроводу",
      "Настройка температуры",
      "Проверка на протечки",
    ],
    priceTable: [{ name: "Установка смесителя", unit: "шт.", price: "1300" }],
  },
  {
    id: "faucet-repair",
    title: "Ремонт смесителя",
    shortDescription: "Ремонт и обслуживание смесителей",
    fullDescription:
      "Ремонт смесителей любой сложности, замена картриджей и прокладок.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1800,
    features: [
      "Диагностика неисправности",
      "Замена деталей",
      "Настройка работы",
    ],
    priceTable: [{ name: "Ремонт смесителя", unit: "шт.", price: "1800" }],
  },
  {
    id: "faucet-assembly",
    title: "Сборка смесителя",
    shortDescription: "Сборка и настройка смесителей",
    fullDescription: "Профессиональная сборка смесителей из комплектующих.",
    image: "/assets/products/img1.jpg",
    priceFrom: 700,
    features: ["Сборка по инструкции", "Проверка работы", "Настройка"],
    priceTable: [{ name: "Сборка смесителя", unit: "шт.", price: "700" }],
  },
  {
    id: "bathtub-installation",
    title: "Установка ванны",
    shortDescription: "Монтаж ванн всех типов",
    fullDescription:
      "Установка чугунных, акриловых, стальных ванн с подключением к коммуникациям.",
    image: "/assets/products/img1.jpg",
    priceFrom: 3200,
    features: [
      "Установка на ножки",
      "Подключение слива",
      "Герметизация стыков",
    ],
    priceTable: [{ name: "Установка ванны", unit: "шт.", price: "3200" }],
  },
  {
    id: "bathtub-leak-repair",
    title: "Устранение протечек под ванной",
    shortDescription: "Ремонт протечек ванны",
    fullDescription:
      "Поиск и устранение протечек под ванной, замена уплотнителей.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1180,
    features: ["Диагностика протечки", "Замена уплотнителей", "Герметизация"],
    priceTable: [
      { name: "Устранение протечек под ванной", unit: "шт.", price: "1180" },
    ],
  },
  {
    id: "access-hatch-installation",
    title: "Установка люка сантехнического",
    shortDescription: "Монтаж сантехнических люков",
    fullDescription:
      "Установка люков для доступа к коммуникациям в ванной и туалете.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1980,
    features: [
      "Разметка и вырез отверстия",
      "Установка рамки",
      "Навеска дверцы",
    ],
    priceTable: [
      { name: "Установка люка сантехнического", unit: "шт.", price: "1980" },
    ],
  },
  {
    id: "siphon-installation",
    title: "Установка сифона",
    shortDescription: "Монтаж сифонов для раковин",
    fullDescription:
      "Установка сифонов для раковин, моек, ванн с подключением к канализации.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1000,
    features: [
      "Подключение к канализации",
      "Герметизация соединений",
      "Проверка слива",
    ],
    priceTable: [{ name: "Установка сифона", unit: "шт.", price: "1000" }],
  },
  {
    id: "shower-cabin-installation",
    title: "Установка душевой кабины",
    shortDescription: "Монтаж душевых кабин",
    fullDescription: "Установка душевых кабин любых размеров и конфигураций.",
    image: "/assets/products/img1.jpg",
    priceFrom: 3200,
    features: ["Сборка кабины", "Подключение к коммуникациям", "Герметизация"],
    priceTable: [
      { name: "Установка душевой кабины", unit: "шт.", price: "3200" },
    ],
  },
  {
    id: "shower-tray-installation",
    title: "Устройство душевого поддона",
    shortDescription: "Монтаж душевых поддонов",
    fullDescription:
      "Установка душевых поддонов из акрила, керамики, искусственного камня.",
    image: "/assets/products/img1.jpg",
    priceFrom: 4000,
    features: [
      "Выравнивание основания",
      "Установка поддона",
      "Подключение слива",
    ],
    priceTable: [
      { name: "Устройство душевого поддона", unit: "шт.", price: "4000" },
    ],
  },
  {
    id: "shower-cabin-assembly",
    title: "Сборка душевой кабины",
    shortDescription: "Сборка душевых кабин",
    fullDescription:
      "Профессиональная сборка душевых кабин по инструкции производителя.",
    image: "/assets/products/img1.jpg",
    priceFrom: 6300,
    features: ["Сборка каркаса", "Установка стекол", "Подключение электроники"],
    priceTable: [{ name: "Сборка душевой кабины", unit: "шт.", price: "6300" }],
  },
  {
    id: "shower-cabin-repair",
    title: "Ремонт душевой кабины",
    shortDescription: "Ремонт и обслуживание душевых кабин",
    fullDescription:
      "Ремонт душевых кабин, замена стекол, уплотнителей, фурнитуры.",
    image: "/assets/products/img1.jpg",
    priceFrom: 5000,
    features: [
      "Диагностика неисправности",
      "Замена деталей",
      "Регулировка дверей",
    ],
    priceTable: [{ name: "Ремонт душевой кабины", unit: "шт.", price: "5000" }],
  },
  {
    id: "toilet-installation",
    title: "Монтаж унитаза",
    shortDescription: "Установка унитазов всех типов",
    fullDescription:
      "Установка напольных, подвесных, угловых унитазов с подключением к коммуникациям.",
    image: "/assets/products/img1.jpg",
    priceFrom: 4000,
    features: [
      "Подключение к канализации",
      "Подключение воды",
      "Установка сиденья",
    ],
    priceTable: [{ name: "Монтаж унитаза", unit: "шт.", price: "4000" }],
  },
  {
    id: "urinal-installation",
    title: "Установка писсуара",
    shortDescription: "Монтаж писсуаров",
    fullDescription:
      "Установка писсуаров в офисах, общественных местах, частных домах.",
    image: "/assets/products/img1.jpg",
    priceFrom: 2800,
    features: ["Крепление к стене", "Подключение воды", "Подключение слива"],
    priceTable: [{ name: "Установка писсуара", unit: "шт.", price: "2800" }],
  },
  {
    id: "toilet-corrugation",
    title: "Установка гофры на унитаз",
    shortDescription: "Монтаж гофрированной манжеты",
    fullDescription:
      "Установка гофрированной манжеты для подключения унитаза к канализации.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1400,
    features: ["Демонтаж старой гофры", "Установка новой", "Герметизация"],
    priceTable: [
      {
        name: "Установка гофрированной манжеты на унитаз",
        unit: "шт.",
        price: "1400",
      },
    ],
  },
  {
    id: "toilet-tank-installation",
    title: "Установка бачка унитаза",
    shortDescription: "Монтаж сливных бачков",
    fullDescription:
      "Установка и настройка сливных бачков унитазов, регулировка арматуры.",
    image: "/assets/products/img1.jpg",
    priceFrom: 2800,
    features: ["Установка бачка", "Подключение воды", "Регулировка слива"],
    priceTable: [
      { name: "Установка бачка унитаза", unit: "шт.", price: "2800" },
    ],
  },
  {
    id: "toilet-repair",
    title: "Ремонт унитаза",
    shortDescription: "Ремонт и обслуживание унитазов",
    fullDescription: "Ремонт унитазов, замена арматуры, устранение протечек.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1600,
    features: ["Диагностика проблемы", "Замена арматуры", "Регулировка"],
    priceTable: [{ name: "Ремонт унитаза", unit: "шт.", price: "1600" }],
  },
  {
    id: "toilet-removal",
    title: "Демонтаж унитаза",
    shortDescription: "Демонтаж старых унитазов",
    fullDescription: "Аккуратный демонтаж унитазов с сохранением коммуникаций.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1700,
    features: ["Отключение воды", "Демонтаж унитаза", "Заглушка канализации"],
    priceTable: [{ name: "Демонтаж унитаза", unit: "шт.", price: "1700" }],
  },
  {
    id: "bidet-installation",
    title: "Установка биде",
    shortDescription: "Монтаж биде",
    fullDescription:
      "Установка биде с подключением к водопроводу и канализации.",
    image: "/assets/products/img1.jpg",
    priceFrom: 4600,
    features: [
      "Подключение горячей воды",
      "Подключение холодной воды",
      "Подключение слива",
    ],
    priceTable: [{ name: "Установка биде", unit: "шт.", price: "4600" }],
  },
  {
    id: "towel-warmer-installation",
    title: "Установка полотенцесушителя",
    shortDescription: "Монтаж полотенцесушителей",
    fullDescription:
      "Установка водяных полотенцесушителей с подключением к отоплению.",
    image: "/assets/products/img1.jpg",
    priceFrom: 3000,
    features: ["Подключение к отоплению", "Крепление к стене", "Опрессовка"],
    priceTable: [
      { name: "Установка полотенцесушителя", unit: "шт.", price: "3000" },
    ],
  },
  {
    id: "electric-towel-warmer",
    title: "Установка электрического полотенцесушителя",
    shortDescription: "Монтаж электрических полотенцесушителей",
    fullDescription:
      "Установка электрических полотенцесушителей с подключением к сети.",
    image: "/assets/products/img1.jpg",
    priceFrom: 2400,
    features: [
      "Подключение к электросети",
      "Крепление к стене",
      "Настройка терморегулятора",
    ],
    priceTable: [
      {
        name: "Установка электрического полотенцесушителя",
        unit: "шт.",
        price: "2400",
      },
    ],
  },
  {
    id: "drain-cleaning",
    title: "Устранение засоров",
    shortDescription: "Прочистка канализации",
    fullDescription:
      "Устранение засоров в раковинах, унитазах, ваннах механическим и химическим способом.",
    image: "/assets/products/img1.jpg",
    priceFrom: 3200,
    features: [
      "Диагностика засора",
      "Механическая прочистка",
      "Промывка системы",
    ],
    priceTable: [{ name: "Устранение засоров", unit: "шт.", price: "3200" }],
  },
  {
    id: "leak-repair",
    title: "Устранение протечек",
    shortDescription: "Ремонт протечек труб",
    fullDescription:
      "Поиск и устранение протечек в трубах, соединениях, сантехнике.",
    image: "/assets/products/img1.jpg",
    priceFrom: 1400,
    features: [
      "Поиск места протечки",
      "Ремонт или замена",
      "Проверка герметичности",
    ],
    priceTable: [{ name: "Устранение протечек", unit: "шт.", price: "1400" }],
  },
  {
    id: "water-heater-installation",
    title: "Монтаж водонагревателя",
    shortDescription: "Установка водонагревателей",
    fullDescription:
      "Установка накопительных и проточных водонагревателей с подключением.",
    image: "/assets/products/img1.jpg",
    priceFrom: 2600,
    features: [
      "Крепление к стене",
      "Подключение воды",
      "Подключение электричества",
    ],
    priceTable: [
      { name: "Монтаж водонагревателя", unit: "шт.", price: "2600" },
    ],
  },
];
