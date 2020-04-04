// El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. 
// El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. 

// secuencia de colores // Los colores posibles son: rojo, azul, verde y amarillo. 
const colores = ["rojo", "azul", "verde", "amarillo"]

let comoQuiereJugar=prompt
(`¿Cómo querés jugar?
1- SUPERVIVENCIA
2- CLÁSICO`)

let rondas=0;
let usuarioDice="";
let simonDice=[]; //porque hay que pushear los colores a un arr vacío
let usuarioGano="";

// el juego continúa hasta que erra la secuencia y muestra cantidad de rondas que sobrevivió
if(comoQuiereJugar==="1"){
  let usuario=true;
  while(usuario){ 
    let selectorColores = colores[Math.round(Math.random() * (colores.length - 1))]
    simonDice.push(selectorColores)
    alert(`Simón dice: \n${simonDice}`)

      for (let i = 0; i < simonDice.length; i++) {
      usuarioDice=prompt(`Usuario dice: `)
        
      if(simonDice[i]=== usuarioDice){
         
        } else {                  
          usuario=false;
      }  
    }
    rondas++
  } 
  alert(`Sobreviviste ${rondas} rondas`)
}
  // o  o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia
  else if (comoQuiereJugar === "2") {
    let cantidadRondas=Number(prompt(`¿Cuántas rondas querés jugar?`));
    let usuario=true;
    while(cantidadRondas!==0 && usuario){ 
      let selectorColores = colores[Math.round(Math.random() * (colores.length - 1))]
      simonDice.push(selectorColores)
      alert(`Simón dice: \n${simonDice}`)

      for (let i = 0; i < simonDice.length; i++) {
        usuarioDice=prompt(`Usuario dice: `)

        if(simonDice[i]=== usuarioDice){
         
      } else {  
        alert(`Perdiste, faltando jugar ${cantidadRondas} rondas`)
        cantidadRondas=0;
        usuario=false
      }
    }
    cantidadRondas-- 
    if (cantidadRondas===0){
    alert(`Excelente, completaste el juego`)
    } 
  }
 
}else {
    alert(`Elija una opción válida`)
  }





 
  
  
  
   

  
