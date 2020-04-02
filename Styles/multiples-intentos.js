// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.



const user = "Jess2020";
const password = "Ada2020";
let usuarioIngresado ="";
let passwordIngresado ="";
let intentos =0;

while(intentos <=3 )&& //condición de salida, que los intentos sean hasta 3 o acierte user y password
    (usuarioIngresado !== user ||
    passwordIngresado !== password)) {
    intentos ++;
    usuarioIngresado = prompt("Ingrese usuario");
    passwordIngresado = prompt("Ingrese contraseña");
}
if (usuarioIngresado === user && passwordIngresado === password) {
    alert("Ingreso exitoso")
} else {
    alert("Usuario o contraseña incorrecta, intente nuevamente en 20 minutos")
}





