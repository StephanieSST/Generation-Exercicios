let n1, n2, n3, n4;
let leia = require('readline-sync');

n1 = leia.questionFloat("Digite um numero: ");
n2 = leia.questionFloat("Digite outro numero: ");
n3 = leia.questionFloat("Digite outro numero: ");
n4 = leia.questionFloat("Digite outro numero: ");

let diferenca = (n1*n2) - (n3*n4);
console.log(`Diferenca: ${diferenca}`);