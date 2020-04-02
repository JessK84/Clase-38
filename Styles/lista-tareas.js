// Crear un programa que tenga un menú con las siguientes opciones:
// AGREGAR TAREA: debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
// MODIFICAR TAREA: debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
// ELIMINAR TAREA: debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
// VER TAREAS: debe listar todas las tareas hasta el momento
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

let quiereContinuar=true;
let operaciones ="Ud puede: \n1-Agregar tareas \n2-Modificar tareas \n3-Eliminar tareas \n4-Ver tareas \n5-Salir";
let tareas=[];
let mensaje=`____________` + `\n`;
let mensajeFalse="";

while (quiereContinuar) {
    let acciones=prompt(operaciones) 

    switch(acciones){
        case "agregar":
        case "1":           
            let agregarTarea = prompt(`Ingrese una tarea`);                      
            tareas.push(agregarTarea)  
            alert(mensaje + `${tareas}` + `\n`)    
    break;
        case "2":
        case "modificar":
            let tareaAModificar = Number(prompt('Ingrese número de tarea a modficar'));
            if (tareas[tareaAModificar]) {
              let modificacion = prompt(`la tarea elegida es ${tareas[tareaAModificar]}. Ingrese la modificación:`);
              tareas[tareaAModificar] = modificacion;
            } else {
              alert('Tarea no encontrada');
            }
            break;;
        case "3":
        case "eliminar":
            let eliminarTarea=Number(prompt(`Ingrese el número de la tarea a eliminar`))
            if(tareas[eliminarTarea]){
                const elimina =confirm(`Acabas de ingresar: ${tareas[eliminarTarea]}\n¿Estas seguro que desea eliminarla?`)
                if(elimina){
                    elimina.splice(eliminarTarea, 1)
                    // alert(`${tareas} se ha eliminado con éxito`)
    
                } else {
                    alert(`Ingrese una opción válida`)
                }
            }           
           
    break;
        case "4":
        case "ver tareas":
            let listaDeTareas = `TAREAS:\n`
            // alert(`ÉSTAS SON LAS TAREAS LISTADAS:` + `\n` + mensaje + `${tareas}` +`\n`);
            // opción que había hecho pero q no podía ordenar en fila. 
            // la de abajo es la sugerida por Pablo, ordena por números las tareas. 
            for (let i = 0; i < tareas.length; i++) {
                listaDeTareas += `[${i}] "${tareas[i]}" \n`;
              }
              alert(listaDeTareas)
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
