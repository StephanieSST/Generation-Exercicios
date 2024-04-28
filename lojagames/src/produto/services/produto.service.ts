import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult, LessThan, MoreThan } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { CategoriaService } from "../../categoria/services/categoria.service";

@Injectable()
export class ProdutoService {
    findByPrice(preco: number): Promise<Produto[]> {
      throw new Error("Method not implemented.");
    }
    
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true,
                usuario: true
            }
        });
    }
    async findById(id: number): Promise<Produto> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true,
                usuario: true,
            }
        });
        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true,
                usuario: true
            }
        })

    }

    
    async findByMaiorPreco(preco: number): Promise<Produto[]> {
        const produto = await this.produtoRepository.find({
          where: {
            basePreco: MoreThan(preco),
          },
          relations: {
            categoria: true,
          },
        });
    
        if (!produto)
          throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    
        return produto;
      }
    
      async findByMenorPreco(preco: number): Promise<Produto[]> {
        const produto = await this.produtoRepository.find({
          where: {
            basePreco: LessThan(preco),
          },
          relations: {
            categoria: true,
          },
        });
    
        if (!produto)
          throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    
        return produto;
      }

    async create(produto: Produto): Promise<Produto> {

        if (produto.categoria){

            let categoria = await this.categoriaService.findById(produto.categoria.id)

            if(!categoria)
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

            return await this.produtoRepository.save(produto)
        }
    
        return await this.produtoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto> {

        let buscaProduto = await this.findById(produto.id);

        if (!buscaProduto || !produto.id)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaProduto = await this.findById(id);

        if (!buscaProduto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.delete(id);

    }

}

