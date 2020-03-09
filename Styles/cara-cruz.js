// Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.
  
let jugador = prompt(`Vamos a comenzar a jugar.\n Tenés que elegir: cara o cruz`);
let computadora ="";
let numeroMayor=0;
let rondas=0;

while (jugador !== "salir") { 
        let caraCruz = Math.ceil(Math.random() *2); // random de palabras
    if (caraCruz === 1) {
        computadora ="cara"
    } else if (caraCruz === 2) {
        computadora = "cruz";
    }
    if (jugador === computadora) {
        rondas++;
        jugador = prompt(`Acertaste!!! llevas en total ${rondas} rondas ganadas\nElegí: cara o cruz?`);
    } else if (jugador !== computadora) {
        rondas=0;
        jugador = prompt(`Erraste!!! Estás en ${rondas}.\n Podés elegír: cara o cruz\nO salir del programa`);
    } 
    if (rondas >numeroMayor) {
        numeroMayor= rondas;
    } else if (jugador=== "salir"){
        alert(`La mayor cantidad de veces que ganaste es: ${numeroMayor}
        Adios`);
    }
}
























