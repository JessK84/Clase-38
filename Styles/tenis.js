// Crear un programa para llevar la cuenta del puntaje de un partido de tenis. 
// Debe pedir inicialmente por los nombres de las jugadoras, 
// y luego ir pidiendo el nombre de la ganadora de cada set, 
// y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

const jugadora1 =prompt("Ingrese el nombre de la jugadora 1"); // nombre jugadora 1
const jugadora2 = prompt("Ingrese el nombre de la jugadora 2"); // nombre jugadora 2
let resultadoJugadora1 =0; // resultado jugadora 1, que tiene que llegar máximo a 3
let resultadoJugadora2 =0; // resultado jugadora 2, que tiene que llegar máximo a 3
let set =0; // tiene que llegar a 3 consecutivos para que gane algún jugador. 
const mensaje = "Fin del partido, la ganadora es " ;
// resultado = prompt(`¿Quien ganó el set ${set}? ${jugadora1} o ${jugadora2}`);

while  (set <5 && resultadoJugadora1 !==3 && resultadoJugadora2 !==3 ) { 
// porque si bien tiene que llegar a 3, los set pueden extenderse hasta 5 como máximo
    set++; // incrementa de 1 en 1
    const resultado = prompt(`¿Quien ganó el set ${set}? `);   
    if(resultado === jugadora1) {
        resultadoJugadora1 ++ ;  
        alert(`La jugadora ${jugadora1} suma ${resultadoJugadora1} puntos`);       
    } else if (resultado === jugadora2) {
        resultadoJugadora2++;
        alert(`La jugadora ${jugadora2} suma ${resultadoJugadora2} puntos`)  ;
        }
    }   

let ganadora ="";
if ( resultadoJugadora1 ===3) {
    ganadora =jugadora1;
} else if ( resultadoJugadora2 ===3) {
    ganadora =jugadora2;
}
alert(mensaje + `${ganadora} con 3 puntos`)

// true || false = true
// // jugadora1 = 2
// // jugadora2 = 3

















// if (jugadora1 === 3) {
//     alert(`Ganó la jugadora ${jugadora1}`)
// }   else if (jugadora2 ===3){
//     alert(`Ganó la jugadora ${jugadora2}`)
// }
   