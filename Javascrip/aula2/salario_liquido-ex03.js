let salarioBruto, adicionalNoturno, horasExtras, desconto;

let leia = require('readline-sync');

salarioBruto = leia.questionFloat("\nDigite o salario bruto: ");
adicionalNoturno = leia.questionFloat("Adicional noturno: ");
horasExtras= leia.questionFloat("Horas extras: ");
desconto = leia.questionFloat("Descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto;

console.log(`\nSalario liquido: ${salarioLiquido}`)