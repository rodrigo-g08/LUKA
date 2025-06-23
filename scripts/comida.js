document.addEventListener("DOMContentLoaded", () => {
  const abrirFormularioBtn = document.getElementById("abrirFormulario");
  const cerrarFormularioBtn = document.getElementById("cerrarFormulario");
  const formularioGasto = document.getElementById("formularioGasto");
  const gastoForm = document.getElementById("gastoForm");
  const listaRegistros = document.querySelector(".registros ul");
  const totalElemento = document.querySelector(".total");

  let total = 50.50; // Total inicial mostrado

  // Mostrar el formulario
  abrirFormularioBtn.addEventListener("click", () => {
    formularioGasto.style.display = "flex";
  });

  // Cerrar el formulario con la "X"
  cerrarFormularioBtn.addEventListener("click", () => {
    formularioGasto.style.display = "none";
  });

  // Registrar gasto
  gastoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const monto = parseFloat(document.getElementById("monto").value);
    const fecha = document.getElementById("fecha").value;

    if (isNaN(monto) || !fecha) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate().toString().padStart(2, '0');
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `[D] S/${monto.toFixed(2)} - ${dia}/${mes}`;
    listaRegistros.prepend(nuevoItem);

    total += monto;
    totalElemento.textContent = `Total: S/${total.toFixed(2)}`;

    gastoForm.reset();
    formularioGasto.style.display = "none";
  });
});
