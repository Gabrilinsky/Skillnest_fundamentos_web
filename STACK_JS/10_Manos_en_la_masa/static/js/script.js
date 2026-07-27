// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

// Ejemplo de objeto

// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:

let sandwich = {
pan: "masa madre",
proteina: "asado",
queso: "queso suizo",
salsas: ["lechuga", "tomates", "salsa de rábano"]
};

console.log(sandwich);
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero, ¿qué pasa si quieres hacer varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una fábrica de sándwiches usando una función que devuelva un objeto:

function sandwichFactory(pan, proteina, queso, salsas) {
let sandwich = {};
sandwich.pan = pan;
sandwich.proteina = proteina;
sandwich.queso = queso;
sandwich.salsas = salsas;
return sandwich;
}

let s1 = sandwichFactory(
"trigo",
"pavo",
"provolone",
["mostaza", "cebolla frita", "rúcula"],
);
console.log(s1);


//Pizza 
function fabricaDePizzas(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pizzaTodaslascarnes = fabricaDePizzas(
    "tradicional",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha","carne italiana"]
);

let pizzavegetal = fabricaDePizzas(
    "lanzada a mano",
    "tradicional",
    ["mozzarella"],
    ["champiñones", "aceitunas", "cebolla", "Pimenton"]
);

let pizzapollo = fabricaDePizzas(
    "tradicional",
    "tradicional",
    ["mozzarella"],
    ["pollo", "tomate", "orégano", "aceituna"]
);

let pizzaHawaiana = fabricaDePizzas(
    "tradicional",
    "tradicional",
    ["mozzarella"],
    ["jamón", "piña"]
);

function TodaslasCarnes() {
    alert("Corteza: " + pizzaTodaslascarnes.corteza);
    alert("Salsa: " + pizzaTodaslascarnes.salsa);
    alert("Quesos: " + pizzaTodaslascarnes.quesos.join(", "));
    alert("Ingredientes: " + pizzaTodaslascarnes.ingredientes.join(", "));
}

function mostrarPizzavegetal() {
    alert("Corteza: " + pizzavegetal.corteza);
    alert("Salsa: " + pizzavegetal.salsa);
    alert("Quesos: " + pizzavegetal.quesos.join(", "));
    alert("Ingredientes: " + pizzavegetal.ingredientes.join(", "));
}

function mostrarPizzaPollo() {
    alert("Corteza: " + pizzapollo.corteza);
    alert("Salsa: " + pizzapollo.salsa);
    alert("Quesos: " + pizzapollo.quesos.join(", "));
    alert("Ingredientes: " + pizzapollo.ingredientes.join(", "));
}

function mostrarPizzaHawaiana() {
    alert("Corteza: " + pizzaHawaiana.corteza);
    alert("Salsa: " + pizzaHawaiana.salsa);
    alert("Quesos: " + pizzaHawaiana.quesos.join(", "));
    alert("Ingredientes: " + pizzaHawaiana.ingredientes.join(", "));
}
