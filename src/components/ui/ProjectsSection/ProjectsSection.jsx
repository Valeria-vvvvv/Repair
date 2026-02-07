import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useServices } from "../../../hooks/useServices";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { categories } = useServices();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Запускаем анимацию когда 10% секции видно
        rootMargin: "0px 0px -50px 0px", // Небольшой отступ снизу
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`projects-section ${isVisible ? "animate-in" : ""}`}
      id="cases"
    >
      <div className="projects-container">
        <div className={`projects-header ${isVisible ? "animate-in" : ""}`}>
          <h2 className="projects-title">
            НАШИ
            <br />
            <span className="projects-subtitle">УСЛУГИ</span>
          </h2>
        </div>

        <div className="projects-grid">
          {Object.values(categories).map((category, index) => (
            <Link
              key={category.id}
              to={`/services/${category.id}`}
              className={`project-card ${isVisible ? "animate-in" : ""}`}
              style={{
                transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              <div className="project-image">
                <img src={category.image} alt={category.title} />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <div className="project-number">{`0${index + 1}.`}</div>

                <div className="project-info">
                  <h3 className="project-title">{category.title}</h3>
                  <p className="project-description">{category.description}</p>

                  <div className="project-button">Смотреть услуги</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
