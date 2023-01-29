//Tiempo de viaje 
let tiempo = 1, suma = 0;
while(tiempo != 0){
    tiempo = parseFloat(prompt("Dame el tiempo de viaje"));
    suma+= tiempo;
}
console.log("Duró:",(suma/60).toFixed(2),"Horas");