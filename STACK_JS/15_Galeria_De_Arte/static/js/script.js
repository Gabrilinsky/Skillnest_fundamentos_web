// 1. Definir los datos de la imagen y texto original y nuevo
const imagenOriginal = "static/images/campo-de-trigo-con-cipreses.png";
const textoOriginal = "Campo de trigo con cipreses, Vicent van Gogh (1889)";

const imagenNueva = "static/images/noche-estrellada-sobre-el-ródano.png";
const textoNuevo = "La noche estrellada sobre el Ródano, Vincent van Gogh (1888)";

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