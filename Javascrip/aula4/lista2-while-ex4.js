const leia = require('readline-sync');
let continua = "S", idade, genero, dev;
let mf=0, hm=0, nb=0, back=0, total=0,soma=0;

while(continua == "S"){

    idade = leia.questionInt("\nIdade: ");
    genero = leia.questionInt("\nIdentidade de Genero:\n\n1-Mulher Cis\n2-Homem Cis\n3-Nao Binario\n4-Mulher Trans\n5-Homem Trans\n6-Outros:\n");
    dev = leia.questionInt("\nPessoa Desenvolvedora:\n1-Back-End\n2-Front-End\n3-Mobile\n4-FullStack:\n");
    
   if((genero == 1 || genero == 4) && dev == 2){
        mf++;
   }
   if(dev == 1){
       back++;
   }
   if(dev == 3 && (genero == 2 && genero == 5) && idade > 40){
       hm++;
   }

   if(genero == 3 && dev == 4 && idade < 30){
      nb++;
   }

    continua = leia.question("\nDeseja continuar? (S/N): ").toUpperCase();
   
    total++;
    soma += idade;
} 
 
console.log(`\nTotal de pessoas desenvolvedoras Backend: ${back}\n
Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mf}\n
Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${hm}\n
Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos: ${nb}\n
O numero total de pessoas que responderam a pesquisa: ${total}\n
A media de idade das pessoas que responderam a pesquisa: ${soma / total}`)