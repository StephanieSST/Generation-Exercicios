let n1, n2, n3;
const leia = require('readline-sync');

n1 = leia.questionInt("Digite o primeiro numero: ");
n2 = leia.questionInt("Digite o segundo numero: ");
n3 = leia.questionInt("Digite o terceiro numero: ");

let soma = n1 + n2;

if(soma > n3){
    console.log(`${n1} + ${n2} = ${soma} > ${n3}\nA soma de A + B é maior do que C`);
}

else if (soma < n3){
    console.log(`${n1} + ${n2} = ${soma} < ${n3}\nA soma de A + B é maior do que C`);
}

else{
    console.log(`${n1} + ${n2} = ${soma} = ${n3}\nA soma de A + B e igual a C`);
}



