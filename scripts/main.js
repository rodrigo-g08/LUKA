function guardarYRedirigir() {
    window.location.href = "metasAhorro.html?recordatorio=ok";
}

function guardarYRedirigirPagos() {
    window.location.href = "miBalance.html";
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

function ingresarCuenta(){
    window.location.href = "miBalance.html";
}

function registrarCuenta(){
    window.location.href = "registro.html";
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