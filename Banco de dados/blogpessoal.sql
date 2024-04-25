create DATABASE db_blogpessoal;
use db_blogpessoal;

create TABLE tb_postagens(
id INT AUTO_INCREMENT PRIMARY key,
data DATETIME(6),
texto VARCHAR(100),
titulo varchar(1000)
);

INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 01', 'Postagem 01');
INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 02', 'Postagem 02');

select * from tb_postagens;
