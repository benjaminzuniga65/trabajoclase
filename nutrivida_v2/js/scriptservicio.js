// JS de catalogo.html
// Resalta en el menú la pestaña de la página en la que está el usuario,
// comparando el nombre del archivo actual con el href de cada enlace.
document.addEventListener("DOMContentLoaded", function () {
    const paginaActual = window.location.pathname.split("/").pop();
    const enlaces = document.querySelectorAll("#menu-principal .enlace-menu");

    enlaces.forEach(function (enlace) {
        if (enlace.getAttribute("href") === paginaActual) {
            enlace.style.backgroundColor = "#12355b";
            enlace.style.color = "#eaf4ff";
        }
    });
});
