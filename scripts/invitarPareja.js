function verificarCorreo(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const mensaje = document.getElementById('mensajeConfirmacion');

    // Expresión regular básica para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Oculta el mensaje antes de mostrar uno nuevo
    mensaje.classList.add('oculto');

    if (emailRegex.test(email)) {
        mensaje.textContent = '¡Invitación enviada con éxito!';
        mensaje.style.backgroundColor = "#00c853";
        mensaje.classList.remove('oculto');
    } else {
        mensaje.textContent = 'Por favor ingresa un correo válido.';
        mensaje.style.backgroundColor = "#d32f2f";
        mensaje.classList.remove('oculto');
    }

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        mensaje.classList.add('oculto');
    }, 2000);
}