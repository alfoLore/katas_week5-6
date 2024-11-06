//https://www.codewars.com/kata/5556282156230d0e5e000089

//La función DNAtoRNA toma la cadena de ADN (dna) como entrada.
//replace(/T/g, 'U') busca todas las ocurrencias de 'T' en la cadena de ADN y las reemplaza por 'U', 
//transformándola en ARN.
// g asegura que se reemplacen todas las  'T' en la cadena.

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}