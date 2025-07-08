document.getElementById('formRecordatorio').addEventListener('submit', function (e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const hora = document.getElementById('hora').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (titulo === '' || hora === '') {
    mensaje.textContent = '⚠️ Por favor completa todos los campos.';
    mensaje.className = 'mensaje error';
    mensaje.style.display = 'block';

    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 3000);
  } else {
    // mensaje verde antes de redirigir
    mensaje.textContent = '✅ Recordatorio creado con éxito.';
    mensaje.className = 'mensaje exito';
    mensaje.style.display = 'block';

    setTimeout(() => {
      window.location.href = 'notificaciones.html?exito=1';
    }, 3000);
  }
});

function cerrarModal() {
  window.location.href = 'notificaciones.html';
}
