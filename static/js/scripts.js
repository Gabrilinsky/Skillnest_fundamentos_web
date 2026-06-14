console.log("Conexion con js...");


function cambiarArma(nombreClave) {
    // 1. Base de datos con la información de cada arma
    const botonActivoAnterior = document.querySelector(".opcion-arma.activa");
    if (botonActivoAnterior) {
        botonActivoAnterior.classList.remove("activa");
    }
    const baseDatosArmas = {
        malorian: {
            titulo: "MALORIAN ARMS 3516",
            descripcion: "La legendaria pistola personalizada de Johnny Silverhand. Fabricada a medida por Malorian Arms, esta obra de arte de la ingeniería balística ofrece una potencia de fuego devastadora capaz de atravesar coberturas sólidas y un mecanismo de retroceso asistido único en Night City. Sentirás el fuego de un verdadero rockero rebelde en tus manos.",
            imagen: "../images/Malorian.jfif" 
        },
        mantis: {
            titulo: "MANTIS BLADES",
            descripcion: "Las cuchillas Cyberkon NT Mantis son fabricadas por Arasaka. Este implante te permite infligir más daño físico en el combate cuerpo a cuerpo y tiene una probabilidad del 10 al 20 % de aplicar un efecto de sangrado. Al usar las Cuchillas Mantis, puedes saltar hacia los enemigos que estén dentro de tu alcance para causar un daño masivo.",
            imagen: "../images/Mantis.jpg"
        },
        overwatch: {
            titulo: "OVERWATCH SNIPER",
            descripcion: "El rifle de francotirador emblemático de Panam Palmer. Viene equipado con un silenciador integrado personalizado de alta eficiencia que reduce el ruido drásticamente sin sacrificar el alcance ni la potencia devastadora de sus proyectiles perforantes.",
            imagen: "../images/hq720.jpg"
        },
        widowmaker: {
            titulo: "WIDOW MAKER",
            descripcion: "Un rifle de precisión tecnológico modificado. Dispara dos proyectiles cargados de energía electromagnética por cada disparo, capaces de atravesar paredes y electrocutar a múltiples objetivos en cadena si se carga al máximo.",
            imagen: "../images/widowmaker.jpg"
        },
        skippy: {
            titulo: "SKIPPY (PISTOLA INTELIGENTE)",
            descripcion: "Una pistola inteligente Arasaka HJSH-18 Masamune modificada que cuenta con una Inteligencia Artificial integrada y parlante. Te hablará con comentarios sarcásticos y ajustará de forma automática su modo de disparo para buscar tiros a la cabeza.",
            imagen: "../images/masamune.jfif"
        },
        guts: {
            titulo: "GUTS (ESCOPETA DE REBECCA)",
            descripcion: "La mítica escopeta de potencia utilizada por Rebecca en Cyberpunk: Edgerunners. Posee un retroceso brutalmente devastador que te empuja hacia atrás al disparar, pero es capaz de despedazar a cualquier enemigo a corta distancia de un solo cartucho.",
            imagen: "../images/guts.jpg"
        }
    };

    // 2. Obtener los datos del arma seleccionada
    const arma = baseDatosArmas[nombreClave];

    if (arma) {
        document.querySelector(".texto-arma-box h2").textContent = arma.titulo;
        document.querySelector(".texto-arma-box p").textContent = arma.descripcion;
        const elementoImagen = document.querySelector(".imagen-arma-box img");
        elementoImagen.src = arma.imagen;
        elementoImagen.alt = arma.titulo;
    }
}