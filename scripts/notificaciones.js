document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnNotificaciones");
    const modal = document.getElementById("modalNotificaciones");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

function cerrarModal() {
    document.getElementById("modalNotificaciones").style.display = "none";
}
