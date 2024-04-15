create database db_generation_game_online;
use db_generation_game_online;

create table tb_classes (
id bigint auto_increment primary key,
classe varchar(255) not null
);
select * from tb_classes;

create table tb_personagens (
id bigint auto_increment PRIMARY KEY,
nome varchar(255) not null,
arma varchar(255) not null,
inimigo varchar(255) not null,
ataque bigint not null,
defesa bigint not null
);

insert into tb_classes(classe)
values("Arqueiro"),
("Espadachim"),
("Caçador"),
("Tank"),
("Bruxo");

ALTER TABLE tb_personagens ADD classe_id BIGINT;

ALTER TABLE tb_personagens ADD CONSTRAINT fk_classes_personagens
FOREIGN KEY (classe_id) REFERENCES tb_classes(id);

insert into tb_personagens (nome, arma, inimigo, ataque, defesa, classe_id)
values
("Daryl Dixon", "Besta", "Zumbi", 2300, 1600, 1),
("Harry Potter", "Varinha", "Voldemort", 2500, 2100, 5),
("Bobby", "Arma de Fogo", "Todos os seres", 1800, 1900, 3),
("Tyreese", "Força", "Zumbi", 1400, 1200, 4),
("Alaric", "Estaca", "Vampiro", 2700, 3000, 3),
("Oliver", "Arco", "Promtheus", 1500, 1700, 1),
("Michonne", " Espada Katana", "Zumbi", 3000, 1700, 2),
("Clary", "Lâminas serafim", "Demônios", 2000, 1000, 3);

select * from tb_personagens;

select * from tb_personagens where ataque > 2000;

select * from tb_personagens where defesa between 1000 and 2000;

select * from tb_personagens where nome like "%c%";

select tb_personagens.id, nome, arma, inimigo, ataque, defesa, tb_classes.classe, classe_id 
from tb_personagens inner join tb_classes on tb_personagens.classe_id = tb_classes.id;

select tb_personagens.id, nome, arma, inimigo, ataque, defesa, tb_classes.classe, classe_id
from tb_classes inner join tb_personagens on tb_personagens.classe_id = tb_classes.id where classe = "Arqueiro";

select * from tb_personagens;