document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("btnRedirigir");

    if (boton) {
        boton.addEventListener("click", function () {
            window.location.href = "../code/crear_meta.html";
        });
    }
});