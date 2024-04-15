const leia = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();
let opcao: number;

do {

console.log("\n********************************************");
console.log("\n   1 - Adicionar Cliente na Fila\n   2 - Listar todos os Clientes\n   3 - Retirar Cliente da Fila\n   0 - Sair");
console.log("\n*********************************************");
console.log("Entre com a opção desejada:");
opcao = leia.questionInt("");

switch(opcao) {
    case 1:
        let nome = leia.question("Digite o nome: ");
        fila.enqueue(nome);
        console.log("\nFila:\n");
        fila.printQueue();
        console.log("\nCliente Adicionado!")
        break;

        case 2:
            if(fila.isEmpty())
            console.log("A Fila está vazia!");

            else{
                console.log("\nLista de Clientes na Fila:\n");
                fila.printQueue();
            }
            break;

            case 3: 
            if(fila.isEmpty())
            console.log("A Fila está vazia!")

            else {
                fila.dequeue();
                console.log("Fila: ");
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!")
            }
                break;

                case 0:
                    console.log("Programa Finalizado!");
                    break;

                    default:
                        console.log("Digite uma opção válida!")

}

   } while (opcao != 0)