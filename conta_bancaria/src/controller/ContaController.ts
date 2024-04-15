import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {


    procurarTitular(titular: string) {
        let listaContasTitular = this.listaContas.filter ( c => c.titular.toUpperCase().includes(titular.toUpperCase()))

        for ( let conta of listaContasTitular) {
            conta.visualizar();
        }
    }
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        };  
    }
   
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }
    procurarNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta != null){
            buscaConta.visualizar();
        } else
             console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
     deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta numero: " + numero + " foi apagada com sucesso!", colors.reset);
        }  else
        console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null) {
            if(conta.sacar(valor) == true)
            console.log(colors.fg.green, "\nO saque na Conta numero: " + numero + " foi efetuado com sucesso!", colors.reset);
        }  else 
           console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if(conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, "\nO Depósito na Conta numero: " + numero + " foi efetuado com sucesso!", colors.reset);
        } else
          console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada", colors.reset);
    }
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem != null && contaDestino != null){
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(colors.fg.green, "\nA Transferência da Conta numero: " + numeroOrigem + " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso!", colors.reset);
            }
        }  else
           console.log(colors.fg.red, "\nA Conta numero: " + numeroOrigem + " e/ou a Conta numero: " + numeroDestino + " não foram encontradas!", colors.reset);
    }
    

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas){
            if(conta.numero === numero)
            return conta;
        }

        return null;

    }

}