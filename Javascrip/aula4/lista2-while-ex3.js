let idade=0, menor=0, maior=0;
const leia = require('readline-sync');

while (idade >= 0) {
    idade = leia.questionInt("Digite uma idade: ");

    if(idade > 0 && idade < 21){
        menor++;
    }
    if(idade > 50){
        maior++;
    }
    
}

console.log(`\nTotal de pessoas menores de 21: ${menor}\nTotal de pessoas maiores de 50: ${maior}`);