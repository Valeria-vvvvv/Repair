import React from "react";
import "./AdvantagesSection.css";

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      title: "Опытные мастера",
      description: "Наши специалисты имеют многолетний опыт работы в сфере ремонта и обслуживания.",
    },
    {
      id: 2,
      title: "Качественные материалы",
      description: "Мы используем только проверенные материалы и оборудование от надежных производителей.",
    },
    {
      id: 3,
      title: "Быстрый выезд",
      description: "Оперативный выезд на объект в любое время дня и ночи.",
    },
    {
      id: 4,
      title: "Гарантия на работы",
      description: "Предоставляем гарантию на все виды выполненных работ.",
    },
    {
      id: 5,
      title: "Доступные цены",
      description: "Конкурентные цены без скрытых платежей и дополнительных комиссий.",
    },
    {
      id: 6,
      title: "Индивидуальный подход",
      description: "Каждый клиент получает персональный подход и консультацию.",
    },
  ];

  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="advantages-title">
            НАШИ
            <br />
            <span className="advantages-subtitle">ПРЕИМУЩЕСТВА</span>
          </h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card">
              <div className="advantage-icon">
                <span className="icon-number">{advantage.id.toString().padStart(2, '0')}.</span>
              </div>
              <div className="advantage-content">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;