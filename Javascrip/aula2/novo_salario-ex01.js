let salario, abono, novoSalario;
let leia = require('readline-sync');

salario = leia.questionFloat("Digite o valor do salario: ");
abono = leia.questionFloat("Digite o valor do abono: ");

novoSalario = salario + abono

console.log(`\nO novo salario é R$ ${novoSalario}`);