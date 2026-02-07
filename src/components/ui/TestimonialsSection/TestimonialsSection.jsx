import React from "react";
import SwiperComponent from "../Swiper/Swiper";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      date: "15 января 2026г.",
      text: "Отличная работа! Быстро и качественно установили смеситель. Мастер приехал вовремя, все объяснил и убрал за собой. Рекомендую!",
      rating: 5,
      avatar: "/assets/client/client1.png",
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      date: "28 декабря 2025г.",
      text: "Заказывали подключение бытовой техники в офисе. Все сделали профессионально, с гарантией. Цены адекватные, сервис на высоте.",
      rating: 4,
      avatar: "/assets/client/client5.png",
    },
    {
      id: 3,
      name: "Елена Козлова",
      date: "12 января 2026г.",
      text: "Спасибо за качественную установку светильников! Мастер подсказал лучшие варианты размещения. Работой довольна на 100%.",
      rating: 5,
      avatar: "/assets/client/client6.png",
    },
    {
      id: 4,
      name: "Дмитрий Волков",
      date: "3 января 2026г.",
      text: "Заменили мойку на кухне. Работа выполнена аккуратно и в срок. Мастер вежливый, инструменты свои. Буду обращаться еще.",
      rating: 5,
      avatar: "/assets/client/Снимок экрана 2026-02-01 в 17.14.10.png",
    },
    {
      id: 5,
      name: "Ольга Смирнова",
      date: "22 декабря 2025г.",
      text: "Профессиональный подход к работе. Все этапы выполнены качественно и в срок. Рекомендую всем знакомым!",
      rating: 5,
      avatar: "/assets/client/Снимок экрана 2026-02-01 в 17.13.41.png",
    },
    {
      id: 6,
      name: "Александр Иванов",
      date: "8 января 2026г.",
      text: "Отличный сервис! Быстро решили нашу проблему с электрикой. Мастера знают свое дело. Спасибо за работу!",
      rating: 4,
      avatar: "/assets/client/Снимок экрана 2026-02-01 в 17.14.19.png",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="projects-title">
          ОТЗЫВЫ
          <br />
          <span className="projects-subtitle testimonials-subtitle">
            {" "}
            НАШИХ ЗАКАЗЧИКОВ
          </span>
        </h2>

        <div className="testimonials-swiper">
          <SwiperComponent
            slides={testimonials.map((testimonial) => (
              <div className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="client-info">
                  <div className="client-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="client-photo"
                    />
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-role">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
