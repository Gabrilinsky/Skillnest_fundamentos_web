console.log("Conexión con js...")
//# 🍔 Método en una hamburguesa

//javascript
let hamburguesaEspecial = {

    pan:"Pan brioche",

    carne:"Pollo crujiente",

    queso:"Suizo",

    extras:[

        "Lechuga",

        "Pepinos",

        "Miel"

    ],

    mostrarIngredientes:function(){

        alert(`Pan: ${this.pan}`);

        alert(`Carne: ${this.carne}`);

        alert(`Queso: ${this.queso}`)

        alert(`Extras: ${this.extras.join(", ")}`);

    }

};


//Acceder al pan
alert(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();

//Objeto con metodo automovil
let automovil ={

    auto:"Honda civic",

    modelo: "EJ1 Coupé (1993)",

    Motor: "Spoon Engines",

    Turbo: "T66 Turbo",

    OxidoNitroso: "NOS",
    
    Escape: "Motec system exhaust",

    extras:[

    "Wings West",

    "Aleron aluminio estilo R33 GT-R",

    "Neon de bajo de los chasis color verde fosforescente",

    "Llantas Axis Se7ven de 17 o 18 pulgadas",

    "Suspensión TEIN Flex Z / Street Advance Z"
    ],


    piezasdeauto: function(){

alert(`Auto: ${this.auto}
Motor: ${this.Motor}
Modelo: ${this.modelo}
Turbo: ${this.Turbo}
Oxido De Nitroso: ${this.OxidoNitroso}
Escape: ${this.Escape}
Extras: ${this.extras.join("\n")}`);


        
    }
};

        automovil.piezasdeauto()

        //objeto de una casa

        let casa ={

            Habitación:"5",
            Baño: "3",
            dirección: "Santiago 1420",
        
        mostrarcasa: function(){
        alert(`Habitación: ${this.Habitación}
            Baño:${this.Baño}
            Dirección:${this.dirección}`)
        }

    }









