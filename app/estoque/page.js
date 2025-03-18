'use client'

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';



const Estoque = () => {

  const[A1, alteraA1]=useState("")

  const[selecionado, alteraSelecionado]=useState(["","",])

  
  return (
    <div>
      <div className="menuSuperior">
        <button className="menuSuperiorImg">
        <i className="fa-solid fa-seedling"></i>

        </button>
      </div>

    
      <div className="paineis">
        <div className="painelEsquerdo">
          <div className="CardGeral">
            <div className="atualizar">
              <button className="button">
                <i className="fa-solid fa-download"></i>
                <p>Atualizar cadastro</p>
              </button>
            </div>
          </div>

          <div className="Conteudo">
            <div className="CardGeral">
              <input placeholder="Nome do produto" />
            </div>
          </div>

          <div className="Conteudo">
            <div className="CardGeral">
              <input placeholder="Preço por KG:" />
            </div>
          </div>
        
          <div>
            <div className="CardGeral">
              <button className="button"> Salvar </button>
            </div>
          </div>
        </div>

        {/* Container para a tabela e o título */}
        <div className="produtosCadastradosContainer">
          <div className="produtosCadastradosTitulo">
            <i className="fa-solid fa-file"></i>
            <p>Produtos Cadastrados:</p>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Produtos</th>
                <th scope="col"></th>
                <th scope="col">Preço KG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Laranja</td>
                <td>R$21,00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mandioca</td>
                <td>R$0,65</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Maracuja</td>
                <td>R$2,89</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="Voltar">

      <a href=" http://localhost:3000/"> <button className="voltar">
          <p>Voltar</p>
          
        </button> </a>
        
      </div>
    </div>
  );
}

export default Estoque;
