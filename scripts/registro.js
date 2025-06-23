function registrar(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const cpasswordInput = document.getElementById('confirmar');

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const password = passwordInput.value.trim();
    const cpassword = cpasswordInput.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nombreInput.classList.remove('input-error');
    correoInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    cpasswordInput.classList.remove('input-error');
    document.querySelector('label[for="nombre"]').classList.remove('label-error');
    document.querySelector('label[for="email"]').classList.remove('label-error');
    document.querySelector('label[for="password"]').classList.remove('label-error');
    document.querySelector('label[for="confirmar"]').classList.remove('label-error');

    let hayError = false;

    if (nombre === '') {
        nombreInput.classList.add('input-error');
        document.querySelector('label[for="nombre"]').classList.add('label-error');
        nombreInput.placeholder = "Escribe tu nombre";
        hayError = true;
    }

    if (correo === '' || !emailValido.test(correo)) {
        correoInput.classList.add('input-error');
        document.querySelector('label[for="email"]').classList.add('label-error');
        correoInput.placeholder = "Correo inválido";
        hayError = true;
    }

    if (password === '') {
        passwordInput.classList.add('input-error');
        document.querySelector('label[for="password"]').classList.add('label-error');
        passwordInput.placeholder = "Contraseña inválida";
        hayError = true;
    }
    
    if (cpassword === '' || cpassword !== password) {
        cpasswordInput.classList.add('input-error');
        document.querySelector('label[for="confirmar"]').classList.add('label-error');
        cpasswordInput.placeholder = "Las contraseñas no coinciden";
        hayError = true;
    }
    if (!hayError) {
        window.location.href = 'login.html';
    }
}