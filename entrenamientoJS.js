//https://www.codewars.com/kata/57280481e8118511f7000ffa

//solucion:transformar la cadena para que cada palabra se divida en caracteres, unir esos caracteres con el separator proporcionado
// y luego unir todas las palabras modificadas en una sola cadena con espacios entre ellas.
//Usando los métodos split(), join(), y map() para crear una función llamada splitAndMerge


function splitAndMerge(string, separator) {
    return string
        .split(" ")                        // Dividimos la cadena en palabras
        .map(word => word.split("").join(separator)) // Convertimos cada palabra en caracteres y los unimos con el separator
        .join(" ");                        // Unimos las palabras con un espacio
}