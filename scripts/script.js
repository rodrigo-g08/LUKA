let elemento =null;
let liActual = null;

function eliminarGasto(event){
document.getElementById("modal").style.display = "block";
elemento = event.currentTarget.closest("li");
}

function editarGasto(event){
document.getElementById("modal-editar").style.display = "block";
elemento = event.currentTarget.closest("li");
}

function confirmarEliminacion(mesage){
    const notification = document.getElementById("notificacion");
    if(elemento){
    elemento.remove();
    elemento=null;
    notification.textContent = mesage;
    notification.classList.add("mostrar");
    }

    cerrarModal();
    setTimeout(() => {
        notification.classList.remove("mostrar");
    }, 1200);
}

function cerrarModal(){
 document.getElementById("modal").style.display = "none";
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

function activarBoton(elemento1,elemento2,elemento3,elemento4) {
    const boton1 = document.getElementById(elemento1);
    const boton2 = document.getElementById(elemento2);
    const form1 = document.getElementById(elemento3);
    const form2 = document.getElementById(elemento4);

    boton1.classList.add('activo');
    form1.classList.add('activo');
    boton2.classList.remove('activo');
    form2.classList.remove('activo');

}

function activarBoton2(elemento1,elemento2,elemento3,elemento4,elemento5,elemento6) {
    const boton1 = document.getElementById(elemento1);
    const boton2 = document.getElementById(elemento2);
    const boton3 = document.getElementById(elemento3);
    const form1 = document.getElementById(elemento4);
    const form2 = document.getElementById(elemento5);
    const form3 = document.getElementById(elemento6);

    boton1.classList.add('activo');
    form1.classList.add('activo');
    boton2.classList.remove('activo');
    form2.classList.remove('activo');
    boton3.classList.remove('activo');
    form3.classList.remove('activo');

}


function mostrarNotificacion2(event, mesage){
    event.preventDefault();

    const notification = document.getElementById("notificacion");
    notification.textContent = mesage;
    notification.classList.add("mostrar");

    setTimeout(() => {
        notification.classList.remove("mostrar");
        window.location.href = "metas_de_ahorro.html";
    }, 1200);
}

function mostrarNotificacion3(event, mesage){
    event.preventDefault();

    const notification = document.getElementById("notificacion");
    notification.textContent = mesage;
    notification.classList.add("mostrar");

    setTimeout(() => {
        notification.classList.remove("mostrar");
        window.location.href = "categorias.html";
    }, 1200);
}

function mostrarNotificacion4(event, mesage){
    event.preventDefault();

    const notification = document.getElementById("notificacion");
    notification.textContent = mesage;
    notification.classList.add("mostrar");

    setTimeout(() => {
        notification.classList.remove("mostrar");
        window.location.href = "metas_de_ahorro.html";
    }, 1200);
}

function abrirEditor(event, btn) {
  event.preventDefault(); // evita que el <a href="#"> recargue la página
  liActual = btn.closest('li'); // busca el <li> más cercano a ese botón (es el que contiene el texto a editar)

  // Extrae texto de la transacción
  const texto = liActual.textContent;

  // Busca monto (ej: S/100.50)
  const montoMatch = texto.match(/S\/(\d+(\.\d+)?)/);

  // Busca fecha (ej: 20/5)
  const fechaMatch = texto.match(/(\d{1,2}\/\d{1,2})/);

  // Si encontró monto y fecha, los coloca en los inputs del modal
  if (montoMatch && fechaMatch) {
    document.getElementById('monto-edit').value = parseFloat(montoMatch[1]);
    document.getElementById('fecha-edit').value = fechaMatch[1];
  }

  // Muestra el modal
  document.getElementById('modal-editar').style.display = 'block';
}

function cerrarEditor() {
  document.getElementById('modal-editar').style.display = 'none';
}

function guardarEdicion() {
  const nuevoMonto = parseFloat(document.getElementById('monto-edit').value).toFixed(2);
  const nuevaFecha = document.getElementById('fecha-edit').value;

  if (liActual) {
    let texto = liActual.innerHTML;

    // Reemplaza el monto anterior por el nuevo
    texto = texto.replace(/S\/\d+(\.\d+)?/, `S/${nuevoMonto}`);

    // Reemplaza la fecha anterior por la nueva
    texto = texto.replace(/\d{1,2}\/\d{1,2}/, nuevaFecha);

    // Actualiza el contenido del li
    liActual.innerHTML = texto;

  }

  cerrarEditor(); // oculta el modal
}

const ctx1 = document.getElementById('graficoIngresosGastos');


//Tabla Ingresos vs Gastos
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'],
        datasets: [{
            label: 'Ingresos',
            data: [70, 90, 40, 80, 65, 85, 110],
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: '#27355F',
            borderWidth: 1,

        }, {
            label: 'Gastos',
            data: [60, 55, 110, 35, 55, 70, 60],
            backgroundColor: '#d4c44f',
            borderColor: '#27355F',
            borderWidth: 1,

        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#27355F',
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            },
            title: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {color: '#27355F',font: { size: 14,family: 'Poppins'}},
                grid: {
                    color: 'rgba(0, 0, 0, 0.2)'
                }
            },
            x: {
                ticks: { color: '#27355F',  font: {size: 14,family:'Poppins'}},
                grid: {
                    color: 'rgba(0, 0, 0, 0.2)'
                }
            }
        }



    }
});


const ctx2 = document.getElementById('miGraficoPastel').getContext('2d');

const miGrafico = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Comida', 'Entretenimiento','Transporte','Renta','Compras','Otros'],
    datasets: [{
      label: 'Distribución de movimientos',
      data: [103, 90, 70, 45, 29, 25], // VALORES REALES
      backgroundColor: [
        'rgba(39, 53, 95, 0.7)',
        'rgba(49, 66, 125, 0.7)',
        'rgba(60, 90, 160, 0.7)',
        'rgba(100, 130, 190, 0.7)',
        'rgba(140, 170, 210, 0.7)',
        'rgba(180, 210, 235, 0.7)'
      ],
      borderColor: [
        'rgba(39, 53, 95, 1)',
        'rgba(49, 66, 125, 1)',
        'rgba(60, 90, 160, 1)',
        'rgba(100, 130, 190, 1)',
        'rgba(140, 170, 210, 1)',
        'rgba(180, 210, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins'
          },
          color: '#27355F'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw;
            return `${label}: S/${value}`;
          }
        }
      }
    }
  }
});
