'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';

// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   // Importando o ícone de edição
import { faPencilAlt, faTrashAlt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  // Importando o ícone de edição

const Estoque = () => {
  const [A1, alteraA1] = useState(false);
  const [nomeProduto, alteraNomeProduto] = useState('');
  const [precoProduto, alteraPrecoProduto] = useState('');
  const [quantidadeProduto, alteraQuantidadeProduto] = useState('');
  const [produtos, setProdutos] = useState([
    { nome: 'Laranja', preco: 'R$21,00', quantidade: '100 KG', dataCadastro: '2025-04-09T10:00:00' },
    { nome: 'Mandioca', preco: 'R$0,65', quantidade: '200 KG', dataCadastro: '2025-04-09T10:05:00' },
    { nome: 'Maracuja', preco: 'R$2,89', quantidade: '50 KG', dataCadastro: '2025-04-09T10:10:00' },
  ]);

  const buscaTodos = async () => {
    const response = await fetch('/api/produtos');
    const data = await response.json();
    setProdutos(data); // Atualiza o estado com os produtos
  };

  useEffect(() => {
    buscaTodos();
  }, []);

  const handleClick = () => {
    alteraA1(!A1);
  };

  const handleSalvar = async () => {
    const novoProduto = {
      nome: nomeProduto,
      quantidade: quantidadeProduto,
    };

    const response = await fetch('/api/estoque', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProduto),
    });


    const response2 = await fetch('/api/registro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProduto),
    });


    const data = await response.json();
    const id_produto = await response2.json();

    setProdutos([...produtos, { novoProduto, id: data.id, id_produto }]);

    // volta os campos após clicar em salvar
    alteraNomeProduto('');
    alteraQuantidadeProduto('');
    alteraA1(false); // Fecha o formulário depois de salvar
  };

  const formataData = (valor) => {
    let data = valor.split("T")[0];
    let hora = valor.split("T")[1];

    data = data.split("-");
    data = data.reverse();
    data = data.join("/");

    hora = hora.split(".")[0];
    hora = hora.split(":");
    hora = hora[0] + ":" + hora[1];

    return data + " às " + hora;
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
                <p>Atualizar Cadastrados</p>
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
                    placeholder="Preço"
                    value={quantidadeProduto}
                    onChange={(e) => alteraQuantidadeProduto(e.target.value)}
                  />
                </div>
              </div>

              <div className="Conteudo">
                <div className="CardGeral">
                  <input
                    type="text"
                    placeholder="Quantidade"
                    value={precoProduto}
                    onChange={(e) => alteraPrecoProduto(e.target.value)}
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

        {/* Container para as tabelas */}
        <div className="produtosCadastradosContainer">
          <div className="produtosCadastradosTitulo">
            <i className="fa-solid fa-file"></i>
            <p className="lupa"> Cadastrados:</p>
            <p><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <input />
            <button className="pesquisa"> Pesquisar </button>
          </div>

          {/* Tabelas lado a lado */}
          <div className="tabelas-lado-a-lado">
            {/* Primeira tabela (com ícones) */}
            <div className="tabela-scroll">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Quantidade</th>
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
                        <button className="button-edit">
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </button>
                        <button className="button-edit">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Segunda tabela (sem ícones) */}
            <div className="tabela-scroll">
              
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((produto, index) => (
                    <tr key={index}>
                      <td>{produto.nome}</td>
                      <td>{produto.quantidade}</td>
                      <td>{formataData(produto.dataCadastro)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
