// 1. Definir los datos de la imagen y texto
const imagenOriginal = "static/images/Denji.jpg";
const textoOriginal = "Denji";

const imagenNueva = "static/images/Chainsawman.jpg";
const textoNuevo = "Chainsaw Man";

// Esperar a que el DOM esté cargado para evitar errores de selección
document.addEventListener("DOMContentLoaded", function () {

  // 2. Seleccionar la imagen por su clase y el texto por su ID
  const pintura = document.querySelector(".perfil");
  const texto = document.getElementById("Texto");

  // 3. Cambiar imagen y texto al pasar el cursor (hover)
  if (pintura && texto) {
    pintura.addEventListener("mouseenter", () => {
      pintura.src = imagenNueva;
      texto.textContent = textoNuevo;
    });

    pintura.addEventListener("mouseleave", () => {
      pintura.src = imagenOriginal;
      texto.textContent = textoOriginal;
    });
  }

  // 4. Lógica para el contador de likes
  const botones = document.querySelectorAll(".boton");

  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      // Busca el span hermano dentro del mismo contenedor .like
      const contenedorLike = boton.closest(".like");
      const contador = contenedorLike.querySelector(".likes");

      let likes = parseInt(contador.textContent, 10) || 0;
      likes += 1;

      // Mantiene la estructura del texto "X Like(s)"
      contador.textContent = `${likes} Like(s)`;
    });
  });

});