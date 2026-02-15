import { useState, useEffect } from "react";
import { getThematicKeywords } from "../data/serviceThematicImages";
import { fetchThematicImageUrl as fetchYandexImage } from "../services/yandexImageService";
import { fetchThematicImageUrl as fetchUnsplashImage } from "../services/unsplashService";

const DIRECT_IMAGE_CATEGORIES = ["water_tanks", "turnkey_repair"];
const LOCAL_FALLBACK = [
  "/assets/products/img1.jpg",
  "/assets/products/img2.jpg",
  "/assets/products/img3.jpg",
  "/assets/products/img4.jpg",
  "/assets/products/img5.jpg",
  "/assets/products/img6.jpg",
];

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Возвращает URL тематического фото для карточки услуги.
 * Для water_tanks и turnkey_repair — сразу service.image.
 * Для остальных: сначала Yandex Search API, при отсутствии ключа/ошибке — Unsplash, затем локальное фото.
 */
export function useThematicImageUrl(categoryId, service) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!service) {
      setUrl("");
      setLoading(false);
      return;
    }

    if (DIRECT_IMAGE_CATEGORIES.includes(categoryId)) {
      setUrl(service.image || "");
      setLoading(false);
      return;
    }

    const keywords = getThematicKeywords(categoryId, service.id);
    if (!keywords) {
      const i = hash(`${categoryId}-${service.id}`) % LOCAL_FALLBACK.length;
      setUrl(LOCAL_FALLBACK[i]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    (async () => {
      let apiUrl = await fetchYandexImage(keywords);
      if (!apiUrl) apiUrl = await fetchUnsplashImage(keywords);
      if (cancelled) return;
      if (apiUrl) {
        setUrl(apiUrl);
      } else {
        const i = hash(`${categoryId}-${service.id}`) % LOCAL_FALLBACK.length;
        setUrl(LOCAL_FALLBACK[i]);
      }
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [categoryId, service?.id]);

  return { url, loading };
}
