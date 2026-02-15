/**
 * Тематические фото через Yandex Search API (поиск по картинкам).
 * Запрос по ключевым словам, ответ — URL картинки. Кеш в памяти + localStorage (7 дней).
 */

const API_URL = "https://searchapi.yandex.cloud/v1/search/images";
const CACHE_KEY_PREFIX = "yandex_img_";
const CACHE_DAYS = 7;

const memoryCache = new Map();

function getStorageKey(keyword) {
  return CACHE_KEY_PREFIX + String(keyword).trim().toLowerCase().replace(/\s+/g, "_");
}

function loadFromStorage(keyword) {
  try {
    const key = getStorageKey(keyword);
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { url, expires } = JSON.parse(raw);
    if (expires && Date.now() < expires) return url;
    localStorage.removeItem(key);
  } catch (_) {}
  return null;
}

function saveToStorage(keyword, url) {
  try {
    const key = getStorageKey(keyword);
    const expires = Date.now() + CACHE_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(key, JSON.stringify({ url, expires }));
  } catch (_) {}
}

/**
 * Запрос тематической картинки по ключевым словам.
 * @param {string} keyword - ключевые слова (англ. или рус.), через запятую
 * @returns {Promise<string|null>} - URL картинки или null
 */
export async function fetchThematicImageUrl(keyword) {
  if (!keyword) return null;
  const key = String(keyword).trim().toLowerCase();

  if (memoryCache.has(key)) return memoryCache.get(key);
  const cached = loadFromStorage(key);
  if (cached) {
    memoryCache.set(key, cached);
    return cached;
  }

  const apiKey = import.meta.env.VITE_YANDEX_SEARCH_API_KEY;
  if (!apiKey) return null;

  const query = `${keyword} фото ремонт`.trim();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Api-Key ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        count: 5,
        lang: "ru",
        image_type: "photo",
        size: "large",
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();

    const items = data.images ?? data.result?.items ?? data.results ?? [];
    const first = Array.isArray(items) ? items[0] : null;
    const url =
      first?.thumbnail ??
      first?.url ??
      first?.link ??
      first?.preview?.url ??
      null;

    if (url) {
      memoryCache.set(key, url);
      saveToStorage(key, url);
    }
    return url;
  } catch {
    return null;
  }
}
