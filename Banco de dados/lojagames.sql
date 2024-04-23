create database db_lojagames;
use db_lojagames;

create table tb_categoria(
id int AUTO_INCREMENT not null  PRIMARY KEY,
tipo VARCHAR(255)
);
create table tb_produto(
id int AUTO_INCREMENT not null PRIMARY KEY,
nome VARCHAR(255) not null,
preco DECIMAL(6,2) not null,
foto VARCHAR(1000),
quantidade int not null,
descricao VARCHAR(255)
);

insert into tb_categoria(tipo)values("Magia");

ALTER TABLE tb_produto ADD categoria_id INT;

ALTER TABLE tb_produto ADD CONSTRAINT fk_categoria_produto
FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id);

insert into tb_produto(nome, preco, foto, quantidade, descricao)
values("Hogwarts Legacy", 362.19, "https://ik.imagekit.io/sst10/EGS_HogwartsLegacyDigitalDeluxeEdition_AvalancheSoftware_Editions_S2_1200x1600-eb5c42c97eb3f0ed444e58114a0c30b9.jpeg?updatedAt=1713814968084", 5, "RPG de ação e mundo aberto ambientado no mundo apresentado nos livros e filmes de Harry Potter. Sobre a vida de estudantes na Escola de Magia e Bruxaria de Hogwarts nos anos 1800."),
("Minecraft", 143.15, "https://ik.imagekit.io/sst10/minecraft-master-collection-xbox-one-midia-digital.jpg?updatedAt=1713897138826", 4, "Jogo de sobrevivência em um mundo formando por blocos cúbicos com o objetivo de construir.");

select tb_produto.id, nome, preco, foto, quantidade, descricao, categoria_id, tb_categoria.tipo 
from tb_produto inner join tb_categoria on tb_produto.categoria_id = tb_categoria.id;

select * from tb_categoria inner join tb_produto on tb_produto.categoria_id = tb_categoria.id;

select * from tb_produto;

drop database db_lojagames;

alter table tb_produto drop constraint fk_categoria_produto;