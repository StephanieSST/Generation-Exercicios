let numero, parOuImpar, positivoNegativo;
const leia = require('readline-sync');

numero = leia.questionInt("Digite um numero: ");

if (numero > 0){
    positivoNegativo = "positivo"
}  else {
    positivoNegativo = "negativo"
}

if(numero % 2 == 0){
   parOuImpar = "par"
} else {
    parOuImpar = "impar"
}
// parOuImpar = numero % 2 == 0 ? "par" : "impar";
// positivoNegativo = numero > 0 ? "positivo" : "negativo";

console.log(`O Numero ${numero} e ${parOuImpar} e ${positivoNegativo}!`);