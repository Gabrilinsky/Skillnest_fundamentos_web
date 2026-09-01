let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es: ${title.textContent}`)

let parrafo = document.querySelector("p");
console.log(parrafo); 

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

let texto = document.querySelector(".texto");
console.log(texto.textContent); // "Este es el primer párrafo.


let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}


//Tarea
/* Crear un boton y aplicar condicion al igual que ejemplo
Debe cambiar su texto al momento de hacerle click
Debe activarse un hover js cambiando el color de fondo */



const botonCambio = document.q