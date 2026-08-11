let boton = document.getElementById("Iniciar");

boton.addEventListener("click", function () {
    if (this.innerText === "Iniciar Sesión") {
        this.innerText = "Cerrar Sesión";
    } else {
        this.innerText = "Iniciar Sesión";
    }
});



const botones = document.querySelectorAll(".boton1");

botones.forEach((boton) => {
  boton.addEventListener("click", function () {
    const Contar = boton.querySelector("span:first-child");

    let likes = parseInt(Contar.textContent);
    likes += 1;

    Contar.textContent = likes;
  });
}); 