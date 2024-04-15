let n1, n2, n3, n4;
let leia = require('readline-sync');

n1 = leia.questionFloat("Digite a 1ª nota: ");
n2 = leia.questionFloat("Digite a 2ª nota: ");
n3 = leia.questionFloat("Digite a 3ª nota: ");
n4 = leia.questionFloat("Digite a 4ª nota: ");

let media = (n1 + n2 + n3 + n4)/4;

console.log(`Média final: ${media}`);