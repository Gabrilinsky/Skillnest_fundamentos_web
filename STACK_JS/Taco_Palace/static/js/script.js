
const imagenOriginal = "static/images/comida_mexicana.jpg";
const imagenNueva = "static/images/comida_mexicana2.jpg"; 

// 2. Seleccionar el elemento por su ID
const pintura = document.getElementById("Pintura");

// 3. Cambiar la imagen al pasar el cursor por encima
pintura.addEventListener("mouseenter", () => {
  pintura.src = imagenNueva;
});

// 4. Restaurar la imagen original al quitar el cursor
pintura.addEventListener("mouseleave", () => {
  pintura.src = imagenOriginal;
});
