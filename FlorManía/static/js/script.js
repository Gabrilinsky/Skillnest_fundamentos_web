let boton7 = document.getElementById("cambiartexto");

boton7.addEventListener("click", function (){
if (this.innerText === "Envía Flores") {
    this.innerText = "Envía Bouquets";
}else{
    this.innerText = "Envía Flores"
} 
})

function Login() {
        alert(`Bienvenido a la tienda de flores`)
    }
