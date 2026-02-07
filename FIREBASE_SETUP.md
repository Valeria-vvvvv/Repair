# Настройка Firebase для безопасного хранения данных

## Преимущества Firebase перед Telegram Bot

✅ **Безопасность**: Данные хранятся в защищенной базе данных  
✅ **Масштабируемость**: Поддерживает большое количество заявок  
✅ **Аналитика**: Можно анализировать данные и статистику  
✅ **Резервное копирование**: Автоматические бэкапы  
✅ **Правила доступа**: Гибкая настройка прав доступа

## Шаги настройки

### 1. Создание проекта Firebase

1. Перейдите на [Firebase Console](https://console.firebase.google.com/)
2. Нажмите "Создать проект"
3. Введите название проекта
4. Включите Google Analytics (опционально)

### 2. Настройка Firestore Database

1. В консоли Firebase выберите "Firestore Database"
2. Нажмите "Создать базу данных"
3. Выберите режим "Начать в тестовом режиме" (позже настроите правила)
4. Выберите регион (например, europe-west1)

### 3. Получение конфигурации

1. Перейдите в "Настройки проекта" (шестеренка)
2. Прокрутите до "Ваши приложения"
3. Нажмите "Добавить приложение" → "Web"
4. Введите название приложения
5. Скопируйте конфигурацию

### 4. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

\`\`\`env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
\`\`\`

### 5. Настройка правил безопасности

В Firestore Database → Rules добавьте:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
// Разрешить только запись в коллекцию contacts
match /contacts/{document} {
allow create: if true;
allow read, update, delete: if false;
}
}
}
\`\`\`

### 6. Просмотр заявок

Заявки будут сохраняться в коллекции `contacts` с полями:

- `name` - имя
- `surname` - фамилия
- `phone` - телефон
- `email` - email
- `comment` - комментарий
- `createdAt` - время создания
- `status` - статус заявки

## Дополнительные возможности

### Уведомления через Cloud Functions

Для получения уведомлений о новых заявках можно настроить Cloud Functions:

\`\`\`javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.sendNotification = functions.firestore
.document('contacts/{contactId}')
.onCreate(async (snap, context) => {
const data = snap.data();

    // Отправка email или Telegram уведомления
    // Здесь токены и API ключи хранятся безопасно

});
\`\`\`

### Админ панель

Можно создать админ панель для управления заявками с аутентификацией Firebase Auth.

## Безопасность

- ✅ Токены и ключи не хранятся в коде
- ✅ Правила Firestore ограничивают доступ
- ✅ Данные шифруются при передаче и хранении
- ✅ Логирование всех операций
