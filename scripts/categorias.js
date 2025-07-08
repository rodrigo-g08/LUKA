    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("cate");

    document.getElementById("titulo-categoria").innerText = `Categorias / ${categoria}`;

const transacciones = {
    "Comida": [
        { monto: 13.40, fecha: '13/5' },
        { monto: 25.00, fecha: '14/5' },
        { monto: 5.20, fecha: '15/5' },
        { monto: 10.00, fecha: '16/5' },
        { monto: 18.50, fecha: '17/5' },
        { monto: 7.90, fecha: '18/5' },
        { monto: 22.10, fecha: '19/5' }
    ],
    "Transporte": [
        { monto: 3.50, fecha: '12/5' },
        { monto: 2.00, fecha: '14/5' },
        { monto: 4.25, fecha: '15/5' },
        { monto: 3.00, fecha: '16/5' },
        { monto: 2.50, fecha: '17/5' },
        { monto: 5.00, fecha: '18/5' }
    ],
    "Servicios": [
        { monto: 60.00, fecha: '1/5' },
        { monto: 45.30, fecha: '5/5' },
        { monto: 78.90, fecha: '10/5' },
        { monto: 32.00, fecha: '15/5' },
        { monto: 58.75, fecha: '20/5' },
        { monto: 47.60, fecha: '25/5' }
    ],
    "Renta": [
        { monto: 350.00, fecha: '1/5' },
        { monto: 350.00, fecha: '1/6' },
        { monto: 350.00, fecha: '1/7' }
    ],
    "Entretenimiento": [
        { monto: 15.00, fecha: '6/5' },
        { monto: 8.50, fecha: '9/5' },
        { monto: 20.00, fecha: '12/5' },
        { monto: 12.75, fecha: '14/5' },
        { monto: 5.00, fecha: '16/5' },
        { monto: 18.90, fecha: '18/5' },
        { monto: 9.40, fecha: '19/5' },
        { monto: 14.20, fecha: '21/5' }
    ],
    "Educación": [
        { monto: 100.00, fecha: '2/5' },
        { monto: 45.00, fecha: '8/5' },
        { monto: 80.00, fecha: '12/5' },
        { monto: 120.50, fecha: '16/5' },
        { monto: 60.00, fecha: '20/5' },
        { monto: 95.25, fecha: '25/5' }
    ],
    "Compras": [
        { monto: 40.00, fecha: '3/5' },
        { monto: 22.90, fecha: '7/5' },
        { monto: 130.00, fecha: '10/5' },
        { monto: 15.75, fecha: '13/5' },
        { monto: 55.20, fecha: '17/5' },
        { monto: 78.60, fecha: '20/5' },
        { monto: 33.80, fecha: '23/5' },
        { monto: 21.00, fecha: '27/5' }
    ]
};

const lista = document.getElementById('ultimos-registros');
const items = transacciones[categoria] || []; // Si no existe, usar array vacío
let total = 0;
// Mostrar transacciones
items.forEach((t,i) => {
    const li = document.createElement('li');
    total = total + t.monto; 
    if (i == 0) {
        li.classList.add('primer'); // Añadir clase 'primer' al primer elemento
    }
    li.innerHTML = `
        <span class="etiqueta">[D]</span>
        S/${t.monto.toFixed(2)} - ${t.fecha}
    `;
    lista.appendChild(li);
});


document.getElementById("total-registro").innerText = total > 0 ? `S/${total.toFixed(2)}` : "S/0.00";


