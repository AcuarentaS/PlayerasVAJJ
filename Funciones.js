document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const BtnComprarAhora = document.getElementById('BtnComprarAhora');
    const menuPrincipal = document.getElementById('menuPrincipal');
    const opcion1 = document.querySelector('a[href="#opcion1"]');
    const opcion2 = document.querySelector('a[href="#opcion2"]');
    const opcion3 = document.querySelector('a[href="#opcion3"]');
    const opcion4 = document.querySelector('a[href="#opcion4"]');
    const opcion5 = document.querySelector('a[href="#opcion5"]');
    const imagen1 = document.getElementById('playera1');
    const imagen2 = document.getElementById('playera2');
    const imagen3 = document.getElementById('playera3');
    const imagen4 = document.getElementById('playera4');
    const imagen5 = document.getElementById('playera5');
    const imagen6 = document.getElementById('playera6');
    const imagen7 = document.getElementById('playera7');
    const imagen8 = document.getElementById('playera8');

    const imagen9 = document.getElementById('playera9');

    const limpiarPantalla = function() { document.querySelectorAll('body > *').forEach(el => el.remove()); };
    logo.style.animation = 'aparecerDesdeLaIzquierda 2.5s forwards';
    logo.addEventListener('animationend', function() { BtnComprarAhora.style.animation = 'aparecerFijo 2s forwards'; });

    BtnComprarAhora.addEventListener('click', function() {
        limpiarPantalla();
        document.body.appendChild(menuPrincipal);
        menuPrincipal.classList.remove('oculto');
    });

    opcion1.addEventListener('click', function() {
        limpiarPantalla();
        setTimeout(function() { document.body.appendChild(menuPrincipal); }, 100);
        menuPrincipal.style.animation = 'aparecerFijo 2s forwards';
        document.body.appendChild(imagen1);
        document.body.appendChild(imagen2);
        document.body.appendChild(imagen3);
        document.body.appendChild(imagen4);
        document.body.appendChild(imagen5);
        document.body.appendChild(imagen6);
        document.body.appendChild(imagen7);
        document.body.appendChild(imagen8);
        imagen1.classList.remove('oculto');
        imagen2.classList.remove('oculto');
        imagen3.classList.remove('oculto');
        imagen4.classList.remove('oculto');
        imagen5.classList.remove('oculto');
        imagen6.classList.remove('oculto');
        imagen7.classList.remove('oculto');
        imagen8.classList.remove('oculto');
    });
    opcion2.addEventListener('click', function() {
        limpiarPantalla();
        setTimeout(function() { document.body.appendChild(menuPrincipal); }, 100);
        menuPrincipal.style.animation = 'aparecerFijo 2s forwards';
        document.body.appendChild(imagen9);
        imagen9.classList.remove('oculto');
    });
    opcion3.addEventListener('click', function() {
        limpiarPantalla();
        setTimeout(function() { document.body.appendChild(menuPrincipal); }, 100);
        menuPrincipal.style.animation = 'aparecerFijo 2s forwards';
    });
    opcion4.addEventListener('click', function() {
        limpiarPantalla();
        setTimeout(function() { document.body.appendChild(menuPrincipal); }, 100);
        menuPrincipal.style.animation = 'aparecerFijo 2s forwards';
    });
    opcion5.addEventListener('click', function() {
        limpiarPantalla();
        setTimeout(function() { document.body.appendChild(menuPrincipal); }, 100);
        menuPrincipal.style.animation = 'aparecerFijo 2s forwards';
    });
});
