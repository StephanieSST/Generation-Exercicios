import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 8, scale: 2 })
    preco: number

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
    basePreco: number;

    @Column()
    foto: string;

    @IsNotEmpty()
    @Column({type: "int"})
    quantidade: number;

    @IsNotEmpty()
    @Column({length: 3000, nullable: true})
    descricao: string

    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE',
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}