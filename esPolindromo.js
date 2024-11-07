//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

//Solucion:

//x.toLowerCase() convierte toda la cadena a minúsculas para asegurar que la comparación sea insensible a mayúsculas y minúsculas.
//.replace(/[^a-z0-9]/g, '') elimina todos los caracteres no alfanuméricos, como espacios y puntuación. Esto es útil para entradas como "A man, a plan, a canal, Panama", que aún deberían identificarse como palíndromos.
//Inversión y comparación:

//normalized.split('').reverse().join('') convierte la cadena en un array de caracteres, lo invierte y lo une de nuevo en una cadena.
//Comparamos la cadena original con su versión invertida; si son iguales, la función retorna true, indicando que es un palíndromo.

function isPalindrome(x) {
    // pasamos a minúsculas y eliminamos caracteres no alfanuméricos
    const normalized = x.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Comparamos la cadena normalizada con su versión invertida
    return normalized === normalized.split('').reverse().join('');
}