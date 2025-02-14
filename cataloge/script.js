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