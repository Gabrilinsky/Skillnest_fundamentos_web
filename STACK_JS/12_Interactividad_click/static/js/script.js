document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColorbody();
});


document.getElementById("button").addEventListener("click", function () {
   cambiarColorcaja2();
});
document.getElementById("color").addEventListener("click", function () {
   cambiarColorcaja1();
});

function cambiarColorbody() {
   let colores = ["#ff3232", "#03f123", "#d3f800", "#00aaf8a8", "#ff0062", "#f84802"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   const elemento = document.querySelector("body");
   elemento.style.backgroundColor = colorAleatorio
}


function cambiarColorcaja1() {
   let colores = ["#ff3232", "#03f123", "#d3f800", "#00aaf8a8", "#ff0062", "#f84802"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   const elemento = document.querySelector("#caja1");
   elemento.style.backgroundColor = colorAleatorio

}
function cambiarColorcaja2() {
   let colores = ["#ff3232", "#03f123", "#d3f800", "#00aaf8a8", "#ff0062", "#f84802"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   const elemento = document.querySelector("#caja2");
   elemento.style.backgroundColor = colorAleatorio
}
