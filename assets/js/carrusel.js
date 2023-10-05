let currentSlide = 0;
const dots = document.querySelectorAll('.dot');
const articles = document.querySelectorAll('.articles');

function move(direction) {
    if (direction === 'left') {
        currentSlide = (currentSlide - 1 + articles.length) % articles.length;
    } else {
        currentSlide = (currentSlide + 1) % articles.length;
    }
    updateUI();
}

function goToSlide(index) {
    currentSlide = index;
    updateUI();
}

function updateUI() {
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Añadido código para asegurar que 'a' sea el primer elemento visible al inicio
window.addEventListener('DOMContentLoaded', () => {
    updateUI();  // Asegurarse de que la UI esté actualizada
});
