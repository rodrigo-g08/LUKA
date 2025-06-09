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
