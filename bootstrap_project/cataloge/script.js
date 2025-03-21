// Загружаем переводы
let translations = {};

fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    applyLanguage('ru'); // Устанавливаем язык по умолчанию
  });

// Функция для применения языка
function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-t9n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-t9n');
    element.textContent = translations[lang][key];
  });
}

// Обработчик нажатия на кнопки
document.getElementById('language-switcher').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedLanguage = event.target.getAttribute('data-lang');
    applyLanguage(selectedLanguage);
  }
});
// Функция для отображения уведомления
function showNotification(message, duration = 3000) {
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notification-message");

  // Устанавливаем текст сообщения
  notificationMessage.textContent = message;

  // Показываем уведомление
  notification.classList.remove("hidden", "hide");
  notification.classList.add("show");

  // Скрываем уведомление через указанное время
  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hide");

    // Убираем уведомление из DOM после завершения анимации
    notification.addEventListener("transitionend", () => {
      notification.classList.add("hidden");
    }, { once: true });
  }, duration);
}

// Пример использования
document.getElementById("add-task-button").addEventListener("click", () => {
  // Логика добавления задачи
  console.log("Задача добавлена");

  // Показываем уведомление
  showNotification("Задача добавлена");
});