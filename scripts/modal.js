var modal = document.getElementById("myModal");
var abrirModal = document.querySelectorAll(".abrir-modal");
var cerrarModal = document.querySelector(".close");
var iframe = document.getElementById("modal-iframe");

abrirModal.forEach(function (link) {
  link.onclick = function (event) {
    event.preventDefault();
    var urlDestino = link.getAttribute("data-url");
    iframe.src = urlDestino;
    modal.style.display = "block";
  };
});

cerrarModal.onclick = function () {
  modal.style.display = "none";
  iframe.src = "";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};
