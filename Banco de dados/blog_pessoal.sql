create DATABASE db_blogpessoal;
use db_blogpessoal;

create TABLE tb_postagens(
id INT AUTO_INCREMENT PRIMARY key,
data DATETIME(6),
texto VARCHAR(100),
titulo varchar(1000)
);

insert into tb_postagens(data, texto, titulo)
values(current_timestamp(), 'Texto da postagem 1',
 'Postagem 01'),
(current_timestamp(), 'Texto da postagem 2', 'Postagem 02');
 
select * from tb_postagens;