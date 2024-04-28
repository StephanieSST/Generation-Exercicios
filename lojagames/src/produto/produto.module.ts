import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/produto.service";
import { ProdutorController } from "./controllers/produto.controller";
import { Produto } from "./entities/produto.entity";
import { CategoriaService } from "../categoria/services/categoria.service";
import { CategoriaModule } from "../categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutorController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}

