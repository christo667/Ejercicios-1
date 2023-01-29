//Triángulos 
let lado1, lado2, lado3;
lado1 = parseFloat(prompt("Dame el lado 1:"));
lado2 = parseFloat(prompt("Dame el lado 2:"));
lado3 = parseFloat(prompt("Dame el lado 3:"));

if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("Triangulo isoceles");
}else if((lado1+lado2) > lado3 || (lado1+lado3) > lado1 || (lado3+lado2) > lado1){
    console.log("No es valido el triangolo");
}else{
    console.log("Triangulo escaleno");
}