let codigo;
let saldo = 1000.00, valor;
let operacao, resultado;
const leia = require('readline-sync');

codigo = leia.questionInt("Digite o codigo da operacao:\n1 - Saldo\n2 - Saque\n3 - Deposito\n");


switch(codigo){
    case 1:
        operacao = "Saldo";
        resultado = `\nO saldo da conta é: ${saldo.toFixed(2)}`;
        break;

        case 2:
            operacao = "Saque";
            valor = leia.questionFloat("\nDigite o valor: ");

            if(saldo > valor) {
                resultado = `\nNovo Saldo: R$ ${saldo - valor.toFixed(2)}`;   
            }
              else {
                
                resultado = "\nSaldo é insuficiente!";
              }

            break;

            case 3:
                operacao = "Deposito";
                valor = leia.questionFloat("\nDigite o valor: ");
                resultado = `\nO novo saldo é: R$ ${(saldo + valor).toFixed(2)}`;
                break;

                default:
                    console.log("Operacao Invalida!");
}
console.log(`Operacao - ${operacao}\n${resultado}`)