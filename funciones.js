document.addEventListener('DOMContentLoaded', function() {
    // Activa la animación de desvanecimiento del logo después de 3 segundos
    setTimeout(function() {
        const logo = document.querySelector('.logo');
        logo.style.animationDelay = '0s';
    }, 0);

    // Código para las partículas
    const particlesContainer = document.querySelector('.particles');
    createParticles(particlesContainer, 20);
});

function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Valores aleatorios para mover las partículas en todas direcciones
        const translateX = `${Math.random() * 200 - 100}vw`;
        const translateY = `${Math.random() * 200 - 100}vh`;
        const animationDuration = `${Math.random() * 30 + 20}s`;

        particle.style.setProperty('--translate-x', translateX);
        particle.style.setProperty('--translate-y', translateY);
        particle.style.setProperty('--animation-duration', animationDuration);

        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        container.appendChild(particle);
    }
}
