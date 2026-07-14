// FizzBuzz
// 🎯 Objetivo
// Desarrollar un programa en JavaScript que recorra los números del 1 al 100 y aplique las reglas de FizzBuzz. Con este ejercicio, practicarás bucles, condicionales y operadores aritméticos.
// ❓ ¿Por qué es importante?
// FizzBuzz es un desafío clásico en programación que ayuda a mejorar la lógica de codificación y la capacidad de resolver problemas. Es ampliamente utilizado en entrevistas técnicas y es una excelente manera de practicar:

// 🔁 Bucles for para recorrer un rango de números.
// 🧠 Condicionales if-else para evaluar distintas reglas. 
// ➗ Operadores aritméticos como el módulo (%) para verificar divisibilidad.
// Este ejercicio te ayudará a pensar de manera lógica y mejorar tu habilidad para escribir código limpio y eficiente.

// 📋 Instrucciones 
// 💻 Crea un programa en JavaScript que recorra los números del 1 al 100.
// 📋 Aplica las siguientes reglas dentro del bucle:
// Si un número es divisible por 3, muestra “Fizz”.
// Si un número es divisible por 5, muestra “Buzz”.
// Si un número es divisible por ambos 3 y 5, muestra “FizzBuzz”.
// Si no cumple ninguna de estas condiciones, muestra el número tal cual.
// 🖨️ Imprime los resultados en la consola utilizando console.log().
// 🚫 No uses arrays ni funciones avanzadas, solo lo aprendido hasta ahora: bucles y condicionales.
// 💡 Tips

// 🧪 Usa el operador módulo (%) para verificar si un número es divisible por otro.
// 🔧 Empieza con una estructura básica y luego implementa las condiciones una por una.
// 🔎 Prueba tu código con un rango más pequeño (1 al 20) antes de ejecutarlo con 100 números.
// 📌 Recuerda el orden de las condiciones: Primero verifica si es divisible por ambos números, luego por 3 y 5 individualmente.
// 📬 Lee los mensajes de la consola si algo no funciona como esperabas.
//   📚 Contenidos que estás aplicando

// 🔁 Bucles en JavaScript (for).
// 🧠 Condicionales (if, else if, else) para evaluar múltiples reglas.
// ➗ Operadores aritméticos (% para obtener el residuo de una división).
// 🖥️ Salida de datos en consola (console.log()).
// 🧐 Preguntas y reflexión

// ¿Qué pasa si cambias el orden de las condiciones dentro del if?
// 🎉 Resultado esperado
// Si tu código es correcto, al ejecutarlo deberías ver algo como esto en la consola:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// ...
// Esta asignación te ayudará a mejorar tu lógica y a escribir código más eficiente.

function Practica(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 === 0){
            alert("Fizzbuzz")
        }else if (i % 3 === 0 ){
            alert("Fizz")
        }else if (i % 5 === 0 ){
            alert("Buzz")
        } else {
            alert(i)
        }
    }
}


// 🔢 Contador de interacciones en una app: Imagina que una aplicación registra la cantidad de veces que un usuario interactúa con un botón. Escribe un programa que imprima los números del 1 al 10 para simular las interacciones de un usuario. Ejemplo de salida esperada:

// Interacción 1
// Interacción 2
// ...
// Interacción 10​​
function Interacción(){
for (let i = 1; i <= 10; i++) {
    alert("Interacción" + i )
} 
}

// ⏳ Simular una barra de carga: Crea un programa que simule una barra de carga mostrando porcentajes de progreso del 0% al 100% en incrementos de 10. Ejemplo de salida esperada:
// Cargando... 0%
// Cargando... 10%
// ...
// Cargando... 100%
// Carga completa.​

function Gamer(){
    alert("Iniciando simulación...")
for (let i = 1; i <= 100; i += 10) {
    alert("Cargando..." + i + "%")
} 
alert("Carga completa.")
}

// 🛍️ Simulación de descuento progresivo en una tienda: Una tienda en línea ofrece un descuento progresivo en una promoción especial. El primer producto tiene un 5% de descuento, el segundo un 10%, el tercero un 15%, y así sucesivamente hasta el quinto producto con un 25%. Escribe un programa que calcule y muestre los descuentos aplicados a cada producto. Ejemplo de salida esperada:
// Producto 1 - Descuento aplicado: 5%
// Producto 2 - Descuento aplicado: 10%
// Producto 3 - Descuento aplicado: 15%
// Producto 4 - Descuento aplicado: 20%
// Producto 5 - Descuento aplicado: 25%​​

function Descuento(){
for (let i = 1; i <= 5; i++) {
    let descuento = i * 5
    alert("Producto " + i + " - Descuento aplicado: " + descuento + "%")
} 
}

// 🎮 Calcular el total de puntos en un videojuego: Un jugador gana 50 puntos cada vez que completa un nivel. Escribe un programa que calcule la puntuación total después de 5 niveles usando un bucle. Ejemplo de salida esperada:
// Puntos acumulados: 250​
function Puntaje() {
    let puntosAcumulados = 0; 

    for (let nivel = 1; nivel <= 5; nivel++) { 
        puntosAcumulados += 50;
        alert("Nivel " + nivel + " completado. Puntos actuales: " + puntosAcumulados);
    }


    alert("Puntos acumulados totales: " + puntosAcumulados);
}

// 🔔 Contador de notificaciones en una app: Imagina que una aplicación de mensajería muestra un contador de notificaciones pendientes. Escribe un programa que muestre un mensaje con la cantidad de notificaciones pendientes y las marque como leídas una por una hasta llegar a 0. Ejemplo de salida esperada:
// Tienes 5 notificaciones nuevas.
// Tienes 4 notificaciones nuevas.
// ...
// Tienes 1 notificación nueva.
// No tienes notificaciones pendientes.

function gestionarNotificaciones() {
    let notificaciones = 5; 

    while (notificaciones > 0) {
        if (notificaciones === 1) {
            alert("Tienes 1 notificación nueva.");
        } else {
            alert("Tienes " + notificaciones + " notificaciones nuevas.");
        }
        
        notificaciones--; 
    }

    
    alert("No tienes notificaciones pendientes.");
}

