import { AparelhoStreaming } from "./AparelhoStreaming";


export class Outro extends AparelhoStreaming {
    private _outro: string;

    constructor(id: number, nome: string, tipo: number, preco: number, outro: string) {
        super (id, nome, tipo, preco)
        this._outro = outro;

    }

	public get outro(): string {
		return this._outro;
	}

	public set outro(value: string) {
		this._outro = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`${this.outro}`);
        
    }

}