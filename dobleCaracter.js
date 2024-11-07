//https://www.codewars.com/kata/56b1f01c247c01db92000076
//Dada una cadena de texto, debes devolver una nueva cadena
// en la que cada carácter (distinguiendo entre mayúsculas y minúsculas) se repita una vez.
//Solucion:La función divide la cadena en caracteres, duplica cada uno usando map(), y luego los une de nuevo con join().



function doubleChar(str) {
    return str
        .split('')                // Divide la cadena en un array de caracteres
        .map(char => char + char) // Duplica cada carácter
        .join('');                // Une el array en una cadena final
}

// Ejemplos de uso:
console.log(doubleChar("String"));       // "SSttrriinngg"
console.log(doubleChar("Hello World"));  // "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ "));      // "11223344!!__  "
