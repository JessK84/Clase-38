// Crear un programa que tenga un dinero inicial
// El programa también deberá contar con un menú con las siguientes opciones:
// EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al dineroInicial actual, restar el dinero extraído al dineroInicial
// DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al dineroInicial actual
// CONSULTAR dineroInicial: debe mostrar el dineroInicial actual
// VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR dineroInicial deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:
//  ULTIMOS MOVIMIENTOS
//  - Depositado: $550
//  - Extraido: $1000
//  - Consultado saldo: $3400
//  - Depositado: $100


let quiereContinuar=true;

let operaciones ="Ud puede: \n1-Extraer dinero \n2-Depositar \n3-Consultar dineroInicial \n4-Ver últimos movimientos \n5-Salir";

let extraerDinero=0;
let depositarDinero=0;
let moviemientos="";
while (quiereContinuar) {
    let acciones=prompt(operaciones)
    let dineroInicial = 8325;
    switch(acciones){
        case "extraer":
        case "1":           
            (dineroInicial+=depositarDinero) && (dineroInicial -=extraerDinero)
            extraerDinero  = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea extraer?`));
            moviemientos+=`Extraer dinero ${extraerDinero}` + `\n`;
            if(dineroInicial>extraerDinero) {
                dineroInicial -= extraerDinero;
                alert(`Operación exitosa. Su saldo actual es $${dineroInicial}`);
            } else {
                dineroInicial = extraerDinero;
                alert(`No dispone de saldo suficiente`);
            }
    break;
        case "2":
        case "depositar":
            (dineroInicial+=depositarDinero) && (dineroInicial -=extraerDinero)
            depositarDinero = Number(prompt(`Dispone de $${dineroInicial} ¿Cuánto dinero desea depositar?`));
            dineroInicial += depositarDinero;
            moviemientos+=`Depositar dinero ${depositarDinero}`+ `\n`;
            alert(`Operación exitosa. Su saldo actual es $${dineroInicial}`);
    break;
        case "3":
        case "consultar saldo":
            (dineroInicial+=depositarDinero) && (dineroInicial-=extraerDinero);
            alert(`Saldo: $${dineroInicial}`);
            moviemientos+=`Consultar saldo ${dineroInicial}`+ `\n`;
    break;
        case "4":
        case "últimos movimientos":
            moviemientos+=`\n` + `-------------`;
            alert(`ÚLTIMOS MOVIMIENTOS:` + `\n` + `${moviemientos}` +`\n`);
    break;
        case "5":
        case "salir":
            quiereContinuar= confirm(`¿Desea continuar?`) 
        
    break;
        default:
            if(operaciones){
            alert("Ingrese una operación válida")
            }
        }
}




