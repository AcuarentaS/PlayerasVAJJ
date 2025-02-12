// document.addEventListener("DOMContentLoaded", function() {
//     const checkbox = document.getElementById("talla_S");
//     const articles = document.getElementsByClassName("p-s-bl-mc-cr-r-s");

//     checkbox.addEventListener("change", function() {
//         for (let i = 0; i < articles.length; i++) {
//             articles[i].style.display = checkbox.checked ? "block" : "none";
//         }
//     });
// });

document.querySelectorAll('.main__article img').forEach(img => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      img.addEventListener('touchstart', () => img.classList.add('hover-scale'));
      img.addEventListener('touchend', () => img.classList.remove('hover-scale'));
    } else {
      img.addEventListener('mouseover', () => img.classList.add('hover-scale'));
      img.addEventListener('mouseout', () => img.classList.remove('hover-scale'));
    }
});
  

/*
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("talla_S");
    const articles = document.getElementsByClassName("p-s-bl-mc-cr-r-s");

    const toggleArticlesVisibility = () => {
        Array.from(articles).forEach(article => {
            article.style.display = checkbox.checked ? "block" : "none";
        });
    };

    // Inicializar el estado al cargar la página
    toggleArticlesVisibility();

    checkbox.addEventListener("change", toggleArticlesVisibility);
});
*/
