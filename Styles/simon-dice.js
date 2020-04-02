// El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. 

// El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. 


// Hay dos variantes posibles: 

// secuencia de colores // Los colores posibles son: rojo, azul, verde y amarillo. 
const colores = ["rojo", "azul", "verde", "amarillo"]

let comoQuiereJugar=prompt
(`¿Cómo querés jugar?
1- Juegar hasta perder
2- Elegir rondas que desea jugar`)

let rondas=0;
let usuarioDice="";
let simonDice= "";
let cantidadRondas="";

// el juego continúa hasta que erra la secuencia y muestra cantidad de rondas que sobrevivió
if(comoQuiereJugar==="1"){
  let usuario=true;
  while(usuario){ 
    let selectorColores = colores[Math.round(Math.random() * (colores.length - 1))]
    colores.push(simonDice)
    simonDice+=selectorColores;
    alert(`Simón dice: \n${simonDice}`)
    usuarioDice=prompt(`Usuario dice: `)
      if(simonDice=== usuarioDice){
        rondas++
        alert(`Excelente!!! \nLlevás ganando ${rondas} rondas`)
      } else {
        alert(`Perdiste en la ronda ${rondas}`)
        usuario=false;
      }
  }
} else {
    let usuario=true;
    cantidadRondas=Number(prompt(`¿Cuántas rondas querés jugar?`));
    while(usuario && cantidadRondas){ 
      let selectorColores = colores[Math.round(Math.random() * (colores.length - 1))]
      colores.push(simonDice)
      simonDice+=selectorColores;  
      alert(`Simón dice: \n${simonDice}`)
      usuarioDice=prompt(`Usuario dice: `) 
        if(simonDice=== usuarioDice){

          alert(`Excelente!!! \nTe quedan ${cantidadRondas} rondas`)
        } else {
          alert(`No llegaste a cumplir las ${cantidadRondas} rondas`)
          usuario=false;
        }
    }
  }





  // o  o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.
  
  
  
   


