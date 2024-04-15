import { Atleta } from "./Atleta";

export class Corredor extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public correr(): void{
        console.log("Correndo...");
    }

    public aquecer(): void {
        console.log("Aquecendo na pista...");
    }
}