'use client'

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';
import { handleClientScriptLoad } from 'next/script';

const Estoque = () => {
  const [A1, alteraA1] = useState(false);
  const [nomeProduto, alteraNomeProduto] = useState('');
  const [precoProduto, alteraPrecoProduto] = useState('');
  const [quantidadeProduto, alteraQuantidadeProduto] = useState('');
  const [produtos, setProdutos] = useState([
    { nome: 'Laranja', preco: 'R$21,00', quantidade: '100 KG' },
    { nome: 'Mandioca', preco: 'R$0,65', quantidade: '200 KG' },
    { nome: 'Maracuja', preco: 'R$2,89', quantidade: '50 KG' },
  ]);

  const handleClick = () => {
    alteraA1(!A1);
  };

  const handleSalvar = () => {
    const novoProduto = {
      nome: nomeProduto,
      preco: precoProduto,
      quantidade: quantidadeProduto,
    };
    setProdutos([...produtos, novoProduto]);

    // Limpar os campos após salvar
    alteraNomeProduto('');
    alteraPrecoProduto('');
    alteraQuantidadeProduto('');
    alteraA1(false); // Fecha o formulário após salvar
  };

  return (
    <div>
      <div className="menuSuperior">
        <img className="logo" src="logo.png" />
      </div>

      <div className="paineis">
        <div className="painelEsquerdo">
          <div className="CardGeral">
            <div className="atualizar">
              <button className="button" onClick={handleClick}>
                <i className="fa-solid fa-download"></i>
                <p>Cadastrar novo produto</p>
              </button>
            </div>
          </div>

          {A1 && (
            <>
              <div className="Conteudo">
                <div className="CardGeral">
                  <input
                    type="text"
                    placeholder="Nome do produto"
                    value={nomeProduto}
                    onChange={(e) => alteraNomeProduto(e.target.value)}
                  />
                </div>
              </div>

              <div className="Conteudo">
                <div className="CardGeral">
                  <input
                    type="text"
                    placeholder="Preço por KG"
                    value={precoProduto}
                    onChange={(e) => alteraPrecoProduto(e.target.value)}
                  />
                </div>
              </div>

              <div className="Conteudo">
                <div className="CardGeral">
                  <input
                    type="text"
                    placeholder="Quantidade"
                    value={quantidadeProduto}
                    onChange={(e) => alteraQuantidadeProduto(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="CardGeral">
                  <button className="button" onClick={handleSalvar}>
                    Salvar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Container para a tabela e o título */}
        <div className="produtosCadastradosContainer">
          <div className="produtosCadastradosTitulo">
            <i className="fa-solid fa-file"></i>
            <p>Produtos Cadastrados:</p>
          </div>

          <div className="tabela-scroll">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Produtos</th>
                  <th scope="col">Preço KG</th>
                  <th scope="col">Quantidade Disponível</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.quantidade}</td>
                    <td>
                      <button className="button-editar">
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="Voltar">
        <a href="http://localhost:3000/">
          <button className="voltar">
            <p>Voltar</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Estoque;







