function guardarYRedirigir() {
    window.location.href = "metasAhorro.html?recordatorio=ok";
}

function guardarYRedirigirPagos() {
    window.location.href = "metasAhorro.html?confirmacionpago=ok";
}

function guardarYRedirigirLimite() {
    window.location.href = "metasAhorro.html?confirmacionlimite=ok";
}

function guardarMeta() {
    window.location.href = "metasAhorro.html?confirmacionmeta=ok";
}

function guardarIngreso() {
    window.location.href = "metasAhorro.html?confirmacioningreso=ok";
}


function toggleHora() {
    const checkbox = document.getElementById("toggleRecordatorio");
    const inputHora = document.getElementById("hora");
    inputHora.disabled = !checkbox.checked;
}