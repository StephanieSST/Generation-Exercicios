let nome, cargo;
let codigo, salario, percentual;
const leia = require('readline-sync');

nome = leia.question("\nNome do colaborador: ");
codigo = leia.questionInt("\nDigite um numero de 1 a 6 corresponde ao seu cargo:\n1 - Gerente\n2 - Vendedor\n3 - Supervisor\n4 - Motorista\n5 - Estoquista\n6 - Tecnico de TI\n\n");

if(codigo <= 0 || codigo > 6){
    console.log("Opcao Invalida!");
} else {

salario = leia.questionFloat("Digite o valor do seu salario: ");

switch(codigo) {

    case 1:
        cargo = "Gerente";
        percentual = 10/100;
        break;

        case 2:
            cargo = "Vendedor";
            percentual = 7/100;
            break;

            case 3:
                cargo = "Supervisor";
                percentual = 9/100;
                break;

                case 4:
                    cargo = "Motorista";
                    percentual = 6/100;
                    break;

                    case 5:
                        cargo = "Estoquista";
                        percentual = 5/100;
                        break;

                        case 6:
                            cargo = "Tecnico de TI";
                            percentual = 8/100;
                            break;
                            
                            default:
                                console.log("\nTente Novamente!");
}

let novoSalario = salario + (percentual*salario);

console.log(`\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalario: R$ ${novoSalario}`)

}