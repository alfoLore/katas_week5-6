//https://www.codewars.com/kata/598f76a44f613e0e0b000026
//Solucion:

/*Comprobación de null: Usamos if (!numbers) para verificar si match() devolvió null 
(es decir, si no encontró ningún número). Si es null, devolvemos 0 como suma.
Uso de map(Number): Si se encontraron números, usamos map(Number) para convertirlos de cadenas a enteros.
Suma con reduce(): Finalmente, utilizamos reduce() para sumar todos los números obtenidos.
De esta forma, evitamos el error de intentar acceder a métodos en null y aseguramos que el código
funcione incluso si no se encuentran números en la cadena.*/
function sumOfIntegersInString(str) {
    const numbers = str.match(/\d+/g); // Extrae todos los números del string
    
    if (!numbers) {
        return 0; // Si no se encuentran números, retorna 0
    }

    return numbers
        .map(Number)   // Convierte cada coincidencia a número
        .reduce((acc, num) => acc + num, 0); // Suma todos los números
}