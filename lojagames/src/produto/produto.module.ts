import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/produto.service";
import { ProdutorController } from "./controllers/produto.controller";
import { Produto } from "./entities/produto.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutorController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}

