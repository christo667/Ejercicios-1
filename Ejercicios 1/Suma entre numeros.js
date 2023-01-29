//Suma entre numeros
let incio = parseInt(prompt("Ingresa numero de incio:"));
let fin = parseInt(prompt("Ingresa numero del fin:"));
let suma = 0;

while(incio < fin-1){
    incio++;
    console.log(incio);
    suma += incio;
}

console.log("suma: "+suma);