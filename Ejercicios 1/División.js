//División
let Dividendo = parseInt(prompt("Dividendo"));
let Divisor = parseInt(prompt("Divisor"));

let cociente = 0, resto = 0, Quita_Decimales = 0; 
cociente = Dividendo / Divisor;
resto = Dividendo%Divisor;

if(Dividendo%Divisor == 0){
    console.log("La división es exacta");
}else{
    console.log("La división no es exacta");
}
Quita_Decimales = cociente - Math.floor(cociente);
console.log("Cociente: "+(cociente-Quita_Decimales));
console.log("Resto: "+resto);