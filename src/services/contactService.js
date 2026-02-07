import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export const submitContactForm = async (formData) => {
  // В режиме разработки - только логируем (из-за proxy/firewall)
  if (import.meta.env.DEV) {
    console.log("📝 DEV MODE: Заявка получена:", formData);
    console.log("ℹ️ Локально Firebase и Telegram заблокированы proxy/firewall");
    console.log("✅ На продакшене (Vercel) все будет работать!");

    // Имитируем успешную отправку
    return {
      success: true,
      message: "Заявка принята! (DEV MODE - данные не отправлены)",
    };
  }

  // В ПРОДАКШЕНЕ - реальная отправка
  let firebaseSuccess = false;
  let telegramSuccess = false;
  let usedFallback = false;

  // 1. Пытаемся сохранить в Firebase (с коротким таймаутом!)
  try {
    const savePromise = addDoc(collection(db, "contacts"), {
      ...formData,
      createdAt: serverTimestamp(),
      status: "new",
    });

    // Таймаут 3 секунды - если Firebase не ответил, идем дальше
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Firebase timeout")), 3000),
    );

    const docRef = await Promise.race([savePromise, timeoutPromise]);
    firebaseSuccess = true;
    console.log("✅ Firebase: сохранено", docRef.id);
  } catch (firebaseErr) {
    console.warn(
      "⚠️ Firebase недоступен → переходим на fallback",
      firebaseErr.message,
    );
    usedFallback = true;
  }

  // 2. Отправляем в Telegram В ЛЮБОМ СЛУЧАЕ (и как уведомление, и как fallback)
  try {
    telegramSuccess = await sendTelegramNotification(formData, usedFallback);
    console.log("✅ Telegram: уведомление отправлено");
  } catch (tgErr) {
    console.warn("⚠️ Telegram тоже упал:", tgErr.message);
  }

  // Результат для пользователя
  if (firebaseSuccess || telegramSuccess) {
    return {
      success: true,
      message: usedFallback
        ? "Заявка принята! Мы свяжемся с вами скоро."
        : "Заявка успешно отправлена!",
    };
  }

  return {
    success: false,
    error: "Сервисы временно недоступны. Позвоните нам по телефону.",
  };
};

// Уведомление в Telegram (добавляем флаг fallback)
const sendTelegramNotification = async (formData, isFallback = false) => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) throw new Error("Telegram не настроен");

  const prefix = isFallback ? "⚠️ [FALLBACK] Firebase недоступен!\n\n" : "";
  const message =
    `${prefix}🔔 Новая заявка\n\n` +
    `👤 ${formData.name} ${formData.surname || ""}\n` +
    `📞 ${formData.phone}\n` +
    `📧 ${formData.email || "—"}\n` +
    `💬 ${formData.comment || "—"}\n` +
    `📍 Источник: ${formData.source || "contact_form"}\n` +
    `⏰ ${new Date().toLocaleString("ru-RU")}`;

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    },
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return true;
};
