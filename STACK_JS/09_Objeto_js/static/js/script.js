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

        alert("Pan:",this.pan);

        alert("Carne:",this.carne);

        alert("Queso:",this.queso);

        alert(

            "Extras:",

            this.extras.join(", ")

        );

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

        alert("auto:", this.auto)

        alert("modelo:", this.modelo)

        alert("Motor:",this.Motor)

        alert("turbo:",this.Turbo)

        alert("Oxido De Nitroso",this.OxidoNitroso)

        alert("Escape:",this.Escape)

        alert("Extras:",this.extras.join("\n"));

        
    }
};

alert(automovil.modelo)
        automovil.piezasdeauto()











