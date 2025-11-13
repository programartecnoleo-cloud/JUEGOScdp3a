// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const html = document.documentElement;

// Cargar tema guardado o usar preferencia del sistema
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(theme);
}

// Establecer tema
function setTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        html.classList.remove('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
}

// Toggle entre temas
themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Abrir juego
function playGame(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Cargar tema al iniciar
loadTheme();
