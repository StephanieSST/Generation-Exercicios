const leia = require('readline-sync');
let numero = [], impar = '', par = '', soma = 0, cont = 0;

for(let i = 0; i < 10; i++){
    numero[i] = leia.questionInt("Digite um numero: ");

    if(i % 2 != 0){
        impar += `${numero[i]}  `;
    }

    if(numero[i] % 2 == 0){
        par += `${numero[i]}  `;
    }
    soma += numero[i];

cont++
}
console.log("\nNumeros digitados:\n");
console.table(numero);

let media = soma / cont;

console.log(`\n\nElementos nos indices impares:\n\n${impar}\n\nElementos pares:\n\n${par}\n\nSoma: ${soma}\n\nMedia: ${media}`);