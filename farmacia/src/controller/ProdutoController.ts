import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";



export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    procurarId(id: number): void {
        let busca = this.buscarNoArray(id);

        if(busca !== null)
        busca.visualizar();

        else {
            console.log("\nProduto não encontrado!");
        }
    }
    listarTodas(): void {
        for (let produto of this.listaProdutos) {
             produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("Produto Adicionado!");
    }
    atualizar(produto: Produto): void {
        let busca = this.buscarNoArray(produto.id);

        if(busca !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(busca)] = produto;
            console.log(`O produto ${produto.id} foi atualizado com êxito!`);
        } else {
            console.log("\nProduto não Encontrado!");
        }
    }
    deletar(id: number): void {
        let busca = this.buscarNoArray(id);

        if(busca !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(busca), 1)
            console.log(`${id} foi Excluído com êxito!`)
        }else
            console.log("\nProduto não Encontrado!")
    }
    public gerarId(): number{
        return ++ this.id
    }
    public buscarNoArray(id: number): Produto | null{
        for (let produto of this.listaProdutos){
            if (produto.id === id)
                return produto;
       }

       return null;
    }

    }
   
