document.getElementById('formRecordatorio').addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (titulo === '' || hora === '') {
        mensaje.textContent = 'Por favor completa todos los campos.';
        mensaje.className = 'mensaje';
    } else {
        mensaje.textContent = 'Recordatorio creado con éxito!';
        mensaje.className = 'mensaje exito';
        this.reset();
    }

    mensaje.style.display = 'block';

    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000);
});
