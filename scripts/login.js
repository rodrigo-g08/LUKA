function ingresarCuenta(event) {
    event.preventDefault();

    const correoInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('password');

    const correo = correoInput.value.trim();
    const password = passwordInput.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    correoInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    document.querySelector('label[for="usuario"]').classList.remove('label-error');
    document.querySelector('label[for="password"]').classList.remove('label-error');

    let hayError = false;

    if (correo === '' || !emailValido.test(correo)) {
        correoInput.classList.add('input-error');
        document.querySelector('label[for="usuario"]').classList.add('label-error');
        correoInput.placeholder = "Usuario incorrecto";
        hayError = true;
    }

    if (password === '') {
        passwordInput.classList.add('input-error');
        document.querySelector('label[for="password"]').classList.add('label-error');
        passwordInput.placeholder = "Contraseña incorrecta";
        hayError = true;
    }

    if (!hayError) {
        window.location.href = 'MiBalance.html';
    }
}

function registrarCuenta(){
    window.location.href = "registro.html";
}