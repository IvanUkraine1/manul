// Функція для зміни теми
function toggleTheme() {
    const body = document.body;
    // Перевірка поточної теми та встановлення нової
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }

    // Зміна видимості сонця та місяця при зміні теми
    updateThemeIcon();
}

// Функція для зміни видимості сонця та місяця
function updateThemeIcon() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';

    if (currentTheme === 'light') {
        themeIcon.textContent = '☀️'; // Сонце
    } else {
        themeIcon.textContent = '🌙'; // Місяць
    }

    console.log('Theme Updated:', currentTheme);
}

// Виклик функції для правильної іконки при завантаженні сторінки
updateThemeIcon();
