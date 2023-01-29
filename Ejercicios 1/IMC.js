//Indice de masa corporal
let edad = parseInt(prompt("Ingresa tu Edad:"));
let kilos = parseFloat(prompt("Ingresar peso en kg"));
let altura = parseFloat(prompt("Ingresa altura en m"));

let IMC = kilos / (Math.pow(2,altura));

if(IMC >= 22){
    if(edad >= 45){
        console.log("Indice Alto");
    }else{
        console.log("Indice Medio")
    }
}else{
    if(edad >= 45){
        console.log("Indice Medio");
    }else{
        console.log("Indice Bajo")
    }
}