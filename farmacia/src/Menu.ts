import readlinesync from 'readline-sync';
import { ProdutoController } from "./controller/ProdutoController";
import { Cosmetico } from "./model/Cosmetico";
import { Medicamento } from "./model/Medicamento";



export function menu() {
    let opcao, id, tipo, preco: number;
    let nome,generico,fragrancia: string;
    let tipoProduto = ['Medicamento', 'Cosmetico'];

    const produtoController: ProdutoController = new ProdutoController();

    
    produtoController.cadastrar(new Medicamento(produtoController.gerarId(),
        "Tylenol 750 mg", 1, 45.00, "Paracetamol 750 mg"));

    produtoController.cadastrar(new Cosmetico(produtoController.gerarId(),
        "Rimel", 2, 60.00, "-"));

    while (true) {

        console.log("***********************************************");
        console.log("\n         Farmácia Bem Estar\n");
        console.log("***********************************************");
        console.log("\n         1 - Criar Produto\n         2 - Listar todos os produtos\n         3 - Buscar Produto por Id\n         4 - Atualizar Dados do Produto\n         5 - Apagar Produto\n         0 - Sair\n");
        console.log("***********************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nFarmácia Bem Estar - Medicamento Barato é aqui!");
            sobre();
            console.log("");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produto\n\n");

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: R$");

                switch (tipo) {
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                        produtoController.cadastrar(new Medicamento(produtoController.gerarId(),
                            nome, tipo, preco, generico));
                        break;
                    case 2:
                        fragrancia = readlinesync.question("Digite a frangrancia do Cosmetico: ");
                        produtoController.cadastrar(new Cosmetico(produtoController.gerarId(),
                            nome, tipo, preco, fragrancia));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados do Produto - por Id\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados do Produto\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                                produtoController.atualizar(new Medicamento(id,
                                    nome, tipo, preco, generico));
                                break;
                            case 2:
                                fragrancia = readlinesync.question("Digite a frangrancia do Cosmetico: ");
                                produtoController.atualizar(new Cosmetico(id,
                                    nome, tipo, preco, fragrancia));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar um Produto\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress()
                break;
        }
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