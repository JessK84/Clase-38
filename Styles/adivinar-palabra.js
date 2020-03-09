// Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.




let palabra ="";
let selectorPalabras = Math.ceil(Math.random() *3); // random de palabras
if (selectorPalabras === 1) {
    palabra ="Ottawa"
} else if (selectorPalabras === 2) {
    palabra = "Toronto";
} else if (selectorPalabras === 3) {
    palabra = "Montreal";
}

let ciudad ="";
let ayuda="";

while(ciudad !== palabra) {
        ciudad =prompt(`Ingresá una ciudad de Canadá`)   
        if  (palabra !== ciudad){   
            // alert(`La primera letra comienza con ${palabra[0]}`);     
            ciudad += prompt(`Las siguientes letras son  ${palabra[0]}.¿ Ya sabés cuál es?`)
        }  
        
}
alert(`Tu ciudad es ${palabra}. Adivinaste!`)