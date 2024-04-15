const leia = require('readline-sync');
let numero, soma=0, cont=0, media=0;

do {
   
    numero = leia.questionInt("Digite um numero: ");
  
        if(numero % 3 == 0 && numero != 0){
            soma += numero;
            cont++;
        }
    
} while(numero !=0)

 media = soma / cont;

console.log(`\nForam digitados ${cont} numeros multiplos de 3!\n
A soma dos numeros e: ${soma}\nA media de todos os numeros multiplos de 3 e: ${media}`)

