import readlinesync from 'readline-sync';
import { FireTV } from './src/model/FireTV';
import { StreamController } from './src/controller/StreamController';
import { Outro } from './src/model/Outro';

export function menu() {

let opcao, id, tipo, preco: number;
let texto, fireTvStick, outro, nome: string;
let tipoProduto = ['Fire TV Stick', 'Outro'];
let modelo;

const streamController: StreamController = new StreamController();
 

while(true) {

console.log("\n                 Mundo dos Streamings")
console.log("\n############################################################");
console.log("\n           1 - Listar todos os Produtos\n           2 - Listar Produto pelo Id\n           3 - Cadastrar Produto\n           4 - Atualizar Produto\n           5 - Deletar Produto\n           6 - Sair");
console.log("\n############################################################");

console.log("Entre com a opção desejada:");
opcao = readlinesync.questionInt("");

if(opcao == 0){
    console.log("\nAté a Próxima!\n");
    sobre();
    process.exit(0);
   }

switch(opcao){
    case 1:
        texto = "Produtos:";
        streamController.listarTodos();
        
        keyPress();

        break;

        case 2:
            texto = "Produto Listado pelo ID:";
            id = readlinesync.questionInt("Digite a ID do produto: ");
            streamController.listarPorId(id);
        
            keyPress();
            break;

            case 3:
                texto = "Produto Cadastrado:";
                nome = readlinesync.question("Digite o nome do produto: ");
                console.log(`\nEscolha uma das opções: ${tipoProduto} `);
                tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel: false}) + 1;
                preco = readlinesync.questionFloat("Digite o preco do produto: R$");
                switch(tipo) {
                    case 1:
                        modelo = "Fire TV Stick";
                        fireTvStick = readlinesync.question("\nDigite o numero correspondente:\n\n1 - Fire TV Lite\n2 - Fire TV 4K\n");
                        streamController.cadastrar(new FireTV(streamController.gerarId(), nome, tipo, preco, fireTvStick));
                        break;

                        case 2:
                            modelo = "Fire TV 4K";
                            outro = nome;
                            streamController.cadastrar(new Outro(streamController.gerarId(), nome, tipo, preco, outro));
                            break;

                }
                
                keyPress();
                break;

                case 4:
                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = streamController.buscar(id);

                    if (produto !== null){

                        nome = readlinesync.question("\nDigite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("\nDigite o preco: ");

                        switch(tipo) {
                        
                            case 1:
                                fireTvStick = readlinesync.question("\nDigite o nome do produto:\n");
                                streamController.atualizar(new FireTV(id, nome, tipo, preco, fireTvStick));
                                break;
        
                                case 2:
                                    outro = readlinesync.question("Digite a marca:\n");
                                    streamController.atualizar(new Outro(id, nome, tipo, preco, outro));
                                    break;
                        }      
                    }else
                    console.log("Produto não Encontrado!");

                    texto = "Produto Atualizado";
                    
                    keyPress();
                    break;

                    case 5:
                        texto = "Produto Excluído";
                        id = readlinesync.questionInt("Digite o Id do Produto: ");
                        streamController.deletar(id);
                        keyPress();
                        break;

                        default:
                            texto = "Opção Inválida!";
                            keyPress();
                            break;
}
console.log(`\n\n${texto}\n${modelo}\n\n`)
}
}

function sobre(): void {
    console.log("******************************************************");
    console.log("Projeto Desenvolvido por:\nStephanie Steuernagel Tavares - stephaniesteuernagel@gmail.com\ngithub.com/StephanieSST");
    console.log("******************************************************");
}
  function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

menu();


 