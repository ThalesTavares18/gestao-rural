'use client'

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';
import { handleClientScriptLoad } from 'next/script';



const Estoque = () => {

  const[A1, alteraA1]=useState(false)

  const[selecionado, alteraSelecionado]=useState(false)

  const handleClick = ()=>{
    alteraA1(!A1)
  }

  return (
    <div>
      <div className="menuSuperior">
       <img className=' logo' src= "logo.png" />
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


{ A1 && (
  <>
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
          </>
          )}
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
