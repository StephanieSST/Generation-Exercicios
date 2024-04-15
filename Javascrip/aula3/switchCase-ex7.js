let numero1, numero2;
let operacao, operador, resultado;
const leia = require('readline-sync');

numero1 = leia.questionFloat("Digite o 1º numero: ");
numero2 = leia.questionFloat("Digite o 2º numero: ");
operacao = leia.questionInt("\nCodigo da operacao:\n1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 - Divisao\n");

switch(operacao){
    case 1:
        operador = "+";
        resultado = numero1 + numero2;
        break;

        case 2:
            operador = "-";
            resultado = numero1 - numero2;
            break;

            case 3:
                operador = "x";
                resultado = numero1 * numero2;
                break;

                case 4:
                    operador = "/";
                    resultado = numero1 / numero2;
                    break;

                    default:
                        console.log("Operacao Invalida!")
                        break;
}

console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
