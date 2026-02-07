import React, { useState } from "react";
import "./HeroForm.css";
import { submitContactForm } from "../../../services/contactService";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Необходимо согласие на обработку данных");
      return;
    }

    setIsSubmitting(true);

    try {
      // Подготавливаем данные для Firebase
      const contactData = {
        name: formData.name,
        phone: formData.phone,
        surname: "", // пустое поле для совместимости
        email: "", // пустое поле для совместимости
        comment: "Заявка с главной страницы (скидка до 20%)",
        source: "hero_form",
      };

      // Отправляем данные в Firebase
      const result = await submitContactForm(contactData);

      if (result.success) {
        console.log("Hero form заявка сохранена:", result.id);

        // Очистка формы после успешной отправки
        setFormData({
          name: "",
          phone: "",
          consent: false,
        });

        // Показываем сообщение в зависимости от окружения
        if (import.meta.env.DEV) {
          alert(
            "✅ Форма работает!\n\n" +
              "В режиме разработки данные не отправляются из-за сетевых ограничений.\n\n" +
              "На продакшене (после деплоя) заявка будет отправлена в Telegram и сохранена в Firebase.",
          );
        } else {
          alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        }
      } else {
        throw new Error(result.error || "Ошибка при сохранении заявки");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="hero-form" onSubmit={handleSubmit}>
      <h3 className="hero-form__title">
        Оставьте заявку и получите скидку до 20%
      </h3>

      <input
        className="hero-form__field"
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <input
        className="hero-form__field"
        type="tel"
        name="phone"
        placeholder="Ваш номер телефона*"
        value={formData.phone}
        onChange={handleInputChange}
        required
        minLength={6}
      />

      <label className="hero-form__consent">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleInputChange}
          required
        />
        <span>
          Принимаю условия{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Соглашения
          </a>
          ,{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Политики
          </a>{" "}
          и{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Согласия
          </a>
        </span>
      </label>

      <button
        type="submit"
        className="hero-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправляем..." : "Отправить"}
      </button>
    </form>
  );
};

export default HeroForm;
