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

// Configuração das partículas
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: false,
            animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#0ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'bounce'
        }
    },
    interactivity: {
        detectOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Adicionar efeito de digitação
const titles = document.querySelectorAll('h2');
titles.forEach(title => {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});