create database db_pizzaria_legal;
use db_pizzaria_legal;

create table tb_categorias(
id bigint auto_increment primary key,
queijo varchar(255) not null,
tomate int not null,
azeitona int not null,
oregano varchar(255) not null
);

create table tb_pizzas(
id bigint auto_increment primary key,
sabor varchar(255) not null,
quantidade bigint not null,
preco decimal(6,2) not null,
bordarecheada varchar(255),
tipo varchar(255) not null
);

insert into tb_categorias(queijo, tomate, azeitona, oregano)
values("Mussarela", 4, 2, "S"),
("Cheddar", 3, 5, "N"),
("Prato", 2, 5, "S"),
("Búfala", 6, 5, "S"),
("Gorgonzola", 7, 6, "N");

alter table tb_pizzas add categoria_id bigint;

ALTER TABLE tb_pizzas ADD CONSTRAINT fk_categoria_pizza
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);
alter table tb_pizzas drop foreign key fk_categoria_pizza;

insert into tb_pizzas(sabor, quantidade, preco, bordarecheada, tipo, categoria_id)
values("Quatro Queijos", 2, 36.50, "Cheddar", "Salgado", 1),
("Tomate Seco c/ Rúccula", 4, 65.15, "Catupiry", "Salgado", 2),
("Marguerita", 7, 27.50, "Cheddar", "Salgado", 3),
("Romeu & Julieta", 4, 33.80, "Sem Borda","Doce", 4),
("Chocolate Branco c/ Morango", 2, 50.80, "Sem Borda", "Doce", 5),
("Brigadeiro", 1, 27.60, "Sem Borda", "Doce",6),
("Ferreiro Rocher", 3, 52.70, "Nutella", "Doce",7),
("Pepperoni", 5, 44.20, "Sem Borda","Salgado",8);

select * from tb_pizzas where preco > 45.00;
select * from tb_pizzas where preco between 50.00 and 100.00;
select * from tb_pizzas where sabor like "%m%";

select tb_pizzas.id, sabor, quantidade, preco, bordarecheada, tipo, tb_categorias.queijo, tb_categorias.tomate, tb_categorias.azeitona, tb_categorias.oregano
from tb_pizzas inner join tb_categorias on tb_pizzas.categoria_id = tb_categorias.id;

select tb_pizzas.id, sabor, quantidade, preco, bordarecheada, tipo, tb_categorias.queijo, tb_categorias.tomate, tb_categorias.azeitona, tb_categorias.oregano
from tb_categorias inner join tb_pizzas on tb_pizzas.categoria_id = tb_categorias.id where tipo = "Doce";

