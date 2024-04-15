create database db_companhiadepapel;
use db_companhiadepapel;
create table tb_colaboradores (
id bigint auto_increment,
nome varchar(255) not null,
cargo varchar(255) not null,
salario decimal(6,2) not null,
contratadodesde date,
 primary key (id)
);

insert into tb_colaboradores (nome, cargo, salario, contratadodesde) values ("Thiago Halpert", "Vendedor", 3200.00, "1999-02-13"),
("Pamela Beesley", "Recepcionista", 1800.00, "2003-08-21"),
("Kevinho Malone", "Contador", 2800.00, "2001-02-12"),
("Miguel Scott", "Gerente", 3650.00, "1993-03-28"),
("Credo Bratton", "Analista de Garantia de Qualidade", 1695.00, "1990-01-13");

select * from tb_colaboradores where salario > 2000;

select * from tb_colaboradores where salario < 2000;

UPDATE tb_colaboradores SET cargo = "Gerente de Garantia de Qualidade" WHERE id = 5;

select * from tb_colaboradores