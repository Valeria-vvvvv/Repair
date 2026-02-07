import React from "react";
import { Link } from "react-router-dom";
import { useServices } from "../hooks/useServices";
import Footer from "../components/ui/Footer/Footer";
import "./Products.css";

export const Products = () => {
  const { categories, loading, error } = useServices();

  if (loading) {
    return (
      <div className="products-page">
        <div className="products-container">
          <div
            style={{ textAlign: "center", padding: "100px 0", color: "white" }}
          >
            Загрузка категорий услуг...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-page">
        <div className="products-container">
          <div
            style={{ textAlign: "center", padding: "100px 0", color: "red" }}
          >
            Ошибка загрузки: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <h1 className="products-title">
            ВСЕ
            <span className="products-subtitle"> УСЛУГИ</span>
          </h1>
          <p className="products-description">
            Полный перечень наших профессиональных услуг. Качественно, быстро и
            с гарантией.
          </p>
        </div>

        {/* Сетка категорий услуг */}
        <div className="categories-grid">
          {Object.values(categories).map((category, index) => (
            <Link
              key={category.id}
              to={`/services/${category.id}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
                <div className="category-overlay"></div>
              </div>

              <div className="category-content">
                <div className="category-number">{`0${index + 1}.`}</div>

                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>

                  <div className="category-button">Смотреть услуги</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Информационная секция */}
        <div className="info-section">
          <h2>Почему выбирают нас?</h2>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">🛡️</div>
              <h4>Гарантия качества</h4>
              <p>Предоставляем гарантию на все виды работ до 2 лет</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h4>Бесплатный выезд</h4>
              <p>Выезд мастера и диагностика бесплатно</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💰</div>
              <h4>Фиксированные цены</h4>
              <p>Стоимость не изменится после начала работ</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h4>Быстрое выполнение</h4>
              <p>Большинство работ выполняем в день обращения</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
