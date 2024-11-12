document.addEventListener('DOMContentLoaded', function() {
    // Activa la animación de desvanecimiento del logo inmediatamente
    setTimeout(function() {
        const logo = document.querySelector('.logo');
        logo.style.animationDelay = '0s';
    }, 0);

    // Código para las partículas
    const particlesContainer = document.querySelector('.particles');
    createParticles(particlesContainer, 20);

    // Mostrar el botón después de la animación del logo
    const btn = document.querySelector('.btn');
    setTimeout(function() {
        btn.classList.add('btn-visible');
    }, 3500); // Aparece después de la animación del logo (3s + 500ms de la animación)

    // Evento click para mostrar el nuevo menú
    const mainBtn = document.getElementById('main-btn');
    mainBtn.addEventListener('click', function() {
        // Eliminar todos los elementos actuales del body, pero mantener el nuevo menú
        document.querySelectorAll('body > :not(#new-menu)').forEach(el => el.remove());
        const newMenu = document.getElementById('new-menu');
        newMenu.classList.remove('hidden'); // Mostrar el nuevo menú
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


    // Evento click para Opción 1
    const opcion1Link = document.querySelector('.dropdown-content a[href="#opcion1"]');
    opcion1Link.addEventListener('click', function() {
        // Limpiar la pantalla
        document.querySelectorAll('body > :not(#opcion1-content)').forEach(el => el.remove());
        
        // Mostrar el contenido de Opción 1
        const opcion1Content = document.getElementById('opcion1-content');
        opcion1Content.classList.remove('hidden');
    });

    // Evento click para el botón de regreso
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function() {
        // Recargar la página para regresar al menú principal
        location.reload();
    });
});
