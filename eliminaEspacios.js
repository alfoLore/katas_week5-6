https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// función que elimine los espacios de una cadena y retorne la cadena con el resultado

//Solucion: replace(/\s+/g, ''): Utiliza una expresión (\s+) para encontrar uno o más espacios en la
// cadena str y los reemplaza con una cadena vacía (''), eliminando así todos los espacios. 
//El modificador g asegura que se realice el reemplazo en toda la cadena.



function noSpace(x) {
    return x.replace(/\s+/g, '');
}