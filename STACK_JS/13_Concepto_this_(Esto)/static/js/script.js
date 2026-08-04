//Código en JavaScript

// Seleccionamos el botón por su id
   let boton = document.getElementById("cambiarTexto");
boton.addEventListener("click", function () {
this.innerText = "Texto Cambiado"
});


 let boton2 = document.getElementById("cambiarTexto2");
boton2.addEventListener("click", function () {
this.innerText = " Segundo Texto Cambiado"
});


let boton3 = document.getElementById("cambiarTexto3");
boton3.addEventListener("click", function () {
this.innerText = " Tercer Texto Cambiado"
});