import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "../components/ui/Icon/Icon";
import Footer from "../components/ui/Footer/Footer";
import ContactForm from "../components/forms/ContactForm/ContactForm";
import "./ProductDetails.css";

// Компонент аккордеона для таблицы
const PricingAccordion = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pricing-accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{service.title}</h3>
        <div className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>НАИМЕНОВАНИЕ РАБОТ</th>
                <th>ЕД. ИЗМ.</th>
                <th>СТОИМОСТЬ, РУБ. (ОТ)</th>
              </tr>
            </thead>
            <tbody>
              {service.priceTable.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Данные услуг с подробным описанием и ценами
const SERVICES_DATA = {
  1: {
    title: "Подключение бытовой техники",
    category: "Бытовые услуги",
    description:
      "Профессиональное подключение любой бытовой техники с соблюдением всех норм безопасности. Наши мастера имеют большой опыт работы с различными видами техники.",
    fullDescription:
      "В нашей компании вы можете заказать услуги по подключению бытовой техники по доступным ценам. Принимаем заказы на проведение работ любого уровня сложности: от подключения стиральной машины до установки встроенной техники. Предлагаем выгодные расценки на подключение бытовой техники в Москве на 2026 год.",
    features: [
      "Подключение с соблюдением всех норм безопасности",
      "Проверка работоспособности после установки",
      "Консультация по эксплуатации техники",
      "Гарантия на выполненные работы",
    ],
    priceTable: [
      { name: "Подключение стиральной машины", unit: "шт.", price: "850" },
      { name: "Подключение посудомоечной машины", unit: "шт.", price: "900" },
      { name: "Установка варочной панели", unit: "шт.", price: "1200" },
      { name: "Подключение духового шкафа", unit: "шт.", price: "1100" },
      { name: "Установка вытяжки", unit: "шт.", price: "800" },
    ],
  },
  2: {
    title: "Установка бытовой техники",
    category: "Бытовые услуги",
    description:
      "Качественная установка бытовой техники любой сложности с гарантией на выполненные работы.",
    fullDescription:
      "Наши специалисты выполняют установку бытовой техники с учетом всех технических требований и норм безопасности. Работаем с техникой любых производителей.",
    features: [
      "Установка встраиваемой техники",
      "Подключение к коммуникациям",
      "Настройка и тестирование",
      "Инструктаж по эксплуатации",
    ],
    priceTable: [
      { name: "Установка холодильника", unit: "шт.", price: "600" },
      { name: "Установка микроволновой печи", unit: "шт.", price: "400" },
      { name: "Монтаж кондиционера", unit: "шт.", price: "2500" },
      { name: "Установка водонагревателя", unit: "шт.", price: "1500" },
    ],
  },
  3: {
    title: "Монтаж смесителя на раковину",
    category: "Сантехника",
    description:
      "Профессиональный монтаж смесителей любых типов с гарантией герметичности соединений.",
    fullDescription:
      "В нашей компании вы можете заказать услуги сантехника по доступным ценам. Принимаем заказы на проведение работ любого уровня сложности: от замены прокладки в кране до монтажа системы водоснабжения в доме. Предлагаем выгодные расценки на сантехнические работы в Москве на 2026 год.",
    features: [
      "Демонтаж старого смесителя",
      "Установка нового с герметизацией",
      "Проверка на протечки",
      "Настройка температуры воды",
    ],
    priceTable: [
      { name: "Установка смесителя с заземлением", unit: "шт.", price: "650" },
      { name: "Установка внутренней розетки", unit: "шт.", price: "450" },
      { name: "Установка наружной розетки", unit: "шт.", price: "380" },
      {
        name: "Установка компьютерной розетки RJ45 (интернет)",
        unit: "шт.",
        price: "520",
      },
    ],
  },
  4: {
    title: "Монтаж смесителя на мойку",
    category: "Сантехника",
    description:
      "Установка смесителей на кухонную мойку с подключением к системе водоснабжения.",
    fullDescription:
      "Качественный монтаж кухонных смесителей с учетом особенностей кухонной мойки и системы водоснабжения.",
    features: [
      "Подбор подходящего типа смесителя",
      "Герметичное подключение",
      "Регулировка напора и температуры",
      "Проверка всех соединений",
    ],
    priceTable: [
      { name: "Установка кухонного смесителя", unit: "шт.", price: "700" },
      { name: "Замена картриджа в смесителе", unit: "шт.", price: "300" },
      { name: "Установка фильтра для воды", unit: "шт.", price: "800" },
      {
        name: "Подключение посудомоечной машины к мойке",
        unit: "шт.",
        price: "900",
      },
    ],
  },
  5: {
    title: "Замена мойки",
    category: "Сантехника",
    description:
      "Демонтаж старой и установка новой мойки с подключением всех коммуникаций.",
    fullDescription:
      "Полный цикл работ по замене мойки: от демонтажа старой до установки и подключения новой с проверкой герметичности.",
    features: [
      "Демонтаж старой мойки",
      "Подготовка места установки",
      "Монтаж новой мойки",
      "Подключение смесителя и сифона",
    ],
    priceTable: [
      { name: "Замена кухонной мойки", unit: "шт.", price: "1200" },
      { name: "Установка сифона", unit: "шт.", price: "400" },
      { name: "Герметизация стыков", unit: "м.п.", price: "150" },
      { name: "Подключение измельчителя отходов", unit: "шт.", price: "800" },
    ],
  },
  6: {
    title: "Установка настенных светильников",
    category: "Электрика",
    description:
      "Профессиональная установка настенных светильников с подключением к электросети.",
    fullDescription:
      "В нашей компании вы можете заказать услуги электрика по доступным ценам. Принимаем заказы на проведение работ любого уровня сложности: от замены розетки и подключения бытовой техники к электричеству до монтажа системы электроснабжения в доме.",
    features: [
      "Разметка мест установки",
      "Прокладка проводки при необходимости",
      "Монтаж крепежных элементов",
      "Подключение и тестирование",
    ],
    priceTable: [
      { name: "Установка розеток с заземлением", unit: "шт.", price: "250" },
      { name: "Установка внутренней розетки", unit: "шт.", price: "180" },
      { name: "Установка наружной розетки", unit: "шт.", price: "160" },
      {
        name: "Установка компьютерной розетки RJ45 (интернет)",
        unit: "шт.",
        price: "230",
      },
    ],
  },
};

export const ProductDetails = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);
  const service = SERVICES_DATA[serviceId];

  if (!service) {
    return (
      <div className="service-details-page">
        <div className="service-container">
          <div className="not-found">
            <h2>Услуга не найдена</h2>
            <Link to="/products" className="back-btn">
              Вернуться к услугам
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      <div className="service-container">
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <Link to="/" className="breadcrumb-link">
            Главная
          </Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/products" className="breadcrumb-link">
            Цены на услуги
          </Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{service.title}</span>
        </div>

        {/* Заголовок страницы */}
        <div className="service-header">
          <h1 className="service-title">
            Расценки на {service.title.toLowerCase()} на 2026 год
          </h1>
        </div>

        {/* Блок с фото и описанием */}
        <div className="service-intro">
          <div className="service-intro-image">
            <img
              src={`/assets/products/img${serviceId}.jpg`}
              alt={service.title}
              className="service-image"
            />
          </div>
          <div className="service-intro-content">
            <h2 className="service-intro-title">
              Расценки на {service.title.toLowerCase()} на 2026 год
            </h2>
            <div className="service-intro-description">
              <p>
                В нашей компании вы можете заказать услуги сантехника по
                доступным ценам. Принимаем заказы на проведение работ любого
                уровня сложности: от замены прокладки в кране до монтажа системы
                водоснабжения в доме. Предлагаем выгодные расценки на
                сантехнические работы в Москве на 2026 год.
              </p>
            </div>
          </div>
        </div>

        {/* Основное описание */}
        <div className="service-content">
          <div className="service-features">
            <div className="service-features-container">
              <div className="service-features-left">
                <h3>Что входит в услугу:</h3>
                <p>
                  У нас доступные цены на {service.title.toLowerCase()}.
                  Обслуживаем квартиры, частные дома, офисы и производственные
                  предприятия и некоммерческие объекты. Примерную сумму можно
                  рассчитать самостоятельно, ориентируясь на расценки{" "}
                  {service.category.toLowerCase()} на прейскуранте цен на{" "}
                  {service.title.toLowerCase()}. {service.category} работают по
                  официальному договору и дают гарантию на все услуги.
                </p>
              </div>
              <div className="service-features-right">
                <div className="features-grid">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Таблица цен */}
          <div>
            <h2 className="pricing-title">
              Расценки на {service.title.toLowerCase()} 2026
            </h2>

            <PricingAccordion service={service} />
          </div>

          {/* Дополнительная информация */}
          <div className="additional-info">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <Icon name="shield" />
                </div>
                <h4>Гарантия качества</h4>
                <p>Предоставляем гарантию на все виды работ до 2 лет</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Icon name="car" />
                </div>
                <h4>Бесплатный выезд</h4>
                <p>Выезд мастера и диагностика бесплатно</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Icon name="money" />
                </div>
                <h4>Фиксированные цены</h4>
                <p>Стоимость не изменится после начала работ</p>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-left">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
