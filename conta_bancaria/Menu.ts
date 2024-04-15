import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController  } from "./src/controller/ContaController";

let realizar;

export function main() {

    let contas: ContaController = new ContaController();
    
    let c1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Photocópia", 50000, 1000);
    contas.cadastrar(c1);

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

while (true){


   console.log(colors.bg.black, colors.fg.cyan);
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
   console.log("$                                                                   $");
   console.log("$                      !BANCO DO BRAZIL COM Z!                      $");
   console.log("$                                                                   $");
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n");
   console.log("$                1 - Criar Conta                                    $");
   console.log("*                2 - Listar todas as Contas                         *");
   console.log("$                3 - Buscar conta por Numero                        $");
   console.log("*                4 - Atualizar Dados da Conta                       *");
   console.log("$                5 - Apagar Conta                                   $");
   console.log("*                6 - Sacar                                          *");
   console.log("$                7 - Depositar                                      $");
   console.log("*                8 - Transferir valores entre Contas                *");
   console.log("$                9 - Buscar Conta por Titular                       $");
   console.log("$                0 - Sair                                           $");
   console.log("\n*********************************************************************\n")
   console.log(colors.reset,"Entre com a opção desejada: ");
   opcao = readlinesync.questionInt("");
   
   if(opcao == 0){
    console.log(colors.fg.yellow,
        "\nBanco do Brazil com z - O seu Futuro começa aqui!\n");
    sobre();
    console.log(colors.reset, "");
    process.exit(0);
   }

   switch (opcao) {
    case 1:
         realizar = "Criar Conta";

         console.log("Digite o Número da agência: ");
         agencia = readlinesync.questionInt("");

         console.log("Digite o Nome do Titular da conta: ");
         titular = readlinesync.question("");

         console.log("\nDigite o tipo da conta: ");
         tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

         console.log("\nDigite o Saldo da conta: R$");
         saldo = readlinesync.questionFloat("");

         switch(tipo) {
            case 1:
                console.log("Digite o Limite da Conta: R$");
                limite = readlinesync.questionFloat("");
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;

                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar( new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
         }
         keyPress();
         break;

         case 2:
            realizar = "Listar todas as Contas";
            contas.listarTodas();
            keyPress();
            break;

            case 3:
                realizar = "Consultar dados da Conta - por número\n\n";

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarNumero(numero);

                keyPress();
                break;

                case 4:
                    realizar = "Atualizar dados da Conta";
                    keyPress();
                    break;

                    case 5:
                        realizar = "Apagar uma Conta";
                        console.log("Digite o número da Conta: ");
                        numero = readlinesync.questionInt("");
                        contas.deletar(numero);

                        keyPress();
                        break;

                        case 6:
                            realizar = "Saque";

                            console.log("Digite o número da Conta: ");
                            numero = readlinesync.questionInt("");
                            
                            console.log("\nDigite o valor do saque: R$");
                            valor = readlinesync.questionFloat("");
                            
                            contas.sacar(numero, valor);

                            keyPress();
                            break;

                            case 7:
                                realizar = "Depósito";

                                console.log("Digite o número da Conta: ");
                                numero = readlinesync.questionInt("");

                                console.log("\nDigite o valor do Depósito: R$");
                                valor = readlinesync.questionFloat("");

                                contas.depositar(numero, valor);   
                                keyPress();
                                break;

                                case 8:
                                    realizar = "Transferência entre Contas";

                                    console.log("Digite o número da Conta de Origem: ");
                                    numero = readlinesync.questionInt("");

                                    console.log("Digite o número da Conta de Destino: ");
                                    numeroDestino = readlinesync.questionInt("");

                                    console.log("\nDigite o valor do Depósito: R$");
                                    valor = readlinesync.questionFloat("");
                                    contas.transferir(numero, numeroDestino, valor);

                                    keyPress();
                                    break;

                                    case 9:
                                        realizar = "Consultar conta por nome do titular";
                                        console.log("Digite o Nome do Titular: ");
                                        titular = readlinesync.question("");
                                        contas.procurarTitular(titular);

                                        keyPress();
                                        break;
                                    default: 
                                      realizar = "Opção Inválida!";
                                      keyPress();
                                      break;
                                      

   }

   console.log(colors.fg.whitestrong,`\n\n${realizar}\n\n`, colors.reset);
 
}
}

export function sobre(): void {
    console.log(colors.fg.gray);
    console.log("******************************************************");
    console.log("Projeto Desenvolvido por:\nStephanie Steuernagel Tavares - stephaniesteuernagel@gmail.com\ngithub.com/StephanieSST");
    console.log("******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();
