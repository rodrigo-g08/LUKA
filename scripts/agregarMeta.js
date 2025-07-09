function validar() {
    const nombre = document.getElementById("nombreMeta").value.trim();
    const monto = document.getElementById("montoMeta").value.trim();

    if (nombre === "" || monto === "") {
        return false;
    }

    return true;

}

function mostrarNotificacionyValidar(event, mesage){
    event.preventDefault();

    var isValid = validar();
    const notification = document.getElementById("notificacion");
    
    if(isValid){
    notification.textContent = mesage;
    
    notification.classList.add("mostrar");

    setTimeout(() => {
        notification.classList.remove("mostrar");
        window.location.href = "metas_de_ahorro.html";
    }, 1200);

    }
    else{
    notification.textContent = "Por favor completa todos los campos.";
    notification.classList.add("mostrar","error");

    setTimeout(() => {
        notification.classList.remove("mostrar","error");
        return;
    }, 1200);

    }
    

}

