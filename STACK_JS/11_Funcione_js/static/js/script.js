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