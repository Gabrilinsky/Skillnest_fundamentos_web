console.log("Conexión exitosa...")
//Función Simple (sin parametros)
function saludar() {
   alert("¡Hola, bienvenido!");
}
saludar(); //ejecución de una función
saludar();
saludar();
// Funcion simple con parametro
//parametro recibe un valor para trabajar la función
//Parametro recibe el tipo de dato al momento de tomar el valor
function Param(nombre) {
   alert("¡Hola, " + nombre + "!");
}
Param("Gabriel");
Param("Jake");

//Función con return

function encontrarmayor(){
function Resultado(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


let numero1 = 10;
let numero2 = 7;
let maximo = Resultado(numero1, numero2);

alert(`El número mayor entre, ${numero1}, y ${numero2},
   el mayor es: ${maximo}`);
}
//Tarea 
// Crea una función que reciba 3 parametros, a,b y c. debe sumar
// Debe sumar

function sumar(a,b,c){
    return a + b - c
}
function Suma(){
let numero1 = parseInt(prompt("Ingrese primer numero"))
let numero2 = parseInt(prompt("Ingrese segundo numero"))
let numero3 = parseInt(prompt("Ingrese tercer numero"))
let Resultado = sumar(numero1, numero2, numero3)

alert(`La operación de ${numero1} + ${numero2} - ${numero3} = ${Resultado}`)
}



/*
Crea una función reciba un parametro y permita a través de un bucle
contar hasta este.
Ej: se recibe el numero 5 y muestra: 1 - 2 - 3 - 4 - 5 
 */


function contar() {
    let limite = parseInt(prompt(`Ingrese el limite del contador`));

    if (limite <= 100) {
        let Resultado = contador(limite);
        alert(Resultado.join(" - "));
    } else {
        alert("Ingrese un valor inferior a 100");
    }
}

function contador(a) {
    let numero = [];
    for (let i = 1; i <= a; i++) {
        numero.push(i);
    }
    return numero;
}