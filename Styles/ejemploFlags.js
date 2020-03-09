let numero = 0;
let numeroValido = true; // flag o bandera

while(numeroValido){
    const eleccion = prompt(
        `El número es ${numero}. Qué desea hacer. ¿Sumar/restar? `
    )
const numeroIngresado= Number(prompt("Ingrese el valor"))
if (eleccion=== "sumar") {
    numero+=numeroIngresado;

} else {
    numero-=numeroIngresado;
}
if (numero <-100 || numero>100){
    numeroValido= false; // Condición de la flag, para que se de de baja. En algunos casos se debe declarar arriba, al ppio. 
}
}
alert(`Programa terminado`)