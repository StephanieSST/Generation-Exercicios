create database db_infinity;
use db_infinity;
create table tb_produtos(
id bigint auto_increment,
nome varchar(255) not null,
cor varchar(255) not null,
preco decimal(6,2) not null,
quantidade bigint not null,
primary key (id)
);

insert into tb_produtos (nome, cor, preco, quantidade)
values ("Papel Sulfite A4", "Branco", 19.00, 24),
("Caneta", "Azul", 1.25, 54),
("Grampeador", "Vermelho", 26.40, 7),
("Calculadora", "Amarelo", 32.00, 3),
("Impressora", "Preto", 1452.00, 4),
("Desktop", "Cinza", 3226.54, 15),
("Cadeira de Escritório", "Azul", 723.60, 13),
("Escrivaninha", "Verde", 525.79, 23);

select * from tb_produtos where preco > 500;

select * from tb_produtos where preco < 500;

UPDATE tb_produtos set cor = "Verde" where id = 4;


select * from tb_produtos;