let nome, apto;
let idade;
const leia = require("readline-sync");
let primeiraDoacao;

nome = leia.question("\nDigite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do doador: ");
primeiraDoacao = leia.keyInYNStrict("Primeira doacao de sangue? ");

if(idade >= 18){

    if((idade < 60) || (idade <= 69 && !primeiraDoacao)){
        apto = "esta apto";
    }
     else {
        apto = "nao esta apto";
    }
    
} else {
    console.log("Idade Invalida!")
}

console.log(`\n${nome} ${apto} para doar sangue!`)