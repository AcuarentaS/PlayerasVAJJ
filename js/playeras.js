// document.addEventListener("DOMContentLoaded", function() {
//     const checkbox = document.getElementById("talla_S");
//     const articles = document.getElementsByClassName("p-s-bl-mc-cr-r-s");

//     checkbox.addEventListener("change", function() {
//         for (let i = 0; i < articles.length; i++) {
//             articles[i].style.display = checkbox.checked ? "block" : "none";
//         }
//     });
// });

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