// 1. Definir los datos de la imagen y texto original y nuevo
const imagenOriginal = "static/images/Denji.jpg";
const textoOriginal = "Denji";

const imagenNueva = "static/images/Chainsawman.jpg";
const textoNuevo = "Chainsaw Man";

// 2. Seleccionar los elementos mediante sus IDs
const pintura = document.getElementById("Pintura");
const texto = document.getElementById("Texto");

// 3. Cambiar imagen y texto al pasar el cursor (hover)
pintura.addEventListener("mouseenter", () => {
  pintura.src = imagenNueva;
  texto.textContent = textoNuevo;
});

// 4. Restaurar la imagen y texto original al quitar el cursor
pintura.addEventListener("mouseleave", () => {
  pintura.src = imagenOriginal;
  texto.textContent = textoOriginal;
});