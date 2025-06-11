let formularioActual = 1;

function validarFormulario(event) {
    event.preventDefault();
    
    console.log("Función validarFormulario ejecutada");
    console.log("Formulario actual:", formularioActual);
    
    if (formularioActual === 1) {
        // Validar primer formulario
        const categoria = document.getElementById("categoria");
        const monto1 = document.getElementById("monto1");
        
        console.log("Categoria:", categoria ? categoria.value : "No encontrado");
        console.log("Monto1:", monto1 ? monto1.value : "No encontrado");
        
        if (!categoria || !monto1 || categoria.value.trim() === "" || monto1.value.trim() === "") {
            mostrarNotificacion("Por favor completa todos los campos");
            return;
        }
        
        // Pasar al segundo formulario
        formularioActual = 2;
        document.getElementById("formulario1").classList.remove("activo");
        document.getElementById("formulario2").classList.add("activo");
        document.getElementById("btnGuardar").textContent = "Guardar";
        
        console.log("Cambiando a formulario 2");
        
    } else {
        // Validar segundo formulario
        const metaAhorro = document.getElementById("metaAhorro");
        const monto = document.getElementById("monto");
        
        console.log("MetaAhorro:", metaAhorro ? metaAhorro.value : "No encontrado");
        console.log("Monto:", monto ? monto.value : "No encontrado");
        
        if (!metaAhorro || !monto || metaAhorro.value.trim() === "" || monto.value.trim() === "") {
            mostrarNotificacion("Por favor completa todos los campos");
            return;
        }
        
        console.log("Formulario válido, intentando redireccionar...");
        mostrarNotificacion("Meta de ahorro creada correctamente", "#4CAF50");
        
        // Probar diferentes formas de redirección
        setTimeout(() => {
            console.log("Ejecutando redirección...");
            
            // Prueba estas opciones una por una:
            
            // Opción 1: Misma carpeta
            window.location.href = "metas_de_ahorro.html";
            
            // Si no funciona, comenta la línea anterior y descomenta esta:
            // window.location.replace("metas_de_ahorro.html");
            
            // Si no funciona, comenta las anteriores y descomenta esta:
            // window.location = "metas_de_ahorro.html";
            
        }, 2000);
    }
}

function mostrarNotificacion(mensaje, color = "#f44336") {
    const notificacion = document.getElementById("notificacion");
    notificacion.innerText = mensaje;
    notificacion.style.backgroundColor = color;
    notificacion.classList.add("mostrar");

    setTimeout(() => {
        notificacion.classList.remove("mostrar");
    }, 1500);
}

// Inicializar cuando cargue la página
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada");
    formularioActual = 1;
});