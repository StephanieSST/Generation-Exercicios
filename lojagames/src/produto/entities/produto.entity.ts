import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @Column()
    foto: string;

    @ManyToOne(() => Categoria, (Categoria) => Categoria.produto, {
        onDelete: 'CASCADE',
    })
    categoria: Categoria;
}