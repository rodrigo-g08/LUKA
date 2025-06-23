let elemento =null;

function eliminarGasto(event){
document.getElementById("modal").style.display = "block";
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


const ctx = document.getElementById('graficoIngresosGastos');


//Tabla Ingresos vs Gastos
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'],
        datasets: [{
            label: 'Ingresos',
            data: [70, 90, 40, 80, 65, 85, 110],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'white',
            borderWidth: 1,

        }, {
            label: 'Gastos',
            data: [60, 55, 110, 35, 55, 70, 60],
            backgroundColor: '#d4c44f',
            borderColor: 'white',
            borderWidth: 1,

        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    font: {
                        size: 14
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
                ticks: {color: 'white',font: { size: 14,family: 'Poppins'}},
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            x: {
                ticks: { color: 'white',  font: {size: 14,family:'Poppins'}},
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        }



    }
});


//Tabla Gastos del Mes

const grid = document.getElementById('grid-dias');
const totalDias = 196;
const nivelesColor = [
  '#ffffff',     
  '#c4b885',     
  '#b0a14d',     
  '#88762c',     
  '#5f521c'      
];

for(let i=0; i< totalDias; i++){
    const dia = document.createElement('div');
    dia.classList.add('dia');

    const nivel = Math.floor(Math.random()*nivelesColor.length);
    dia.style.backgroundColor = nivelesColor[nivel];

    grid.appendChild(dia);
}
