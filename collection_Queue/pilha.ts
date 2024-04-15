import { Stack } from "./Stack";
const readline = require('readline-sync');

const pilha = new Stack <string> ();

while (true) {

    let opcao: number;
    let livro: string;

    console.log("\n**********************************************************");
    console.log("\n       1 - Adicionar Livro na Pilha\n       2 - Listar todos os Livros\n       3 - Retirar Livro da Pilha\n       0 - Sair\n");
    console.log("***********************************************************")

    console.log("\nDigite uma opção:");
    opcao = readline.questionInt("");

    switch(opcao) {
        case 1:
            console.log("\nDigite o nome do livro:\n");
            livro = readline.question("");
            console.log("\nPilha:");

            pilha.push(livro);
            pilha.printStack();

            console.log("\nLivro adicionado!")
            break;
    
        case 2:
            console.log("\nLista de Livros na Pilha:\n");
            pilha.printStack();
           
            break;
    
        case 3:
            console.log("\nPilha:\n");
            pilha.pop();
            pilha.printStack();
            console.log("\nUm Livro foi retirado da Pilha!");
     
              break;
    
        case 0: 
             console.log("Programa Finalizado!");
             break;

        default:

        console.log("Digite uma opção válida!")

        break;
            
    }
        

}
