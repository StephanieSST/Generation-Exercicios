create database db_lojagames;
use db_lojagames;
create table tb_categoria(
id int AUTO_INCREMENT not null PRIMARY KEY,
tipo VARCHAR(100) not null
);
create table tb_produto(
id int AUTO_INCREMENT not null PRIMARY KEY,
nome VARCHAR(100) not null,
preco DECIMAL(6,2) not null,
foto VARCHAR(255) not null,
categoria_id int,
FOREIGN KEY(categoria_id) REFERENCES tb_categoria(id)
);
