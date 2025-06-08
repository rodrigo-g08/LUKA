function activarBoton(elemento1,elemento2,elemento3,elemento4, clase) {
    const boton1 = document.getElementById(elemento1);
    const boton2 = document.getElementById(elemento2);
    const form1 = document.getElementById(elemento3);
    const form2 = document.getElementById(elemento4);

    boton1.classList.add(clase);
    form1.classList.add(clase);
    boton2.classList.remove(clase);
    form2.classList.remove(clase);

}

function mostrarNotificacion(event, mesage){
    event.preventDefault();

    const notification = document.getElementById("notificacion");
    notification.textContent = mesage;
    notification.classList.add("mostrar");

    setTimeout(() => {
        notification.classList.remove("mostrar");
        window.location.href = "miBalance.html";
    }, 1200);


}