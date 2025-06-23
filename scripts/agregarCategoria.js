function guardarCategoria() {
    const nombreCategoria = document.getElementById("categoria").value.trim();
    const mensaje = document.getElementById("mensajeConfirmacion");
    const textoMensaje = document.getElementById("textoMensaje");

    if (nombreCategoria === "") {
        textoMensaje.innerText = "Por favor ingresa un nombre de categoría.";
        mensaje.style.backgroundColor = "#e53935"; // rojo
        mensaje.classList.remove("oculto");
        return;
    }

    textoMensaje.innerText = "Categoría registrada con éxito!";
    mensaje.style.backgroundColor = "#00c853"; // verde
    mensaje.classList.remove("oculto");

    setTimeout(() => {
        window.location.href = "categorias.html";
    }, 2000);
}

function cerrarMensaje() {
    document.getElementById("mensajeConfirmacion").classList.add("oculto");
}
