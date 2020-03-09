

let numero =1;
let quiereContinuar = true;

while (quiereContinuar && numero<=5) {
    quiereContinuar = confirm(`El número actual es ${numero}`);
    numero++;
}