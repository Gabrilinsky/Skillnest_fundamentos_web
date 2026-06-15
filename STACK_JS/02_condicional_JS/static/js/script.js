console.log("Conexión con js...")
// Ejercicio 1: Sistema de descuento
function ejercicio1() {
    let nombre = prompt("Ingrese el nombre del cliente:");
    let monto = parseFloat(prompt("Ingrese el monto de la compra:"));
    
    let descuentoPorcentaje = 0;
    
    if (monto >= 50000) {
        descuentoPorcentaje = 20;
    } else if (monto >= 30000) {
        descuentoPorcentaje = 10;
    } else {
        descuentoPorcentaje = 0;
    }
    
    let descuentoAplicado = monto * (descuentoPorcentaje / 100);
    let totalAPagar = monto - descuentoAplicado;
    
    alert("Cliente: " + nombre + 
    "\nDescuento aplicado: " + descuentoPorcentaje + "% ($" + descuentoAplicado + ")" + 
    "\nTotal a pagar: $" + totalAPagar);
}

// Ejercicio 2: Acceso a evento
function verificarAcceso() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let acompañado = prompt("¿Viene acompañado por un adulto? (si / no)").toLowerCase();
    
    // Usamos el operador lógico OR (||) ya que basta con que cumpla una condición
    if (edad >= 18 || acompañado === "si" || acompañado === "sí") {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

// Ejercicio 3: Clasificación de temperatura
function temperatura() {
    let temperatura = parseFloat(prompt("Ingrese la temperatura actual:"));
    let mensaje = "";
    
    if (temperatura < 10) {
        mensaje = "Hace frío";
    } else if (temperatura >= 10 && temperatura <= 24) {
        mensaje = "Temperatura agradable";
    } else {
        mensaje = "Hace calor";
    }
    
    // Alerta adicional independiente
    if (temperatura > 35) {
        mensaje += "\n⚠️ ¡Alerta!: Temperatura extrema";
    }
    
    alert(mensaje);
}

// Ejercicio 4: Verificación de administrador
function verificarAdministrador() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    
    if (usuario === "admin" && contrasena === "12345") {
        alert("Bienvenido administrador");
    } else if (usuario === "admin" && contrasena !== "12345") {
        alert("Contraseña incorrecta");
    } else {
        alert("Usuario no encontrado");
    }
}

// Ejercicio 5: Sistema de aprobación
function evaluarEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let nota1 = parseFloat(prompt("Ingrese la Nota 1:"));
    let nota2 = parseFloat(prompt("Ingrese la Nota 2:"));
    let nota3 = parseFloat(prompt("Ingrese la Nota 3:"));
    
    let promedio = (nota1 + nota2 + nota3) / 3;
    let resultado = "";
    
    if (promedio >= 6.0) {
        resultado = "Aprobado con excelencia";
    } else if (promedio >= 4.0 && promedio <= 5.9) {
        resultado = "Aprobado";
    } else {
        resultado = "Reprobado";
    }
    
    let mensajeFinal = "Estudiante: " + nombre + "\nPromedio: " + promedio.toFixed(1) + "\nEstado: " + resultado;
    
    // Verificación si alguna nota es menor a 2.0 usando el operador OR (||)
    if (nota1 < 2.0 || nota2 < 2.0 || nota3 < 2.0) {
        mensajeFinal += "\n⚠️ Debe asistir a reforzamiento.";
    }
    
    alert(mensajeFinal);
}