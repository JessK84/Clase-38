// Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.


let computadora = "";
let numeroMayor = "";
let numeroMenor ="";
let numeroUsuario = Number(prompt("Elija un número entre 1 y 10"));

while (numeroUsuario !== computadora) { // mietras ambos indicadores sean diferentes va a seguir funcionando el programa
    computadora = Math.round(Math.random()*10);// match.ceil porque queremos que comience de 1 y no de 0 a 9.
    computadora ++; // las vueltas que va a ejecutar el programa hasta coincidir con la condición de salida
    if (numeroUsuario < computadora) {
        numeroMayor = prompt(`Tu número es menor, elige otro número`);
    } else if (numeroUsuario > computadora){
        numeroMenor = prompt(`Tu número es mayor, elige otro número`);
    } 
}
alert(`Tu número es ${numeroUsuario} y coincide con el ${computadora} que eligió la computadora`)