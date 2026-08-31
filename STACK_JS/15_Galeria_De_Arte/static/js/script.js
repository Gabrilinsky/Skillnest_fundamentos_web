// 1. Guardar las rutas de las imágenes en variables
const imagenOriginal = "static/images/campo-de-trigo-con-cipreses.png";
const imagenNueva = "static/images/noche-estrellada-sobre-el-ródano.png"; // <-- Ajusta el nombre de tu segunda imagen

// 2. Seleccionar la imagen por el ID "Pintura" definido en tu HTML
const pintura = document.getElementById("Pintura");

// 3. Cambiar la imagen al pasar el cursor sobre ella
pintura.addEventListener("mouseenter", () => {
  pintura.src = imagenNueva;
});

// 4. Restaurar la imagen original al quitar el cursor
pintura.addEventListener("mouseleave", () => {
  pintura.src = imagenOriginal;
});