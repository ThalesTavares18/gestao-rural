INSERT INTO `produtos`( `nome`, `preco`) VALUES ('Laranja', 21.00),('Mandioca', 0.65),( 'Maracuja', 2.89);

--visualizar tudo de estoque
SELECT * FROM estoque;

--inserir um novo produto para atabela
INSERT INTO estoque ( id_produto, quantidade) VALUES (2,10);

--o ADM quer mudar a quantidade e o preço do produto com id 1 
UPDATE estoque, produtos SET estoque.quantidade =10, produtos.preco = 3.65 WHERE produtos.id =1;

--O ADM quer saber o nome e quantidade em estoque dos produtos dsiponiveis
SELECT estoque.id_produto, estoque.quantidade FROM estoque WHERE  id = produtos.nome; 

--o ADM quer saber a quantidade e o nome de todos os produtos com estoque abaixo de 20
SELECT estoque.quantidade, produtos.nome FROM estoque, produtos  WHERE quantidade < 20;
 
 
 -- o ADM quer mudar o nome do produto com o id 3 para mandioca de mesa
 UPDATE produtos SET produtos.nome = 'mandioca de mesa' WHERE id = 3
 
