import { colors } from "../util/Colors";

export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

constructor (_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number){
    this._numero = _numero;
    this._agencia = _agencia;
    this._tipo = _tipo;
    this._titular = _titular;
    this._saldo = _saldo;
}

public get numero() {
    return this._numero;
}

public set numero(numero: number) {
       this._numero = numero;
}

public get agencia() {
    return this._agencia;
}

public set agencia(agencia: number) {
    this._agencia = agencia;
}

public get tipo() {
    return this._tipo;
}

public set tipo(tipo: number) {
    this._tipo = tipo;
}

public get titular() {
    return this._titular;
}

public set titular(titular: string) {
    this._titular = titular;
}

public get saldo() {
    return this._saldo;
}

public set saldo(saldo: number) {
    this._saldo = saldo;
}

public sacar (valor: number): boolean {

    if (this._saldo < valor) {
        console.log("\nSaldo Insuficiente!");
        return false;
    }

    this._saldo = this._saldo - valor;
    return true;
}

public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
}

public visualizar(): void {
    
    let tipo: string = "";

 switch (this._tipo) {
     case 1:
        tipo = "Conta Corrente";
        break;

        case 2:
            tipo = "Conta Poupanca";
            break;
 }
    console.log(colors.fg.white,"\n\n================================================================");
    console.log(colors.fg.yellow);
    console.log("Dados da Conta:");
    console.log(colors.fg.white);
    console.log("================================================================");
    console.log(colors.fg.yellow,`\nNumero da Conta: ${this._numero}\nAgência: ${this._agencia}\nTipo da Conta: ${tipo}\nTitular: ${this._titular}\nSaldo: ${this._saldo.toFixed(2)}`);
}

}