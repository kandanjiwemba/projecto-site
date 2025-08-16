// Alternador de tema claro/escuro
const toggleTheme = document.getElementById('toggleTheme');
let isDarkMode = false;

toggleTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-theme');
    toggleTheme.textContent = isDarkMode ? 'Tema Claro' : 'Tema Escuro';
});

// Animação de entrada para os artigos
const articles = document.querySelectorAll('.article-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

articles.forEach(article => {
    observer.observe(article);
});

// Botões "Ler mais"
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const article = button.parentElement;
        article.classList.toggle('expanded');
        button.textContent = article.classList.contains('expanded') ? 'Ler menos' : 'Ler mais';
    });
});