/**
 * Изображения для карточек услуг: Picsum Photos (picsum.photos).
 * Один и тот же seed даёт одну и ту же картинку — у каждой услуги свой seed.
 * water_tanks, turnkey_repair — из данных (service.image).
 * Картинки 8 категорий на /products не трогаем — они берутся из servicesData.
 */
const PICSUM = "https://picsum.photos";
const DIRECT_IMAGE_CATEGORIES = ["water_tanks", "turnkey_repair"];

export function getServiceImageUrl(categoryId, service) {
  if (!service) return "";
  if (DIRECT_IMAGE_CATEGORIES.includes(categoryId)) {
    return service.image || "";
  }
  const seed = `${categoryId}-${service.id}`;
  return `${PICSUM}/seed/${encodeURIComponent(seed)}/400/300`;
}
