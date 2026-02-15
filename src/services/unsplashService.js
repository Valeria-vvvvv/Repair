/**
 * Тематические фото через официальный Unsplash API.
 * Запрос по ключевому слову, ответ — URL картинки. Результаты кешируются по query.
 */

const API = "https://api.unsplash.com/photos/random";
const cache = new Map();

export async function fetchThematicImageUrl(keyword) {
  if (!keyword) return null;
  const key = String(keyword).trim().toLowerCase();
  if (cache.has(key)) return cache.get(key);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  try {
    const params = new URLSearchParams({
      query: key,
      orientation: "landscape",
      client_id: accessKey,
    });
    const res = await fetch(`${API}?${params}`);
    if (!res.ok) return null;
    const data = await res.json();
    const url = data.urls?.regular || data.urls?.small || data.urls?.thumb || null;
    if (url) cache.set(key, url);
    return url;
  } catch {
    return null;
  }
}
