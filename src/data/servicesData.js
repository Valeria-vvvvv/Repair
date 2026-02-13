// Организованная структура данных услуг
import { plumbingServices } from "./categories/plumbing";
import { electricalServices } from "./categories/electrical";
import { handymanServices } from "./categories/handyman";
import { furnitureServices } from "./categories/furniture";
import { windowsServices } from "./categories/windows";
import { minorRepairServices } from "./categories/minorRepair";
import { waterTanksServices } from "./categories/waterTanks";

// Основные категории услуг
export const SERVICES_CATEGORIES = {
  handyman: {
    id: "handyman",
    title: "Услуга муж на час",
    description: "Мелкий ремонт и бытовые услуги",
    icon: "🔨",
    image: "/assets/products/img3.jpg",
    services: handymanServices,
  },
  water_tanks: {
    id: "water_tanks",
    title: "Установка накопительных баков автономного водоснабжения",
    description: "Профессиональная установка систем автономного водоснабжения",
    icon: "💧",
    image: "/assets/products/service.jpg",
    services: waterTanksServices,
  },
  plumbing: {
    id: "plumbing",
    title: "Сантехнические работы",
    description: "Профессиональные сантехнические услуги в Донецке",
    icon: "🔧",
    image: "/assets/products/img1.jpg",
    services: plumbingServices,
  },
  electrical: {
    id: "electrical",
    title: "Электромонтажные работы",
    description: "Профессиональные электромонтажные услуги",
    icon: "⚡",
    image: "/assets/products/img2.jpg",
    services: electricalServices,
  },
  furniture: {
    id: "furniture",
    title: "Сборка разборка мебели",
    description: "Профессиональная сборка мебели любой сложности",
    icon: "🛠️",
    image: "/assets/products/img5.jpg",
    services: furnitureServices,
  },
  windows: {
    id: "windows",
    title: "Ремонт пластиковых окон",
    description: "Обслуживание и ремонт оконных систем",
    icon: "🪟",
    image: "/assets/products/img6.jpg",
    services: windowsServices,
  },
  minor_repair: {
    id: "minor_repair",
    title: "Мелкий ремонт в квартире",
    description: "Косметический ремонт и мелкие работы",
    icon: "🎨",
    image: "/assets/products/service-2.jpg",
    services: minorRepairServices,
  },
};

// Функция для получения всех услуг в плоском виде
export const getAllServices = () => {
  const allServices = [];
  Object.values(SERVICES_CATEGORIES).forEach((category) => {
    category.services.forEach((service) => {
      allServices.push({
        ...service,
        categoryId: category.id,
        categoryTitle: category.title,
      });
    });
  });
  return allServices;
};

// Функция для получения услуги по ID
export const getServiceById = (serviceId) => {
  const allServices = getAllServices();
  return allServices.find((service) => service.id === serviceId);
};

// Функция для получения категории по ID
export const getCategoryById = (categoryId) => {
  return SERVICES_CATEGORIES[categoryId];
};
