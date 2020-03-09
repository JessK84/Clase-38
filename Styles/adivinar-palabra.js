// Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.





let selectorPalabras = Math.ceil(Math.random() *5); // random de palabras
let ciudad ="";
let nuevaPalabra = "";
let palabra ="";
let acierto ="";
let primeraLetra ="";
let palabraSeparada ="";
let ayuda ="";
// let letras =+;
while(acierto === palabra) {
    // alert(`Tu palabra es ${selectorPalabras}`);
    if (selectorPalabras === 1) {
        palabra ="Ottawa"
        ciudad =prompt(`Tu ciudad pertenece a Canadá, adiviná cuál es. Ingresa la palabra`)
        // console.log(palabraSeparada)
}       if (ciudad === "Ottawa") {
            acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)     
            nuevaPalabra =palabra.split("");      
        } else if  (ciudad !== "Ottawa"){      
           for (let i = 0; i <nuevaPalabra.length; i++) {
               palabraSeparada = nuevaPalabra.shift();
               ayuda = (`La primera letra comienza con ${nuevaPalabra}`)
               ayuda++;
           }
    }
     
    if (selectorPalabras === 2) {
        ciudad =prompt(`Tu ciudad pertenece a Canadá, adiviná cuál es. Ingresa la palabra`)
        nuevaPalabra = palabra.split()
        if (ciudad === "Toronto"){
            acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)
        } else  {
        // palabraSeparada+=letra ;
            palabraSeparada += prompt(`La primera letra es`)
        } 
    } 
    if (selectorPalabras === 3) {
        ciudad =prompt(`Tu ciudad pertenece a Estdos Unidos, adiviná cuál es. Ingresa la palabra`);
        
        if  (ciudad ==="California"){
            acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)
        } else if (ciudad !== "California"){
            nuevaPalabra = ciudad.split()
            palabraSeparada += prompt(`Errasta, te doy una ayuda, la primera letra es` + nuevaPalabra.pop() )
        }

    } 
    if (selectorPalabras === 4) {
        ciudad =prompt(`Tu ciudad pertenece a México, adiviná cuál es.  Ingresa la palabra`)
        nuevaPalabra = palabra.split()
    }   if (ciudad !=="Tijuana") {
        acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)
    }
        else if (ciudad==="Tijuana")  {
        acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)
    }

    if (selectorPalabras === 5) {
         ciudad =prompt(`Tu ciudad pertenece a Argentina, adiviná cuál es. Ingresa la palabra`)
        
    }   if  (ciudad ==="Posadas"){
            acierto = alert(`La ciudad es ${ciudad}, Ganaste!`)
        } else {
            nuevaPalabra = palabra.split("");
            // palabraSeparada+=letra ;
            palabraSeparada += prompt(`La primera letra es`)
        }
}

