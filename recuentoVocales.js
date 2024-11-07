//https://www.codewars.com/kata/54ff3102c1bad923760001f3
//Devuelve el número (cantidad) de vocales en la cadena dada.

//Consideraremos a, e, i, o, u


/*Solucion:Método filter(): Filtra los caracteres de la cadena que son vocales y devuelve un array de vocales.
 Luego se obtiene su longitud.
 El método filter cuenta las vocales en la cadena y, si el resultado es un número positivo, lo retorna. 
 Si no hay vocales, la expresión .length será 0, y usamos || 0 para asegurarnos de que el valor final sea 
 0 en caso de que no haya vocales o la cadena esté vacía.
*/
function getCount(str) {
    // Si la cadena está vacía o no tiene vocales, retorna 0
    const vowels = 'aeiou';
    return [...str].filter(char => vowels.includes(char)).length || 0;
}
