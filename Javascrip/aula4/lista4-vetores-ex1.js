const leia = require('readline-sync');
let vetorNumeros = [], entrada, posicao;

entrada = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for(i = 0; i < 10; i++){
    vetorNumeros[i] = i + 1;
}
//Array em ordem crescente
console.log(vetorNumeros)

//Embaralhar um array
vetorNumeros.sort((a,b) => Math.random() - 0.5);

//indice do numero digitado
posicao = vetorNumeros.indexOf(entrada)

//Array desordenado
console.log(vetorNumeros);

console.table(vetorNumeros);

if(posicao > -1){
    console.log(`\nO numero ${entrada} esta localizado na posicao ${posicao}!`);
}
 else{
    console.log(`O numero ${entrada} nao foi encontrado!`);
 }



   

