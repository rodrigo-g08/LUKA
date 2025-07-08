function guardarYRedirigir() {
    window.location.href = "metasAhorro.html?recordatorio=ok";
}

function guardarYRedirigirPagos() {
  const nombre = document.getElementById("nombreServicio").value.trim();
  const frecuencia = document.getElementById("frecuencia").value;
  const monto = document.getElementById("monto").value.trim();
  const mensaje = document.getElementById("mensajeError");

  if (!nombre || !frecuencia || !monto || parseFloat(monto) <= 0) {
    mensaje.style.display = "block";
    mensaje.classList.remove("fade"); // reiniciar si se vuelve a mostrar

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);

    return;
  }

  mensaje.style.display = "none";
  window.location.href = "notificaciones.html?exito=1";
}

function guardarYRedirigirLimite() {
    window.location.href = "miBalance.html";
}

function guardarMeta() {
    window.location.href = "metas_de_ahorro.html";
}

function guardarIngreso() {
    window.location.href = "metas_de_ahorro.html";
}

function returnCategorias(){
    window.location.href = "categorias.html";
}

function registrar(){
    window.location.href = "login.html";
}

function volverLogin(){
    window.location.href = "login.html";
}

function toggleHora() {
    const checkbox = document.getElementById("toggleRecordatorio");
    const inputHora = document.getElementById("hora");
    inputHora.disabled = !checkbox.checked;
}
function cerrarModal() {
  window.location.href = "notificaciones.html";
}

