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
*/
const button = document.getElementById("Boton")

button.addEventListener("mouseover", function (){
   console.log("El ratón está sobre el botón")
   button.style.backgroundColor = "blue";
})

button.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   button.style.backgroundColor = "red";

});

button.addEventListener("click", function () {
    if (this.innerText === "Pasa el cursor sobre mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Pasa el cursor sobre mí";
    }
});


const botones = document.getElementById("Mi")
