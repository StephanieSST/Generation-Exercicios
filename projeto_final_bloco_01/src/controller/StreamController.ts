import { AparelhoStreaming } from "../model/AparelhoStreaming";
import { StreamRepository } from "../repository/StreamRepository";

export class StreamController implements StreamRepository {

    private listaProdutos: Array<AparelhoStreaming> = new Array<AparelhoStreaming>();

    public id: number = 0;
    
    listarPorId(id: number): void {
        let encontrar = this.buscar(id);

        if(encontrar !== null)
        encontrar.visualizar();

        else {
            console.log("\nProduto não encontrado!");
        }
    }

    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
       };
    }
    cadastrar(produto: AparelhoStreaming): void {
        this.listaProdutos.push(produto);
        console.log("Produto Cadastrado!");
    }
    atualizar(produto: AparelhoStreaming): void {
        let encontrar = this.buscar(produto.id);
        
        if(encontrar != null) {
            this.listaProdutos[this.listaProdutos.indexOf(encontrar)] = produto;
            console.log(`O produto foi atualizado com êxito!`);
        } else {
            console.log("\nProduto não encontrado!");
        }
    }
    deletar(id: number): void {
        let encontrar = this.buscar(id);
        if (encontrar != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(encontrar), 1)
            console.log(`O produto ${id} foi excluído!`);
        }
         else {
            console.log(`Produto não identificado`)
        }
    }

    public gerarId(): number {
        return ++ this.id
    }

    public buscar(id: number): AparelhoStreaming | null {
        for (let produto of this.listaProdutos) {
            if(produto.id === id)

            return produto;
        }

        return null;
    }
}