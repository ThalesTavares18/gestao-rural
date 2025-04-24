'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import "./pagina_estoque.css";
import host from "../lib/host";
import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';  // Importe o Toastify
import 'react-toastify/dist/ReactToastify.css';  // Importe o CSS necessário


export default function Home() {

    const [produtos, alteraProdutos] = useState([])

    const [nome, alteraNome] = useState([])
    const [preco, alteraPreco] = useState([])
    const [quantidade, alteraQuantidade] = useState([])

    const [editando, alteraEditando] = useState(0)
    const [pesquisa, alteraPesquisa] = useState("")

    const [modalAberto, setModalAberto] = useState(false);


    async function buscaTodos() {
        const response = await axios.get(host + "/estoque")
        alteraProdutos(response.data)
    }

    async function buscaPorID(id) {
        const response = await axios.get(host + "/estoque/" + id)
        alteraProdutos(response.data)
    }



    async function insereProduto() {

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.post(host + "/estoque", obj)
        console.log(response)

        buscaTodos()

    }

    async function atualizaProduto() {

        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.put(host + "/estoque/" + editando, obj)

        buscaTodos()

        alteraEditando(0)
        alteraNome("")
        alteraPreco("")
        alteraQuantidade("")

    }

    async function removeProduto(id) {
        await axios.delete(host + "/estoque/" + id)
        buscaTodos()
    }



    function montaEdicao(produto) {
        alteraEditando(produto.id)
        alteraNome(produto.nome)
        alteraPreco(produto.preco)
        alteraQuantidade(produto.quantidade)
    }

    function enviaFormulario(e) {
        e.preventDefault()


        let nomeLocal = nome
        let precoLocal = preco
        let quantidadeLocal = quantidade


        if (!/^[0-9]+(\.[0-9]+)?$/.test(precoLocal)) {
            toast.error(' Digite um número válido para o preço (apenas números e ponto decimal)!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            return;
        }
        if (!/^[A-Za-z]+$/.test(nomeLocal)) {
            toast.error("Digite um nome válido!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            return;
        }

        if (!/^[0-9]+$/.test(quantidadeLocal)) {
            toast.error("Digite apenas números na quantidade", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            return;
        }


        if (editando == 0) {
            insereProduto()
        } else {
            atualizaProduto()
        }

    }

    useEffect(() => {
        buscaTodos()
    }, [])

    return (
        <div>
            <div className="barrinhaverde">
                <div className="Logo">
                    <img className="logo" src="logo.png" width={100} height={100} />
                    <h1>Planilhas</h1>
                </div>

                <div className="BotaoVoltar">
                    <a href=" http://localhost:3000/">
                        <button className="buttonVoltar">Voltar</button>
                    </a>
                </div>
            </div>


            <h1>Gerenciamento de produtos</h1>

            <button >Listagem</button>

            <button className="Botoes" onClick={() => setModalAberto(true)}>Cadastro</button>


            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="fechar" onClick={() => setModalAberto(false)}>X</button>
                        <h2>Cadastro</h2>
                        <form onSubmit={(e) => {
                            enviaFormulario(e);
                            setModalAberto(false); // Fecha o modal após envio
                        }}>
                            <label>Digite o nome do produto: <br />
                                <input onChange={(e) => alteraNome(e.target.value.toLocaleLowerCase())} value={nome} />
                            </label>
                            <br />
                            <label>Digite o preço: <br />
                                <input onChange={(e) => alteraPreco(e.target.value)} value={preco} />
                            </label>
                            <br />
                            <label>Digite a quantidade: <br />
                                <input onChange={(e) => alteraQuantidade(e.target.value)} value={quantidade} />
                            </label>
                            <br/>
                            <button>Salvar</button>
                        </form>
                    </div>
                </div>
            )}

            


            <hr />
            <br/><br/>

            <p>Busca de produtos. Digite o ID:</p>
            <input onChange={(e) => alteraPesquisa(e.target.value)} />
            <button onClick={() => buscaPorID(pesquisa)} >Pesquisar</button>


            <style>
                {`
                    table {
                    
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        font-family: 'Arial', sans-serif;
                        // max-height: 500px; /* Define a altura máxima da tabela */
                        // overflow-y: auto; /* Adiciona rolagem vertical */
                        // display: block; /* Necessário para permitir a rolagem */
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 12px;
                        text-align: left;
                        font-size: 16px;
                    }
                    th {
                        background-color: #4CAF50;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                    tr:hover {
                        background-color: #ddd;
                    }


                    .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.5); 
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 999;
                    }

                    .modal-content {
                        background: white;
                        padding: 20px;
                        border-radius: 8px;
                        width: 90%;
                        max-width: 500px;
                        position: relative;
                    }

                    .modal-content h2 {
                        margin-top: 0;
                    }

                    .fechar {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: crimson;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        padding: 5px 10px;
                        cursor: pointer;
                    }


                                        `}
            </style>

            <h2>Editar</h2>

            <form onSubmit={(e) => enviaFormulario(e)} >
                <label> Digite o nome do produto: <br /> <input onChange={(e) => alteraNome(e.target.value.toLocaleLowerCase())} value={nome} /> </label>
                <br />
                <label> Digite o preço: <br /> <input onChange={(e) => alteraPreco(e.target.value)} value={preco} /> </label>
                <br />
                <label> Digite a quantidade: <br /> <input onChange={(e) => alteraQuantidade(e.target.value)} value={quantidade} /> </label>
                <br />
                <button>Salvar</button>

            </form>

            <br /><br /><br />

            <h2>Listagem</h2>

            {
                produtos.length > 0 ?
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Preço</td>
                            <td>Quantidade</td>
                           
                        </tr>
                        {
                            produtos.map(i =>
                                <tr  >
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>R$ {i.preco.toFixed(2)}</td>
                                    <td>{i.quantidade}</td>

                                    <td>
                                        <button onClick={() => montaEdicao(i)} >Editar</button>
                                        <button onClick={() => removeProduto(i.id)} >Remover</button>
                                    </td>

                                </tr>
                            )
                        }
                    </table>
                    :
                    <p>Carregando...</p>
            }







            <ToastContainer />  {/* Coloque o ToastContainer no final para exibir os toasts */}

        </div>
    );
}
