-- Escrever todas es query que sua tela precisa
INSERT INTO contatos ( nome , contato)
VALUE 
( 'Samuel','16988329453'),
( 'Thales','16993605250'),
( 'Leonardo','16996287243'),
( 'Jayne','16993419722');


-- Ao entrar na página Meus clientes, listar todos contatos numa tabela
SElECT * FROM contatos;

-- Remover um contato

DELETE FROM contatos WHERE id = 1;

-- Contatos que começam com DDD ()

SELECT * FROM contatos WHERE contato lIKE '%?%'; 

-- Comando para atualizar um dado.

UPDATE contatos SET nome = 'Thalinhos' WHERE nome = 'Thales';
UPDATE contatos SET nome = 'Thales' WHERE nome = 'Thalinhos';

UPDATE contatos SET contato = '9999999999' WHERE contato = '16993605250';
UPDATE contatos SET contato = '16993605250' WHERE contato = '9999999999';

-- Contatos em ordem Crescente
SELECT nome FROM contatos ORDER BY nome;

