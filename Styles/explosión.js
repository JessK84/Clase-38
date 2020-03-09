// Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo
// ⏱ 3 1 0 2
// ⏱ 2 0 0 1
// ⏱ 1 0 0 0
// 💥💥💥💥💥

let numeros = prompt("Ingrese 4 números");
let serieNumeros = numeros.split(" "); 
let number = Number(serieNumeros[i]);
let index =[""];


while(serieNumeros !== 0){
    index--;
    
  
    serieNumeros[i]-=1;
}
alert(serieNumeros)

