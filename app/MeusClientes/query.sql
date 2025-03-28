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

SElECT 

