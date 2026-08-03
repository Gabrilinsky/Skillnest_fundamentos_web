document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
   let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;
}

document.getElementById("color").addEventListener("click", function () {
   cambiarColor();
});

function cambiarColor() {
   let colores = ["#00f74a", "#3ff0b5", "#0339e9", "#f1134a", "#ff09c1", "#a60dff"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;
}


document.getElementById("Button").addEventListener("click", function () {
   cambiarColor();
});

function cambiarColor() {
   let colores = ["#f30000", "#03f123", "#d3f800", "#00aaf8a8", "#ff0062", "#f84802"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;
}