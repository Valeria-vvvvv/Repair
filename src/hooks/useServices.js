import { useState, useEffect } from "react";
import { SERVICES_CATEGORIES } from "../data/servicesData";

// Хук для работы с услугами (используем статические данные)
export const useServices = () => {
  const [categories, setCategories] = useState(SERVICES_CATEGORIES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Используем статические данные
    setCategories(SERVICES_CATEGORIES);
    setLoading(false);
  }, []);

  return { categories, loading, error };
};

// Хук для получения услуг по категории
export const useServicesByCategory = (categoryId) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Используем статические данные
    if (categoryId && SERVICES_CATEGORIES[categoryId]) {
      setServices(SERVICES_CATEGORIES[categoryId].services || []);
    }
    setLoading(false);
  }, [categoryId]);

  return { services, loading, error };
};

// Хук для получения конкретной услуги
export const useService = (categoryId, serviceId) => {
  const [service, setService] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Используем статические данные
    if (categoryId && serviceId && SERVICES_CATEGORIES[categoryId]) {
      const categoryData = SERVICES_CATEGORIES[categoryId];
      const serviceData = categoryData.services?.find(
        (s) => s.id === serviceId,
      );
      setCategory(categoryData);
      setService(serviceData || null);
    }
    setLoading(false);
  }, [categoryId, serviceId]);

  return { service, category, loading, error };
};
