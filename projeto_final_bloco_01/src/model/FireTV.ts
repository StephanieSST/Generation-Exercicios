import { AparelhoStreaming } from "./AparelhoStreaming";

export class FireTV extends AparelhoStreaming {
    private _fireTvStick: string;

    constructor(id: number, nome: string, tipo: number, preco: number, fireTvStick: string) {
        super (id, nome, tipo, preco)
        this._fireTvStick = fireTvStick;

    }

  	public get fireTvStick(): string {
		return this._fireTvStick;
	}

	public set fireTvStick(value: string) {
		this._fireTvStick = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`${this._fireTvStick}`);
        
    }
}
