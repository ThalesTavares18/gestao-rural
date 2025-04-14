'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina_estoque.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faMagnifyingGlass, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import host from '../lib/host';

const Estoque = () => {
  const [estoque, alteraEstoque] = useState(0);
  const [A1, alteraA1] = useState(false);
  const [nomeProduto, alteraNomeProduto] = useState('');
  const [precoProduto, alteraPrecoProduto] = useState([]);
  const [quantidadeProduto, alteraQuantidadeProduto] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);  // Produto para editar
  const [novaQuantidade, setNovaQuantidade] = useState('');  // Nova quantidade no modal
  const [pesquisa, setPesquisa] = useState('');
  const [modalNomeAberto, setModalNomeAberto] = useState(false); // Controle do modal de nome
  const [produtoParaAlterarNome, setProdutoParaAlterarNome] = useState(null); // Produto selecionado para alteração de nome

  // Função para buscar todos os produtos
  const buscaTodos = async () => {
    try {
      const response = await axios.get(host+"/estoque");
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };
  
  useEffect(() => {
    buscaTodos();
  }, []);

  // Função para abrir o formulário de adição de produto
  const handleClick = () => {
    alteraA1(!A1);
  };

  // Função para salvar um novo produto no banco de dados
  const handleSalvar = async () => {
    if (nomeProduto && quantidadeProduto) {
      const novoProduto = {
        nome: nomeProduto,
        preco: parseFloat (precoProduto),
        quantidade: parseInt (quantidadeProduto)
      };
  
      try {
        const response = await axios.post("http://localhost:3000/api/estoque", novoProduto);
  
        if (response.status === 200) {
          // Produto salvo com sucesso
          alteraPrecoProduto('');
          alteraA1(false);
          console.log("Produto salvo com sucesso");
          buscaTodos(); // Atualiza a lista
        } else {
          console.error('Erro ao salvar o produto');
        }
      } catch (error) {
        console.error('Erro na comunicação com a API:', error);
      }
    } else {
      console.log('Nome e quantidade do produto são obrigatórios.');
    }
  };
  

  // Função para alterar a quantidade de um produto no estoque
  const handleAlterarEstoque = async (produtoId, novaQuantidade) => {
    try {
      const response = await axios.put("http://localhost:3000/api/estoque", {
        id_produto: produtoId,
        quantidade: novaQuantidade,
      });
  
      console.log(response.data.message);
  
      const novosProdutos = produtos.map(produto =>
        produto.id === produtoId ? { ...produto, quantidade: novaQuantidade } : produto
      );
      setProdutos(novosProdutos);
    } catch (error) {
      console.error('Erro ao alterar estoque:', error);
    }
  };
  

  // Função chamada quando o modal de adicionar estoque é salvo
  const handleSalvarModal = async () => {
    if (produtoSelecionado && novaQuantidade) {
      await handleAlterarEstoque(produtoSelecionado.id, novaQuantidade);
      setNovaQuantidade('');
      alteraA1(false); // Fechar modal
    }
  };

  // Função para salvar a alteração do nome de um produto
  const handleAlterarNome = async () => {
    if (produtoParaAlterarNome && nomeProduto) {
      const updatedProduto = { ...produtoParaAlterarNome, nome: nomeProduto };
  
      try {
        const response = await axios.put("http://localhost:3000/api/produtos", updatedProduto);
  
        if (response.data.success) {
          const produtosAtualizados = produtos.map(produto =>
            produto.id === updatedProduto.id ? updatedProduto : produto
          );
          setProdutos(produtosAtualizados);
        }
  
        setModalNomeAberto(false);
        setProdutoParaAlterarNome(null);
        alteraNomeProduto('');
      } catch (error) {
        console.error('Erro ao alterar nome:', error);
      }
    }
  };
  

  // Função para formatar a data no formato "dd/mm/yyyy hh:mm"
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

  // Função para pesquisar produtos
  const handlePesquisar = () => {
    const produtosFiltrados = produtos.filter(produto =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setProdutos(produtosFiltrados);
  };

  return (
    <div>
      {/* Modal de Alterar Nome */}
      {modalNomeAberto && produtoParaAlterarNome && (
        <>
          <div className='fundo-modal'></div>
          <div className='modal'>
            <h2>Alterar Nome do Produto</h2>
            <input
              type="text"
              placeholder="Novo nome"
              value={nomeProduto}
              onChange={(e) => alteraNomeProduto(e.target.value)}
            />
            <br />
            <button className='button-modal' onClick={handleAlterarNome}>
              Salvar
            </button>
            <button className='button-modal' onClick={() => setModalNomeAberto(false)}>
              Voltar
            </button>
          </div>
        </>
      )}

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

        <div className="produtosCadastradosContainer">
          <div className="produtosCadastradosTitulo">
            <i className="fa-solid fa-file"></i>
            <p className="lupa"> Cadastrados:</p>
            <p><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <input
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
            <button className="pesquisa" onClick={handlePesquisar}>
              Pesquisar
            </button>
          </div>

          <div className="tabelas-lado-a-lado">
            <div className="tabela-scroll">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
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
                        <button onClick={() => {
                          setProdutoParaAlterarNome(produto);
                          alteraNomeProduto(produto.nome);  // Preenche o campo com o nome atual
                          setModalNomeAberto(true); // Abre o modal
                        }} className="button-edit">
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
