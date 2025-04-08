'use client'

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';


// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   // Importando o ícone de edição
import { faPencilAlt, faTrashAlt, faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons';  // Importando o ícone de edição

const Estoque = () => {
  const [A1, alteraA1] = useState(false);
  const [IDProduto, alteraIDProduto] = useState('');
  const [precoProduto, alteraPrecoProduto] = useState('');
  const [quantidadeProduto, alteraQuantidadeProduto] = useState('');
  const [produtos, setProdutos] = useState([
    { nome: 'Laranja', preco: 'R$21,00', quantidade: '100 KG' },
    { nome: 'Mandioca', preco: 'R$0,65', quantidade: '200 KG' },
    { nome: 'Maracuja', preco: 'R$2,89', quantidade: '50 KG' },
  ]);

  const buscaTodos = async () => {
    const response = await fetch('/api/produtos');
    const data = await response.json();
    setProdutos(data); // Atualiza o estado com os produtos
  };

  useEffect(()=> {
    buscaTodos()
}, [])

  const handleClick = () => {
    alteraA1(!A1);
  };

  const handleSalvar = async () => {
    const novoProduto = {
      IDProduto: IDProduto,
      quantidade: quantidadeProduto,
    };

    const response = await fetch('/api/estoque', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProduto),
    });

    const data = await response.json();

    setProdutos([...produtos, {novoProduto, id: data.id }]);

    // volta os campos após clicar em salvar salvar
    alteraNomeProduto('');
    alteraPrecoProduto('');
    alteraQuantidadeProduto('');
    alteraA1(false); // Fecha o formulário depois de salvar
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
                    placeholder="id do produto"
                    value={IDProduto}
                    onChange={(e) => alteraIDProduto(e.target.value)}
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
            <p className="lupa" >Produtos Cadastrados:</p>
            <p> <FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <input /> 
            <button className="pesquisa"> Pesquisar </button>
          </div>

          <div className="tabela-scroll">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Produtos</th>
                  <th scope="col">Preço </th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{produto.nome}</td>
                    <td>{produto.preco }</td>
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







