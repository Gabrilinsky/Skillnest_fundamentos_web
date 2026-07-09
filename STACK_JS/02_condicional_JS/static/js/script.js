console.log("Conexión con js...")
//Ejercicio 1: Calculadora de Envío
//Enunciado
//Una empresa de despacho cobra el envío dependiendo del peso del paquete.

//Solicitar:

//Nombre del cliente
//Peso del paquete (kg)
//Condiciones:

//Hasta 2 kg
//Más de 2 kg y hasta 5 kg
//Más de 5 kg y hasta 10 kg
//Más de 10 kg
//El programa debe indicar:

//Nombre del cliente
//Categoría del envío
//Valor correspondiente al despacho
function Ejercicio1 () {
    let NombreCliente = prompt("Ingresar el nombre del cliente")
    let peso = parseInt(prompt("Ingresar peso de paquete"))
    let valorDespacho = 2000;
    let mensaje = "";
    // condiciones
    if (peso > 0 && peso < 2 ){
        mensaje = `Paqute pesa menos de 2kgs
        \nValor despacho $${valorDespacho * peso}`
    }else if (peso > 2 && peso <= 5) {
        mensaje = `Paqute pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else if (peso > 5 && peso < 10) {
    mensaje = `paquete pesa: ${peso}
    \nvalor despacho $${valorDespacho * peso}`
    }else if (peso > 10 && peso < 50) {
    mensaje = `paquete pesa: ${peso}
    \nvalor despacho $${valorDespacho * peso}`
}
    alert(mensaje);
}







//Ejercicio 2: Acceso a Biblioteca
//Enunciado
//Una biblioteca posee dos tipos de usuarios:

//Estudiante
//Profesor
//Solicitar:

//Tipo de usuario
//Cantidad de libros solicitados
//Condiciones:

//Cada tipo de usuario posee un límite distinto de préstamos.

//El programa debe indicar:

//Si el préstamo está permitido.
//Si supera el límite permitido.
//Mostrar un mensaje diferente según el tipo de usuario.
//Utilizar operadores lógicos para realizar las validaciones.
function Ejercicio2 () {
    let usuario = "Estudiante"
    let usuario2 = "Profesor"
    let CantidadDeLibros = "2"

    let límiteEstudiante = "2"
    let límiteProfesor = "4"

}


//Ejercicio 3: Clasificación Deportiva
//Enunciado
//Solicitar:

//Nombre del participante
//Edad
//Clasificar al participante según su edad.

//Debe existir al menos cuatro categorías distintas.

//Finalmente mostrar:

//Nombre
//Edad
//Categoría asignada
//Ejercicio 4: Sistema de Bonificación
//Enunciado
//Una empresa entrega bonos según los años trabajados.

//Solicitar:

//Nombre del trabajador
//Años de servicio
//Clasificar según distintos rangos de antigüedad.

//Mostrar:

//Nombre
//Nivel de antigüedad
//Mensaje indicando si recibe o no bonificación.
//Ejercicio 5: Evaluación de Velocidad
//Enunciado
//Solicitar:

//Nombre del conductor
//Velocidad registrada
//Condiciones:

//Clasificar la velocidad en distintos rangos.

//Además:

//Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

//Mostrar:

//Nombre del conductor
//Velocidad
//Clasificación obtenida