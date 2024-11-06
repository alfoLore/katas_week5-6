//https://www.codewars.com/kata/5648b12ce68d9daa6b000099
//Solucion: autobús está vacío en la primera parada, peopleOnBus = 0,
//peopleIn (personas que suben) y peopleOut (personas que bajan) en el arreglo.La variable peopleOnBus
//personas que quedan en el autobús después de la última parada.


var number = function(busStops) {
    let peopleOnBus = 0;
  
    for (let i = 0; i < busStops.length; i++) {
      const [peopleIn, peopleOut] = busStops[i];
      peopleOnBus += peopleIn - peopleOut;
    }
  
    return peopleOnBus;
  }