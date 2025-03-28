-- Mostrar a produção

SELECT produtos.nome, estoque.quantidade FROM produtos, estoque;

-- Mostrar as vendas

SELECT produtos.nome, vendas.quantidade FROM produtos, vendas; 