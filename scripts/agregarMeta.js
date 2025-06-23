function guardarMeta() {
    const nombre = document.getElementById("nombreMeta").value.trim();
    const monto = document.getElementById("montoMeta").value.trim();
    const fecha = document.getElementById("fechaMeta").value.trim();
    const mensaje = document.getElementById("mensajeConfirmacion");

    if (nombre === "" || monto === "" || fecha === "") {
        mensaje.innerText = "Por favor completa todos los campos.";
        mensaje.style.backgroundColor = "#e53935";
        mensaje.classList.remove("oculto");
        return;
    }

    mensaje.innerText = "Meta creada con éxito!";
    mensaje.style.backgroundColor = "#00c853";
    mensaje.classList.remove("oculto");

    setTimeout(() => {
        window.location.href = "metas_de_ahorro.html";
    }, 2000);
}
