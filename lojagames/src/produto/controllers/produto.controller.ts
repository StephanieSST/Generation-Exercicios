import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller("/produto")
export class ProdutorController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
  }

  @Get('/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrice(@Param('preco') preco: number): Promise<Produto[]> {
    return this.produtoService.findByPrice(preco);
  }

  @Get('/preco_maior/:preco')
  @HttpCode(HttpStatus.OK)
  findByMaiorPreco(
    @Param('preco', ParseFloatPipe) preco: number,
  ): Promise<Produto[]> {
    return this.produtoService.findByMaiorPreco(preco);
  }

  @Get('/preco_menor/:preco')
  @HttpCode(HttpStatus.OK)
  findByMenorPreco(
    @Param('preco', ParseFloatPipe) preco: number,
  ): Promise<Produto[]> {
    return this.produtoService.findByMenorPreco(preco);
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produto: Produto): Promise<Produto> {
    return this.produtoService.create(Produto);
  }

  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() Produto: Produto): Promise<Produto> {
    return this.produtoService.update(Produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.produtoService.delete(id);
  }

}