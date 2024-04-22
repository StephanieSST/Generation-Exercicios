ALTER TABLE tb_produto DROP FOREIGN KEY fk_categoria_produto;
create database db_lojagames;
use db_lojagames;
create table tb_categoria(
id int AUTO_INCREMENT not null  PRIMARY KEY,
tipo VARCHAR(100) not null
);
create table tb_produto(
id int AUTO_INCREMENT not null PRIMARY KEY,
nome VARCHAR(100) not null,
preco DECIMAL(6,2) not null,
foto VARCHAR(255)
);

alter table tb_produto
ADD quantidade INT;

select * from tb_categoria;

ALTER TABLE tb_produto ADD descricao VARCHAR(255);

insert into tb_categoria(tipo)values("PC");

ALTER TABLE tb_produto ADD categoria_id INT;

ALTER TABLE tb_produto ADD CONSTRAINT fk_categoria_produto
FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id);

insert into tb_produto(nome, preco, foto, quantidade, descricao)
values("Hogwarts Legacy", 362.19, "https://images.app.goo.gl/LfzMvF5D4UuJFB8Z6", 5, ""),
("Minecraft", 143.15, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7EoJ1G0WKGUInVwY3k4h6QGvWDhmN-o0cCb0WAeD8BXAEQUsTy6lRk-gtgk1wg-ZLJUhWrq6KVII_Uaex-oZ36uCPeHZOwbHANMTKjnmnLe3oHEPn8icb&usqp=CAE", 4, "");


select tb_produto.id, nome, preco, foto, quantidade, descricao, tb_categoria.tipo, categoria_id
from tb_produto inner join tb_categoria on tb_produto.categoria_id = tb_categoria.id;

select * from tb_categoria inner join tb_produto on tb_produto.categoria_id = tb_categoria.id ;

select * from tb_produto;

drop DATABASE db_lojagames;