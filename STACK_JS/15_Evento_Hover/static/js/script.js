const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";

});




//Tarea
/*
Crear dos botones con evento onmouseover y onmouseout

- Cambia el texto de un boton
- Cambiar el color de fondo y color de texto del segundo boton
*/const miBoton = document.getElementById("Boton");

// Evento cuando el ratón SE DESLIZA HACIA EL BOTÓN (Entra)
miBoton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   miBoton.style.backgroundColor = "green";
   
   // CAMBIO DE TEXTO: Cambia automáticamente al entrar el cursor
   miBoton.innerText = "¡Texto cambiado!";
});

// Evento cuando el ratón SALE del botón
miBoton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   miBoton.style.backgroundColor = "purple";
   
   
   miBoton.innerText = "Pasa el cursor sobre mí";
});


const Boton = document.getElementById("mi");

// 1. Configuración del texto multicolor automático
const coloresTexto = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F1", "#00FFFF"];
let indiceColor = 0;
let temporizador;

// Función que cambia el color del texto de forma automática
function cambiarColorTexto() {
   Boton.style.color = coloresTexto[indiceColor];
   indiceColor = (indiceColor + 1) % coloresTexto.length;
}

// Iniciar el efecto multicolor del texto desde el principio
temporizador = setInterval(cambiarColorTexto, 500); 

// 2. Evento cuando el ratón ENTRA al botón
Boton.addEventListener("mouseenter", function () { // CORREGIDO: 'mouseenter' evita parpadeos con el texto interno
   console.log("El ratón está sobre el botón");
   
   // Pausamos el multicolor
   clearInterval(temporizador); 
   
   // Cambios visuales al entrar
   Boton.style.backgroundColor = "#E0FF00";
   Boton.style.color = "white"; 
   Boton.textContent = "¡Texto cambiado!"; // OPTIMIZADO: textContent es más rápido y eficiente que innerText
});

// 3. Evento cuando el ratón SALE del botón
Boton.addEventListener("mouseleave", function () { // CORREGIDO: 'mouseleave' asegura que solo se active al salir totalmente del botón
   console.log("El ratón ha salido del botón");
   
   // Cambios visuales al salir
   Boton.style.backgroundColor = "#00F5FF";
   Boton.textContent = "Pasa el cursor sobre mí";
   
   // Primero limpiamos cualquier residuo para evitar que se dupliquen temporizadores
   clearInterval(temporizador);
   // Volvemos a activar el efecto multicolor en el texto
   temporizador = setInterval(cambiarColorTexto, 500); 
});
