// Crear un programa que tenga un dinero inicial
// El programa también deberá contar con un menú con las siguientes opciones:
// EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
// DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
// CONSULTAR SALDO: debe mostrar el saldo actual
// VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:
//  ULTIMOS MOVIMIENTOS
//  - Depositado: $550
//  - Extraido: $1000
//  - Consultado saldo: $3400
//  - Depositado: $100



const dineroInicial = 8325;
let operaciones =prompt("Ud puede: \n-Extraer dinero \n-Depositar \n-Consultar saldo \n-Ver últimos movimientos");
let saldo ="";
let extraccion ="";
let mensaje = `\nDesea realizar otra operación \n Ud puede: \n-Extraer dinero \n-Depositar \n-Consultar saldo \n-Ver últimos movimientos \n-Salir`

let deposito ="";

while (operaciones !== "salir") {
if ("extraer") {
        extraccion = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea extraer?`));
        saldo = dineroInicial -extraccion;
        operaciones = prompt(`Operación exitosa. Su saldo actual es $${saldo} ` + mensaje);
}
    else if ("depositar") {
        deposito = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea depositar?`));
        saldo = dineroInicial + deposito;
        operaciones = prompt(`Operación exitosa. Su saldo actual es $${saldo} ` + mensaje);
}

    if ("últimos movimientos") {
        alert(`Tus movimientos fueron: ${movimientos} bla bla bla`);
        operaciones = prompt(mensaje);
     }
    else if("saldo") {
        alert(`Tu saldo actual es $${dineroInicial}`)
        operaciones= prompt(mensaje);   
    }
}

alert("Muchas gracias por confiar en nuestros servicios") //MENSAJE DE SALIDA




// const dineroInicial = 8325; // dinero inicial
// let operaciones = prompt("Ud puede: \n-Extraer dinero \n-Depositar \n-Consultar saldo \n-Ver últimos movimientos");
// //Menú de opciones
// let movimientos = "extraer" || "depositar" || "últimos movimientos" || "consultar saldo" ;
// let mensaje = `\nDesea realizar otra operación \n Ud puede: \n-Extraer dinero \n-Depositar \n-Consultar saldo \n-Ver últimos movimientos \n-Salir`
// let taeras ="";

// while (operaciones !== "salir") {
//     // operaciones++;
//     // movimientos++;
//     if (operaciones === "extraer")  { //EXTRAER
//         operaciones++;
//         movimientos++;
//         extraccion = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea extraer?`));
//         saldo = dineroInicial -extraccion;
//         operaciones= prompt(`Operación exitosa. \nSu saldo actual es $${saldo}. ` + mensaje);
// }
//     if (operaciones ==="depositar" ) { //DEPOSITAR
//         deposito = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea depositar?`));
//         saldo = dineroInicial + deposito;
//         operaciones = prompt(`Operación exitosa. Su saldo actual es $${saldo} ` + mensaje);
// }
//     if (operaciones === "consultar saldo") { //CONSULTAR SALDO
//         operaciones =prompt(`Su saldo actual es $${dineroInicial}. ` + mensaje);    
// }
//     if (operaciones === "últimos movimientos") { //ÚLTIMOS MOVIMIENTOS
//         operaciones = prompt(`Tus movimientos fueron: \nDepositaste $2500 \nExtrajiste $1800 \nSaldo: ${dineroInicial} ` + mensaje)
//     }     
//     if (operaciones !== movimientos) { // opción p cdo las operaciones fueron ingresada incorrectamente. 
//         operaciones = prompt(`Intrucción ingresada incorrectamente, intente nuevamente ` + mensaje)
//     }
// }
// alert("Muchas gracias por confiar en nuestros servicios") //MENSAJE DE SALIDA
