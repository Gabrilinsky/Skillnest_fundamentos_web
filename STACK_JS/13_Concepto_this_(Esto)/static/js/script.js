//Código en JavaScript

// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", function () {
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});

 let boton2 = document.getElementById("cambiarTexto2");

boton2.addEventListener("click", function () {
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});

let boton3 = document.getElementById("cambiarTexto3");

boton3.addEventListener("click", function () {
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});