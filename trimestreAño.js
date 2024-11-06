// https://www.codewars.com/kata/5ce9c1000bab0b0015105b2b
//Dado un mes como un número entero del 1 al 12, devuelve a qué trimestre del año pertenece como un número entero.
//Solucion: 
//dividir los meses en cuatro trimestres.Dividimos el mes por 3 y usamos Math.ceil para redondear.
//ejemplo:Si el mes es 11: 11/3=3.6711/3=3.67, y Math.ceil(3.67) da 4, indicando el cuarto trimestre.

const quarterOf = (month) => {
    return Math.ceil(month / 3);
  }
  