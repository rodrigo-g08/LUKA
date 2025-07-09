async function verificarCorreo(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const mensaje = document.getElementById('mensajeConfirmacion');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    mensaje.classList.add('oculto');

    if (emailRegex.test(email)) {
        try {
            const response = await fetch("https://luka-9r4r.onrender.com/enviar-invitacion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
            });


            const data = await response.json();

            if (data.success) {
                mensaje.textContent = '¡Invitación enviada con éxito!';
                mensaje.style.backgroundColor = "#00c853";
            } else {
                mensaje.textContent = 'Error al enviar el correo.';
                mensaje.style.backgroundColor = "#d32f2f";
            }
        } catch (err) {
            mensaje.textContent = 'No se pudo conectar al servidor.';
            mensaje.style.backgroundColor = "#d32f2f";
        }

        mensaje.classList.remove('oculto');
        setTimeout(() => mensaje.classList.add('oculto'), 2000);
    } else {
        mensaje.textContent = 'Por favor ingresa un correo válido.';
        mensaje.style.backgroundColor = "#d32f2f";
        mensaje.classList.remove('oculto');
        setTimeout(() => mensaje.classList.add('oculto'), 2000);
    }
}
